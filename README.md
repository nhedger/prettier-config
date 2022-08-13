# Prettier configuration

This package contains my personal [Prettier](https://prettier.io) configuration.

## Installation

```bash
# pnpm
pnpm add -D @hedger/prettier-config

# npm
npm i -D @hedger/prettier-config
```

## Usage

Create a new `.prettierrc.cjs` file with the following content.

```js
module.exports = {
    ...require("@hedger/prettier-config"),
};
```
