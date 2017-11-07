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

Vue.use(Router)

export default new Router({
	// modo histotiria, quitar #
 	mode: 'history',		
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
    {
        beforeEnter: ((to,from,next) => {
            if(store.state.auth){

            console.log('Acceso a ruta contacto')
            }else console.log('no tiene acceso')
            next(store.state.auth)
        }),
    	path: '/contacto/',
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
    	path: '*',
    	component: Noencontrado
    }
  ]
})
