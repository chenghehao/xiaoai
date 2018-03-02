<template>
  <div>
    <div class="main clearFix">
      <div class="headx">
        <div class="head">
          <span class="rightBorder">购物车(0)</span>
          <span class="rightBorder">我的订单</span>
          <span class="rightBorder">APP下载</span>
          <span>帮助中心</span>
        </div>
      </div>
      <div class="conent">
        <div class="logo"><img src="../assets/images/logo.png" alt=""></div>
        <div class="sraech">
          <input type="text" placeholder="搜索课程">
          <button>搜索</button>
        </div>
        <div class="ring">
            <button class="register">登录</button>
            <button class="login">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@width:1180px;
.clearFix:after{
  content: '';
  display: block;
  clear: both;
}
.main{
  width: @width;
  height: 135px;
  margin: 0 auto;
}
.headx{
  width: 100%;
  height: 30px;
}
.head{
  height: 30px;
  width: 320px;
  float: right;
  word-spacing: -5px;
  span{
    width: 79px;
    display: inline-block;
    height: 15px;
    line-height: 15px;
    text-align: center;
    margin-top: 7px;
    font-size: 13px;
    color: #7a7a7a;
    // background-color: rgb(131, 206, 250);
  }
  .rightBorder{
    border-right: 1px solid #7a7a7a;
  }
}
.conent{
  width: 100%;
  height: 81px;
  padding-top: 24px;
  // background-color: rgb(182, 245, 169);
  .logo{
    width: 382px;
    height: 44px;
    float: left;
  }
  .sraech{
    width: 442px;
    height: 39px;
    padding-top: 5px;
    float: left;
    margin-left: 97px;
    // background-color: cornflowerblue;
    input{
      width: 367px;
      height: 33px;
      border: 1px solid #ff9800;
      outline: none;
      text-indent: 10px;
      vertical-align: top;
    }
    button{
      width: 66px;
      height: 37px;
      cursor: pointer;
      vertical-align: top;
      padding: 0;
      margin: 0;
      font-size: 14px;
      margin-left: -5px;
      color: white;
      border: 1px solid #f29b76;
      outline: none;
      background-color: #ff9800;
    }
  }
  .ring{
  width: 145px;
  height: 36px;
  float: right;
  margin-top: 5px;
  }
  .register{
    width: 70px;
    height: 34px;
    border: 1px solid #ff9800;
    background-color: #ff9800;
    vertical-align: top;
    margin-right: -5px;
    font-size: 14px;
    outline: none;
    color: white;
    cursor: pointer;
  }
  .login{
    width: 70px;
    height: 34px;
    font-size: 14px;
    color: #666666;
    border: 1px solid #c9c6c6;
    outline: none;
    cursor: pointer;
  }
}

</style>
