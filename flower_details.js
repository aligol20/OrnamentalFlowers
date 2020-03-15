/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {TouchableHighlight,Dimensions, ScrollView, Platform, Modal,StyleSheet,Alert, Text, View, Image} from 'react-native';
import Banner, {IndicaterAlign, IndicaterType} from 'react-native-whc-banner'
import {Navigation} from "react-native-navigation";
import Gallery from 'react-native-photo-gallery';
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/FontAwesome5";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 0.3 * height;

const images = [
    {image:{uri:"http://koalafruit.ir/weeds/jij.jpg"},id:'1'},
    {image:{uri:"http://koalafruit.ir/weeds/jij.jpg"},id:'2',overlay:<Text style={{color:'black'}}>'vlkdjlkdj'</Text>},
    {image:{uri:"http://koalafruit.ir/weeds/jij.jpg"},id:'3',overlay:<Text style={{color:'black'}}>'dvkdjlkvkdl'</Text>},
    {image:{uri:"http://koalafruit.ir/weeds/jij.jpg"},id:'4',overlay:<Text style={{color:'black'}}>'x,vxz,m'</Text>},
    {image:{uri:"http://koalafruit.ir/weeds/jij.jpg"},id:'5',overlay:<Text style={{color:'black'}}>'slkjw;sfks;'</Text>},


];

export default class Flower_details extends Component<Props> {

    static options(passProps) {
        return {
            statusBar: {
                visible: true,
                style: 'light',
                drawBehind: false,
                backgroundColor: '#1e824c'


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
                visible: true,
                drawBehind: false,
                transparent: true,
                translucent: true,
                background: {color: '#1e824c'},
                elevation: 0,


            }
        };

    }

