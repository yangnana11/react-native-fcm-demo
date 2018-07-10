/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import bgActions from './bgActions';

AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerHeadlessTask('RNFirebaseBackgroundNotificationAction', () => bgActions);
