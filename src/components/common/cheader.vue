<template>
  <div class="headerBox">
    <div class="imgBox" @click="change">
      <img src="../../assets/logo.png"/>
    </div>
    <span>云电吧后台管理</span>
    <!--<i class="el-icon-menu"></i>-->
  </div>
</template>

<script>
import Bus from '../../bus.js'
export default {
  name: 'cheader',
  data () {
    return {
      isBoolean: false
    }
  },
  methods: {
    change: function () {
      console.log(this.isBoolean)
      this.isBoolean = !this.isBoolean
      Bus.$emit('val', this.isBoolean)
    }
  }
}
</script>

<style lang="scss" scoped>
  .headerBox{
    overflow:hidden;
    padding:0 20px;
    .imgBox, span, i{
      float:left;
      display: block;
    }
    .imgBox{
      margin-top: 10px;
      img{
        width: 50px;
        height: 40px;

      }
    }
    span{
      font-size:22px;
      height:60px;
      line-height: 60px;
      color:#fff;
      margin-left:20px;
    }
    i{
      font-size:24px;
      height: 60px;
      line-height: 60px;
      margin-left: 10px;
      color:#fff;
    }
  }
</style>
