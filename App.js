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
export default class App extends Component<Props> {
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
                <View style={{width: width, height: 2, backgroundColor: 'grey'}}/>
                <View style={styles.box}>
                    <View style={styles.col_1}>
                        <View style={styles.row_1}>
                            <Text style={styles.text_col_1}>{'هوای نیمه خشک را می پسندد'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Text style={styles.text_col_1}>{'هوای نیمه مرطوب را می پسندد'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Text style={styles.text_col_1}>{'هوای مرطوب را می پسندد'}</Text>
                        </View>
                    </View>
                    <View style={{width: 2, height: '100%', backgroundColor: 'green'}}/>
                    <View style={styles.col_2}>

                        <View style={styles.row_1}>

                            <Image
                                style={{width:30,height:30}}
                                source={ require('./hu_1.png')} />
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            {/*<Icon2 name="water-percent" color="grey" size={29} style={{margin:3}}/>*/}
                            {/*<Icon2 name="water-percent" color="#19b5fe" size={29} style={{margin:3}}/>*/}
                            {/*<Icon2 name="water-percent" color="#19b5fe" size={29} style={{margin:3}}/>*/}
                            <Image
                                style={{width:30,height:30}}
                                source={ require('./hu_2.png')} />
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Image
                                style={{width:30,height:30}}
                                source={ require('./hu_3.png')} />
                        </View>
                    </View>
                    <View style={{width: 2, height: '100%', backgroundColor: 'green'}}/>

                    <View style={styles.col_3}>
                        <Text style={styles.text_col_1}>{'نیاز رطوبتی'}</Text>

                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.col_1}>
                        <View style={styles.row_1}>
                            <Text style={styles.text_col_1}>{'سایه را می پسندد'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Text style={styles.text_col_1}>{'نیمه آفتاب را می پسندد'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Text style={styles.text_col_1}>{'آفتاب را می پسندد'}</Text>
                        </View>
                    </View>
                    <View style={{width: 2, height: '100%', backgroundColor: 'green'}}/>
                    <View style={styles.col_2}>

                        <View style={styles.row_1}>
                            <Image
                                style={{width:30,height:30}}
                                source={require('./sun_2.png')} />
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Image
                                style={{width:30,height:30}}
                                source={require('./sun_3.png')} />
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Image
                                style={{width:30,height:30}}
                                source={require('./sun_4.png')} />
                        </View>
                    </View>
                    <View style={{width: 2, height: '100%', backgroundColor: 'green'}}/>

                    <View style={styles.col_3}>
                        <Text style={styles.text_col_1}>{'نیاز نوری'}</Text>

                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.col_1}>
                        <View style={styles.row_1}>
                            <Text style={styles.text_col_1}>{'نیازمند خاک با زهکشی خوب'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Text style={styles.text_col_1}>{'خاک کمی مرطوب را می پسندد'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Text style={styles.text_col_1}>{'خاک مرطوب را می پسندد'}</Text>
                        </View>
                    </View>
                    <View style={{width: 2, height: '100%', backgroundColor: 'green'}}/>
                    <View style={styles.col_2}>

                        <View style={styles.row_1}>
                            {/*<Icon2 name="water" color="grey" size={29} style={{margin:3}}/>*/}
                            {/*<Icon2 name="water" color="grey" size={29} style={{margin:3}}/>*/}
                            {/*<Icon2 name="water" color="#19b5fe" size={29} style={{margin:3}}/>*/}
                            <Image
                                style={{width:30,height:30}}
                                source={ require('./water_1.png')} />
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Image
                                style={{width:30,height:30}}
                                source={ require('./water_2.png')} />
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>

                        <View style={styles.row_1}>
                            <Image
                                style={{width:30,height:30}}
                                source={ require('./water_3.png')} />
                        </View>
                    </View>
                    <View style={{width: 2, height: '100%', backgroundColor: 'green'}}/>

                    <View style={styles.col_3}>
                        <Text style={styles.text_col_1}>{'نیاز آبی'}</Text>

                    </View>
                </View>
                {/*<View style={styles.box}>*/}
                    {/*<View style={styles.col_1}>*/}
                        {/*<View style={styles.row_1}>*/}
                            {/*<Text style={styles.text_col_1}>{'نحوه آبیاری'}</Text>*/}
                        {/*</View>*/}
                        {/*<View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>*/}

                        {/*<View style={styles.row_1}>*/}
                            {/*<Text style={styles.text_col_1}>{'نحوه آبیاری'}</Text>*/}
                        {/*</View>*/}
                        {/*<View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>*/}

                        {/*<View style={styles.row_1}>*/}
                            {/*<Text style={styles.text_col_1}>{'نحوه آبیاری'}</Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                    {/*<View style={{width: 2, height: '100%', backgroundColor: 'green'}}/>*/}
                    {/*<View style={styles.col_2}>*/}

                        {/*<View style={styles.row_1}>*/}
                            {/*<Icon3 name="temperature-high" color="grey" size={29} style={{marginTop:3}}/>*/}
                            {/*<Icon3 name="temperature-high" color="grey" size={29} style={{margin:3}}/>*/}
                            {/*<Icon3 name="temperature-high" color="red" size={29} style={{margin:3}}/>*/}

                        {/*</View>*/}
                        {/*<View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>*/}

                        {/*<View style={styles.row_1}>*/}
                            {/*<Icon3 name="temperature-high" color="grey" size={29} style={{margin:3}}/>*/}
                            {/*<Icon3 name="temperature-high" color="red" size={29} style={{margin:3}}/>*/}
                            {/*<Icon3 name="temperature-high" color="red" size={29} style={{margin:3}}/>*/}

                        {/*</View>*/}
                        {/*<View style={{width: '100%', height: 2, backgroundColor: 'green'}}/>*/}

                        {/*<View style={styles.row_1}>*/}
                            {/*<Icon3 name="temperature-high" color="red" size={29} style={{margin:3}}/>*/}
                            {/*<Icon3 name="temperature-high" color="red" size={29} style={{margin:3}}/>*/}
                            {/*<Icon3 name="temperature-high" color="red" size={29} style={{margin:3}}/>*/}

                        {/*</View>*/}
                    {/*</View>*/}
                    {/*<View style={{width: 2, height: '100%', backgroundColor: 'green'}}/>*/}

                    {/*<View style={styles.col_3}>*/}
                        {/*<Text style={styles.text_col_1}>{'نیاز دمایی'}</Text>*/}

                    {/*</View>*/}
                {/*</View>*/}


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
