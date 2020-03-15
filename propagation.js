/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/FontAwesome5";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
type Props = {};
export default class Propagation extends Component<Props> {
    static options(passProps) {
        return {
            statusBar: {
                visible: true,
                style: 'light',
                drawBehind: true,
                backgroundColor: '#30bec1'


            },
            layout: {
                backgroundColor: '#30bec1',
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
                visible: true,
                drawBehind: false,
                transparent: true,
                translucent: true,
                background: {color: '#1e824c'},
                elevation: 0,


            }
        };
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>{'در این قسمت می توانید راهنمای مربوط به علائم را مطالعه نمایید.'}</Text>
                    <View>
                        <Text
                        style={styles.welcome}>
                            {'قلمه زدن یک روش غیر جنسی (غیر تناسلی) تکثیر گیاه است که به صورت گسترده در کشاورزی و مهندسی فضای سبز استفاده می‌شود.'}
                            </Text>
                        <Text
                        style={styles.welcome}>
                            {'قلمه زدن عبارت است از رشد و نمو و تکامل بعضی از قسمت‌های گیاهی قطع شده از پایه اصلی. قلمه زدن یکی از طرق بسیار متداول ازدیاد غیر تناسلی گیاهان است. یک قلمه می‌تواند قطعه‌ای از ساقه، ریشه یا برگ باشد. در قلمه ساقه، ریشه‌های نابه جا بایستی تشکیل یابند و در قلمه ریشه شاخه‌های نابه جا باید بوجود آیند و قلمه برگ برای اینکه رشد کند و به اصطلاح بگیرد باید در روی آن هم ریشه‌های نابجا و هم شاخه‌های نابه جا رشد و تکامل یابند.' +
                            'از آنجائیکه تکهٔ برش‌یافته فاقد ریشه برای بدست آوردن آب است، در صورت در فراهم نکردن محیط مناسب و مربوط بزودی خشک خواهد شد. این روش یکی از روش‌های اولیه تاگ‌سازی به‌شمار می‌آید.'}
                            </Text>
                        <Text
                        style={styles.welcome}>
                            {'قلمه‌ها به شیوه‌های گوناگونی تهیه می‌شوند:'}
                            </Text>
                        <Text
                        style={styles.welcome}>
                            {''}
                            </Text>
                        <Image
                            style={{width:0.9*width,height:0.9*width}}
                            source={ require('./water_1.png')}/>
                        <View style={{width:'99%',height:2,backgroundColor:'black'}}/>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    box: {
        borderWidth: 2,
        height: 0.25*height,
        width: width,
        borderColor: 'grey',
        borderTopWidth: 0,
        flexDirection: 'row'
    },
    col_1: {width: '50%', borderWidth: 0, borderColor: 'rgb(45,78,48)',alignItems:'center',flexDirection: 'column',justifyContent: 'center'},
    col_2: {width: '30%', borderWidth: 0, borderColor: 'rgb(45,78,48)',alignItems:'center',flexDirection: 'column',justifyContent: 'center'},
    col_3: {width: '20%', borderWidth: 0, borderColor: 'rgb(45,78,48)',alignItems:'center',flexDirection: 'column',justifyContent: 'center'},
    row_1: {borderWidth: 0, height: '33%', borderColor: 'orange',alignItems:'center',flexDirection:'row'},

    welcome: {
        fontSize: 20,
        textAlign: 'right',
        color:'black',
        margin: 10,
        fontFamily:'B Koodak'
    },
    text_col_1:{fontFamily:'B Koodak',color:'black',alignItems: 'center'},
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
