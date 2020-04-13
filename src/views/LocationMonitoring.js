import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  Dimensions,
  Alert,
  Modal,
  Picker,
} from 'react-native';
import Assets from '../assets/Assets';
import { FontAwesome, Entypo, Feather,Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { Marker, Callout, AnimatedRegion } from 'react-native-maps';
export default class LocationMonitoring extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
      },
      error: null,
      Model: '',
    }
  }

  // componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     this.setState({
    //       region:{
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //       }
    //     });
    //   },
    //   error => console.log(error.message),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
    // );
    // console.log(this.state.Model);
  // }

  render() {
    let myMap;
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={{ backgroundColor: '#000', height: '4%', }}></View>

        <View style={{ height: 50, backgroundColor: '#ff611b', justifyContent: 'center' }}>
          <Feather style={{ color: 'white', marginLeft: 15, }} name="menu" size={30} onPress={() => this.props.navigation.openDrawer('AppDrawerNavigator')} />
        </View>
        <MapView
          ref={ref => myMap = ref}
          style={styles.map}
          initialRegion={{
            latitude: 24.8607,
            longitude: 67.0011,
            latitudeDelta: 0.5922,
            longitudeDelta: 0.5421,
          }}
        >
          <Marker
            coordinate={{
                latitude: 24.8270,
                longitude: 67.0251,
              }}
            onPress={() => {
              myMap.fitToCoordinates([{
                latitude: 24.8270,
                longitude: 67.0251,
              }], {
                animated: true
              })
            }}
          >
            <MaterialCommunityIcons style={{ color: 'black', marginLeft: 15, }} name="car-hatchback" size={40} />
            <Callout>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Car 1</Text>
              <Text>Suzuki</Text>
              <Text>Alto</Text>
            </Callout>

          </Marker>
          <Marker
            coordinate={{
              latitude: 24.871641,
              longitude: 67.059906,
            }}
            onPress={() => {
              myMap.fitToCoordinates([{
                latitude: 24.871641,
                longitude: 67.059906,
              }], {
                animated: true
              })
            }}>
            <MaterialCommunityIcons style={{ color: 'black', marginLeft: 15, }} name="car-hatchback" size={40} />
            <Callout>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Car 2</Text>
              <Text>Honda</Text>
              <Text>Civic</Text>
            </Callout>

          </Marker>
          <Marker
            coordinate={{
              latitude: 24.946218,
              longitude: 67.005615,
            }}
            onPress={() => {
              myMap.fitToCoordinates([{
                latitude: 24.946218,
              longitude: 67.005615,
              }], {
                animated: true
              })
            }}>
            <MaterialCommunityIcons style={{ color: 'black', marginLeft: 15, }} name="car-hatchback" size={40} />
            <Callout>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Car 3</Text>
              <Text>Suzuki</Text>
              <Text>Baleno</Text>
            </Callout>

          </Marker>
        </MapView>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  map: {
    flex: 1
  },
  InputStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 20,
    marginTop: 10
  },
});
