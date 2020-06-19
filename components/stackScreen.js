import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    Button,
    View,
    Text, StyleSheet, Image, ScrollView, ImageBackground
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import DetailStackScreen from './DetailStackScreen'
import HourScreen from './HourScreen'
import SearchInput from './SearchInput'
import Card from './Cards'
import { fetchLatLon, fetchWeather } from './getAPI'
import Card_eve from './Card_eve';
import Card_night from './Card_night';
import DayScreen from './DayScreen'



export default class StackScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dailyData: {},
            currenData: {
                city: {
                    name: '',
                    coord: {
                        lat: '',
                        lon: '',
                    }
                },
                list: [
                    {
                        main: {
                            temp: 210,
                        },
                        weather: [
                            {
                                icon: '',
                            }
                        ]
                    }
                ]
            },
            loading: false,
            error: false,
            name: '',
            temperature: 0,
            icon: null,
            humidity: '',
            visibility: '',
            wind: '',
            weather: '',
            pressure: '',
            temp_1: 0,
            temp_2: 0,
            temp_3: 0,
            icon_1: null,
            icon_2: null,
            icon_3: null,
            time_1: '',
            time_2: '',
            time_3: '',


        }
    }
    // state = {
    //     loading: false,
    //     error: false,
    //     name: '',
    //     temperature: 0,
    //     icon: null,
    //     humidity: '',
    //     visibility: '',
    //     wind: '',
    //     weather: '',
    //     pressure: '',
    //     temp_1: 0,
    //     temp_2: 0,
    //     temp_3: 0,
    //     icon_1: null,
    //     icon_2: null,
    //     icon_3: null,
    //     time_1: '',
    //     time_2: '',
    //     time_3: '',








    // };

    componentDidMount() {
        //this.handleUpdateLocation('Ho Chi Minh');
        this.getCity('Ho Chi Minh');
        //this.getData(10.75,106.67);
    }
    // handleUpdateLocation = async city => {
    //     if (!city) return;

    //     this.setState({ loading: true }, async () => {
    //         try {
    //             const { id, lat, lon, name, icon_1, icon_2, icon_3, time_1, time_2, time_3, temp_1, temp_2, temp_3 } = await fetchLatLon(city);
    //             const { icon, temperature, weather, wind, humidity, visibility, pressure } = await fetchWeather(lat, lon);



    //             this.setState({
    //                 loading: false,
    //                 error: false,
    //                 name,
    //                 icon,
    //                 temperature,
    //                 humidity,
    //                 visibility,
    //                 weather,
    //                 wind,
    //                 pressure,
    //                 temp_1,
    //                 temp_2,
    //                 temp_3,
    //                 icon_1,
    //                 icon_2,
    //                 icon_3,
    //                 time_1,
    //                 time_2,
    //                 time_3,


    //             });
    //         } catch (e) {
    //             this.setState({
    //                 loading: false,
    //                 error: true,
    //             });
    //         }
    //     });
    // };
    convertTime = (dt) => {
        var d = new Date(dt.dt * 1000).getHours();;
        //console.log("dt: ", dt, " Date: ", d);

        return `${d.toString()}:00`;
    }
    getData = (lat, lon) => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&%20exclude=hourly%2Cdaily&appid=3a2a56b8ef7c636b609ba31acd020cb1&fbclid=IwAR1oGOjU6TfH9GYIdq_RDQeM16-4cCix_R2QyHzvG12FqCLispMVJ3icIjU`)
            .then(res => res.json()).then(res => { console.log(res); this.setState({ dailyData: res }) });
    }
    getCity = (val) => {
        var url = `https://api.openweathermap.org/data/2.5/forecast?q=${val}&appid=3a2a56b8ef7c636b609ba31acd020cb1&fbclid=IwAR2uKkKGW93LFlZAyA8xrjnn6HAlda1Z5cgb-2SHfTd3fkKOQqMLFtJkLwc`;
        fetch(url).then(res => res.json()).then(res => { this.setState({ currenData: res }); this.getData(this.state.currenData.city.coord.lat, this.state.currenData.city.coord.lon) });
    }
    render() {
        const { loading, error, name, icon, temperature, weather, humidity, visibility, wind, pressure, icon_1, icon_2, icon_3, temp_3, temp_2, temp_1, time_3, time_2, time_1 } = this.state;
        console.log(this.state.dailyData);
        const { currenData, dailyData } = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    {!loading && (
                        <View>


                            <View style={styles.part1}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('Detail Weather', {
                                            // name: name,
                                            // icon: icon,
                                            // temperature: temperature,
                                            // weather: weather,
                                            // humidity: humidity,
                                            // visibility: visibility,
                                            // wind: wind,
                                            // pressure: pressure,
                                            // icon_1: icon_1,
                                            // icon_2: icon_2,
                                            // icon_3: icon_3,
                                            // temp_1: temp_1,
                                            // temp_2: temp_2,
                                            // temp_3: temp_3,
                                            // time_1: time_1,
                                            // time_2: time_2,
                                            // time_3: time_3,
                                            currenData,
                                            visibility: dailyData.current.visibility,
                                            humidity: dailyData.current.humidity,
                                            pressure: dailyData.current.pressure,


                                        })
                                    }} >

                                    <Text style={styles.city}>{currenData.city.name === undefined ? "" : currenData.city.name}</Text>
                                    <Image source={{ uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${currenData.list[0].weather[0].icon}.png` }}
                                        style={styles.img_1}>

                                    </Image>
                                    <Text style={[styles.temp_text]}>
                                        {`${Math.round(currenData.list[0].main.temp - 273.15)}°C`}
                                    </Text>
                                    <SearchInput onSubmit={val => this.getCity(val)} />
                                </TouchableOpacity>
                                <View style={{ height: 1, margin: 5 }}></View>
                            </View>

                        </View>
                    )}

                    <View style={styles.part2}>




                        <FlatList
                            data={currenData.list.slice(0, 4)}
                            horizontal

                            style={{ width: '100%', height: '100%', paddingLeft: 20 }}
                            ItemSeparatorComponent={() => <View style={{ height: '100%', width: 10 }}></View>}
                            renderItem={({ item }) => <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate('HourScreen', currenData)
                                }}
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'orange',
                                    marginTop: 10,
                                    borderRadius: 20,

                                }}>
                                <View style={{ margin: 10, width: 100, }}>
                                    <View style={
                                        {
                                            ...styles.bgcard,
                                            backgroundColor: 'orange',
                                            justifyContent: 'flex-start',
                                            backgroundColor: 'orange',
                                            borderTopLeftRadius: 18,
                                            borderTopRightRadius: 18,
                                            marginRight: 10,
                                            width: '100%',
                                            height: '50%',
                                            ...this.props.style
                                        }}>
                                        <Text style={styles.text}>{this.convertTime(item)}</Text>
                                        <Image source={{ uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${item.weather[0].icon}.png` }}
                                            style={styles.img_card} />
                                    </View>
                                    <View style={
                                        {
                                            ...styles.bgcard,
                                            width: '100%',
                                            backgroundColor: 'pink',
                                            zIndex: -1,
                                            elevation: -1,
                                            justifyContent: 'flex-end',
                                            backgroundColor: '#e34e7a',
                                            borderBottomLeftRadius: 18,
                                            borderBottomRightRadius: 18,
                                            borderTopLeftRadius: 50,
                                            ...this.props.style
                                        }}>
                                        <Text style={styles.text}>{`${Math.round(item.main.temp - 273.15)}°C`}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>}
                        />




                    </View>
                    {/* <View style={{backgroundColor: 'gray', height: 1, margin: 5}}></View> */}
                    <View style={styles.part3}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('DayScreen', dailyData)
                            }}>
                            <View style={{

                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                margin: 20,
                                justifyContent: 'space-between'
                            }}>
                                <Image source={require('../images/sun.png')} style={styles.img} />
                                <Image source={require('../images/snowflake.png')} style={styles.img} />
                                <Image source={require('../images/rain.png')} style={styles.img} />
                                <Image source={require('../images/moon.png')} style={styles.img} />
                            </View>
                            <View style={{
                                marginLeft: 20,
                                marginRight: 20,
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between'
                            }}>

                                <Image source={require('../images/cloudy.png')} style={styles.img} />
                                <Image source={require('../images/thunder.png')} style={styles.img} />
                                <Image source={require('../images/tornado.png')} style={styles.img} />
                                <Image source={require('../images/umbrella.png')} style={styles.img} />
                            </View>
                            <View >
                                <TouchableOpacity >
                                    <Text style={{
                                        fontSize: 12,
                                        marginTop: 30,
                                        marginLeft: 150,
                                        backgroundColor: 'mediumturquoise',
                                        width: 220,
                                        borderRadius: 18,
                                        color: 'white',
                                        textAlign: 'center'
                                    }}>Click to see the next day's weather </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView >

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'powderblue'
    },
    part1: {
        //backgroundColor: 'pink',
        flex: 4,
        backgroundColor: 'powderblue',
        borderBottomRightRadius: 60,
        borderRightWidth: 5,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white',
        borderTopRightRadius: 60,
        marginRight: 5,
        height: 235
    },
    part2: {
        //backgroundColor: 'yellow',

        flex: 3,
        backgroundColor: 'powderblue',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center'
        borderBottomLeftRadius: 60,
        borderLeftWidth: 5,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white',
        borderTopLeftRadius: 60,
        marginTop: 5,
        marginLeft: 5,
        height: 235
    },
    part3: {
        //backgroundColor: 'green',
        flex: 3,
        height: 235,
        backgroundColor: 'powderblue',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'flex-end'
        borderBottomRightRadius: 60,
        borderRightWidth: 5,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'white',
        borderTopRightRadius: 60,
        marginTop: 5,
        marginRight: 5
    },
    img: {
        width: 45,
        height: 45,
        alignSelf: 'center',
        marginTop: 20
    },
    img_1: {
        width: 65,
        height: 65,
        alignSelf: 'center',
        marginTop: 10
    },
    city: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'firebrick',
        marginTop: 10
    },
    temp_text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'firebrick',
        marginTop: 10
    },
    container_card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20
    },
    bgcard: {
        //width: 125,
        ...Platform.select({
            ios: {
                width: 100,
                height: 100,
            },
            android: {
                width: 93,
                height: 92,
            }
        }),

        //alignItems: 'center',
        //marginTop: 10
        zIndex: 111111,
    },
    img_card: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                marginTop: 30,
            },
            android: {
                marginTop: 15,
            }

        })
        //zIndex: 99
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10

    }
})



// export default class Stack extends Component {
//     render() {
//         return (
//             <NavigationContainer>
//                 <AppNavigatorStackScreen />
//             </NavigationContainer>

//         );
//     }
// }