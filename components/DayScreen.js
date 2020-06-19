import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
    Button,
    View,
    Text, ScrollView, StyleSheet, Image, ImageBackground
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';



export default class DayScreen extends Component {
    getDay = (dt = 1) => {
        let d = new Date(dt * 1000);
        switch (d.getDay()) {
            case 0: {
                return "Sunday"
            }
            case 1: {
                return "Monday"
            }
            case 2: {
                return "Tuesday"
            }
            case 3: {
                return "Wednesday"
            }
            case 4: {
                return "Thursday"
            }
            case 5: {
                return "Friday"
            }
            case 6: {
                return "Saturday"
            }

        }
    }
    render() {
        const { route } = this.props;
        console.log(route);
        return (

            <ImageBackground
                style={{ flex: 1, }}
                source={require('../images/background_02.jpg')}
            >

                <FlatList
                    style={{ width: '100%' }}
                    data={route.params.daily}
                    ItemSeparatorComponent={() => <View style={{ marginVertical: 5, height: 2, backgroundColor: 'white' }}></View>}
                    renderItem={({ item }) => <View style={{ width: '100%', height: 150 }}>

                        <View style={{

                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: 90,
                            padding: 20,
                            paddingTop: 40,
                        }}>
                            <Text style={{

                                fontSize: 20,
                                color: 'white'
                            }}>{this.getDay(item.dt)}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.img} source={require('../images/10d.png')} />
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{`${Math.round(item.temp.day - 273.15)}°C`}</Text>
                            </View>
                            <Text Text style={{ color: 'white', fontSize: 20, }}>{item.weather[0].main}</Text>
                        </View>
                    </View>}
                />

            </ImageBackground>



            // <ScrollView>
            //     <View>
            //         <View style={{
            //             position: 'absolute',
            //             top: 0,
            //             bottom: 0,
            //             left: 0,
            //             right: 0
            //         }}>
            //             <Image style={{
            //                 flex: 1,
            //                 resizeMode: 'cover',
            //                 //flexDirection: 'column',
            //                 width: null,
            //                 height: null,
            //                 backgroundColor: 'transparent',
            //                 justifyContent: 'center'
            //             }}
            //                 source={require('../images/background_02.jpg')}>

            //             </Image>
            //         </View>


            //         <TouchableOpacity>
            //             <View style={{

            //                 flexDirection: 'row',
            //                 justifyContent: 'space-between',
            //                 alignItems: 'center',
            //                 height: 90
            //             }}>
            //                 <Text style={{
            //                     marginRight: 20,
            //                     fontSize: 20,
            //                     color: 'white'
            //                 }}>Saturday</Text>
            //                 <View style={{ flexDirection: 'row' }}>
            //                     <Image style={styles.img} source={require('../images/09d.png')} />
            //                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>31°C`</Text>
            //                 </View>
            //                 <Text style={{ color: 'white', fontSize: 20, }}>Light rain</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <View style={{ backgroundColor: 'gray', height: 1, margin: 5 }}></View>

            //         {/* <StockButton name="Tuesday" /> */}
            //         <TouchableOpacity>
            //             <View style={{

            //                 flexDirection: 'row',
            //                 justifyContent: 'space-between',
            //                 alignItems: 'center',
            //                 height: 90
            //             }}>
            //                 <Text style={{
            //                     marginRight: 20,
            //                     fontSize: 20,
            //                     color: 'white'
            //                 }}>Sunday          </Text>
            //                 <View style={{ flexDirection: 'row' }}>
            //                     <Image style={styles.img} source={require('../images/10d.png')} />
            //                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>32°C</Text>
            //                 </View>
            //                 <Text Text style={{ color: 'white', fontSize: 20, }}>Moderate rain</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <View style={{ backgroundColor: 'gray', height: 1, margin: 5 }}></View>

            //         {/* <StockButton name="Wednesday" /> */}
            //         <TouchableOpacity>
            //             <View style={{

            //                 flexDirection: 'row',
            //                 justifyContent: 'space-between',
            //                 alignItems: 'center',
            //                 height: 90
            //             }}>
            //                 <Text style={{
            //                     marginRight: 20,
            //                     fontSize: 20,
            //                     color: 'white'
            //                 }}>Monday</Text>
            //                 <View style={{ flexDirection: 'row' }}>
            //                     <Image style={styles.img} source={require('../images/09d.png')} />
            //                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>31°C</Text>
            //                 </View>
            //                 <Text style={{ color: 'white', fontSize: 20, }}>Light rain</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <View style={{ backgroundColor: 'gray', height: 1, margin: 5 }}></View>

            //         {/* <StockButton name="Thursday" /> */}
            //         <TouchableOpacity>
            //             <View style={{
            //                 flexDirection: 'row',
            //                 justifyContent: 'space-between',
            //                 alignItems: 'center',
            //                 height: 90
            //             }}>
            //                 <Text style={{
            //                     marginRight: 20,
            //                     fontSize: 20,
            //                     color: 'white'
            //                 }}>Tuesday</Text>
            //                 <View style={{ flexDirection: 'row' }}>
            //                     <Image style={styles.img} source={require('../images/09d.png')} />
            //                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>33°C</Text>
            //                 </View>
            //                 <Text style={{ color: 'white', fontSize: 20, }}>Light rain</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <View style={{ backgroundColor: 'gray', height: 1, margin: 5 }}></View>

            //         {/* <StockButton name="Friday" /> */}
            //         <TouchableOpacity>
            //             <View style={{

            //                 flexDirection: 'row',
            //                 justifyContent: 'space-between',
            //                 alignItems: 'center',
            //                 height: 90
            //             }}>
            //                 <Text style={{
            //                     marginRight: 20,
            //                     fontSize: 20,
            //                     color: 'white'
            //                 }}>Wednesday  </Text>
            //                 <View style={{ flexDirection: 'row' }}>
            //                     <Image style={styles.img} source={require('../images/10d.png')} />
            //                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>32°C</Text>
            //                 </View>
            //                 <Text style={{ color: 'white', fontSize: 20, }}>Moderate rain</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <View style={{ backgroundColor: 'gray', height: 1, margin: 5 }}></View>

            //         {/* <StockButton name="Saturday" /> */}
            //         <TouchableOpacity>
            //             <View style={{

            //                 flexDirection: 'row',
            //                 justifyContent: 'space-between',
            //                 alignItems: 'center',
            //                 height: 90
            //             }}>
            //                 <Text style={{
            //                     marginRight: 20,
            //                     fontSize: 20,
            //                     color: 'white'
            //                 }}>Thursday      </Text>
            //                 <View style={{ flexDirection: 'row' }}>
            //                     <Image style={styles.img} source={require('../images/10d.png')} />
            //                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>33°C</Text>
            //                 </View>
            //                 <Text style={{ color: 'white', fontSize: 20, }}>Moderate rain</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <View style={{ backgroundColor: 'gray', height: 1, margin: 5 }}></View>

            //         {/* <StockButton name="Sunday" /> */}
            //         <TouchableOpacity>
            //             <View style={{

            //                 flexDirection: 'row',
            //                 justifyContent: 'space-between',
            //                 alignItems: 'center',
            //                 height: 90
            //             }}>
            //                 <Text style={{
            //                     marginRight: 20,
            //                     fontSize: 20,
            //                     color: 'white'
            //                 }}>Friday            </Text>
            //                 <View style={{ flexDirection: 'row' }}>
            //                     <Image style={styles.img} source={require('../images/10d.png')} />
            //                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>32°C</Text>
            //                 </View>
            //                 <Text style={{ color: 'white', fontSize: 20, }}>Moderate rain</Text>
            //             </View>
            //         </TouchableOpacity>
            //         <View style={{ backgroundColor: 'gray', height: 1, margin: 5 }}></View>

            //     </View>
            // </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    part1: {
        //backgroundColor: 'pink',
        flex: 4
    },
    part2: {
        //backgroundColor: 'yellow',
        flex: 3,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    part3: {
        //backgroundColor: 'green',
        flex: 3,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'flex-end'
    },
    img: {
        width: 50,
        height: 50,
        //alignSelf: 'center',
        marginTop: 10
    },
    city: {
        fontSize: 24,
        textAlign: 'center',
        color: '#666',
        marginTop: 20
    },
    temp_text: {
        fontSize: 25,
        textAlign: 'center',
        color: '#666',
        marginTop: 10
    },
    container_card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20
    }
})