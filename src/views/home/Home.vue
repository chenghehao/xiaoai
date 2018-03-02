<template>
  <div class="home">
    <headFlex></headFlex>
    <publicHead></publicHead>
    <router-view></router-view>
    <publicFoot></publicFoot>
  </div>
</template>
<script>
  import headFlex from './../../components/HeadFlex.vue'
  import publicFoot from './../../components/PublicFoot.vue'
  import publicHead from '../../components/PublicHead.vue'
  export default {
    name:'Home',
    data(){
      return {
        msg:'这是主页页面'
      }
    },
    methods: {

    },
    components:{ headFlex,publicHead,publicFoot}
  }

</script>
<style lang="less">
  /*  @color:#005ca2*/
  @width:1180px;
  @fixcolor-bg:#e1e1e1;
</style>
