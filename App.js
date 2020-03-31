import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Splash from './src/views/Splash';
import Landing from './src/views/Landing';
import Register from './src/views/Register';
import EnterOtp from './src/views/EnterOtp';
import RegisterDetails from './src/views/RegisterDetails';
import Login from './src/views/Login';
import ForgetPassword from './src/views/ForgetPassword';
import Home from './src/views/Home';
import Test from './src/views/Test';
import Trip_History from './src/views/Trip_History';
import Customer_Reviews from './src/views/Customer_Reviews';
import FleetRegistration from './src/views/RegisterDetails';
import LocationMonitoring from './src/views/LocationMonitoring';
import ImagesScreen from './src/views/ImagesScreen';
import Profile from './src/views/Profile';
import LogOut from './src/views/LogOut';

import DrawerContainer from './src/components/DrawerContainer';


// const App = () => {
//   return <AppContainer />;
// };

const SplashStack = createStackNavigator(
  {
    splashScreen: {screen: Splash},
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const LoginStack = createStackNavigator(
  {
    landingScreen: {screen: Landing},
    registerScreen: {screen: Register},
    enterOtpScreen: {screen: EnterOtp},
    registerDetailsScreen: {screen: RegisterDetails},
    loginScreen: {screen: Login},
    forgetPasswordScreen: ForgetPassword,
    ImagesScreen: {screen: ImagesScreen},
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    homeScreen: {screen: Home},
    Customer_Reviews:{screen:Customer_Reviews},
    Trip_History:{screen:Trip_History},
    FleetRegistration:{screen:FleetRegistration},
    LocationMonitoring:{screen:LocationMonitoring},
    Profile:{screen:Profile},
    LogOut:{screen:LogOut}
  },
  {
    unmountInactiveRoutes: true,
    gesturesEnabled: false,
    // contentComponent: DrawerContainer,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange',
      },
    },
    drawerBackgroundColor: 'white',
    contentOptions:{
      activeTintColor:'green',
    }
  },
);

const PrimaryNav = createStackNavigator(
  {
    splashStack: {screen: SplashStack},
    loginStack: {screen: LoginStack},
    drawerStack: {screen: AppDrawerNavigator},
  },
  {
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'splashStack',
    
  },
);

export default createAppContainer(PrimaryNav);
// const AppContainer = createAppContainer(PrimaryNav);

// export default App;
