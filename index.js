import { AppRegistry, UIManager, Platform } from 'react-native';
import App from './src/App';

if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('todozen', () => App);
