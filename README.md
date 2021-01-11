# Projekt-Setup

## Requirements

- [yarn](https://yarnpkg.com/) v1.22.10+
- [node.js](https://nodejs.org/en/) v14.15.1+

## Getting started

Please check if the required software is present on your system. Type the following commands into your console to see the version (Hint: [Visual Studio Code has an integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)):

```bash
$ node -v # for node
$ yarn -v # for yarn
```

If the versions seem to be ok, install the node dependencies by running the following command in your projects folder:

```bash
$ yarn
```

This could take a while. After everything is installed, just run the following command to start:

```bash
$ yarn dev
```

This will open a browser window with your local changes. Try to edit somehing within `./src/`. Webpack will detect all changesas soon as you hit save, bundles everything together and will reload your browser to present the latest changes.

