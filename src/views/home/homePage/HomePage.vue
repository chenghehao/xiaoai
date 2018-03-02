<template>
  <div class="mainx">
    <div class="main">
      <div class="head">
        <div class="headx">
         <!--新闻资讯部分-->
        <div class="left">
          <div class="tishi">
            <i></i> 小艾头条
          </div>
          <ul class="neirong">
            <li v-for="item in navs">{{item.text}}</li>
          </ul>
        </div>
        <!--轮播图部分-->
        <div class="right">
          <div class="block">
             <el-carousel height="265px">
                 <el-carousel-item v-for="it in teacher">
                   <img :src="it.lianjie" alt="">
                   </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        </div>
         <!--名师部分部分-->
         <div class="teacher clearFix">
           <img src="../../../assets/images/dongao.png" alt="">
           <span class="zuo"><i @click="leftShift"></i></span>
           <div class="mingshix">
            <ul class="mingshi" ref="mingshi">
              <li v-for="ite in teacher">
                <div class="div1">
                  <img :src="ite.lianjie" alt="">
                </div>
                <div class="div2">
                  {{ite.name}}
                  <i></i>
                </div>
                </li>
            </ul>
           </div>
           <span class="you"><i @click="rightShift"></i></span>
         </div>
      </div>
      <div class="details">
        <!--热点资讯-->
        <div class="hot clearFix">
          <div class="div1">
            <div class="title">
              <i></i>
              <span>热点资讯</span>
              <span class="sp2">更多></span>
            </div>
            <ul class="minute">
              <li v-for="(item,index) in xinwen" :class="[one==index?'on':'']">
                {{item.text}}
                <span class="sp">{{item.time}}</span>
                </li>
            </ul>
          </div>
          <div class="div1 div2">
            <div class="title">
              <i id="divi"></i>
              <span id="hot">热点资讯</span>
              <span class="sp2">更多></span>
            </div>
            <ul class="minute">
              <li v-for="(item,index) in xinwen" :class="[one==index?'on':'']">
                {{item.text}}
                <span class="sp">{{item.time}}</span>
                </li>
            </ul>
          </div>
        </div>
        <!--热点资讯-->
        <div class="course">
          <div class="title">
            <i></i>
            <span>热门课程</span>
            <span class="spp">
              <dfn>初级课程</dfn>／高级课程
            </span>
          </div>
          <ul class="xiangxi">
            <li>
              <div class="div1">
                <div class="diva">[2018 注会专业]</div>
                <div class="divb">A 精品一班</div>
                <div class="divc">套餐升级 提质不提价</div>
              </div>
              <div class="div2">
                <div class="diva">
                  <span>¥480</span>/科
                </div>
              </div>
            </li>
            <li>
              <div class="div1">
                <div class="diva">[2018 注会专业]</div>
                <div class="divb">A 精品一班</div>
                <div class="divc">2考季学习期 过关保障</div>
              </div>
              <div class="div2">
                <div class="divb">
                  <span>3科及以上联报<i>¥550</i>/科</span>
                  <span>2科联报<i>¥700</i>/科</span>
                  <span>单科购买<i>¥750</i>/科</span>
                </div>
              </div>
            </li>
            <li>
               <div class="div1">
                <div class="diva">[2018 注会专业]</div>
                <div class="divb">C 高效通关班</div>
                <div class="divc">直击应试 高效备考</div>
              </div>
              <div class="div2">
                <div class="divb">
                  <span>3科及以上联报<i>¥550</i>/科</span>
                  <span>2科联报<i>¥700</i>/科</span>
                  <span>单科购买<i>¥750</i>/科</span>
                </div>
              </div>
            </li>
            <li>
              <div class="div1">
                <div class="diva">[2018 注会专业]</div>
                <div class="divb color">B+C 畅听无忧班</div>
                <div class="divc"><span>5</span>年<span>6</span>科</div>
              </div>
              <div class="div2">
                <div class="divd">
                  惊爆价<span>¥3500</span>/6科/5考季保障
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!--热销图书-->
        <div class="course books">
          <div class="title">
            <i></i>
            <span>热销图书</span>
          </div>
          <ul class="xiangxi">
            <li class="li">
              <div class="tu1">
                <img src="../../../assets/images/kuaiji.png" alt="">
              </div>
              <div class="text">
                <span class="span1">[预售] 2018年注会旗舰套装组合</span>
                <span class="span1">(轻一+轻二+教材 会计)</span>
                <span class="span2">¥126.4 <s>¥184</s></span>
              </div>
            </li>
            <li class="li">
              <div class="tu1">
                <img src="../../../assets/images/kuaiji.png" alt="">
              </div>
              <div class="text">
                <span class="span1">[预售] 2018年注会旗舰套装组合</span>
                <span class="span1">(轻一+轻二+教材 会计)</span>
                <span class="span2">¥126.4 <s>¥184</s></span>
              </div>
            </li>
            <li class="li">
              <div class="tu1">
                <img src="../../../assets/images/kuaiji.png" alt="">
              </div>
              <div class="text">
                <span class="span1">[预售] 2018年注会旗舰套装组合</span>
                <span class="span1">(轻一+轻二+教材 会计)</span>
                <span class="span2">¥126.4 <s>¥184</s></span>
              </div>
            </li>
            <li class="li">
              <div class="tu1">
                <img src="../../../assets/images/kuaiji.png" alt="">
              </div>
              <div class="text">
                <span class="span1">[预售] 2018年注会旗舰套装组合</span>
                <span class="span1">(轻一+轻二+教材 会计)</span>
                <span class="span2">¥126.4 <s>¥184</s></span>
              </div>
            </li>
          </ul>
        </div>
        <!--精华问答-->
        <div class="hot clearFix">
          <div class="div1">
            <div class="title">
              <i></i>
              <span>精华问答</span>
              <span class="sp2">更多></span>
            </div>
            <ul class="minute">
              <li v-for="(item,index) in xinwen" :class="[one==index?'on':'']">
                {{item.text}}
                <span class="sp">{{item.time}}</span>
                </li>
            </ul>
          </div>
          <div class="div1 div2">
            <div class="title">
              <i id="divi"></i>
              <span id="hot">干货下载</span>
              <span class="sp2">更多></span>
            </div>
            <ul class="minute">
              <li v-for="(item,index) in xinwen" :class="[one==index?'on':'']">
                {{item.text}}
                <span class="sp">{{item.time}}</span>
                </li>
            </ul>
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
      left:0,
      max:'',
      one:0,
      navs:[
          {
            text:'[初级]直播：2018年直播课来了'
          },
          {
            text:'[初级]直播：2018年直播课来了'
          },
          {
            text:'[初级]直播：2018年直播课来了'
          },
          {
            text:'[初级]直播：2018年直播课来了'
          },
          {
            text:'[初级]直播：2018年直播课来了'
          },
          {
            text:'[初级]直播：2018年直播课来了'
          },
          {
            text:'[初级]直播：2018年直播课来了'
          },
        ],
        teacher:[
          {
            name:'范永亮',
            lianjie:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519712198586&di=8d4c481c5e3171d8e484f98eed9dee14&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201505%2F10%2F20150510002613_MmRsY.jpeg'
          },
          {
            name:'赵耀',
            lianjie:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519712198586&di=8d4c481c5e3171d8e484f98eed9dee14&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201505%2F10%2F20150510002613_MmRsY.jpeg'
          },
          {
            name:'黄洁洵',
            lianjie:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519712198586&di=8d4c481c5e3171d8e484f98eed9dee14&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201505%2F10%2F20150510002613_MmRsY.jpeg'
          },
          {
            name:'吕鹏',
            lianjie:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519712198586&di=8d4c481c5e3171d8e484f98eed9dee14&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201505%2F10%2F20150510002613_MmRsY.jpeg'
          },
          {
            name:'小明',
            lianjie:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519712198586&di=8d4c481c5e3171d8e484f98eed9dee14&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201505%2F10%2F20150510002613_MmRsY.jpeg'
          },
          {
            name:'小红',
            lianjie:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519712198586&di=8d4c481c5e3171d8e484f98eed9dee14&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201505%2F10%2F20150510002613_MmRsY.jpeg'
          }
        ],
        xinwen:[
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
          {
            text:'[考试经验] 注册会计师备考开始，各科目难度排名及备考方法！',
            time:'01/04'
          },
        ],
        flag:0
    }
  },
  methods: {
    light:function(index){
      this.flag=index;
    },
    leftShift:function(){
      this.max=-this.teacher.length*260+1070;
      if(this.left<0){
        this.left+=530;
      }else{
        this.left=this.left;
      }
      this.$refs.mingshi.style.left=this.left+'px';
    },
    rightShift:function(){
      this.max=-this.teacher.length*260+1070;
      if(this.left>this.max){
        this.left-=530;
      }else{
        this.left=this.left;
      }
      this.$refs.mingshi.style.left=this.left+'px';
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
i{
  font-style: normal;
}
.mainx{
  width: 100%;
  height: auto;
  background-color: #e9eaed;
  padding-bottom: 72px;
}
.main{
  width: @width;
  height: auto;
  margin: 0 auto;
}
.head{
  width: 1138px;
  height: 450px;
  padding: 20px;
  background-color: white;
  border: 1px solid #e1e1e1;
  .left{
    width: 270px;
    height: 265px;
    float: left;
    // background-color: rgb(197, 243, 255);
    .tishi{
      width: 100%;
      height: 28px;
      line-height: 28px;
      font-size: 16px;
      color: #ff9f27;
      word-spacing: 10px;
      i{
        display: inline-block;
        width: 24px;
        height: 21px;
        background: url('../../../assets/images/laba.png') no-repeat;
        background-size: 100%;
      }
    }
    .neirong{
      width: 100%;
      height: 235px;
      padding: 0;
      margin: 0;
      overflow: hidden;
      // background-color: coral;
      li{
        height: 33px;
        line-height: 33px;
        list-style: none;
        font-size: 15px;
      }
    }
  }
  .right{
    width: 855px;
    height: 265px;
    float: right;
  }
}
.headx{
  width: 100%;
  height: 265px;
}
.teacher{
  width: 100%;
  height: 160px;
  margin-top: 20px;
  position: relative;
  img{
     float: left;
  }
  .zuo{
    width: 19px;
    height: 162px;
    display: inline-block;
    // margin-left: -4px;
    vertical-align: top;
    position: relative;
    float: left;
    i{
    width: 0;
    height: 0;
    display: inline-block;
    border-style:dotted solid dotted dotted;
    border-color: transparent #fea44e transparent transparent;
    border-width: 8px 8px 8px 0;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    cursor: pointer;
    }
    i:hover{
      border-width: 12px 12px 12px 0;
      transition: 0.2s;
      border-color: transparent #67eaf3 transparent transparent;
    }
  }
  .you{
    width: 19px;
    height: 162px;
    display: inline-block;
    // margin-left: -4px;
    vertical-align: top;
    position: relative;
    float: left;
    i{
    width: 0;
    height: 0;
    display: inline-block;
    border-style:dotted dotted dotted solid;
    border-color: transparent transparent transparent #fea44e;
    border-width: 8px 0 8px 8px;
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    cursor: pointer;
    }
    i:hover{
      border-width: 12px 0 12px 12px;
      transition: 0.2s;
      border-color: transparent transparent transparent #67eaf3;
    }
  }
  .mingshix{
    width: 1060px;
    height: 162px;
    overflow: hidden;
    float: left;
  }
  .mingshi{
    width: auto;
    height: 162px;
    margin: 0;
    padding: 0;
    white-space:nowrap;
    position: relative;
    left: 0px;
    transition: 1s;
    // float: left;
    li{
      list-style: none;
      width: 250px;
      height: 162px;
       margin-right: 20px;
      display: inline-block;
      // background-color: coral;
      .div1{
        width: 250px;
        height: 128px;
        background-color: cornflowerblue;
        img{
          width: 100%;
          height: 100%;;
        }
      }
      .div2{
        width: 248px;
        height: 32px;
        line-height: 32px;
        font-size: 15px;
        text-indent: 10px;
        border: 1px solid #f0f0f0;
        border-top: none;
        position: relative;
        i{
          width: 17px;
          height: 17px;
          display:inline-block;
          position: absolute;
          right: 10px;
          top: 6px;
          background: url('../../../assets/images/erji.png') no-repeat;
        }
      }
    }
  }
}
.details{
  width: 1178px;
  height: 1500px;
  margin: 0 auto;
  background-color: white;
  margin-top: 20px;
  border: 1px solid #e1e1e1;
  .hot{
    width: 100%;
    height: 380px;
    padding-top: 16px;
    // background-color: rgb(176, 255, 169);
    .div1{
      width: 50%;
      height: 380px;
      // background: chartreuse;
      float: left;
      .title{
        width: 100%;
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        font-weight: bold;
        // background-color: rgb(172, 219, 125);
        margin-bottom: 7px;
        span{
          display: inline-block;
          height: 24px;
          width: 100px;
          line-height: 24px;
          vertical-align: top;
        }
        .sp2{
          width: 40px;
          height: 24px;
          display: inline-block;
          line-height: 30px;
          font-size: 12px;
          float: right;
          color: #b2aca0;
        }
        i{
          width: 9px;
          height: 24px;
          display: inline-block;
          background: url('../../../assets/images/huang.png') no-repeat;
          position: relative;
          left: -6px;
        }
      }
      .minute{
        width: 100%;
        height: 349px;
        margin: 0;
        padding: 0;
        // background-color: rgb(255, 196, 155);
        li{
          width: 100%;
          height: 35px;
          line-height: 35px;
          font-size: 13px;
          text-indent: 20px;
          list-style: none;
          .sp{
            width: 40px;
            height: 35px;
            line-height: 35px;
            display: inline-block;
            font-size: 13px;
            text-align: center;
            text-indent: 0px;
            float: right;
            margin-right: 10px;
            color: #7b746e;
          }
        }
        .on{
          color: red;
          font-size: 16px;
        }
      }
    }
    .div2{
      width: 50%;
      height: 380px;
      float: left;
      #divi{
        width: 4px;
        height: 20px;
        display: inline-block;
        background-color: #fea44e;
        background-image: none;
        position: relative;
        top: 2px;
        left: 16px;
      }
      #hot{
        width: 300px;
        display: inline-block;
        text-indent: 16px;
      }
    }
  }
}
.course{
  width: 100%;
  height: 340px;
  .title{
    height: 56px;
    line-height: 56px;
    i{
      width: 9px;
      height: 24px;
      display: inline-block;
      background: url('../../../assets/images/huang.png') no-repeat;
      position: relative;
      left: -6px;
      top: 8px;
     }
     .spp{
       position: relative;
       top: 10px;
       left: 10px;
       font-size: 13px;
     }
     dfn{
       font-style: normal;
       color: #fe9903;
     }
  }
  .xiangxi{
    width: 1158px;
    height: 267px;
    margin: 0;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    li{
      width: 270px;
      height: 254px;
      list-style: none;
      border-top: 2px solid #ff5f01;
      background-color: #edf0f5;
      .div1{
        width: 100%;
        height: 148px;
        border-bottom: 1px solid #d5d8dd;
        .diva{
          height: 28px;
          width: 100%;
          padding-top: 18px;
          text-align: center;
          line-height: 28px;
          font-size: 14px;
        }
        .divb{
          width: 100%;
          height: 33px;
          line-height: 33px;
          text-align: center;
          font-size: 21px;
          color: black;
        }
        .color{
          color: #f7772c;
        }
        .divc{
          width: 100%;
          height: 24px;
          line-height: 24px;
          text-align: center;
          font-size: 14px;
          span{
            color: red;
          }
        }
      }
      .div2{
        width: 100%;
        height: 83px;
        padding-top: 22px;
        .diva{
          width: 157px;
          height: 59px;
          margin: 0 auto;
          line-height: 59px;
          text-align: center;
          font-size: 14px;
          border-left: 1px solid #ff6600;
          border-right: 1px solid #ff6600;
          border-top: 2px solid #f7a774;
          border-bottom: 2px solid #f7a774;
          // background-color: violet;
          span{
            color: red;
          }
        }
        .divb{
          width: 147px;
          height: 59px;
          margin: 0 auto;
          line-height: 19px;
          padding-right: 10px;
          text-align: right;
          font-size: 14px;
          border-left: 1px solid #ff6600;
          border-right: 1px solid #ff6600;
          border-top: 2px solid #f7a774;
          border-bottom: 2px solid #f7a774;
          // background-color: violet;
          span{
            display: block;
            i{
              color: red;
            }
          }
        }
        .divd{
           width: 210px;
          height: 59px;
          margin: 0 auto;
          line-height: 59px;
          text-align: center;
          font-size: 14px;
          border-left: 1px solid #ff6600;
          border-right: 1px solid #ff6600;
          border-top: 2px solid #f7a774;
          border-bottom: 2px solid #f7a774;
          // background-color: violet;
          span{
            color: red;
          }
        }
      }
    }
  }
}
.books{
  margin-bottom: 20px;
  .xiangxi{
    .li{
      width: 268px;
      height: 284px;
      border: 1px solid #ebebeb;
      background-color: white;
      .tu1{
        width: 100%;
        height: 197px;
      }
      .text{
        width: 228px;
        height: 71px;
        padding: 0 20px;
        padding-top: 15px;
        .span1{
          display: block;
          font-size: 14px;
          line-height: 19px;
        }
        .span2{
          display: block;
          font-size: 19px;
          color: red;
          s{
            font-size: 14px;
            color: #beb9b5;
          }
        }
      }
    }
  }
}
</style>
