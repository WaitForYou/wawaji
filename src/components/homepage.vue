<template>  
  <div class="container" style="padding-right: 0px; padding-left: 0px;" >
    <carousel-3d v-if="advertise.length > 0" :border="0" :height="196">
      <slide :index="0">
        <img :src="advertise[0].image" />
      </slide>
      <slide :index="1">
        <img :src="advertise[1].image" />
      </slide>
      <slide :index="2">
        <img :src="advertise[2].image" />
      </slide>
    </carousel-3d>

    <div class="nav-title">
      <span class="border-left"></span>
      <span class="title-name">
        免 费 专 区<span class="asce">(VIP用户免费无限玩)</span>
        <button v-if="(multiList.freeRooms) && (multiList.freeRooms.length > showRoomNum)" class="see-more-btn" @click="seeMoreBtn(0)">更多</button>
      </span>
    </div>
    <cpRoomList v-if="(multiList.freeRooms) && (multiList.freeRooms.length > 0)" :roomlist="multiList.freeRooms"></cpRoomList>

    <div class="nav-title">
      <span class="border-left"></span>
      <span class="title-name">
        VIP 专 区<span class="asce">(VIP用户免费无限玩)</span>
        <button  v-if="(multiList.vipFreeRooms) && (multiList.vipFreeRooms.length > showRoomNum)" class="see-more-btn" @click="seeMoreBtn(1)">更多</button>
      </span>
    </div>
    <cpRoomList v-if="(multiList.vipFreeRooms) && (multiList.vipFreeRooms.length > 0)" :roomlist="multiList.vipFreeRooms"></cpRoomList>

    <div class="nav-title">
      <span class="border-left"></span>
      <span class="title-name">
        金 币 专 区<span class="asce">(全场娃娃免费包邮)</span>
        <button  v-if="(multiList.payRooms) && (multiList.payRooms.length > showRoomNum)" class="see-more-btn" @click="seeMoreBtn(2)">更多</button>
      </span>
    </div>
    <cpRoomList v-if="(multiList.payRooms) && (multiList.payRooms.length > 0)" :roomlist="multiList.payRooms"></cpRoomList>
  </div>
</template>  
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import { mapState } from 'vuex'
import cpRoomList from '../components/cpRoomList';

export default {
  name: 'homepage',
  data () {
    return {
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight,
      showRoomNum: 0
    }
  },
  computed:{
    ...mapState({
      advertise: state => state.moduleHome.advertise,
      multiList: state => state.moduleHome.multiList
    })
  },
  mounted () {
  console.log('homepage')
    this.$store.dispatch('ADVERTISE');
    this.$store.dispatch('HOME_ROOM_LIST');
  },
  methods:{
    seeMoreBtn(roomtype){
      this.$router.push({path: '/roomList?roomtype=' + roomtype})
    }
  },
  components: {
    Carousel3d,
    Slide,
    cpRoomList
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"
  .container
    background-color: #fff
    height: 100%
    .carousel-3d-container
      margin-top: 0
      .carousel-3d-slide
        background-color: transparent
    .nav-title
      height: 28px
      margin: 15px 15px 10px 10%
      text-align: left
      .border-left
        display: inline-block
        width: 6px
        height: 28px
        background-color: rgba(255,200,0,1)
        border-radius: 3px
        float: left
      .title-name
        font-size: 20px
        font-family:PingFang-SC-Medium
        padding-left: 15px
        .asce
          font-size: 12px
          color: rgba(153,153,153,1)
          margin-left: 4px
        .see-more-btn
          background: transparent
          border: none
          color: rgba(153,153,153,1)
          float: right
          line-height: 28px
          padding: 0 20px
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
