import { AppRegistry, UIManager, Platform, LogBox } from 'react-native';
import App from './src/App';

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

LogBox.ignoreAllLogs();

AppRegistry.registerComponent('todozen', () => App);
