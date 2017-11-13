<template>
	<section>
		<h1>Home</h1>
		<router-link :to="{name: 'equipo', params: {id:id}}">Equipo</router-link>
		
		<router-link :to="{name: 'contacto'}">Contacto</router-link>

		<router-link :to="{name: 'bio'}">Bio</router-link>

		<router-link :to="{name: 'info', hash: '#destacado'}">Info</router-link>
	</section>
</template>


<script>
	export default {
		data(){
			return {
				id: 'joel'
			}
		}
	}
</script>

<style>
	
</style>