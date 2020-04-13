import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { TextInput, ScrollView, ImageBackground } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { AntDesign,MaterialIcons,FontAwesome, Entypo } from '@expo/vector-icons';
export default class SideMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor :'#fff'}}>
      <View style={{ backgroundColor: '#000', height: '4%', }}></View>

        <ScrollView>
          <View style={{  marginLeft: 15 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='home'
                type='font-awesome'
                color='#000'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, }}>
                <Text style={{ color: 'black', fontSize: 13 , color: '#000'}}>HOME</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Customer_Reviews') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='home'
                type='font-awesome'
                color='#000'
                size={24}
                containerStyle={{ width: width(10) }}
              /><View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, color: '#000' }}>Customer Reviews</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{  marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Trip_History') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <MaterialIcons
                name='details'
                type='font-awesome'
                color='#000'
                size={24}
                containerStyle={{ width: width(10) }}
              /><View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, color: '#000' }}>Trip History</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('FleetRegistration') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <FontAwesome
                name='registered'
                type='font-awesome'
                color='#000'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, color: '#000' }}>Fleet Registeration</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{  marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LocationMonitoring') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <Entypo
                name='location-pin'
                type='font-awesome'
                color='#000'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, color: '#000' }}>Location Monitoring</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{  marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='profile'
                type='font-awesome'
                color='#000'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, color: '#000' }}>Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{  marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LogOut') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='logout'
                type='font-awesome'
                color='#000'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, color: '#000' }}>Log Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}


