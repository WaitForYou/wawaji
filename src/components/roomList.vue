<template>  
  <div class="container">
    <cpRoomList v-if="(roomlist) && (roomlist.length > 0)" :roomlist="roomlist"></cpRoomList>
    <button v-if="hasNextPage" class="load-more-btn" @click="loadMore">加载更多...</button>
  </div>
</template>  
<script>
import { mapState, mapGetters} from 'vuex'
import cpRoomList from '../components/cpRoomList';
import { loadLocal } from '../store/util'
import axios from 'axios';
//const HOST = '/api/';
const HOST = 'http://api.momole.com.cn:8081/prizeclaw/';

export default {
  name: 'roomlist',
  data () {
    return {
      roomtype: this.$route.query.roomtype,
      pageNumber: 1,
      currentRoomList:[],
      roomlist: [],
      hasNextPage: false
    }
  },
  mounted () {
    this.loadList();
  },
  methods:{
    loadMore(){
      this.pageNumber ++;
      this.loadList();
    },
    loadList(){
      let _that = this;
      axios.post(HOST + '/api/machine/v1/roomListByFlag.json', 
      {
        flag: this.roomtype,
        pageSize: 1,
        pageNumber: this.pageNumber
      })
      .then((response) => {
        console.log('roomListByFlag')
        console.log(response)
        if(response.data.code == 1){
          _that.roomlist = _that.roomlist.concat(response.data.object.list);
          _that.hasNextPage = response.data.object.hasNextPage;
        }
      });

    }
  },
  components: {
    cpRoomList
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"
  .container
    margin-top: 20px
    .load-more-btn
      padding: 10px 0
      border: none
      background-color: transparent
      color: #999
      outline: none
</style>
