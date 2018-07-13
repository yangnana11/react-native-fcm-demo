# react-native-fcm-demo
This is a demo for react-native-firebase using notification function.
Read https://medium.com/@yangnana11/how-to-set-up-firebase-notification-in-react-native-app-android-only-4920eb875eae for details

Here are the versions I used
```
{
  "name": "fcm",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest"
  },
  "dependencies": {
    "react": "16.4.1",
    "react-native": "0.56.0",
    "react-native-firebase": "^4.2.0"
  },
  "devDependencies": {
    "babel-jest": "23.2.0",
    "babel-preset-react-native": "^5",
    "jest": "23.3.0",
    "react-test-renderer": "16.4.1"
  },
  "jest": {
    "preset": "react-native"
  }
}

```

How to run:
```
yarn
react-native run-android
```
For now, the ios version is under contruction.
