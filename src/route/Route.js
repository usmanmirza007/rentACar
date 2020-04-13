import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from './../views/Splash';
import Landing from './../views/Landing';
import Register from './../views/Register';
import EnterOtp from './../views/EnterOtp';
import RegisterDetails from './../views/RegisterDetails';
import Login from './../views/Login';
import ForgetPassword from './../views/ForgetPassword';
import Home from './../views/Home';
import ImagesScreen from './../views/ImagesScreen';
import DashBoard from './DashBoard';



const SplashStack = createStackNavigator(
    {
      splashScreen: {screen: Splash},
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
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
      Home: {screen: DashBoard},

    },
    {
      defaultNavigationOptions: {
        headerShown: false,
      },
    },
  );
  const PrimaryNav = createStackNavigator(
    {
      splashStack: {screen: SplashStack},
      loginStack: {screen: LoginStack},
    },
    {
      headerMode: 'none',
      title: 'Main',
      initialRouteName: 'splashStack',
      
    },
  );
  
  export default createAppContainer(PrimaryNav);