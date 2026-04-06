# VRL SDK

The canonical multi-language SDK repository for VRL.

This repo contains:

- `sdk/python/`
- `sdk/typescript/`
- `sdk/go/`
- shared example bundles in `verifier/test_bundles/`
- `.github/workflows/` for SDK CI and package publishing

Use this repo for SDK development, package publishing, and language-specific CI.

Current standalone SDK release line:

- Python package: `vrl-sdk`
- Current standalone SDK repo release target: `v0.2.1`

Quick proof-of-concept flow:

```powershell
cd "C:\Users\13173\OneDrive\Documents\vrl-split\sdk\sdk\python"
python examples/build_and_verify.py
python -m pytest tests -q
```
