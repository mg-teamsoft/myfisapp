# myfisapp

## Deploy to GitHub Pages

To deploy this React app to GitHub Pages using the `gh-pages` package, follow these steps:

1. Install `gh-pages` as a dev dependency:

```bash
npm install --save-dev gh-pages
```

2. Add a `homepage` field to your `package.json` (replace `OWNER` and `REPO`):

```json
"homepage": "https://OWNER.github.io/REPO"
```

3. Add deployment scripts to `package.json` inside the `scripts` section:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy to GitHub Pages:

```bash
npm run deploy
```

Notes:
- Make sure your repository is pushed to GitHub and the `homepage` value matches your GitHub Pages URL.
- If your app is in a repository subpath or org site, adjust the `homepage` accordingly.
# myfisapp