    constructor(props) {

        super(props);

        this.state = {
            language: 'fa',
            index: 0,
            image: [],
            list: [],
            loading: true,
            sort: false,
            refreshing: false,
            modalVis:false,
        };
        Navigation.mergeOptions(this.props.componentId, {
            statusBar: {
                visible: true,
                drawBehind: false,
                style: 'light',
                backgroundColor: '#1e824c'
            },
            backButton: {
                visible: false
            },
            topBar: {
                visible: false,
                drawBehind: true,
                animate: false,
                background: {
                    color: 'green',

                },
                title: {
                    color: '#f0ff00',
                    text: props.text.persian_name,
                    fontFamily: 'B Koodak'
                },
                backButton: {
                    color: '#f0ff00'
                },

            }
        });

    }
    componentWillMount() {
        console.log(this.props.text,';lfkd;lfkdl')
        fetch('http://koalafruit.ir/api/images_get.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({tag:this.props.text.scientific_name})
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson,'ldsjvkjdlgjs');
                let list = [
                ];
                console.log(responseJson, 'this family')
                for (let i = 0; i < responseJson.length; i++) {
                    list.push({image: {uri: responseJson[i].image_address}, id: responseJson[i].image_id,comment:responseJson[i].image_comment})


                }
                this.setState({list: list, loading: false});
                console.log(list, 'this list')


            }) .catch((error) => {
            // console.error(error);
            this.setState({loading: false})

            Alert.alert(
                'Error in loading data...',
                'Please try again and be sure from your internet connection...',
                [

                    {text: 'OK', onPress: () =>   Navigation.push(this.props.componentId, {
                            component: {
                                name: 'com.koalasolution.App',

                            }
                        })},
                ],
                { cancelable: false }
            )
        });

    }
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{width: BannerWidth, height: BannerHeight}} source={{uri: image}}/>
            </View>
        );
    }

    render() {
        let yuy = this;
        const hu = parseInt(yuy.props.text.humidity_degree);
        const su = parseInt(yuy.props.text.light_degree);
        const wa = parseInt(yuy.props.text.water_degree);
        const min_temp = yuy.props.text.min_temp;
        const max_temp= yuy.props.text.max_temp;
        console.log(this.props.text, 'assmdklsksflkl;s')
        return (
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <Banner style={styles.banner}
                        autoPlay={false}
                >
                    {
                        this.state.list.map(function (tt) {
                            console.log(tt,'gghghhgh');
                            return(
                                <TouchableHighlight
                                    underlayColor='white'
                                    style={styles.button}
                                    onPress={()=>yuy.setState({modalVis:true})}>
                                <View
                                    key={tt.id}
                                >

                                    <Image
                                    key={tt.id}
                                    style={styles.img} source={{uri: tt.image.uri}}/></View>
                                </TouchableHighlight>

                            )
                        })
                    }

                </Banner>
                <View style={styles.container}>
                    <View style={{flexDirection: 'column', width: '100%'}}>
                        <View style={styles.table}>

                            <Text style={styles.welcome}>{this.props.text.persian_name}</Text>
                            <View style={{width:2,backgroundColor:'#bdc3c7',height:'100%'}}/>

                            <Text style={styles.welcome_}>{'نام فارسی:'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: '#bdc3c7'}}/>

                        <View style={styles.table}>

                            <Text style={styles.welcome}>{this.props.text.common_name}</Text>
                            <View style={{width:2,backgroundColor:'#bdc3c7',height:'100%'}}/>

                            <Text style={styles.welcome_}>{'نام رایج:'}</Text>
                        </View>

                        <View style={{width: '100%', height: 2, backgroundColor: '#bdc3c7'}}/>
                        <View style={styles.table}>

                            <Text style={styles.welcome}>{this.props.text.scientific_name}</Text>
                            <View style={{width:2,backgroundColor:'#bdc3c7',height:'100%'}}/>

                            <Text style={styles.welcome_}>{'نام علمی:'}</Text>


                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: '#bdc3c7'}}/>


                        <View style={styles.table}>
                            <Text style={styles.welcome}>{this.props.text.family}</Text>
                            <View style={{width:2,backgroundColor:'#bdc3c7',height:'100%'}}/>
                            <Text style={styles.welcome_}>{'خانواده:'}</Text>

                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: '#bdc3c7'}}/>

                        <View style={styles.table}>

                            <View style={styles.sign}>
                                <Image
                                    style={{width:100,height:100}}
                                    source={su===3 ? require('./hu_3.png') : su===2 ? require('./hu_2.png') : require('./hu_1.png')} />
                            </View>
                            <View style={{width:2,backgroundColor:'#bdc3c7',height:'100%'}}/>

                            <Text style={styles.welcome_}>{'نیاز رطوبتی'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: '#bdc3c7'}}/>
                        <View style={styles.table}>

                            <View style={styles.sign}>
                                <Image
                                    style={{width:100,height:100}}
                                    source={su===3 ? require('./sun_4.png') : su===2 ? require('./sun_2.png') : require('./sun_1.png')} />
                                {/*<Icon2 name="white-balance-sunny" color="#ffcb05" size={29} style={{margin:3}}/>*/}
                                {/*<Icon2 name="white-balance-sunny" color={su===3 ? "#ffcb05" : 'grey'} size={29} style={{margin:3}}/>*/}
                                {/*<Icon2 name="white-balance-sunny" color={su===3 ? "#ffcb05" : 'grey'} size={29} style={{margin:3}}/>*/}
                            </View>
                            <View style={{width:2,backgroundColor:'#bdc3c7',height:'100%'}}/>

                            <Text style={styles.welcome_}>{'نیاز نوری:'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: '#bdc3c7'}}/>

                        <View style={styles.table}>
                            <View style={styles.sign}>
                                <Image
                                    style={{width:100,height:100}}
                                    source={su===3 ? require('./water_3.png') : su===2 ? require('./water_2.png') : require('./water_1.png')} />
                            </View>
                            <View style={{width:2,backgroundColor:'#bdc3c7',height:'100%'}}/>

                            <Text style={styles.welcome_}>{'نیاز آبی:'}</Text>
                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: '#bdc3c7'}}/>

                        <View style={styles.table}>
                            <View style={styles.sign}>
                                <Text style={styles.welcome_2}>{min_temp + ' °C'+' '+'تا'+' '+' °C'+max_temp}</Text>
                                {/*<Icon3 name="temperature-high" color="red" size={29} style={{margin:3}}/>*/}
                                {/*<Icon3 name="temperature-high" color="grey" size={29} style={{margin:3}}/>*/}
                                {/*<Icon3 name="temperature-high" color="grey" size={29} style={{margin:3}}/>*/}
                            </View>
                            <View style={{width:2,backgroundColor:'#bdc3c7',height:'100%'}}/>

                            <Text style={styles.welcome_}>{'نیاز دمایی:'}</Text>

                        </View>
                        <View style={{width: '100%', height: 2, backgroundColor: '#bdc3c7'}}/>
                        <View style={styles.table}>

                            <Text style={styles.welcome}>{this.props.text.comment}</Text>
                            <View style={{width:2,backgroundColor:'#bdc3c7',height:'100%'}}/>

                            <Text style={styles.welcome_}>{'روش تکثیر:'}</Text>
                        </View>
                    </View>



                </View>
                <Modal

                    visible={this.state.modalVis}
                    onRequestClose={() => {
                        this.setState({modalVis: false})
                    }}>
                    <View>
                        <TouchableHighlight
                        onPress={()=>this.setState({modalVis:false})}>
                        <Icon name="arrow-left" color="black" size={43}/>
                        </TouchableHighlight>
                    </View>
                        <Gallery
                            backgroundColor={'white'}
                            initialPaginationSize={0}
                            data={this.state.list} />
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: width,
        flexDirection: 'row'
    },
    table: {
        flexDirection: 'row',
        width: width
    },
    img: {
        width: width,
        height: 0.9 * width
    },
    banner: {
        width: width,
        height: 0.9 * width

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'B Koodak',
        color: 'black',
        width:'56%',
        alignItems: 'center',
        margin: 13
    },
    welcome_: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'B Koodak',
        color: '#2574a9',
        width:'34%'
    }, welcome_2: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'B Koodak',
        color: '#2574a9',
        width:'70%'
    },
    temp: {
        fontSize: 20,
        textAlign: 'right',
        fontFamily: 'B Koodak',
        color: 'black',
        width:'28%'
    },
    sign:{
flexDirection:'row',width:'56%',margin:13,alignItems:'center',justifyContent: 'center'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: "#000",

    },
});
