# Contributing

This project is currently under development and contributions to this project will be strictly reviewed at the owner's discretion until this project has established a complete contribution model. Once those details are available, the contribution model will contain helpful information to assist with making changes to this project.

* [Setup](#setup)
* [Making a change](#making-a-change)

## Setup

In order to begin contributions to this project, please follow the steps within this section.

### System Requirements

The items listend in this section must be available on the current system prior to setting up this project for local development:

* [Git](https://git-scm.com/) - Version control tooling.
* [Node Version Manager](https://www.nvmnode.com/guide/download.html) - Configuration fo Node and NPM.
* [Windows Subsystem for Linux](https://learn.microsft.com/en-us/windows/wsl/install) (windows only) - Shell alignment tooling.

### Forking the Project

This project is currently configured to only accept contributions utilizing a [forking workflow](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project#about-forking).

After this project has been forked, utilize the following commands to download and configure the appropriate upstreams:

```bash
# Navigate to the desired location to download this project.
cd {path-to-projects}

# Download (clone) the project to your local disk using SSH.
git clone git@github.com:{scope}/{project}.git

# Navigate into the downloaded project.
cd {path-to-project}

# Add the root upstream project using SSH.
git remote add upstream git@github.com:alboe-development/alboe.git

# Validate that the upstream values are correct.
git remote -v
```

### System Configuration

In order to utilize the specified runtime environment and dependency manager for this project based on the manifest data stored within the `./.nvmrc` file, utilize the following command:

```bash
# Install and use the defined version of Node and NPM.
nvm install
```

Once **Node Version Manager** has installed and initialized the specified version of **Node** and **NPM** for this project, install [pnpm](https://pnpm.io/) as a dependency and workspace manager using the following commands:

```bash
# Install the latest version of corepack on this version of NPM.
npm install --global corepack@latest

# Enable the pnpm module via corepack.
corepack enable pnpm

# Update pnpm to the latest published version.
corepack prepare pnpm@latest --activate
```

At this point, the system is configured and ready for the next steps!

### Installing Dependencies

Once the system is configured, run the following commands to begin installing all necessary dependencies and synchronize all workspaces:

```bash
# Install all dependencies and synchronize the workspaces.
pnpm install
```

### Building the Project

_Coming Soon!_

## Making a Change

_Coming Soon!_
