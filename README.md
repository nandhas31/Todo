# todo

This project was created to revisit my Javascript skills as well as gain an introduction into the React and Electron frameworks as well as the MERN stack.

- [todo](#todo)
  * [Features](#features)
  * [Installation (Development)](#installation--development-)
    + [`npm install`](#-npm-install-)
    + [`npm start`](#-npm-start-)
    + [`npm test` (In Progress)](#-npm-test---in-progress-)
    + [`npm run electron-dev` (In Progress)](#-npm-run-electron-dev---in-progress-)
  * [Instalation (Production) (In Progress)](#instalation--production---in-progress-)
    + [`npm run build`](#-npm-run-build-)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## Features

1. Web view of app
2. Native PC/Mac app with Electron
3. Backend built with ExpressJS featuring custom routing to aid storing and authenticating user
4. Token-Based Authentication using JWT (Coming Soon :) )
5. Storage using MongoDB with Mongoose framework (Development MongoDB instance run on local Docker image) 

## Installation (Development)

In the project directory, you can run:

### `npm install`

Builds the package dependencies for the project, must be run in `todo/` and `todo/todo-backend` as these two components are built independently for individualized containerization in the future.

### `npm start`

Runs the web app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` (In Progress)

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run electron-dev` (In Progress)

Launches the test runner of the web app in the interactive watch mode.\
You must have the web app running in a seperate process as this command listens to the localhost port 3000.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Instalation (Production) (In Progress)

### `npm run build` 

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

