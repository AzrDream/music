<template>
    <div class="mini-player" v-show="this.isShowMiniPlayer">
      <div class="player-warpper">
        <div class="player-left" @click="showNormalPlayer">
          <img src="https://t14.baidu.com/it/u=2932247180,118236842&fm=179&app=42&size=w931&n=0&f=JPEG&fmt=auto?s=BFA8782356E072BCBF81BC870100E0E1&sec=1653411600&t=a17b37f2ec816232ea5a24a2d8358236" alt="">
          <div class="player-title">
            <h3>演员</h3>
            <p>薛之谦</p>
          </div>
        </div>
        <div class="player-right">
          <div class="play"></div>
          <div class="list" @click.stop="showList"></div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'MiniPlayer',
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer'
    ]),
    showList () {
      this.$emit('showList')
    },
    showNormalPlayer () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    }
  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer'
    ])
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.mini-player{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  .player-warpper{
    width: 100%;
    height: 100%;
    @include bg_color();
    display: flex;
    justify-content: space-between;
    align-items: center;
    .player-left{
      display: flex;
      padding-left: 30px;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
      }
      .player-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3{
          @include font_size($font_medium);
          @include font_color();
        }
        p{
          @include font_size($font_medium_s);
          @include font_color();
        }
      }
    }
    .player-right{
      display: flex;
      align-items: center;
      .play{
        width: 84px;
        height: 84px;
        @include bg_img('../../assets/images/play')
      }
      .list{
        width: 120px;
        height: 120px;
        @include bg_img('../../assets/images/list')
      }
    }
  }
}
</style>
