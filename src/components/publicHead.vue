<template>
  <div>
    <div class="mainx">
      <ul class="main">
        <router-link v-for="(item,index) in navs"  :to=item.path   exact>
          <li :index="item.index" v-bind:class="[index==flag?'on':'']" v-on:click='light(index)'>{{item.name}}</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navs:[
          {
            name:'首页',
            path:"/",
            index:0
          },
          {
            name:'咨询',
            path:"/information/Information",
            index:1
          },
          {
            name:'听课',
            path:"/attend/center",
            index:2
          },
          {
            name:'做题',
            path:"/exercise/Exercise",
            index:3
          },
          {
            name:'问答',
            path:"/answers/Answers",
            index:4
          },
          {
            name:'小艾商城',
            path:"/shopping/Shopping",
            index:5
          },
          {
            name:'个人中心',
            path:"/personal/Personal",
            index:6
          },
          {
            name:'关于我们',
            path:"/about/About",
            index:7
          },
        ],
        flag:0
    }
  },
  methods: {
    light:function(index){
      this.flag=index;
    }
  },
}
</script>

<style lang="less" scoped>
@width:1180px;
.clearFix:after{
  content: '';
  display: block;
  clear: both;
}
.mainx{
  width: 100%;
  height: 43px;
  background-color: #111111;
}
.main{
  width: @width;
  height: 43px;
  margin: 0 auto;
  padding: 0;
  // background-color: cornflowerblue;
  text-align: left;
  li{
    width: auto;
    height: 43px;
    line-height: 43px;
    text-align: center;
    display: inline-block;
    list-style: none;
    padding-left: 25px;
    padding-right: 25px;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }
  li:hover{
    background-color: #ff9800;
  }
}
.on{
  background-color: #ff9800;
}
</style>
