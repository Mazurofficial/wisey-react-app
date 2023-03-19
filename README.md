# Demo Preview

[Wisey React/Redux App](https://wisey-react-app.vercel.app/)



# Documentation

## API
To work with [API](https://www.postman.com/aninix/workspace/genesis-front-end-school/overview) I used [axios library](https://www.npmjs.com/package/axios) and built-in [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) feature createAsyncThunk() to make async requests and to catch request's status.

## Routing
To realize several pages in my app there was used [react-router](https://www.npmjs.com/package/react-router) library

## VideoPlayer
To make custom videoPlayer that supports .m3u8 video format was used [hls.js](https://www.npmjs.com/package/hls.js) library\
speedChange feature was realized with standart <video> property playbackRate and listening of window event 'keydown'\
To make the PictureInPicture(pip) window I simply create new component [Pip](https://github.com/Mazurofficial/wisey-react-app/tree/main/src/features/pip/Pip) and add it behind Routes in [App](https://github.com/Mazurofficial/wisey-react-app/blob/main/src/App.tsx)\
(This features you can check while watching the lesson)\
Progress of each video is saved to localstrage separetely

## Styles
Styles were added to project with [scss modules](https://github.com/css-modules/css-modules) to prevent collisions in classes\
Mobile and Tablet adaptation was simply done with @media requests



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.



## To run the project

First:

### `npm i`

To install all nessessory packages

Second:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
