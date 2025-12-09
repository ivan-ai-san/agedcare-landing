# Culture Crunch - Aged Care Landing Page

## Git Setup

### Authentication with GitHub

This repo uses a Personal Access Token (PAT) for GitHub authentication.

**Setup:**

1. Create a PAT at https://github.com/settings/tokens with `repo` scope
2. Add it to Windows Environment Variables as `GITHUB_TOKEN`
3. Set the remote URL with the token:

```bash
# Get token from Windows env and set remote URL
powershell -Command "[System.Environment]::GetEnvironmentVariable('GITHUB_TOKEN', 'User')"

# Copy the token output, then run:
git remote set-url origin https://ivan-ai-san:<TOKEN>@github.com/ivan-ai-san/agedcare-landing.git
```

Or as a one-liner:
```bash
git remote set-url origin https://ivan-ai-san:$(powershell -Command "[System.Environment]::GetEnvironmentVariable('GITHUB_TOKEN', 'User')")@github.com/ivan-ai-san/agedcare-landing.git
```

Then push normally:
```bash
git push
```

## Development

```bash
npm install
npm run dev
```

## Deployment

The site auto-deploys to Vercel on push to `master`.
