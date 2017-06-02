<template lang="pug">
	v-app(dark)
		v-toolbar
			v-toolbar-title.white--text {{$route.name.toUpperCase()}}
		main
			v-container(fluid)
				v-layout(row wrap).ma-0
					v-flex(xs12 sm6 md3 lg2 v-for="(product,index) in $store.getters.$products", :key="index").mb-4
						product-card(:product="product", @click.native="$router.push({name: 'product', params: {id: product.id}})")
</template>

<script>
	export default {
		name: 'home',

	}
</script>
