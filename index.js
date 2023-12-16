import {AppRegistry, ScrollView} from 'react-native';
import {name as appName} from './app.json';
import App from './app/App';

ScrollView.defaultProps = {
  ...ScrollView.defaultProps,
  bounces: false,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  keyboardDismissMode: 'on-drag',
  keyboardShouldPersistTaps: 'always',
};

AppRegistry.registerComponent(appName, () => App);
