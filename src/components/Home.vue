<template lang="pug">
	v-app(dark)
		v-toolbar
			v-toolbar-title.white--text {{$route.name.toUpperCase()}}
		main
			v-container(fluid)
				//v-layout(row wrap)
					v-flex(xs12 sm6 md3 lg2 v-for="(product,index) in allProducts", :key="index").mb-4
						product(:product="product")
</template>

<script>
	export default {
		name: 'home',

	}
</script>
