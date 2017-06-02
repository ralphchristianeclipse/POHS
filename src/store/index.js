import Vue from 'vue';
import Vuex from 'vuex';
import client from './apollo'
import Products from './gql/Products.gql';
import Product from './gql/Product.gql';
Vue.use(Vuex);

const getters = {
    $products: state => state.products
}

const mutations = {
    PRODUCTS: (state,payload) => state.products = payload
}

const actions = {
    async products({commit}) {
        let {data: {products = []}} = await client.query({query: Products});
        commit('PRODUCTS',products);
    },
    async product({commit},id) {
        let {data: {product = {}}} = await client.query({query: Product,variables: {id}});
        return product;
    }
}

const state = {
    products: []
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

})
store.dispatch('products');
export default store