# Welcome to Drowzee Platform 7

An app using EEG data to create auditory neurofeedback in real time.

The project can take in anarbitary EEG device (defined in `src/functionality/devices/)` and give feedback based on an arbitary algorithm. Different algorithms can be implemented as different *feedback machines* (FM) in `src/functionality/Feedback`.

We use React (created with create-react-app) as client. Files related to the *react* project are all in the `public` or `src` folder, in addition to `package.json`

We plan to include an Cordova deployment that automaticly builds ios and android apps (and polyfills missing functionality) that connects directly to the output of the react app.

In this sense, we plan to keep most of our focus and energy on the react app, hopefully needing as little time polyfilling and hacking the cordova app to make it work.

This project is created with fast pace in mind. Cross-platform is key, and functionality and proof testing is more important than perfecting performance and native feel. Pareto's principle is relevant, we don't want to waste 80% of our time on the last 20%.

Link to a mind-map sketching out our system architecture: [📕 Product map](https://www.draw.io/?state=%7B%22ids%22:%5B%221kcxykYMVjBlMK2Faz9EngK3_xb9We_w7%22%5D,%22action%22:%22open%22,%22userId%22:%22103603540184261131413%22%7D#G1kcxykYMVjBlMK2Faz9EngK3_xb9We_w7)


To build the react project, navigate to the project folder in your terminal

First install dependencies with yarn

```
yarn
```

Then start the app
```
yarn start
```