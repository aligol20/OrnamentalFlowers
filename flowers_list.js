/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform,
    Alert,
    Picker,
    Modal,
    FlatList,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Navigation} from "react-native-navigation";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
export default class Flowers_list extends Component<Props> {
    // static options(passProps) {
    //
    //
    //     return {
    //         statusBar: {
    //             backgroundColor: '#00000039',
    //             drawBehind: true
    //         },
    //         topBar: {
    //             title: {
    //                 text: 'My Screen'
    //             },
    //             drawBehind: true,
    //             visible: false,
    //             animate: false,
    //             drawUnderTabBar:false
    //         }
    //     };
    // }
    searchMe(value) {

        this.setState({isLoading:true});
        if (value === '') {
            let y= this;
            this.setState({list: y.state.main});

        } else {

            let r = this.state.main;
            console.log(r, 'mahnazparivash15');

            let ghoo = r.filter(x => x.persian_name.includes(value));


            this.setState({
                list: ghoo,
                isLoading: false,

            });
        }
            //console.log(ghoo,'mahnazparivash14');


    }
    static options(passProps) {
        return {
            statusBar: {
                drawBehind: false,
                style: 'light',
                backgroundColor: '#00000039'


            },
            topBar: {
                visible: true,
                animate: false, // Controls whether TopBar visibility changes should be animated
                hideOnScroll: false,
                background: {
                    color: '#1e824c',
                },
                backButton: {
                    color:'red',
                    visible: true
                },
                buttonColor: 'black',
                drawBehind: false,
                testID: 'topBar',
                title: {
                    text: ' لیست گیاهان',
                    fontFamily:'B Koodak',
                    color:'white'
                },

            },
        }
    }

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
            refreshing:false,
            searchItem:''
        };

        Navigation.mergeOptions(this.props.componentId, {
            statusBar: {
                visible: true,
                drawBehind:false,
                style: 'light',
                backgroundColor:'#30bec1'
            },
            layout: {
                backgroundColor: '#30bec1',
                orientation: ['portrait'] // An array of supported orientations
            },
            topBar: {
                drawBehind:false,
                visible: true,
                hideOnScroll:false,
                buttonColor:'red',
                background:{
                    color:'#0a949b',

                },
                title:{
                    color:'white'
                },
                backButton:{
                    color:'white'
                },
                rightButtons: [
                    {
                        icon: require('./order.png'),
                        id: 'order',
                        title:'مرتب کن'
                    },

                ]
            }
        });
        Navigation.events().bindComponent(this);




    }
    navigationButtonPressed({buttonId}) {
        if (buttonId == 'order') {
            this.setState({sort: true})        }
    }

    componentWillMount() {
        console.log(this.props.text, ';lfkd;lfkdl')
        fetch('http://koalafruit.ir/api/ornamental_list_by_name.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson, 'ldsjvkjdlgjs');
                //
                this.setState({loading: false,main:responseJson, list: responseJson})
                fetch('http://koalafruit.ir/api/komo.json').then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson, 'ya hagh...')
                        // console.log(responseJson.length, 'lenght...')
                        for (let r=0;r<=76;r++){
                            for (let c=0;c<=21;c++){
                                if(responseJson.document.page.row[r].column[c].text!=='') {
                                    if (responseJson.document.page.row[r].column[c].text['@fontSize'] === '7.0') {
                                        console.log(responseJson.document.page.row[r].column[c].text['#text'], 'figure or table')
                                        // console.log(r,'column...')
                                        // console.log(i,'row...')

                                    }
                                    if (responseJson.document.page.row[r].column[c].text['@fontSize'] === '10.0' ||
                                        responseJson.document.page.row[r].column[c].text['@fontSize'] === '9.0'
                                    ) {
                                        if(responseJson.document.page.row[r].column[c+1].text['@fontSize'] === '7.0'){



                                        }
                                        console.log(responseJson.document.page.row[r].column[c].text['#text'], 'titles')
                                        // console.log(r,'column...')
                                        // console.log(i,'row...')

                                    }
                                }
                                // console.log(responseJson.document.page,'0 finder...')
                                // console.log(responseJson.document.page.row[i].column[r].text['@fontName'],'1 finder...')
                                // console.log(responseJson.document.page.row[i].column[r].text['@fontName'],'2 finder...')
                                // console.log(responseJson.document.page.row[i].column[r].text['@fontName'],'3 finder...')
                                // console.log(responseJson.document.page.row[i].column[r].text['@fontName'],'4 finder...')
                                // console.log(responseJson.document.page.row[i].column[r].text['@fontName'],'5 finder...')
                            }
                        }
                    }
                ).catch((error) => {
                    // console.error(error);
                    console.log(error,'d;lfdkf;ldkfld;fl;d')

                });

            }).catch((error) => {
            // console.error(error);
            this.setState({loading: false})

            Alert.alert(
                'خطا در بارگزاری اطلاعات',
                'لطفا اتصال اینترنت خود را بررسی و مجددا تلاش کنید...',
                [

                    {
                        text: 'OK', onPress: () => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'com.koalasolution.Flowers',

                            }
                        })
                    },
                ],
                {cancelable: false}
            )
        });

    }

    sort(by, from) {
        this.setState({sort: false, sort_type: from,loading:true});
        let url = 'http://koalafruit.ir/api/ornamental_list_by_name.php';
        console.log(by,'dlfkdlfkdlf');
        switch (by) {
            case 'water':
                url = 'http://koalafruit.ir/api/ornamental_list_by_water.php';
                break;
            case 'light':
                url = 'http://koalafruit.ir/api/ornamental_list_by_light.php';
                break;
            case 'temp':
                url = 'http://koalafruit.ir/api/ornamental_list_by_temp.php';
                break;
            case 'alphabet':
                url = 'http://koalafruit.ir/api/ornamental_list_by_name.php';
                break;
            default:
              url = 'http://koalafruit.ir/api/ornamental_list_by_name.php';

        }


        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson, 'ldsjvkjdlgjs');

                this.setState({loading: false, list: responseJson,refreshing:!this.state.refreshing})


            }).catch((error) => {
            console.error(error);
            this.setState({loading: false})

            Alert.alert(
                'Error in loading data...',
                'Please try again and be sure from your internet connection...',
                [

                    {
                        text: 'OK', onPress: () => Navigation.push(this.props.componentId, {
                            component: {
                                name: 'com.koalasolution.App',

                            }
                        })
                    },
                ],
                {cancelable: false}
            )
        });
    }

    render() {
        return (

            <View style={styles.container}>

                <View style={{backgroundColor: 'transparent', width: width, alignItems: 'center'}}>
                    <View                         style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: 7,
                        width:'95%',
                        backgroundColor: 'white',
                        borderWidth: 0,
                        borderColor: 'white',
                        margin: 3
                    }}>
                        <TextInput
                        style={{fontFamily:'B Koodak',textAlign:'right',width:'100%'}}
                        textAlign={'right'}
                        onChangeText={(value)=>this.searchMe(value)}
                        placeholder={'گیاه موردنظر خود را اینجا بیابید'}/>
                    </View>
                </View>
                <FlatList
                    style={{width: width,marginBottom:13}}
                    refreshing={this.state.refreshing}
                    automaticallyAdjustContentInsets={true}


                    renderItem={({item}) => {

                        return (
                            <View style={{backgroundColor: 'transparent', width: width, alignItems: 'center'}}>

                                <TouchableHighlight
                                    underlayColor='white'
                                    style={styles.button}
                                    onPress={()=>
                                        Navigation.push(this.props.componentId, {
                                            component: {
                                                name: 'com.koalasolution.Flower_details',
                                                passProps: {
                                                    text: item
                                                },
                                                options: {
                                                    bottomTabs: {
                                                        visible: true,
                                                        animate: false,
                                                        drawBehind:false
                                                    }
                                                }



                                            }
                                        })}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderRadius: 7,
                                        width:'95%',
                                        backgroundColor: 'white',
                                        borderWidth: 0,
                                        borderColor: 'white',
                                        margin: 3
                                    }}>


                                        <Text style={{
                                            color: '#2e3131',
                                            marginRight: 7,
                                            width:0.75*width,
                                            fontFamily: "B Koodak",
                                            fontSize: 19,
                                            textAlign: 'right'
                                        }}>{item.persian_name}</Text>
                                        <Image source={{uri:item.image_url}}
                                               style={{
                                                   width: 0.18*width,
                                                   height:0.18*width,
                                                   borderRadius:7,
                                                   margin:5

                                               }}>
                                        </Image>

                                    </View>
                                </TouchableHighlight>
                            </View>
                        );


                    }


                    }

                    data={this.state.list}
                    keyExtractor={(item, index) => item + index}

                />

                <Modal
                    transparent={true}
                    visible={this.state.loading}
                    onRequestClose={() => {
                        this.setState({loading: false})
                    }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        justifyContent: 'center',
                        width: width,
                        height: height
                    }}>
                        <View style={{
                            width: width / 2,
                            height: width / 2,
                            backgroundColor: 'white',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 7
                        }}>

                            <ActivityIndicator
                                color='#004000'
                                size={33}/>
                            <Text style={{
                                marginLeft: 7,
                                marginRight: 7,
                                color: '#336e7b',
                                fontFamily: "Comfortaa-Light",
                                fontSize: 19,
                                textAlign: 'left'
                            }}>{'loading...'}</Text>
                        </View>
                    </View>
                </Modal>
                <Modal
                    transparent={true}
                    visible={this.state.sort}
                    onRequestClose={() => {
                        this.setState({sort: false})
                    }}>
                    <View style={{
                        width: width,
                        height: height,
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor:'rgba(0,0,0,0.5)'
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            borderRadius: 5,
                            alignItems: 'center',
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            width: 0.8 * width
                        }}>
                            <Text style={{
                                color: 'grey',
                                width: '97%',
                                marginRight: 7,
                                fontFamily: "B Koodak",
                                fontSize: 19,
                                textAlign: 'right'
                            }}>
                                {'مرتب کردن براساس:'}</Text>
                            <TouchableHighlight
                                onPress={() => this.sort('alphabet', 'حروف الفبا')}
                                style={styles.sort_button}>
                                <Text style={styles.sort}>
                                    {'حروف الفبا'}</Text>
                            </TouchableHighlight>
                            <View style={{height: 1, width: '100%', backgroundColor: '#e4e9ed'}}/>
                            <TouchableHighlight
                                onPress={() => this.sort('water', 'کمترین نیاز آبیاری')}
                                style={styles.sort_button}>
                                <Text style={styles.sort}>
                                    {'کمترین نیاز آبیاری'}</Text>
                            </TouchableHighlight>
                            <View style={{height: 1, width: '100%', backgroundColor: '#e4e9ed'}}/>
                            <TouchableHighlight
                                onPress={() => this.sort('temp', 'کمترین دمای نگهداری')}
                                style={styles.sort_button}>
                                <Text style={styles.sort}>
                                    {'کمترین دمای نگهداری'}</Text>
                            </TouchableHighlight>
                            <View style={{height: 1, width: '100%', backgroundColor: '#e4e9ed'}}/>
                            <TouchableHighlight
                                onPress={() => this.sort('light', 'کمترین نور مورد نیاز')}
                                style={styles.sort_button}>
                                <Text style={styles.sort}>
                                    {'کمترین نور مورد نیاز'}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#30bec1',
        flexDirection:'column',
        flex:1
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
    sort_button: {
        width: '100%',
        borderBottomWidth: 0,
        borderColor: 'grey'
    },
    sort: {
        color: '#2c82c9',
        width: '97%',
        marginRight: 7,
        marginBottom: 13,
        marginTop: 13,
        fontFamily: "B Koodak",
        fontSize: 19,
        textAlign: 'right'
    }
});
