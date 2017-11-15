<template>  
  <div class="row" style="text-align: center; ">
      <img src="../assets/image/login_bg.png" :style="imgStyle">
      <input @click="loginTo" class="login_btn"  :style="login_btn"  style=" position: absolute; bottom: 20%;left: 20%;">
      <p style="position: absolute; bottom: 15%;font-family:DroidSansFallback; font-size: 12px;color:rgba(102,102,102,1);width: 100%;">登录即表示您同意用户协议</p>
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
      },
      login_btn:{
        backgroundImage: "url(" + require("../assets/image/login_btn.png") + ")"
      },
    }
  },
  mounted () {
       console.log('loginvue')
  },
  methods:{
    filmItemClick(item){

    },
    loginTo(){
      window.location = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5fa3f8e364176f5a&redirect_uri=http%3a%2f%2fapi.momole.com.cn%2fwawaji%2findex.html&response_type=code&scope=snsapi_base&state=123#wechat_redirect"
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"

  .login_btn
    width: 60%
    background-repeat: no-repeat
    background-size: 100% 100%
    height: 40px
    border: none
    background-color: transparent

</style>
