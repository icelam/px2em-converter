<p align="center">
    <img alt="PX2EM Converter" src="public/static/media/touch-icons/apple-touch-icon-1024x1024.png" width="150" />
</p>

[![Made with React](https://img.shields.io/badge/made_with-React-61dafb.svg?logo=react&style=flat)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-12.17.0-026e00.svg?logo=Node.js&logoColor=white&style=flat)](https://nodejs.org/en/)
[![Yarn](https://img.shields.io/badge/Yarn-1.17.3-25799f.svg?logo=Yarn&logoColor=white&style=flat)](https://yarnpkg.com/)
[![ESLint](https://img.shields.io/badge/code_style-ESLint-5b5be0.svg?logo=eslint&style=flat)](https://eslint.org/)
[![Conventional Commits](https://img.shields.io/badge/conventional_commits-1.0.0-fa6673.svg?style=flat)](https://conventionalcommits.org)
[![Storybook](https://img.shields.io/badge/Storybook-5.3-ff4785.svg?logo=Storybook&logoColor=white&style=flat)](https://storybook.js.org/)
[![Jest](https://img.shields.io/badge/test_with-Jest-15c213.svg?logo=Jest&style=flat)](https://jestjs.io/)
[![Enzyme](https://img.shields.io/badge/test_with-Enzyme-ff385c.svg?style=flat)](https://enzymejs.github.io/enzyme/)
[![ESDoc](https://img.shields.io/badge/document_with-ESDoc-e55151.svg?style=flat)](https://esdoc.org/)
[![Build](https://github.com/icelam/px2em-converter/workflows/Build/badge.svg)](https://github.com/icelam/px2em-converter/actions?query=workflow%3ABuild)
[![Unit Test](https://github.com/icelam/px2em-converter/workflows/Unit%20test/badge.svg)](https://github.com/icelam/px2em-converter/actions?query=workflow%3A%22Unit+test%22)
[![codecov](https://codecov.io/gh/icelam/px2em-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/icelam/px2em-converter)
[![lgtm.com](https://img.shields.io/lgtm/grade/javascript/g/icelam/px2em-converter.svg?logo=lgtm)](https://lgtm.com/projects/g/icelam/px2em-converter/context:javascript)

# PX2EM Converter #
PX2EM is a conversion tool which allows you to calculate the em sizes from pixels. Unlike any other pixel to em conversion tool, PX2EM allows you to convert a list of pixels at one time, and save your inputs for re-visit.

![Preview](./docs/preview.png)

## Features ##
1. Convert pixels to rem by providing base font size
2. Store inputs for re-visiting users
3. Copy to clipboard by clicking on the data cell

## Tech Stack ##
* [React](https://reactjs.org/)
* [Styled Components](https://www.styled-components.com/)
* [Jest](https://jestjs.io/)
* [Enzyme](https://enzymejs.github.io/enzyme/)
* [Storybook](https://storybook.js.org/)

## Documentations ##
* [Storybook](https://icelam.github.io/px2em-converter/storybook/)
* [ESDoc](https://icelam.github.io/px2em-converter/esdoc/)

## Setup ##
Below shows some basic setup steps.

### Node version ###
This project is developed using Node.js 12. The version is already specified in the `.nvmrc` file. Suggest to run `nvm use` when you enter the project folder.

### Install packages need for the project ###
Install yarn packages in project root folder first using `yarn install`.

### To start the project ##
Run `yarn start` in project root folder.

### To build production ###
Run `yarn run build` in project root folder.

### To run unit tests ###
Run `yarn test` in the project root folder.

### To start Storybook ###
Run `yarn storybook` in project root folder.

### To build Storybook ###
Run `yarn build-storybook` in project root folder. Output can be found at `docs/storybook`.

### To build ESDoc ###
Run `yarn esdoc` in project root folder. Output can be found at `docs/esdoc`.

## Configurations ##
Below shows some available configuration options.

### To add / edit Webpack alias ###
To add or edit Webpack alias, the following files must be modified in order to have ESLint, Jest and Storybook to work correctly.
1. Modify the `import/resolver.node.alias.map` node in `.eslintrc` 
2. Modify `config.resolve.alias` in `config-overrides.js`
3. Modify `jest.moduleNameMapper` in `package.json`
4. Modify `config.resolve.alias` in `.storybook/main.js`

### To change the app host and public url used in <meta> tags ###
The `REACT_APP_APP_HOST` and `PUBLIC_URL` are located in `.env` and `.env.development` files.

### To add Google Tag Manager ID ###
The `REACT_APP_GTM_ID` are located in `.env` and `.env.development` files.
