# Build the portable EXE

Output: `dist/WebPify-Portable-<version>.exe` (one file, no install).

## Option A: GitHub Actions (recommended)
Push a tag such as `v1.0.0`. GitHub builds the EXE and attaches it to the Release. See [GITHUB-GUIDE.md](GITHUB-GUIDE.md).

## Option B: Your own Windows PC
1. Install Node.js LTS from https://nodejs.org
2. Open **Command Prompt as Administrator** and run each command separately:
```
cd /d "C:\path\to\webpify"
npm install
npm run dist
```
3. Find the EXE in the `dist` folder.

## Troubleshooting
- *Running scripts is disabled*: use Command Prompt (cmd), not PowerShell.
- *Cannot create symbolic link*: run cmd as Administrator or turn on Windows Developer Mode.
- Path with parentheses such as `files(1)`: move the project to a simple path like `E:\webpify`.
- Stop leftover `WebPify` processes in Task Manager before testing again.
- Use a replacement 512x512 PNG logo in `build/icon.png` for a sharper icon.
