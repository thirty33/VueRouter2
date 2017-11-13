<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <button @click="cambiar">Cambiar auth</button>
    <hr>
    <!-- transiitons en componentes -->
    <transition name="aparecer" appear>
      
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
export default {
  name: 'app',
  methods: mapMutations(['cambiar'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<style>
  
  .completado {
      text-decoration: line-through;
    }
    /*Entrada de la animation*/
    .aparecer-enter {
      opacity:0;
    }
    /*Transcurso de la entrada*/
    .aparecer-enter-active{
      transition: opacity 1s;
    }

    /*salida de la animacion*/
    .aparecer-leave-to{
      opacity: 0;
    }

    /*Transcurso de la salida*/
    .aparecer-leave-active{
      transition: opacity 1s; 
    }

    /*animacion bounce de ejemplo*/

    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
</style>