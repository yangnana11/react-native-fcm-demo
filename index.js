/** @format */

import {AppRegistry} from 'react-native';
import AppAndroid from './App';
import {name as appName} from './app.json';
import bgActions from './bgActions';

AppRegistry.registerComponent(appName, () => AppAndroid);

// AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgActions);
