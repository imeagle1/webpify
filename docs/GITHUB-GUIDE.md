# Publish on GitHub

## 1. Create the repository
1. Sign in at https://github.com and click **New repository**.
2. Name it `webpify`, choose **Public**. Do not add a README, .gitignore or license (they already exist).
3. Click **Create repository**.

## 2. Upload the files
Use Git, not the web upload page: the web page can skip the hidden `.github` folder that builds the EXE.

Install Git from https://git-scm.com/download/win, open cmd inside the project folder and run one line at a time (replace `YOUR-USERNAME`):
```
git init
git add .
git commit -m "WebPify v1.0.0"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/webpify.git
git push -u origin main
```

## 3. Build and publish the EXE
```
git tag v1.0.0
git push origin v1.0.0
```
1. Open the **Actions** tab and wait for "Build Windows EXE" to turn green (3 to 5 minutes).
2. Open **Releases**: `WebPify-Portable-1.0.0.exe` is attached.

If Actions fails with a permission error: Settings → Actions → General → Workflow permissions → **Read and write permissions** → Save, then re-run the job.

## 4. Polish the repository
- Click the gear next to **About**: add a description, website `https://iramo.ai`, and topics such as `webp`, `image-converter`, `electron`, `offline`.
- Add a screenshot to the README.

## 5. New versions
1. Raise `"version"` in `package.json` (for example 1.1.0).
2. `git add . && git commit -m "v1.1.0" && git push`
3. `git tag v1.1.0 && git push origin v1.1.0`

## About the license
`LICENSE` is a custom source-available license. GitHub's terms still allow others to fork a public repository. Have a lawyer review it. For stronger control, keep the repository private and publish only the EXE.
