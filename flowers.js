/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions, Text, View, Image, TouchableHighlight, Alert} from 'react-native';
import { Navigation } from 'react-native-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
let width= Dimensions.get('window').width;
let height= Dimensions.get('window').height;
export default class Flowers extends Component<Props> {
    constructor(props) {

        super(props);

        this.state = {
            language: 'fa',
            index: 0,
            modalVis: false,
            image: [],
            list: [],
            loading: true,
            sort: false,
            refreshing:false
        };
        Navigation.mergeOptions(this.props.componentId, {
            statusBar: {
                drawBehind:true,
                style: 'light',
                backgroundColor: '#00000039',
            },
            topBar: {
                drawBehind:true,
                visible: false,
                hideOnScroll:false,
                background:{
                    color:'transparent',

                },

            }
        });

    }
    componentWillMount() {
        fetch('https://accessmedicine.mhmedical.com/content.aspx?bookid=2129&sectionid=192014606').then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'ldsjvkjdlgjs');



            }).catch((error) => {
            // console.error(error);
            console.log(error,'d;lfdkf;ldkfld;fl;d')

        });

    }
    render() {
        return (

            <View style={styles.container}>


                <View style={{width:width,height:1,backgroundColor:'white'}}/>
                <TouchableHighlight
                    underlayColor='transparent'

                    onPress={()=>
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'com.koalasolution.Flowers_list',
                                passProps: {
                                    text: 'Pushed screen'
                                },
                                options: {
                                    bottomTabs: {
                                        visible: true,
                                        animate: false,
                                        drawBehind:false
                                    }
                                }



                            }
                        })}
                    style={{borderWidth:2,borderRadius:7,borderColor:'#034d2a'}}>
                    <Text style={{color: '#034d2a',fontFamily:'B Koodak',margin: 13,fontSize: 17}}>{'برو به لیست گیاهان'}</Text>
                </TouchableHighlight>
                <Image  source={require('./Potted.jpg')}
                style={{width:width,
                height:0.7*width}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#c2f6df',
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
});
