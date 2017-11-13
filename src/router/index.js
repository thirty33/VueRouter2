import Vue from 'vue'
import Router from 'vue-router'
import {store} from '../store'

import Home from '@/components/Home'
import Contacto from '@/components/Contacto'
import Usuariobio from '@/components/UsuarioBio'
import Usuariofotos from '@/components/UsuarioFotos'
import Equipo from '@/components/Equipo'
import Usuario from '@/components/Usuario'
import Noencontrado from '@/components/Noencontrado'
// import bio from '@/components/bio'
// Usando lazy load 


// El componente bio tiene su propio bundle, de manera asincrona
const bio = resolve => {
    require.ensure(['@/components/bio'], () => {
        resolve(require('@/components/bio'))
    })
}

import info from '@/components/info'



Vue.use(Router)

export default new Router({
	// modo historia, quitar #
 	mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        const position = {}
        console.log(to)
        if(to.hash) {
            position.selector = to.hash
        }

        return position
    },		
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    // 	path: '/contacto/:newsletter',
    // 	name: 'contacto',
    // 	component: Contacto,
    // 	// sin hacer referecia a $route
    // 	props: true,
    // }, 
    // Boolean mode
    {   // rute guard
        beforeEnter: ((to,from,next) => {
            if(store.state.auth){

            console.log('Acceso a ruta contacto')
            }else console.log('no tiene acceso')
            next(store.state.auth)
        }),
    	path: '/contacto/',
        meta: {privado:true},
    	name: 'contacto',
    	component: Contacto,
    	// sin hacer referecia a $route
    	props: {newsletter : true },
    },
    {
    	path: '/equipo/:id',
    	component: Equipo,
    	children: [
    		{
    			path: '',
    			components: {
    				default: Usuario,
    				bio: Usuariobio,
    				fotos: Usuariofotos,

    			},name: 'equipo',
    		}


    	],
    	
    },
    {
        path: '/bio',
        component: bio,
        name: 'bio'
    },
    {
        path: '/info',
        component: info,
        name: 'info'
    },
    {
    	path: '*',
    	component: Noencontrado
    }
  ]
})
