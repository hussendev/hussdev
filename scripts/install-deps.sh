#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "→ Project: $ROOT"
cd "$ROOT"

if [ -L node_modules ]; then
  echo "→ Removing symlinked node_modules (breaks Next.js/Turbopack)..."
  rm node_modules
fi

if command -v npm >/dev/null 2>&1; then
  echo "→ Installing with npm..."
  npm install --no-audit --no-fund
else
  echo "Error: npm is required." >&2
  exit 1
fi

echo "✓ Done. Run: npm run dev"
