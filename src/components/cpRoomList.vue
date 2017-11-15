<template>  
    <ul class="clearfix single-type-room-wrap" v-if="(!!listData) && (listData.length > 0)">
      <li class="room-item" v-for="(item, index) in listData" v-if="item" :style="(item.status == 1) ? palying_bg: idle_bg">
            <img class="room-status" :src="(item.status && item.status == 1) ? '../../static/list_palying_label.png': '../../static/list_idle_label.png'">
            <img class="room-cover" :src="item.coverImage">
            <p class="room-name"><strong>{{item.machineName}}</strong></p>
            <p class="room-pay"><strong class="realPrice">{{item.price}}币/次</strong><span class="price">{{item.realPrice || 0}}/次</span></p>
      </li>
    </ul>
</template>  
<script>
export default {
  name: 'cpRoomList',
  data () {
    return {
      list_palying_label: '',
      list_idle_label: '',
      idle_bg:{
        backgroundImage: "url(" + require("../assets/image/list_idle_bg.png") + ")"
      },      
      palying_bg:{
        backgroundImage: "url(" + require("../assets/image/list_palying_bg.png") + ")"
      },
    }
  },
  props: ['roomlist'],
  computed:{
    listData(){
      return this.roomlist
    }
  },
  mounted () {

  },
  methods:{
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"
    .clearfix:after
      content: "\0020"
      display: block
      height: 0
      clear: both
      zoom: 1
    .single-type-room-wrap
      margin: 0 10%
      padding: 0
      .room-item
        display: inline-block
        float: left
        width: 45%
        height: 180px
        position: relative
        margin-right: 10%
        margin-bottom: 10px
        text-align: center
        border-radius: 20px
        background-position: 20px -1px
        background-repeat: no-repeat
        background-size: 115% 120%
        box-shadow: 0 0 10px rgba(141,141,141,0.18)
        .room-status
          position: absolute
          top: 10px
          left: 0
        .room-cover
          width: 65%
          max-width: 97px
          max-height: 97px
          margin-top: 40px
        .room-name
          position: absolute
          bottom: 20px
          margin: 0
          text-align: left
          padding: 0 10px
          strong
           font-size: 12px
        .room-pay
          margin: 0
          padding: 0 10px
          position: absolute
          bottom: 3px
          font-size: 8px
          color: red
          .price
            color: rgba(153,153,153,1)
            margin-left: 4px
      .room-item:nth-child(even)
        margin-right: 0
</style>
