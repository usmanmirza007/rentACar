import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
} from 'react-native';
import Assets from '../assets/Assets';
import { FontAwesome, Entypo, Feather,Fontisto } from '@expo/vector-icons';

export default class Customer_Reviews extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={{ backgroundColor: '#000', height: '4%', }}></View>

        <View style={{ height: 50, backgroundColor: '#ff611b' }}>
          <Feather style={{ color: 'white', margin: 15, }} name="menu" size={30} onPress={() => this.props.navigation.openDrawer('AppDrawerNavigator')} />
        </View>
        
        <Text>Customer_Reviews</Text>
      </SafeAreaView>
    );
  }
}

Customer_Reviews.navigationOptions = ({navigation}) => {
  return {
      drawerLabel: 'Customer Reviews',
      drawerIcon: ({tintColor})=> (
           <Fontisto style={{color:tintColor, }} name="preview" size={25} />
      )
  };
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },


});