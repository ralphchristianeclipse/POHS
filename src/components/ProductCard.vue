<template lang="pug">
	v-card(hover style="min-height: 300px" v-if="product" height="100%" :img="product.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'")
		.white--text(style="height: 100%; background: rgba(0,0,0,.4)")
			v-card-title {{product.name}}
			v-layout(row justify-center style="height: 50%").ma-0
				.m-a
					.display-2 ${{product.price}}
</template>

<script>
	export default {
		name: 'product-card',
		props: ['product']
	}
</script>
