# Passive Scanner Source of Truth

The passive scanner integration in this repository must use upstream code from:

- `https://github.com/owtf/online-passive-scanner`

## Integration contract

1. Do not reimplement scanner logic locally when upstream code is available.
2. Use a sync model (git subtree or submodule) and record the upstream commit/version used.
3. Keep wrapper logic in this repository limited to configuration, execution, and report shaping for site publishing.

## Planned implementation

Current implementation in this repository:

1. Upstream scanner is vendored under `online-passive-scanner/`.
2. Upstream provenance is tracked in `online-passive-scanner/UPSTREAM_SOURCE.txt`.
3. Sync helper script is available at `scripts/sync-online-passive-scanner.sh`.

Planned next implementation:

1. Add a local wrapper entrypoint under `tools/passive_scanner/`.
2. Add scheduled workflow to run passive scan automation and publish `_data/passive_scan/latest.json`.
