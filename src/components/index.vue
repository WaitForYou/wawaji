<template>  
        <div class="row" style="text-align: center; ">
            sdafsadfs
        </div>
</template>  
<script>

export default {
  name: 'login',
  data () {
    return {
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight,
      imgStyle:{
        width:document.body.clientWidth + 'px',
        height:document.documentElement.clientHeight + 'px',
      }
    }
  },
  mounted () {
     
  },
  methods:{
    filmItemClick(item){

    },
    loginTo(){
      this.$router.push('/index')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"

  .login_btn
    width: 60%
    background-repeat: no-repeat
    background-size: 100%
    height: 40px
    border: none
    background-color: transparent

</style>
