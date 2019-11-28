/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import ResultScreen from './ResultScreen';
import TestScreen from './TestScreen';
import Drawer from './Drawer';

Navigation.registerComponent('Home', () => App);
Navigation.registerComponent('TestScreen', () => TestScreen);
Navigation.registerComponent('ResultScreen', () => ResultScreen);
Navigation.registerComponent('Drawer', () => Drawer);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'drawerID',
            name: 'Drawer'
          }
        },
        center: {
          stack: {
            id: 'AppStack',
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ]
          }
        }
      }
    }
  });
});
