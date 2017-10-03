<template>
  <div class="main">
    <h1>{{ msg }}</h1>    
    <!-- <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>      
    </ul> -->
     <search></search>
    <!--<ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>-->    
    <!--//DOC: The name of the component's tags should be the same at the name of the import variable or asign alias in components object -->    
    <gifComponent v-bind:items="gifs"></gifComponent>
  </div>
</template>

<script>
import {HTTP} from '../assets/http-common'

import searchComponent from './Search.vue'
import gifComponent from './Gif.vue'

export default {
  /* props: ['items'], */
  name: 'main',
  components: {
    'search': searchComponent,
    gifComponent
  },
  data () {
    return {
      msg: 'Gif4z0 - Search your funny gif',
      gifs: []
    }
  },
  mounted () {
    this.getGifs()
  },
  methods: {
    getGifs () {
      HTTP.get('gifs')
                .then(response => {
                  this.gifs = response.data
                })
                .catch(e => {
                  console.error(e)
                })
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
