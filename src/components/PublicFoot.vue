<template>
  <div class="mainx">
    <div class="main clearFix">
      <div class="buy">
        <div class="div1">如何购买</div>
        <div class="div2">
          <p>新手注册</p>
          <p>购买流程</p>
          <p>购书流程</p>
        </div>
      </div>
      <div class="course">
        <div class="div1">课程与图书</div>
        <div class="div2">
          <p>课程简介</p>
          <p>课程升级去更换</p>
          <p>图书赠品与附加服务</p>
        </div>
      </div>
      <div class="after">
        <div class="div1">售后服务</div>
        <div class="div2">
          <p>答疑帮助</p>
          <p>在线题库帮助</p>
          <p>随书赠卡激活流程</p>
        </div>
      </div>
      <div class="phone">
        <div class="div1">24小时服务热线</div>
        <div class="div2">400-627-5566 400-627-5566</div>
      </div>
      <div class="gongzhong">
         <div class="div1">关注我们</div>
         <div class="div2"><img src="../assets/images/gongzhong.png" alt=""></div>
         <div class="div3">小艾财税公众号</div>
      </div>
      <div class="fuwu">
        <div class="div2"><img src="../assets/images/fuwu.png" alt=""></div>
        <div class="div3">小艾会计职称考试服务号</div>
      </div>
      <div class="weidian">
        <div class="div2"><img src="../assets/images/weidian.png" alt=""></div>
        <div class="div3">小艾官微店</div>
      </div>
    </div>
  </div>
</template>
<script>

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
  height: 180px;
  background-color: #333333;
}
.main{
  width: @width;
  height: 138px;
  padding: 21px 0;
  margin: 0 auto;
}
.buy{
  width: 181px;
  height: 138px;
  border-right: 1px solid #666666;
  float: left;
  .div1{
    color: white;
    font-size: 16px;
    width: 100%;
    height: 27px;
    line-height: 27px;
  }
  .div2{
    height: 81px;
    width: 100%;
    margin-top: 18px;
    p{
      line-height: 27px;
      height: 27px;
      margin: 0px;
      font-size: 13px;
      color: white;
    }
  }
}

.course{
  width: 231px;
  height: 138px;
  border-right: 1px solid #666666;
  float: left;
  text-indent: 54px;
  .div1{
    color: white;
    font-size: 16px;
    width: 100%;
    height: 27px;
    line-height: 27px;
  }
  .div2{
    height: 81px;
    width: 100%;
    margin-top: 18px;
    p{
      line-height: 27px;
      height: 27px;
      margin: 0px;
      font-size: 13px;
      color: white;
    }
  }
}

.after{
  width: 220px;
  height: 138px;
  float: left;
  text-indent: 54px;
  .div1{
    color: white;
    font-size: 16px;
    width: 100%;
    height: 27px;
    line-height: 27px;
  }
  .div2{
    height: 81px;
    width: 100%;
    margin-top: 18px;
    p{
      line-height: 27px;
      height: 27px;
      margin: 0px;
      font-size: 13px;
      color: white;
    }
  }
}
.phone{
  width: 276px;
  height: 138px;
  float: left;
  .div1{
    color: white;
    font-size: 16px;
    width: 100%;
    height: 27px;
    line-height: 27px;
  }
  .div2{
    height: 81px;
    width: 100%;
    margin-top: 18px;
    color: white;
    font-size: 16px;
    word-spacing: 20px;
    font-weight: bold;
  }
}
.gongzhong{
  width: 95px;
  height: 138px;
  float: left;
  .div1{
    color: white;
    font-size: 16px;
    width: 100%;
    height: 27px;
    line-height: 27px;
    text-align: center;
  }
  .div2{
    width: 69px;
    height: 69px;
    margin: 0 auto;
    margin-top: 6px;
  }
  .div3{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: white;
    text-align: center;
  }
}
.fuwu{
  width: 95px;
  height: 138px;
  float: left;
  .div2{
    width: 69px;
    height: 69px;
    margin: 0 auto;
    margin-top: 33px;
  }
  .div3{
    width: 100%;
    height: 30px;
    padding-top: 4px;
    line-height: 15px;
    font-size: 12px;
    color: white;
    text-align: center;
  }
}
.weidian{
  width: 80px;
  height: 138px;
  float: left;
  .div2{
    width: 69px;
    height: 69px;
    margin: 0 auto;
    margin-top: 33px;
  }
  .div3{
    width: 100%;
    height: 30px;
    // padding-top: 4px;
    line-height: 30px;
    font-size: 12px;
    color: white;
    text-align: center;
  }
}
</style>
