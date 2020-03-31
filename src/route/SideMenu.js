import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { TextInput, ScrollView, ImageBackground } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class SideMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor :'skyblue'}}>
     <View style={{ alignItems: 'center', }}>
          <View style={{ height: height(30), justifyContent: 'center' }}>
            <Image source={require('./../image/user1.png')} style={{ width: width(20), height: width(20), }}></Image>
          </View>
          <Text style={{ fontSize: 13, marginBottom: 30, marginTop: -50, fontWeight: 'bold', color: '#fff' }}>Alex Rowe</Text>
        </View>
        <ScrollView>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff', borderTopColor: '#fff', borderTopWidth: 1, marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='home'
                type='font-awesome'
                color='#fff'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, }}>
                <Text style={{ color: 'black', fontSize: 13 , color: '#fff'}}>HOME</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff', marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('selectCity') }} style={{ marginLeft: 5, flexDirection: 'row', marginVertical: height(2), }}>
              <AntDesign
                name='cloudo'
                type='font-awesome'
                color='#fff'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, }}>
                <Text style={{ color: 'black', fontSize: 13 , color: '#fff'}}>Cities Weather</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff', marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('news') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <Entypo
                name='news'
                type='font-awesome'
                color='#fff'
                size={24}
                containerStyle={{ width: width(10) }}
              /><View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, color: '#fff' }}>News</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff', marginLeft: 20 }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('video') }} style={{ flexDirection: 'row', marginVertical: height(2), }}>
              <Entypo
                name='video'
                type='font-awesome'
                color='#fff'
                size={24}
                containerStyle={{ width: width(10) }}
              />
              <View style={{ marginLeft: 15, marginTop: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, color: '#fff' }}>Videos</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}


