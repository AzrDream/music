<template>
  <Header class="header">
    <div slot="left" class="header-left" @click.stop="back"></div>
    <ul slot="center" class="header-title">
      <li :class="{'active' : switchNum === 0}" @click.stop="switchItem(0)">我喜欢的</li>
      <li :class="{'active' : switchNum === 1}" @click.stop="switchItem(1)">最近听的</li>
    </ul>
    <div slot="right" class="header-right"></div>
  </Header>
</template>

<script>
import Header from '../Header'
export default {
  name: 'AccountHeader',
  components: {
    Header
  },
  data () {
    return {
      switchNum: 0
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    switchItem (num) {
      this.switchNum = num
      this.$emit('switchItem', num)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .header{
    .header-left{
      @include bg_img("../../assets/images/back");
    }
    .header-right{
      @include bg_img("../../assets/images/more");
    }
    .header-title{
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #fff;
      border-radius: 10px;
      box-sizing: border-box;
      color: #FFFFFF;
      font-weight: bold;
      @include font_size($font_medium);
      @include no-wrap();
      height: 60px;
      margin-top: 20px;
      li{
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
        &:nth-of-type(1){
          border-right: 1px solid #fff;
        }
        &.active{
          background: rgba(255,255,255,0.3);
        }
      }
    }
  }
</style>
