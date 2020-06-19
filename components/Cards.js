import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Platform } from 'react-native'

export default class Card extends Component {

    render() {




        return (
            <View style={{alignItems: 'center', 
                        backgroundColor: this.props.bgcolor, 
                        marginTop: 20,
                        borderRadius: 20}}>
                <View style={
                    {...styles.bgcard, 
                        backgroundColor: 'orange', 
                        justifyContent: 'flex-start', 
                        backgroundColor: this.props.color1,
                        borderTopLeftRadius: 18,
                        borderTopRightRadius: 18,
                        ...this.props.style}}>
                    <Text style={styles.text}>9:00</Text>
                    <Image source={this.props.img}
                        style={styles.img} />
                </View>
                <View style={
                    {...styles.bgcard, 
                        backgroundColor: 'pink', 
                        zIndex: -1, 
                        elevation: -1,
                        justifyContent: 'flex-end', 
                        backgroundColor: this.props.color2,
                        borderBottomLeftRadius: 18,
                        borderBottomRightRadius: 18,
                        ...this.props.style}}>
                    <Text style={styles.text}>12</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bgcard:{
        //width: 125,
        ...Platform.select({
            ios: {
                width: 100,
                height: 100,
            },
            android: {
                width: 90,
                height: 80,
            }
        }),
        
        //alignItems: 'center',
        //marginTop: 10
        zIndex: 111111,
    },
    img: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                marginTop: 30,
            },
            android: {
                marginTop: 20,
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
