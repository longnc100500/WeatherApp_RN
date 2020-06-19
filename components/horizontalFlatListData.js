import React from 'react'
import { Image } from "react-native";

var horizontalStatus = {
    rainy: {
        ios: "ios-rainy",
        android: "md-rainy"
    },
    cloud: {
        ios: "ios-cloudy",
        android: "md-cloudy"
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android: "md-thunderstorm"
    },
    sunny: {
        ios: "ios-sunny",
        android: "md-sunny"
    }
};

var horizontalFlatListData = [
    {
        hour: "9:00",
        status: horizontalStatus.rainy,
        degrees: '32°C',
        img: <Image source={require('../images/04d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "12:00",
        status: horizontalStatus.cloud,
        degrees: '27°C',
        img: <Image source={require('../images/09d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "15:00",
        status: horizontalStatus.thunderstorm,
        degrees: '26°C',
        img: <Image source={require('../images/10d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "18:00",
        status: horizontalStatus.sunny,
        degrees: '27°C',
        img: <Image source={require('../images/10d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "21:00",
        status: horizontalStatus.sunny,
        degrees: '30°C',
        img: <Image source={require('../images/04d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "24:00",
        status: horizontalStatus.cloud,
        degrees: '26°C',
        img: <Image source={require('../images/09d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "3:00",
        status: horizontalStatus.rainy,
        degrees: '25°C',
        img: <Image source={require('../images/10d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "6:00",
        status: horizontalStatus.cloud,
        degrees: '28°C',
        img: <Image source={require('../images/04d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "9:00",
        status: horizontalStatus.rainy,
        degrees: '30°C',
        img: <Image source={require('../images/09d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "12:00",
        status: horizontalStatus.rainy,
        degrees: '33°C',
        img: <Image source={require('../images/10d.png')} style={{width: 35, height: 35}} />
    },
    {
        hour: "15:00",
        status: horizontalStatus.thunderstorm,
        degrees: '34°C',
        img: <Image source={require('../images/04d.png')} style={{width: 35, height: 35}} />
    },
    // {
    //     hour: "18:00",
    //     status: horizontalStatus.thunderstorm,
    //     degrees: 25
    // }
];

export {horizontalStatus};
export {horizontalFlatListData};