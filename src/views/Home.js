import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { FontAwesome, Entypo, Feather,Fontisto } from '@expo/vector-icons';


export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ height: 50, backgroundColor: '#ff611b' }}>
          
          <Feather style={{ color: 'white', margin: 15, }} name='menu' size={30} 
          onPress={() => this.props.navigation.openDrawer('AppDrawerNavigator')} />
        </View>
        <Text>Home Screen</Text>
      </SafeAreaView>
    );
  }
}
Home.navigationOptions = ({navigation}) => {
  return {
      drawerLabel: 'Home',
      drawerIcon: ({tintColor})=> (
           <Fontisto style={{color:tintColor, }} name="home" size={25} />
      )
  };
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

});
