import Components from './components';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Components.Home,
		name: 'home'
	},
	{
		path: '/product/:id',
		component: Components.ProductPage,
		name: 'product',
		props: true
	},
	{
		path: '/*',
		redirect: {name: 'home'}
	},
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router;