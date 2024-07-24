# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## How to contribute

You can contribute through the official discord server or on GitHub.

**Using Discord [Recommended]:**

Join the Discord server and head over to the contribution forum. Take a look at the guide post for requirements on writing an article.

- **Requirements:**
- MPC knowledge
1. an article written on a Markdown page
2. a link to a working download
3. link(s) to youtube channel(s)
4. (optional) a collection of images of your prison inside a compressed folder

Using online markdown editors like stackedit.io or dillinger.io can help you format your article.

Submit your work by creating a post on the forum and wait for the review of a wiki helper.
If a helper leaves you a comment and gives you feedback(s), you need to go through your submission and make those changes again until it becomes accepted and added to the wiki.

**Using GitHub**:

- **Requirements:**
    - Familiar with GitHub, Git and Visual Studio
    - MPC knowledge
    - Dependencies: [NodeJS](https://nodejs.org/en/download/package-manager) (current) / [Git](https://git-scm.com/downloads) / [Visual Studio](https://code.visualstudio.com/)
Set up Visual Studio and install [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) and [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), don't forget to create a [GitHub account](https://github.com/signup)!

- **Steps:**

1. Fork the project and set up a local clone of your fork.
2. Install all dependencies using npm install.
3. Launch a development website locally by typing npm run start in your terminal. This will open http://localhost:3000/ in your browser. Make your changes and save the files.
4. Commit your changes using the GitLens Inspect tab in Visual Studio Code.
5. Create a pull request comparing your fork to the official project's development branch.
6. Address any feedback from wiki helpers in subsequent commits until your pull request is merged.

**Keeping your fork up-to-date:**

Once merged, to keep contributing, add an upstream repository to your local clone and pull changes from the main wiki repository.

```jsx title="Visual Studio Terminal"
git remote add upstream git@github.com:thearchitectmc/helenawiki.git
git fetch upstream
```

Then, using the GitLens extension, perform a pull from upstream/main and sync the changes to your fork.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
