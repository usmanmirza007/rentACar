
import DashBoard from './DashBoard';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import splash from './../component/splash';

const Route =  createStackNavigator({
    Home: {
        screen: DashBoard,
        navigationOptions: {
            header: null,
        },
    },
    splash: {
        screen: splash,
        navigationOptions: {
            header: null,
        },
    },
    
  })

export default createAppContainer(Route);

