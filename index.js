/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { registerScreens } from './screens';
import { Navigation } from 'react-native-navigation';
import {AsyncStorage} from 'react-native';


registerScreens(); // this is where you register all of your app's screens
Navigation.setDefaultOptions({
    bottomTabs: {
        visible: true,
        animate: true, // Controls whether BottomTabs visibility changes should be animated
        drawBehind:true,
        backgroundColor:'#ffffff'
    },
    topBar: {
        visible: false,
        animate: false, // Controls whether TopBar visibility changes should be animated
        hideOnScroll: false,
        buttonColor: 'black',
        drawBehind: false,
        testID: 'topBar',
    }
});
// Navigation.setDefaultOptions({
//     animations: {
//         setRoot: {
//             alpha: {
//                 from: 0,
//                 to: 10,
//                 duration: 1000,
//                 startDelay: 10,
//                 interpolation: 'accelerate'
//             }
//         }
//     }
// });

Navigation.setRoot({
        animations: {
        setRoot: {
            alpha: {
                from: 0,
                to: 10,
                duration: 1000,
                startDelay: 10,
                interpolation: 'accelerate'
            }
        }
    },
    root: {

        bottomTabs: {

            options: {
                bottomTabs: {
                animate:false,
                backgroundColor:'#ffd97c',
                    drawBehind:true,
                    visible:true,
                currentTabIndex: 1 } }, // add this

            children: [
                {component: {

                        name: 'com.koalasolution.About_us',
                        passProps: {
                            text: 'This is tab 0'
                        },
                        options: {

                            bottomTab: {
                                text: 'درباره ما',
                                iconColor:'#30bec1',
                                textColor:'#30bec1',
                                selectedIconColor: '#034d2a',
                                selectedTextColor:'#034d2a',
                                fontFamily:'B Koodak',
                                icon: require('./info.png'),
                                testID: 'FIRST_TAB_BAR_BUTTON'
                            },

                        }
                    }},
                {stack: {
                    children: [
                        {
                            component: {
                            name: 'com.koalasolution.Flowers',
                            passProps: {
                                text: 'This is tab 1'
                            }
                        }
                    }
                    ],
                    options: {
                        bottomTab: {

                            text: 'گیاهان',
                            selectedIconColor: '#034d2a',
                            selectedTextColor:'#034d2a',
                            textColor:'#30bec1',
                            fontFamily:'B Koodak',
                            iconColor:'#30bec1',

                            icon: require('./parsley.png'),
                            testID: 'SECOND_TAB_BAR_BUTTON',

                        }
                    }
                }},
                {component: {
                        name: 'com.koalasolution.App',
                        passProps: {
                            text: 'This is tab 2'
                        },
                        options: {
                                bottomTabs: {
                                    visible: true,
                                    animate: false,
                                    drawBehind:false
                                },
                            statusBar: {
                                visible: true,
                                style: 'light',
                                drawBehind: false,
                                backgroundColor: '#30bec1'


                            },
                            bottomTab: {
                                selectedIconColor: '#034d2a',
                                selectedTextColor:'#034d2a',
                                text: 'راهنما',
                                textColor:'#30bec1',
                                iconColor:'#30bec1',
                                fontFamily:'B Koodak',

                                icon: require('./manual.png'),
                                testID: 'THIRD_TAB_BAR_BUTTON'
                            }
                        }
                    }}
                ]

        }
    }
});

