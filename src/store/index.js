import Vue from 'vue';
import Vuex from 'vuex';
import client from './apollo'
import AllProducts from './gql/AllProducts.gql';
Vue.use(Vuex);

const getters = {
 
}

const mutations = {

}

const actions = {
    async allProducts({commit}) {
        let {data} = await client.query({query: AllProducts})
        console.log(data);
    }
}

const state = {

}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

})
store.dispatch('allProducts');
export default store