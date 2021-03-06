// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'

Vue.config.productionTip = false


// global guards, vuex y vue routes 
router.beforeEach((to, from, next) => {
	console.log('acceso global a ruta')
	// next(store.state.auth)
	if(to.meta.privado){
		next(store.state.auth)
	}
	else{
		next()
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

