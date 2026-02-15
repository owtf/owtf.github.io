#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/owtf/online-passive-scanner.git"
TARGET_DIR="online-passive-scanner"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

git clone --depth 1 "$REPO_URL" "$TMP_DIR/repo"
rsync -a --delete --exclude '.git' "$TMP_DIR/repo/" "$TARGET_DIR/"

commit="$(git -C "$TMP_DIR/repo" rev-parse HEAD)"
date="$(git -C "$TMP_DIR/repo" show -s --format=%cs HEAD)"
subject="$(git -C "$TMP_DIR/repo" show -s --format=%s HEAD)"

cat > "$TARGET_DIR/UPSTREAM_SOURCE.txt" <<EOF
source_repo=$REPO_URL
source_commit=$commit
source_date=$date
source_subject=$subject
EOF

echo "Updated $TARGET_DIR from $REPO_URL at $commit"
