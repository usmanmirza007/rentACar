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
import { FontAwesome, Entypo,AntDesign, Feather,Fontisto } from '@expo/vector-icons';
//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
export default class LogOut extends React.Component {
    constructor(props) {
        super(props)
    }


    async componentDidMount() {
        try {
            await AsyncStorage.removeItem('Phone');
            this.props.navigation.navigate('splashScreen')
        } catch (e) {
            console.log("error in Remove Phone from AsyncStorage");
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={{ height: 50, backgroundColor: '#ff611b' }}>

                    <Feather style={{ color: 'white', margin: 15, }} name="menu" size={30} onPress={() => this.props.navigation.openDrawer('AppDrawerNavigator')} />
                </View>
                <Text>Log Out</Text>
            </SafeAreaView>
        );
    }
}

LogOut.navigationOptions = ({ navigation }) => {
    return {
        drawerLabel: 'Log Out',
        drawerIcon: ({ tintColor }) => (
            <AntDesign style={{ color: tintColor, }} name="logout" size={25} />
        )
    };
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
