/**
 * Tests for VRL SDK using Node.js built-in test module.
 */

const { test } = require("node:test");
const assert = require("node:assert");
const {
  ProofBundleBuilder,
  ComputationBuilder,
  ProofBuilder,
  Verifier,
  parseBundle,
  serializeBundle,
  computeIntegrityHash,
  computeProofHash,
  computeCommitmentHash,
  sha256,
  canonicalJson,
} = require("../src/index");

function createValidBundle() {
  const aiIdentity = {
    ai_id: "a".repeat(64),
    provider_id: "com.test",
    model_name: "test-model",
    model_version: "1.0.0",
    model_weights_hash: "b".repeat(64),
    runtime_hash: "c".repeat(64),
    config_hash: "d".repeat(64),
  };

  const computation = new ComputationBuilder()
    .setCircuitId("test/circuit@1.0.0")
    .setCircuitVersion("1.0.0")
    .setCircuitHash("e".repeat(64))
    .setInputHash("f".repeat(64))
    .setOutputHash("0".repeat(64))
    .setTraceHash("1".repeat(64))
    .computeIntegrityHash()
    .build();

  const proofHashValue = computeProofHash({
    circuitHash: computation.circuit_hash,
    proofBytes: "2".repeat(128),
    publicInputs: ["3".repeat(64)],
    proofSystem: "sha256-deterministic",
    traceHash: computation.trace_hash,
  });

  const proof = new ProofBuilder()
    .setProofSystem("sha256-deterministic")
    .setProofBytes("2".repeat(128))
    .setPublicInputs(["3".repeat(64)])
    .setVerificationKeyId("4".repeat(64))
    .setProofHash(proofHashValue)
    .build();

  return new ProofBundleBuilder()
    .setAIIdentity(aiIdentity)
    .setComputation(computation)
    .setProof(proof)
    .build();
}

test("Hash utilities - canonicalJson", () => {
  const obj = { z: 1, a: 2, m: [1, 2, 3] };
  const result = canonicalJson(obj);
  assert.strictEqual(result, '{"a":2,"m":[1,2,3],"z":1}');
});

test("Hash utilities - sha256", () => {
  const hash = sha256("test");
  assert.strictEqual(hash.length, 64);
  assert.strictEqual(hash, hash.toLowerCase());
  assert.match(hash, /^[0-9a-f]{64}$/);
});

test("Hash utilities - computeIntegrityHash", () => {
  const integrity = computeIntegrityHash("a".repeat(64), "b".repeat(64), "c".repeat(64));
  assert.strictEqual(integrity.length, 64);
  assert.match(integrity, /^[0-9a-f]{64}$/);
});

test("Hash utilities - computeCommitmentHash", () => {
  const commitment = computeCommitmentHash(
    "dataset1",
    "1.0.0",
    "e".repeat(64),
    "provider",
    "2026-04-04T00:00:00Z"
  );
  assert.strictEqual(commitment.length, 64);
  assert.match(commitment, /^[0-9a-f]{64}$/);
});

test("Bundle - serialize and deserialize round-trip", () => {
  const original = createValidBundle();
  const serialized = serializeBundle(original);
  const deserialized = parseBundle(serialized);

  assert.strictEqual(deserialized.bundle_id, original.bundle_id);
  assert.strictEqual(deserialized.ai_identity.ai_id, original.ai_identity.ai_id);
});

test("Verifier - verify valid bundle", () => {
  const verifier = new Verifier();
  const result = verifier.verify(createValidBundle());

  assert.strictEqual(result.status, "VALID");
  assert.strictEqual(result.errorCodes.length, 0);
});
