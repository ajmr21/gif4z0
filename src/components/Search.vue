<template>    
    <div class="search">
        Buscador:<input type="text" placeholder="Type text to search and press enter" @keypress.enter="search" size="125" minlength="1" maxlength="50"/>
    </div>
</template>
      
<script>
/* import Vue from 'vue' */
import {HTTP} from '../assets/http-common'

export default {
  // parametros de entrada del componente
  props: {
    items: {type: Array, required: false}
  },
  name: 'search',
  data () {
    return {
      msg: 'Search component in vue.js'
    }
  },
  mounted () {
  },
  methods: {
    search: (event) => {
      HTTP.get('gifs?desc=' + event.path[0].value)
                .then(response => {
                  console.log(response)
                  this.$emit('printResult', this.result)
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

<style>
    .search {
       color: black; 
    }
    input {
        margin-left: 10px
    }
</style>

      