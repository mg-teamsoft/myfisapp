# myfisapp static pages

This repository deploys only the static pages required for My Fiş App links.

## Pages

- `/contacts/invites/accept?token=...`
- `/contacts/invites/reject?token=...`
- `/resetPassword?token=...`

The invite pages call the contacts invite API. The reset password page shows a password form and calls `/api/auth/reset-password`.

## Deploy

```bash
npm run deploy
```

The deploy command publishes the `public/` directory to GitHub Pages with dotfiles included, so `.well-known/apple-app-site-association` is deployed.
