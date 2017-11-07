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
		beforeRouteEnter (to,from,next) {
			console.log('antes de entrar')
			next((vm) => console.log(vm))
		},
		beforeRouteUpdate (to,from,next) {
			console.log('antes de cambiar la ruta sobre el mismo componente')
			this.id = to.params.id
			next()
		},
		beforeRouteLeave (to,from,next) {
			// antes de salir del componente
			// console.info('antes de salir')
			const answer = window.confirm('Do really want lo leave? you have unsaved changes')
			if(answer){
				next()
			}else {
				next(false)
			}
			// next()
		},
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
		},
		// Guards a nivel de componente

	}
</script>

<style>
	
</style>