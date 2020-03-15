import App from './App'
import Flowers from  './flowers'
import About_us from './about_us'
import Flowers_list from './flowers_list'
import Flowers_details from './flower_details'
import Propagation from './propagation'
import { Navigation } from 'react-native-navigation';


export function registerScreens() {
    Navigation.registerComponent('com.koalasolution.App', () => App);
    Navigation.registerComponent('com.koalasolution.Propagation', () => Propagation);
    Navigation.registerComponent('com.koalasolution.Flower_details', () => Flowers_details);
    Navigation.registerComponent('com.koalasolution.Flowers', () => Flowers);
    Navigation.registerComponent('com.koalasolution.Flowers_list', () => Flowers_list);
    Navigation.registerComponent('com.koalasolution.About_us', () => About_us);
}