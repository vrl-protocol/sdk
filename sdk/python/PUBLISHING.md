# Publishing vrl-sdk to PyPI

Follow these steps to publish the Python SDK from `vrl-protocol/sdk` to PyPI.

## Prerequisites

- PyPI account at https://pypi.org
- GitHub repository access with admin permissions on `vrl-protocol/sdk`

## Step 1: Generate a PyPI API Token

1. Log in to https://pypi.org
2. Click your account name -> Account Settings
3. Go to API tokens
4. Click "Add API token"
5. Scope it to `vrl-sdk` if possible
6. Copy the generated token

## Step 2: Add the Token to GitHub

1. Open `https://github.com/vrl-protocol/sdk/settings/secrets/actions`
2. Click "New repository secret"
3. Name: `PYPI_API_TOKEN`
4. Value: paste the PyPI token
5. Save

## Step 3: Prepare the Version

Before release, ensure these files all carry the same version:

- `sdk/python/pyproject.toml`
- `sdk/python/setup.py`
- `sdk/python/vrl/__init__.py`

The current standalone SDK repo release target is `0.2.1`.

## Step 4: Trigger Publication

1. Create a GitHub release at `https://github.com/vrl-protocol/sdk/releases/new`
2. Tag: `v0.2.1`
3. Title: `v0.2.1`
4. Publish the release

This triggers `.github/workflows/publish.yml`.

## Step 5: Verify Publication

1. Visit https://github.com/vrl-protocol/sdk/actions
2. Visit https://pypi.org/project/vrl-sdk/
3. Test installation:

```bash
pip install vrl-sdk==0.2.1
python -c "import vrl; print(vrl.__version__)"
```

## Future Releases

1. Update the package version in the Python metadata files
2. Create a new Git tag, for example `v0.2.1`
3. Create the matching GitHub release on `vrl-protocol/sdk`
4. Let the publish workflow upload the package
