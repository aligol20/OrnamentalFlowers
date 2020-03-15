/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableHighlight, Image, Linking, Text, View, Dimensions} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
type Props = {};
export default class About_us extends Component<Props> {
    static options(passProps) {
        return {
            statusBar: {
                visible: true,
                style: 'light',
                drawBehind: false,
                backgroundColor: '#30bec1'


            },
            layout: {
                backgroundColor: '#ffffff',
                orientation: ['portrait'] // An array of supported orientations
            },
            topBar: {

                backButton: {
                    color: "white",
                    fontFamily: "Comfortaa-Light",
                    fontSize: 23,
                    title: "boo"
                },
                title: {
                    text: passProps.text,
                    fontSize: 23,
                    color: 'white',
                    fontFamily: "Comfortaa-Light",
                },
                animate: false,
                buttonColor: 'white',
                noBorder: true,
                visible: false,
                drawBehind: false,
                transparent: true,
                translucent: true,
                background: { color: '#30bec1' },
                elevation: 0,


            }
        };
    }

    render() {
        return (
                <View style={styles.container}>

                    <Image source={require('./koala.png')} style={{
                        alignItems: 'center',
                        width:0.2*width,
                        height:0.2*width,
                        justifyContent:'center',
                        margin:7
                    }}>
                    </Image>

                    <Text style={styles.titles}>{'Supervisor:\n Dr Hassan Sarikhani '}</Text>

                    <TouchableHighlight
                        underlayColor='white'

                        style={styles.button}
                        onPress={() => Linking.openURL('mailto:sarikhanih@yahoo.com')}>
                        <Text style={styles.titles2}>{'Touch here for \nContact Supervisor'}</Text>
                    </TouchableHighlight>
                    <View style={{width:0.8*width,height:3,borderRadius:1,backgroundColor:'green',margin:5}}/>

                    <Text style={styles.titles}>{'Developer:\n Ali Kargar'}</Text>
                    <TouchableHighlight
                        underlayColor='white'

                        style={styles.button__}
                        onPress={() => Linking.openURL('mailto:Koalasolutiongroup@gmail.com')}>
                        <Text style={styles.titles2}>{'Touch here for \nContact Developer'}</Text>
                    </TouchableHighlight>
                    <Text style={styles.titles}>{'Winter 1397'}</Text>
                    <View style={{height:0.03*height}}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    koon:{
backgroundColor: '#004000',borderRadius:7,margin:13,flexDirection: 'column',alignItems:'center',justifyContent:'center'
    },
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 7,
        marginBottom:7,
        backgroundColor: '#004000',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 23,
        },
        shadowOpacity: 0.9,
        shadowRadius: 23.00,

        elevation: 23,

    },    button__: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 7,
        marginBottom:7,
        backgroundColor: '#00bb9b',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 23,
        },
        shadowOpacity: 0.9,
        shadowRadius: 23.00,

        elevation: 23,

    },
    titles:{fontFamily:'Comfortaa-Bold',marginLeft:7,marginRight:7,color:'#1d1c1a',fontSize:19,textAlign:'center'} ,
    titles3:{fontFamily:'Comfortaa-Bold',margin:3,color:'#1d1c1a',fontSize:13,textAlign:'center'} ,
    titles2:{fontFamily:'Comfortaa-Bold',marginLeft:7,marginRight:7,color:'#ffeb37',fontSize:19,textAlign:'center'} ,
});
