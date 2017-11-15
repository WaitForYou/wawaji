<template>
  <div class="filmListWrap">
    <ul class="filmList" v-for="item in movie.subjects">
      <li class="film" @click="filmItemClick(item)">  
        <img class="avater" :src="movie.subjects[0].images.small" />
        <div class="rightTab">
          <p><label class="title">{{item.title}}</label></p>
          <p class="year">{{item.year}}</p>
          <p class="rating">
            <label>评分：{{item.rating.average}}</label>
            <label>赞数：{{item.rating.stars}}</label>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {movieInTheaters} from '@/store/httpGet'
import { mapState } from 'vuex'
//store.state.orderList
export default {
  name: 'filmList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      movieMsg:{}
    }
  },
  computed: {
    ...mapState({
      movie: state => state.a.movie
    })
  },
  mounted () {
     this.$store.dispatch('LOAD_MOVIE_IN_THEATERS')
  },
  methods:{
    filmItemClick(item){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"

.filmListWrap
  padding:0 20px
  .film
    box-sizing: border-box
    width: 100%
    height: 300px
    padding: 10px 20px
    background: #fff
    padding-left: 240px
    .avater
      height: 280px
      width: 200px
      position: absolute
      left: 40px
      filter: blur(4px)
    .rightTab
      padding: 20px
      text-align: left
      color: #596373 
      font-size: 26px
      .year
        color: #cecece
        font-size: 20px
      .rating
        border-top: 1px solid #efefef



</style>
