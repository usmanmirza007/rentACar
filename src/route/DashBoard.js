import SafeAreaView from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation';
import Home from './../views/Home';
import SideMenu from './../route/SideMenu';
import Trip_History from './../views/Trip_History';
import Customer_Reviews from './../views/Customer_Reviews';
import FleetRegistration from './../views/RegisterDetails';
import LocationMonitoring from './../views/LocationMonitoring';
import Profile from './../views/Profile';
import LogOut from './../views/LogOut';

const DashBoard = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  homeScreen: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
  },
  },
    Customer_Reviews:{
      screen:Customer_Reviews,
      navigationOptions: {
        headerShown: false,
    },
  },
    Trip_History:{
      screen:Trip_History,
      navigationOptions: {
        headerShown: false,
    },
  },
    FleetRegistration:{
      screen:FleetRegistration,
      navigationOptions: {
        headerShown: false,
    },
  },
    LocationMonitoring:{
      screen:LocationMonitoring,
      navigationOptions: {
        headerShown: false,
    },
  },
    Profile:{
      screen:Profile,
      navigationOptions: {
        headerShown: false,
    },
  },
    LogOut:{
      screen:LogOut,
      navigationOptions: {
        headerShown: false,
    },
  }
  

}, {
  drawerWidth: 250,
  initialRouteName: 'Home',
  contentComponent: SideMenu,
});


export default (DashBoard);

