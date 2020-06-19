import { AppRegistry, ScrollView, Image } from 'react-native';
import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import Card from './Cards'
import Card_eve from './Card_eve';
import Card_night from './Card_night';




export default class Tab2 extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }
    convertTime = (dt) => {
        var d = new Date(dt.dt * 1000).getHours();;
        //console.log("dt: ", dt, " Date: ", d);

        return `${d.toString()}:00`;
    }
    render() {

        const name = this.props.route.params.name;
        const weather = this.props.route.params.weather;
        const humidity = this.props.route.params.humidity;
        const visibility = this.props.route.params.visibility;
        const wind = this.props.route.params.wind;
        const icon = this.props.route.params.icon;
        const temperature = this.props.route.params.temperature;
        const pressure = this.props.route.params.pressure;
        const icon_1 = this.props.route.params.icon_1;
        const icon_2 = this.props.route.params.icon_2;
        const icon_3 = this.props.route.params.icon_3;
        const temp_1 = this.props.route.params.temp_1;
        const temp_2 = this.props.route.params.temp_2;
        const temp_3 = this.props.route.params.temp_3;
        const time_1 = this.props.route.params.time_1;
        const time_2 = this.props.route.params.time_2;
        const time_3 = this.props.route.params.time_3;

        const data = this.props.route.params.currenData;
        console.log(this.props.route.params.visibility);
        return (
            // <ImageBackground source={require('../images/background_01.jpg')}>
            <ScrollView>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }}>
                        <Image style={{
                            flex: 1,

                            width: null,
                            height: null,
                            backgroundColor: 'transparent',
                            justifyContent: 'center'
                        }}
                            source={require('../images/background_01.jpg')}>

                        </Image>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.city}>{data.city.name}</Text>
                        <Image source={{ uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${icon}.png` }}
                            style={styles.img}>
                        </Image>
                        <Text style={[styles.temp_text]}>
                            {`${Math.round(data.list[0].main.temp - 273.15)}°C`}
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around'
                        }}>

                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'orange',
                            marginTop: 20,
                            borderRadius: 20,
                        }}>
                            <View style={
                                {
                                    ...styles.bgcard,
                                    backgroundColor: 'orange',
                                    justifyContent: 'flex-start',
                                    backgroundColor: 'orange',
                                    borderTopLeftRadius: 18,
                                    borderTopRightRadius: 18,

                                    ...this.props.style
                                }}>
                                <Text style={styles.text}>{this.convertTime(data.list[0])}</Text>
                                <Image source={{ uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.list[0].weather[0].icon}.png` }}
                                    style={styles.img_card} />
                            </View>
                            <View style={
                                {
                                    ...styles.bgcard,
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
                                <Text style={styles.text}>{`${Math.round(data.list[0].main.temp - 273.15)}°C`}</Text>
                            </View>
                        </View>

                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'yellow',
                            marginTop: 20,
                            borderRadius: 20
                        }}>
                            <View style={
                                {
                                    ...styles.bgcard,
                                    backgroundColor: 'orange',
                                    justifyContent: 'flex-start',
                                    backgroundColor: '#b56390',
                                    borderTopLeftRadius: 18,
                                    borderTopRightRadius: 18,
                                    ...this.props.style
                                }}>
                                <Text style={styles.text}>{this.convertTime(data.list[1])}</Text>
                                <Image source={{ uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.list[1].weather[0].icon}.png` }}
                                    style={styles.img_card} />
                            </View>
                            <View style={
                                {
                                    ...styles.bgcard,
                                    backgroundColor: 'pink',
                                    zIndex: -1,
                                    elevation: -1,
                                    justifyContent: 'flex-end',
                                    backgroundColor: '#7b5e90',
                                    borderBottomLeftRadius: 18,
                                    borderBottomRightRadius: 18,
                                    ...this.props.style
                                }}>
                                <Text style={styles.text}>{`${Math.round(data.list[1].main.temp - 273.15)}°C`}</Text>
                            </View>
                        </View>


                        <View style={{
                            alignItems: 'center',
                            backgroundColor: '#48567b',
                            marginTop: 20,
                            borderRadius: 20
                        }}>
                            <View style={
                                {
                                    ...styles.bgcard,
                                    backgroundColor: 'orange',
                                    justifyContent: 'flex-start',
                                    backgroundColor: '#2e4759',
                                    borderTopLeftRadius: 18,
                                    borderTopRightRadius: 18,
                                    borderBottomRightRadius: 50,
                                    ...this.props.style
                                }}>
                                <Text style={styles.text}>{this.convertTime(data.list[2])}</Text>
                                <Image source={{ uri: `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.list[2].weather[0].icon}.png` }}
                                    style={styles.img_card} />
                            </View>
                            <View style={
                                {
                                    ...styles.bgcard,
                                    backgroundColor: 'pink',
                                    zIndex: -1,
                                    elevation: -1,
                                    justifyContent: 'flex-end',
                                    backgroundColor: '#48567b',
                                    borderBottomLeftRadius: 18,
                                    borderBottomRightRadius: 18,

                                    ...this.props.style
                                }}>
                                <Text style={styles.text}>{`${Math.round(data.list[2].main.temp - 273.15)}°C`}</Text>
                            </View>
                        </View>

                    </View>


                    <View>
                        <Text style={styles.heading}> Additional Info </Text>
                        <View style={styles.container_footer}>
                            <Text style={styles.maininfo}>Description: <Text style={styles.ainfo}>{data.list[0].weather[0].description}</Text></Text>
                        </View>
                        <View style={styles.container_footer}>
                            <Text style={styles.maininfo}>Wind: <Text style={styles.ainfo}>{data.list[0].wind.speed} m/h</Text></Text>
                            <Text style={styles.maininfo}>Humidity: <Text style={styles.ainfo}>{humidity}%</Text></Text>
                        </View>
                        <View style={styles.container_footer}>
                            <Text style={styles.maininfo}>Visibility: <Text style={styles.ainfo}>{visibility}m</Text></Text>
                            <Text style={styles.maininfo}>Pressure: <Text style={styles.ainfo}>{pressure} hPa</Text></Text>
                        </View>
                    </View>

                </SafeAreaView>

            </ScrollView>
            //   </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    img: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 10
    },
    city: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'firebrick',
        marginTop: 20
    },
    temp_text: {
        fontSize: 30,
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
    container_footer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        marginRight: 50,
        marginTop: 0
    },
    heading: {
        fontSize: 28,
        ...Platform.select({
            ios: {
                fontFamily: 'Arial',
            }
        }),
        color: 'firebrick',
        textAlign: 'left',
        marginTop: 80,
        marginVertical: 30,
        fontWeight: 'bold',
        marginLeft: 10
    },
    ainfo: {
        fontWeight: '400',
    },
    maininfo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 20,
        //marginVertical: 20
    },
    bgcard: {
        //width: 125,
        ...Platform.select({
            ios: {
                width: 100,
                height: 100,
            },
            android: {
                width: 100,
                height: 93,
            }
        }),

        //alignItems: 'center',
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
                marginTop: 17,
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