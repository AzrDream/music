<template>
  <swiper :options="swiperOption" class="banner" v-if="banners.length > 0">
    <swiper-slide v-for="value in banners" :key="value.bannerId" class="item">
      <a :href="value.url">
        <img :src="value.pic" alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Banner',
  data () {
    return {
      swiperOption: {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 1000, // 自动切换的时间间隔，单位ms
          stopOnLastSlide: false, // 当切换到最后一个slide时停止自动切换
          disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay。
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  props: {
    banners: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.banner{
  .item{
    img{
      width: 100%;
      height: 300px;
    }
  }
}
</style>
<style lang="scss">
  @import "../../assets/css/mixin";
  .banner{
    .swiper-pagination-bullet{
      width: 16px;
      height: 16px;
      background: #fff;
      opacity: 1;
    }
    .swiper-pagination-bullet-active{
      @include bg_color();
    }
  }
</style>
