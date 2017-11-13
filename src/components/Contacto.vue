<template>
	<section>
		<h2> Donde Encontrarme</h2>
		<p> Santiago de Cali</p>
		<!-- <h5> {{ $route.params.newsletter }}</h5> -->
		<h5>{{ newsletter }}</h5>
		<pre> {{ numero }} </pre>
		<!-- <template v-if="$route.params.newsletter === 'true'"> -->
		<!--Sin hacer referencia a $route  -->
		<!-- <template v-if="newsletter === 'true'"> -->
		<template v-if="newsletter">
			
			<form action="">
				<h3>Newsletter</h3>
				<label for="correo">Correo-e</label>
				<input type="email" placeholder="tu correo electronico" id="correo">
			</form>
		</template>

	</section>
</template>

<script>
	export default {
		props: ['newsletter'],
		data() {
			return {
				numero: null
			}
		},
		// fetching before navigation
		beforeRouteEnter: ((to, from, next) => {
			console.info('antes de entrar')
			setTimeout( () => {
				// this no existe tadavia
				next( (vm) => {

					vm.numero = Math.floor(Math.random() * 1000)
				})
			}, 2000)
		}), 
	}
</script>

<style></style>