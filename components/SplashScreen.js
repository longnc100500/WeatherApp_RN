import React, { Component } from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailStackScreen from './DetailStackScreen'
import HourScreen from './HourScreen'
import DayScreen from './DayScreen'
import StackScreen from './stackScreen'

const AppNavigator = createStackNavigator();
function AppNavigatorStackScreen() {
    return (
        <AppNavigator.Navigator screenOptions={{
            headerStyle: {
                //backgroundColor: ''
            },
            // headerTitleStyle: {
            //     textAlign: 'center'
            // }
        }}>
            <AppNavigator.Screen name=" " component={SplashScreen} scree />
            <AppNavigator.Screen name='Weather Forecast' component={StackScreen}  />
            <AppNavigator.Screen name='Detail Weather' component={DetailStackScreen} />
            <AppNavigator.Screen name='HourScreen' component={HourScreen} />
            <AppNavigator.Screen name='DayScreen' component={DayScreen} />
        </AppNavigator.Navigator>
    );
}

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Weather Forecast')
        }, 2000);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Weather Forecast')
            }}>
                <Image source={require('../images/logo.jpg')} 
                        style={{
                            width: 150,
                            height: 150,
                        }} />
                <Text style={{
                    textAlign: 'center',
                    color: '#666',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Weather Forecast</Text>
                    <ActivityIndicator size="large" color="gray"
                        style={{ margin: 10 }}
                    />
            </TouchableOpacity>
            </View>
        )
    }
}

export default class Stack extends Component {
    render() {
        return (
            <NavigationContainer>
                <AppNavigatorStackScreen />
            </NavigationContainer>

        );
    }
}

