import Vue from 'vue';
import App from './App.vue';
import {asyncComponents} from '../utils';
let registerComponents = (components,namespace = '') => Object.keys(components).forEach(component => Vue.component(`${namespace}${component}`.split(/(?=[A-Z])/).join("-").toLowerCase(), components[component]));

let components = {
    App,
    ...asyncComponents([
        'Home',
        'ProductCard',
        'ProductPage'
    ]),
};
Vue.component('product-card',components.ProductCard);
Vue.component('product-page',components.ProductPage);
export default components;
