<template>
  <div class="mainx">
    <div class="main clearFix">
      <ul class="tab">
        <li v-for="(item,index) in tabs" v-bind:class="[index==flag?'on':'']" v-on:click='light(index)'>
          <i :class="item.cll"></i>
          {{item.name}}
          </li>
      </ul>
      <div class="tingke" v-if="flag==0">
        <div class="chuji">
          <div class="title">
            <span>初级课程</span>
          </div>
          <div class="detail">

            <router-link v-for="(item,index) in datails"  to="/detail/Detail">
            <div class="div">
              <div class="div1">
                <img :src='item.lianjie' alt="">
              </div>
              <div class="div2">{{item.name}}</div>
              <div class="div3">
                <span class="span1">{{item.renshu}}人 购买</span>
                <span class="span2">¥{{item.price}}</span>
              </div>
            </div>
            </router-link>

          </div>
        </div>
        <div class="chuji">
          <div class="title">
            <span>中级课程</span>
          </div>
          <div class="detail">

            <router-link v-for="(item,index) in datails"  to="/detail/Detail">
            <div class="div">
              <div class="div1">
                <img :src='item.lianjie' alt="">
              </div>
              <div class="div2">{{item.name}}</div>
              <div class="div3">
                <span class="span1">{{item.renshu}}人 购买</span>
                <span class="span2">¥{{item.price}}</span>
              </div>
            </div>
            </router-link>

          </div>
        </div>
      </div>
      <div class="tingke" v-if="flag==1">
        <div class="chuji">
          <div class="title">
            <span>初级课程</span>
          </div>
          <div class="detail">

            <router-link v-for="(item,index) in datails"  to="/detail/Detail">
            <div class="div">
              <div class="div1">
                <img :src='item.lianjie' alt="">
              </div>
              <div class="div2">{{item.name}}</div>
              <div class="div3">
                <span class="span1">{{item.renshu}}人 购买</span>
                <span class="span2">¥{{item.price}}</span>
              </div>
            </div>
            </router-link>

          </div>
        </div>
        <div class="chuji">
          <div class="title">
            <span>中级课程</span>
          </div>
          <div class="detail">

            <router-link v-for="(item,index) in datails"  to="/detail/Detail">
            <div class="div">
              <div class="div1">
                <img :src='item.lianjie' alt="">
              </div>
              <div class="div2">{{item.name}}</div>
              <div class="div3">
                <span class="span1">{{item.renshu}}人 购买</span>
                <span class="span2">¥{{item.price}}</span>
              </div>
            </div>
            </router-link>

          </div>
        </div>
      </div>
      <div class="xuanke" v-if="flag==2">我是选课中心</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'center',
  data(){
    return{
       msg: 'Welcome to Your Vue.js App',
       flag:0,
       tabs:[
         {
           name:'试听课程',
           cll:'el-icon-service'
         },
          {
           name:'听课中心',
           cll:'el-icon-caret-right'
         },
          {
           name:'选课中心',
           cll:'el-icon-date'
         },
       ],
       datails:[
         {
           lianjie:'../../../../static/web.png',
           name:'Web全栈开发',
           renshu:'394',
           price:'2499.00'
         },
         {
           lianjie:'../../../../static/web.png',
           name:'Web全栈开发',
           renshu:'394',
           price:'2499.00'
         },
         {
           lianjie:'../../../../static/web.png',
           name:'Web全栈开发',
           renshu:'394',
           price:'2499.00'
         },
         {
           lianjie:'../../../../static/web.png',
           name:'Web全栈开发',
           renshu:'394',
           price:'2499.00'
         },
         {
           lianjie:'../../../../static/web.png',
           name:'Web全栈开发',
           renshu:'394',
           price:'2499.00'
         },
         {
           lianjie:'../../../../static/web.png',
           name:'Web全栈开发',
           renshu:'394',
           price:'2499.00'
         },
         {
           lianjie:'../../../../static/web.png',
           name:'Web全栈开发',
           renshu:'394',
           price:'2499.00'
         },
         {
           lianjie:'../../../../static/web.png',
           name:'Web全栈开发',
           renshu:'394',
           price:'2499.00'
         },
       ]
    }
  },
  mounted:function () {

  },
  methods:{
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
a{
  text-decoration: none;
  color: black;
}
ul{
padding: 0;
margin: 0;
}
li{
  list-style: none;
}
i{
  font-style: normal;
}
.mainx{
  width: 100%;
  height: auto;
  padding: 18px 0 78px 0;
  background-color: #e9eaee;
}
.main{
  width: 1182px;
  height: 852px;
  margin: 0 auto;
}
.on{
  color: #ff9800;
  background-color: white;
}
.tab{
  width: 198px;
  height: 361px;
  border: 1px solid #e1e1e1;
  border-top: 3px solid #ff9800;
  background-color: #f5f5f5;
  float: left;
  li{
    height: 41px;
    line-height: 41px;
    cursor: pointer;
    text-indent: 15px;
  }
  li:hover{
    color: #ff9800;
    background-color: white;
  }
}
.shiting{
  width: 959px;
  height: 850px;
  float: right;
  border: 1px solid #e2e2e3;
  background-color: white;
}
.tingke{
  width: 959px;
  height: 850px;
  float: right;
  border: 1px solid #e2e2e3;
  background-color: white;
  .chuji{
    width: 921px;
    height: 427px;
    padding: 0 19px;
    // background-color: rgb(217, 255, 178);
    .title{
      width: 100%;
      height: 45px;
      line-height: 45px;
      span{
        display: inline-block;
        height: 20px;
        line-height: 20px;
        text-indent: 7px;
        border-left: 4px solid #ff9800;
      }
    }
    .detail{
      width: 100%;
      height: 382px;
      display: flex;
      flex-wrap: wrap;
      justify-content:space-between;
      // background-color: #e2e2e3;
      .div{
        width: 218px;
        height: 191px;
        // background-color: coral;
        .div1{
          width: 218px;
          height: 123px;
        }
        .div2{
          width: 218px;
          height: 32px;
          line-height: 32px;
          font-size: 14px;
        }
        .div3{
          width: 218px;
          height: 20px;
          line-height: 20px;
          // background-color: fuchsia;
          .span1{
            width: auto;
            height: 20px;
            line-height: 20px;
            display: inline-block;
            float: left;
            font-size: 12px;
            color: #9e9c9a;
          }
          .span2{
            width: auto;
            height: 20px;
            line-height: 20px;
            display: inline-block;
            float: right;
            color: red;
          }
        }
      }
    }
  }
}
.xuanke{
  width: 959px;
  height: 850px;
  float: right;
  border: 1px solid #e2e2e3;
  background-color: white;
}
</style>
