# Money Management

With easy-to-use tools for tracking expenses, increasing income, and budgeting, this app is perfect for individuals looking to take control of their finances.

Main dependency: Yarn (Yarn needs to be installed separately, to install click [here](https://classic.yarnpkg.com/en/))

## Installation

Clone the repository into your local machine either through **ssh** or **http**. [Sourcetree](https://www.sourcetreeapp.com/) is a recommended git client that provides an intuitive GUI to handle version control, though, git CLI works just as well.

1. To install this project, follow these steps:
2. Clone the repository to your local machine.
3. Make sure you have Node.js, npm, and Yarn installed on your machine.
4. Open a terminal and navigate to the project directory.

```bash
# navigate to your desired folder
cd destination-folder/

# use git-clone to clone the repository
git clone <place ssh or https link from bitbucket here (less the pointy arrows)>
```

5. Run the following command to install the project dependencies:
   Once the repository is cloned correctly, first run the following commands in the terminal:

NOTE: run the following command first before proceeding:

```
yarn
```

The above command will prepare yarn for the environment installation.

```bash
# 1. use yarn to install dependencies
yarn install

# 2. prepare the repository to enable husky
yarn prepare
```

First install is to install all project relevant dependencies for it to function properly. The second command is to enable husky and give it file execution rights, doing so will enable shell scripts that are prepared beforehand to run before commits or push command are being used (mainly linting and formatting).

### Ensure repository is working

To ensure the repository is up and running along with the necessary checks implemented to ensure code quality, first spin up a server to ensure Tailwindcss and Next.js are working seamlessly.

```bash
# Run the project locally and ensure styles created through Tailwindcss shows
yarn dev
```

Once it is verified that it can be run locally, attempt to make a small change to test that the pre-commit hooks are functioning as well.

```bash
# add the changes
git add .

# attempt to do a git commit
git commit -m "test commit"
```

This commit attempt should fail with an error of **type must be of [build, ...]**

If the above error is shown, this meant that husky is working as expected.

## Tips for Git commits

Husky is being implemented for this project repository, this meant that there exists pre-commit and pre-push checks before any changes are successfully implemented to remote.

To better understand how this works, below is an example of how a normal git commit would be like with husky.

```bash
# State the type of commit, followed by a message (less then 100 words)
# This is to ensure that commits are broken down to the smallest possible size
# and categorized accordingly
git commit -m "build: added new dependencies for dev"
```

Below is a list of possible types of commits, so if you are a contributor to this project, do abide by this rule and ensure that you are only committing what is being described by the commit type.

1. **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
2. **docs**: Documentation only changes
3. **feat**: A new feature
4. **fix**: A bug fix
5. **perf**: A code change that improves performance
6. **refactor**: A code change that neither fixes a bug nor adds a feature
7. **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
8. **test**: Adding missing tests or correcting existing tests

**Note**: everything in a git commit message are lower-cased and does not end with a period.

```bash
yarn build
```

This is done to ensure that the code you have made are build friendly before pushing it up. If your build fails for some reason, make sure to fix it and try again.

## Versions

The project was developed and tested using the following versions of Node.js, npm, and Yarn:

- Node.js: version 18.15.0
- npm: version 9.6.2
- Yarn: version 1.22.19
- Next.js: version 13.2.4
