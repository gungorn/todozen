import { AppRegistry, UIManager, Platform, LogBox } from 'react-native';
import 'react-native-console-time-polyfill';

import App from './src/App';
import FB from './src/FB';

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

LogBox.ignoreAllLogs();

AppRegistry.registerComponent('todozen', () => App);
