# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev
```

## Generate a GitHub token

This token is needed so that we can get users from GitHub for signin purposes

1. Go to [GitHub Personal Access Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Fill in the form with the following values:
   - Note: `Backstage Local Dev`
   - Select scopes:
     - `repo`
     - `workflow`
     - `read:org`
     - `read:user`
     - `user:email`
4. Click "Generate token"
5. Copy the generated token into your `.env` file as `GITHUB_TOKEN`.
