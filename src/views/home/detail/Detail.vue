<template>
  <div class="mainx">
    <div class="main">
      <div class="title">
        全部课程 > 人力 <span>> 暗调个性人像后期调色技巧</span>
      </div>
      <div class="detail clearFix">
        <router-link to="/play/Play">
        <div class="div1">
          <img src="../../../assets/images/ps.png" alt="">
        </div>
        </router-link>
        <div class="div2">
          <div class="head">
            {{datas.name}}
            <i class="i1">
              <img src="../../../assets/images/ye.png" alt="">
            </i>
            <i class="i1">
              <img src="../../../assets/images/fenxiang.png" alt="">
            </i>
          </div>
          <div class="minute1 minute">
            <span>总课次:<i>{{datas.keshi}} 共{{datas.keshi}}课时</i></span>
            <span class="sp2">主讲教师:<i>{{datas.teacher}}</i></span>
          </div>
          <div class="minute1">
            <span>开课时间：<i>{{datas.time}}</i></span>
            <span class="sp3">报名时间：<i>{{datas.jiezhi}}</i></span>
          </div>
          <div class="minute3">
            价格：<span>¥{{datas.jiage}}</span>
          </div>
          <div class="minute4">支持随到随学，21年09月过期</div>
          <div class="minute5">
            <button class="btn1">立即报名</button>
            <button class="btn2">课程购买</button>
          </div>
        </div>
      </div>
      <div class="content clearFix">
        <div class="left">
          <ul class="nav">
            <li v-for="(item,index) in navs" :class="[flag==index?'on':'']" @click="light(index)">
              {{item.name}}
            </li>
          </ul>
          <div v-if="flag==0" class="div1">
            <div class="title">
              <span></span> 课程详情
            </div>
            <div class="diva">
              <img src="../../../assets/images/liangdian.png" alt="">
            </div>
            <div class="divb">
              <img src="../../../assets/images/shiyong.png" alt="">
            </div>
            <div class="divc">
              <img src="../../../assets/images/liangdian2.png" alt="">
            </div>
            <div class="divb">
              <img src="../../../assets/images/shiyong.png" alt="">
            </div>
          </div>
          <div v-if="flag==1" class="div1">
            课程大纲
          </div>
          <div v-if="flag==2" class="div1">
            课程讲义
          </div>
          <div v-if="flag==3" class="div1">
            课程介绍
          </div>
          <div v-if="flag==4" class="div1">
            课程评论
          </div>
        </div>
        <div class="right">
          <div class="div1">
            <div class="title">
              <span></span>主讲老师
            </div>
            <div class="teacher1 clearFix">
              <div class="head">
                <div class="head1">
                  <img src="../../../assets/images/head.jpg" alt="">
                </div>
              </div>
              <div class="xinxi">
                <p class="p1">王语</p>
                <p class="p2">长期从事考研政治课讲授和考研课讲授和课讲授和课讲授和</p>
              </div>
            </div>
            <div class="teacher1 teacher2 clearFix">
              <div class="head">
                <div class="head1">
                  <img src="../../../assets/images/head.jpg" alt="">
                </div>
              </div>
              <div class="xinxi">
                <p class="p1">李清华</p>
                <p class="p2">长期从事考研政治课讲授和考研课讲授和课讲授和课讲授和</p>
              </div>
            </div>
          </div>
          <div class="div2">
            <div class="title">
              <span></span>加群沟通
            </div>
            <div class="qun clearFix">
              <div class="qun1">
                <div class="div1">
                  <div class="p p1">
                    <i>
                      <img src="../../../assets/images/lianxi.png" alt="">
                    </i>
                    逢考必过1群
                  </div>
                  <div class="p p2">群号：123456789</div>
                </div>
                <div class="div1">
                  <div class="p p1">
                    <i>
                      <img src="../../../assets/images/lianxi.png" alt="">
                    </i>
                    逢考必过2群
                  </div>
                  <div class="p p2">群号：123456789</div>
                </div>
              </div>
              <div class="qun2">
                <div class="div1">
                  <img src="../../../assets/images/erweima.png" alt="">
                </div>
                <div class="div2">
                  (扫码加入)
                </div>
              </div>
            </div>
          </div>
          <div class="tuijian">
            <div class="title">
              <span></span> 课程推荐
            </div>
            <div class="ke1">
              <div class="kea">
                <img src="../../../assets/images/pss.png" alt="">
              </div>
              <div class="keb">
                暗调个性人像后期调色技巧
              </div>
              <div class="kec">
                <span class="sp1">开课时间：2017.12.10</span>
                <span class="sp2">李阳 李钟硕</span>
              </div>
            </div>
            <div class="ke1">
              <div class="kea">
                <img src="../../../assets/images/meigong.png" alt="">
              </div>
              <div class="keb">
                暗调个性人像后期调色技巧
              </div>
              <div class="kec">
                <span class="sp1">开课时间：2017.12.10</span>
                <span class="sp2">李阳 李钟硕</span>
              </div>
            </div>
          </div>
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
      msg: 'Welcome to Your Vue.js App',
      datas:{
        name:'暗调个性人像后期调色技巧',
        keshi:'6',
        teacher:'魏爱娟',
        time:'2017-10-21 13:00',
        jiezhi:'2017-11-11 23:59',
        jiage:'2400.00'
      },
      navs:[
        {
          name:'课程详情'
        },
        {
          name:'课程大纲'
        },
         {
          name:'讲师介绍'
        },
        {
          name:'课程讲义(10)'
        },
        {
          name:'课程评论(10)'
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
  background-color: #e9eaed;
}
.main{
  width: @width;
  height: auto;
  margin: 0 auto;
}
.title{
  width: 100%;
  height: 59px;
  line-height: 59px;
  font-size: 13px;
  color: #909090;
  span{
    color: black;
  }
}
.detail{
  width: 1140px;
  height: 307px;
  border: 1px solid #e5e5e5;
  background-color: white;
  padding: 19px;
  .div1{
    width: 548px;
    height: 308px;
    float: left;
  }
  .div2{
    width: 572px;
    height: 308px;
    float: right;
    .head{
      width: 100%;
      height: 28px;
      line-height: 28px;
      font-size: 22px;
      color: black;
      .i1{
        display: inline-block;
        vertical-align: top;
        width: 26px;
        height: 25px;
        position: relative;
        left: 240px;
        top: 2px;
      }
    }
    .minute{
      margin-top: 13px;
    }
    .minute1{
      width: 100%;
      height: 28px;
      line-height: 28px;
      font-size: 13px;
      color: #9b9b9b;
      i{
        color: #666666;
      }
      .sp2{
        margin-left: 160px;
      }
      .sp3{
        margin-left: 83px;
      }
    }
    .minute3{
      width: 100%;
      height: 35px;
      line-height: 35px;
      font-size: 13px;
      color: #9b9b9b;
      background-color: #f4f4f4;
      margin-top: 7px;
      span{
        font-size: 15px;
        color: red;
      }
    }
    .minute4{
      width: 100%;
      height: 68px;
      line-height: 68px;
      font-size: 13px;
    }
    .minute5{
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      margin-top: 51px;
      button{
        outline: none;
        width: 149px;
        height: 48px;
        border: none;
        font-size: 20px;
      }
      .btn1{
        color: white;
        background-color: #ff9800;
        border-radius: 4px;
        margin-right: 14px;
      }
      .btn2{
        background-color: white;
        color: #666666;
        border: 1px solid #cfcfcf;
        border-radius: 4px;
      }
    }
  }
}
.content{
  width: 1178px;
  height: 1190px;
  margin: 0 auto;
  margin-top: 32px;
  border: 1px solid #e5e5e5;
  // background-color: white;
  .left{
    width: 780px;
    height: 1190px;
    background-color: white;
    float: left;
    .nav{
      width: 100%;
      height: 49px;
      border-bottom: 1px solid #e5e5e5;
      li{
        display: inline-block;
        width: auto;
        height: 47px;
        padding: 0 15px;
        background-color: white;
        line-height: 47px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }
      .on{
        height: 48px;
        border-top: 2px solid #ff9800;
        color: #ff9800;
        background-color: #f4f4f4;
      }
    }
    .div1{
      width: 734px;
      height: 1141px;
      padding: 0 23px;
      .title{
        width: 100%;
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        color: black;
        span{
          height: 16px;
          width: 8px;
          display: inline-block;
          border-left: 2px solid #ff9800;
          position: relative;
          top: 3px;
        }
      }
      .diva{
        width: 733px;
        height: 278px;
      }
      .divb{
        width: 733px;
        height: 268px;
      }
      .divc{
        width: 733px;
        height: 250px;
      }
    }
  }
  .right{
    width: 370px;
    height: 1190px;
    float: right;
    .div1{
      width: 330px;
      height: 266px;
      padding: 0 20px;
      background-color: white;
      .title{
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        color: black;
        border-bottom: 1px solid #e5e5e5;
        span{
          height: 16px;
          width: 8px;
          display: inline-block;
          border-left: 2px solid #ff9800;
          position: relative;
          top: 3px;
        }
      }
      .teacher1{
        width: 100%;
        height: 99px;
        border-bottom: 1px solid #e5e5e5;
        .head{
          width: 109px;
          height: 74px;
          padding-top: 25px;
          float: left;
          .head1{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin: 0 auto;
            overflow: hidden;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
        .xinxi{
        width: 219px;
        height: 69px;
        float: right;
        padding-top: 30px;
        p{
          height: 26px;
          width: 100%;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          margin: 0px;
        }
        .p1{
          font-size: 18px;
        }
        .p2{
          font-size: 13px;
          color: #999999;
        }
        }
      }
      .teacher2{
        border: none;
      }
    }
    .div2{
      width: 324px;
      height: 231px;
      background-color: white;
      margin-top: 30px;
      border-top: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
      padding: 0 23px;
      .title{
        width: 100%;
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        color: black;
        border-bottom: 1px solid #e5e5e5;
        span{
          height: 16px;
          width: 8px;
          display: inline-block;
          border-left: 2px solid #ff9800;
          position: relative;
          top: 3px;
        }
      }
      .qun{
        width: 100%;
        height: 170px;
      }
      .qun1{
        width: 196px;
        height: 170px;
        float: left;
        .div1{
          width: 100%;
          height: 42px;
          padding: 0;
          margin-top: 27px;
          p{
            width: 100%;
            height: 21px;
            line-height: 21px;
            margin: 0;
            font-size: 13px;
          }
          .p1{
            color: #ff9800;
            i{
              width: 20px;
              height: 15px;
              position: relative;
              top: 2px;
              display: inline-block;
            }
            img{
              width: 100%;
              height: 100%;
            }
          }
          .p2{
            color: #9b9b9b;
            text-indent: 27px;
          }
        }
      }
      .qun2{
        width: 125px;
        height: 170px;
        float: right;
        .div1{
          width: 112px;
          height: 112px;
          padding: 0;
          margin-top: 15px;
        }
        .div2{
          width: 112px;
          height: 26px;
          text-indent: 20px;
          line-height: 26px;
          color: #888888;
          margin: 0;
          padding: 0;
          border: none;
          font-size: 15px;
        }
      }
    }
  }
}
.tuijian{
  width: 330px;
  height: 627px;
  margin-top: 35px;
  background-color: white;
  padding: 0 20px;
  .title{
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        color: black;
        border-bottom: 1px solid #e5e5e5;
        span{
          height: 16px;
          width: 8px;
          display: inline-block;
          border-left: 2px solid #ff9800;
          position: relative;
          top: 3px;
        }
      }
  .ke1{
    width: 100%;
    height: 270px;
    margin-top: 20px;
    .kea{
      width: auto;
      height: auto;
    }
    .keb{
      width: 100%;
      height: 34px;
      line-height: 34px;
      font-size: 13px;
    }
    .kec{
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 13px;
      color: #777777;
      position: relative;
      .sp2{
        position: absolute;
        right: 0px;
      }
    }
  }
}
</style>
