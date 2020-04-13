import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  AsyncStorage,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Picker,
  FlatList,
  CheckBox
} from 'react-native';
import { FontAwesome, Entypo, AntDesign, Feather, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { Dropdown } from 'react-native-material-dropdown';
export default class RegisterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pasword: '',
      confirmPasword: '',
      Company: '',
      check1: false,
      Model: '',
      ModelCategory: [],
      MakeCategory: [],
      ServiceCategory: [],
      TransmissionCategory: [],
      ServiceModelCategory: [],
      CurrencyCategory: [],
      FairUnitCategory: [],
      ID: '',
      makeId: '',
    };
  }

  selected = (value, index, data) => {

    let cityId = data[index].id;
    console.log("Make id", cityId);
    this.setState({
      makeId: cityId
    })
    this.ModelFunction()

    console.log("Make id", this.state.makeId);
  };

  CheckBox1() {
    this.setState({ check1: !this.state.check1 })
  }
  componentDidMount() {
    this.MakeFunction()
    this.ServiceFunction()
    this.TransmissionFunction()
    this.ServiceModelFunction()
    this.CurrencyFunction()
    this.FairUnitFunction()
  }


  ModelFunction() {
    let id = this.state.makeId
    console.log("id", id)
    fetch('http://51.77.6.84:9110/Com/VModel?MakeId=' + id, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    }).then((response) => response.json())
      .then((responseJson) => {
        var len = responseJson.length;
        let drop_down_data = [];
        for (let i = 0; i < len; i++) {
          // const data = responseJson[i];
          // // alert(JSON.stringify(data));    
          // console.log("make data",data)
          drop_down_data.push({ value: responseJson[i].Model });
          // this.state.drop_down_data.push({ value: responseJson.cities[i].name,id:responseJson.cities[i].id });
        }
        this.setState({ ModelCategory: drop_down_data })
        console.log("data make", this.state.MakeCategory)
        console.log("data model", this.state.ModelCategory)
      })
      .catch((error) => {
        console.error(error);
      });

  }
  MakeFunction() {
    fetch('http://51.77.6.84:9110/Com/VMake', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    }).then((response) => response.json())
      .then((responseJson) => {
        var len = responseJson.length;
        let drop_down_data = [];
        for (let i = 0; i < len; i++) {
          // const data = responseJson[i];
          // // alert(JSON.stringify(data));    
          // console.log("make data",data)
          // AsyncStorage.setItem("userId", JSON.stringify(responseJson[i].MakeId));
          drop_down_data.push({ value: responseJson[i].Make, id: responseJson[i].MakeId });
          // this.state.drop_down_data.push({ value: responseJson.cities[i].name,id:responseJson.cities[i].id });
        }
        this.setState({ MakeCategory: drop_down_data })

        // const id = this.state.MakeCategory
        // for (let index = 0; index < id.length; index++) {
        //   element = id[index];
        // }
        // this.setState({ID: element})
        // console.log("id", this.state.ID)
        // this.setState({ MakeCategory: JSON.stringify(responseJson[10].Make) })
        // alert("MakeCategory = "+this.state.MakeCategory);

        // console.log("data make", this.state.MakeCategory[10].id)
        // let element = []
        // let idState = this.state.MakeCategory
        //  for (let getId = 0; getId < idState.length; getId++) {
        //   element = idState[getId];

        //  }
        //  this.setState({ID: element})
        //  console.log("Get id ", this.state.ID)
      })
      .catch((error) => {
        console.error(error);
      });

  }
  ServiceFunction() {
    fetch('http://51.77.6.84:9110/Com/ServiceType', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    }).then((response) => response.json())
      .then((responseJson) => {
        // console.log("api data", responseJson);

        var len = responseJson.length;
        let drop_down_data = [];
        for (let i = 0; i < len; i++) {
          drop_down_data.push({ value: responseJson[i].ServiceType });
        }
        this.setState({ ServiceCategory: drop_down_data })
        // console.log("data", this.state.ServiceCategory)

      })
      .catch((error) => {
        console.error(error);
      });

  }
  TransmissionFunction() {
    fetch('http://51.77.6.84:9110/Com/VTransmissionType', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    }).then((response) => response.json())
      .then((responseJson) => {
        // console.log("api data", responseJson);

        var len = responseJson.length;
        let drop_down_data = [];
        for (let i = 0; i < len; i++) {
          drop_down_data.push({ value: responseJson[i].TransmissionType });
        }
        this.setState({ TransmissionCategory: drop_down_data })
        // console.log("data", this.state.TransmissionCategory)

      })
      .catch((error) => {
        console.error(error);
      });

  }
  ServiceModelFunction() {
    fetch('http://51.77.6.84:9110/Com/ServiceMode', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    }).then((response) => response.json())
      .then((responseJson) => {
        // console.log("api data", responseJson);

        var len = responseJson.length;
        let drop_down_data = [];
        for (let i = 0; i < len; i++) {
          drop_down_data.push({ value: responseJson[i].ServiceMode });
        }
        this.setState({ ServiceModelCategory: drop_down_data })
        // console.log("data", this.state.ServiceModelCategory)

      })
      .catch((error) => {
        console.error(error);
      });

  }
  CurrencyFunction() {
    fetch('http://51.77.6.84:9110/Com/Currency', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    }).then((response) => response.json())
      .then((responseJson) => {
        // console.log("api data", responseJson);

        var len = responseJson.length;
        let drop_down_data = [];
        for (let i = 0; i < len; i++) {
          drop_down_data.push({ value: responseJson[i].CurrencyCode });
        }
        this.setState({ CurrencyCategory: drop_down_data })
        // console.log("data", this.state.CurrencyCategory)

      })
      .catch((error) => {
        console.error(error);
      });

  }
  FairUnitFunction() {
    fetch('http://51.77.6.84:9110/Com/FairUnit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    }).then((response) => response.json())
      .then((responseJson) => {
        // console.log("api data", responseJson);

        var len = responseJson.length;
        let drop_down_data = [];
        for (let i = 0; i < len; i++) {
          drop_down_data.push({ value: responseJson[i].FairUnit });
        }
        this.setState({ FairUnitCategory: drop_down_data })
        // console.log("data", this.state.FairUnitCategory)

      })
      .catch((error) => {
        console.error(error);
      });

  }
  

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={{ backgroundColor: '#000', height: '4%', }}></View>

        <View style={{ height: 50, backgroundColor: '#ff611b' }}>
          <Feather style={{ color: 'white', margin: 15, }} name="menu" size={30} onPress={() => this.props.navigation.openDrawer('AppDrawerNavigator')} />
        </View>
        <View style={styles.container}>


          <ScrollView style={styles.containContent}>

            <Text style={[styles.Heading]}>Vehicle Registration </Text>
            <View style={styles.InputStyle}>
              <Dropdown
                label="Model"
                data={this.state.ModelCategory}
              />
            </View>
            <View style={styles.InputStyle}>
              <Dropdown
                label="Make"
                data={this.state.MakeCategory}
                onChangeText = {this.selected}

              />
            </View>

            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Model Year"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Engine Capacity"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <View style={styles.InputStyle}>
              <Dropdown
                label="Transmission"
                data={this.state.TransmissionCategory}
              />
            </View>
            <View style={styles.InputStyle}>
              <Dropdown
                label="Service Type"
                data={this.state.ServiceCategory}
              />

            </View>
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Is Active"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <View style={styles.InputStyle}>
              <Dropdown
                label="Service Model"
                data={this.state.ServiceModelCategory}
              />
            </View>
            <View style={styles.InputStyle}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.Model}
                placeholder="Company"
                style={{ height: 50, width: '100%', paddingLeft: 0 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ Model: itemValue })
                }>
                <Picker.Item label="Time Hour" value="" />
                <Picker.Item label="Civic" value="Civic" />
                <Picker.Item label="City" value="City" />
                <Picker.Item label="Mehran" value="Mehran" />
              </Picker>
            </View>
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="From Time"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="To Time"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />

            <View style={styles.InputStyle}>
              <Dropdown
                label="Currency"
                data={this.state.CurrencyCategory}
              />
            </View>
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Fair Amount"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <View style={styles.InputStyle}>
              <Dropdown
                label="Fair Unit"
                data={this.state.FairUnitCategory}
              />
            </View>

            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Additional Fair"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Fiar Time From"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Fair Time To"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <TextInput
              style={[styles.InputField]}
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              placeholder="Applicable date"
              returnKeyType={'next'}
              placeholderTextColor="#517e8d"
              onChangeText={text => this.setState({ confirmPasword: text })}
              value={this.state.confirmPasword}
            />
            <View style={styles.InputStylelast}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.Model}
                placeholder="Company"
                style={{ height: 50, width: '100%', paddingLeft: 0 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ Model: itemValue })
                }>
                <Picker.Item label="Negotiable" value="" />
                <Picker.Item label="Civic" value="Civic" />
                <Picker.Item label="City" value="City" />
                <Picker.Item label="Mehran" value="Mehran" />
              </Picker>
            </View>



          </ScrollView>
          <TouchableOpacity
            style={[styles.btnContinue]}
            // onPress={() => console.log(this.state.Company)}
            onPress={() => this.props.navigation.navigate('ImagesScreen')}
          >
            <Text style={styles.btnContinueText}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  containContent: {
    flex: 2.4,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  Heading: {
    fontSize: 25,
    textAlign: 'center',
  },
  InputStyle: {
    backgroundColor: 'white',
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 20,
    marginTop: 10
  },
  InputStylelast: {
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10
  },
  InputField: {
    width: '90%',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ff7500',
    padding: 5,
    borderRadius: 5,
    fontSize: 18,
    color: '#343434',
    textAlign: 'left',
  },
  InputRate: {
    width: '40%',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ff7500',
    padding: 5,
    borderRadius: 5,
    fontSize: 18,
    color: '#343434',
    textAlign: 'left',
  },
  containBtn: {
    flex: 0.3,
  },
  btnContinue: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#ff7500',
  },
  btnContinueText: {
    textAlign: 'center',
    width: '80%',
    fontSize: 16,
    color: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnContinue: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#ff7500',
  },
  btnContinueText: {
    textAlign: 'center',
    width: '80%',
    fontSize: 16,
    color: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
