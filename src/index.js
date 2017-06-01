//import 'babel-polyfill';
import Vue from 'vue';

import Vuetify from 'vuetify';

import router from './router';
import store from './store';
import Components from './components';

import './utils';

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

// __SUBSCRIPTIONS_API_ENDPOINT_ looks similar to: `wss://subscriptions.graph.cool/v1/<PROJECT_ID>`
const wsClient = new SubscriptionClient('__SUBSCRIPTIONS_API_ENDPOINT__', {
  reconnect: true,
})

// __SIMPLE_API_ENDPOINT_ looks similar to: `https://api.graph.cool/simple/v1/<PROJECT_ID>`
const networkInterface = createNetworkInterface({ uri: '__SIMPLE_API_ENDPOINT__' })

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

const apolloClient = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  dataIdFromObject: o => o.id
})

// Install the vue plugin
Vue.use(VueApollo)
Vue.use(Vuetify);
const apolloProvider = new VueApollo({
  clients: {
    a: apolloClient,
  },
  defaultClient: apolloClient,
})




const app = new Vue({
    el: '#app',
    store,
    router,
    apolloProvider,
    render: h => h(Components.App)
});