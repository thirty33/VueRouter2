<template>
	<section>
		
		<h2>hola {{ id }} (this is an identificator)</h2>


		<!-- <router-link :to="'/equipo/' + id + '/fotos'">ve mis fotos</router-link> -->

		

		<!-- <router-link :to="{name: 'fotos', params: {id: id}}">ve mis fotos</router-link>


		<router-link :to="{name: 'bio', params: {id: id}}">ve mis bio</router-link> -->

		<router-view></router-view>
	</section>
</template>


<script>
	export default {
		data(){
			return {
				// no confundir router con route
				id: this.$route.params.id
			}
		},
		watch: {
			// Reactividad en las rutas
			'$route'(to) {
				this.id = to.$route.params.id
			}
		}
	}
</script>

<style>
	
</style>