# VRL SDK - Verifiable Reality Layer Python SDK

A complete, production-ready Python implementation of the [VRL Proof Bundle Specification v1.0](https://github.com/vrl-protocol/spec).

The VRL SDK provides cryptographically verifiable attestation for AI model outputs and deterministic computations, enabling third parties to independently verify authenticity without trusting the issuing party.

## Features

- **ProofBundle**: Complete implementation of VRL Proof Bundle structure (§3)
- **Verifier**: Full 10-step verification procedure per VRL Spec §12
- **Canonical JSON**: Spec-compliant hash computation with sorted keys and no whitespace (§10)
- **SHA-256 Hashing**: All hash functions use SHA-256 as specified (§11)
- **AI Identity**: AI-ID computation with provider signature support (§2)
- **Fluent Builders**: Easy-to-use builder APIs for constructing bundles
- **Multiple Proof Systems**: Support for all proof systems defined in spec (§4)
- **Data Commitments**: External dataset binding with provider signatures (§6)
- **Legal Metadata**: Jurisdiction, compliance, and timestamp authority support (§8)
- **Proof Graphs**: Causal dependency tracking for composite proofs (§7)

## Installation

### From PyPI

```bash
pip install vrl-sdk
```

### From source

```bash
git clone https://github.com/vrl-protocol/sdk.git
cd sdk/sdk/python
pip install -e .
```

## Development

```bash
pip install -e ".[dev]"
pytest tests/
```

## Project Links

- Source: https://github.com/vrl-protocol/sdk
- Specification: https://github.com/vrl-protocol/spec
- Registry: https://github.com/vrl-protocol/registry
- Docs: https://vrl-protocol.github.io/spec/

## License

MIT
