<template>
    <div class="gif">
      <!-- <h1>{{ msg }}</h1> -->            
    		<div v-for="item in processedGifs">
          <div class="item" @click="showDetail(item.id)" :id="item.id">
    			<img :src="item.link" alt="" title=""></img>
          <p>Category: {{item.id}}</p>
          <p>Description: {{item.desc}}</p>
          </div>
    		</div>    	    
      <!-- <h2>Second step: Users processed computed(){{processedGifs}}</h2> -->
    </div>
</template>
      
<script>
/* import Vue from 'vue' */
import {HTTP} from '../assets/http-common'

export default {
  props: ['items'],
  name: 'gif',
  data () {
    return {
      msg: 'Show gif detail'
    }
  },
  mounted () {
    // TODO: get last result, paging by 10
  },
  methods: {
    printResult: (data) => {
      console.log(event.path[0].value)
      this.items = data
    },
    showDetail: (item) => {
      HTTP.get('gifs/' + item)
                .then(response => {
                  console.log(response)
                })
                .catch(e => {
                  console.error(e)
                })
    }
    // TODO: when click in item show modal
  },
  computed: {
    processedGifs () {
      if (this.items) {
        let gifs = JSON.parse(JSON.stringify(this.items))
        gifs.map(gif => {
          gif.desc += '_Processed!'
        })
        return gifs
      }
    }
  }
}
</script>

<style>
    .gif {
       padding-top: 20px;
       color: black; 
    }
    
    .item{      
      padding-left: 50px;
      float:left;
      width: 300px;
      height: 300px;
    }
    .item img{
      width: 75%;
      height: 75%;
    }
</style>

