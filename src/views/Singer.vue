<template>
<div class="singer">
 <div class="singer-wrapper">
   <ScrollView>
     <ul class="list-wrapper">
       <li class="list-group" v-for="(value, index) in list" :key="index">
         <h2 class="group-title">{{keys[index]}}</h2>
         <ul>
           <li class="group-item" v-for="obj in list[index]" :key="obj.id">
             <img v-lazy="obj.img1v1Url" alt="">
             <p>{{obj.name}}</p>
           </li>
         </ul>
       </li>
     </ul>
   </ScrollView>
 </div>
</div>
</template>

<script>
import { getAllArtists } from '../api'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Singer',
  components: {
    ScrollView
  },
  created () {
    getAllArtists()
      .then(result => {
        this.keys = result.keys
        this.list = result.list
      })
      .catch(error => {
        console.log(error)
      })
  },
  data () {
    return {
      keys: [],
      list: []
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .singer{
    width: 100%;
    height: 100%;
    .singer-wrapper{
      position: fixed;
      top: 184px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      @include bg_sub_color();
      .list-wrapper{
        /*width: 100%;*/
        /*height: 100%;*/
        .list-group{
          .group-title{
            @include bg_color();
            @include font_size($font_medium);
            color: #fff;
            padding: 10px 20px;
            box-sizing: border-box;
          }
          .group-item{
            display: flex;
            justify-content: flex-start;
            padding: 10px 20px;
            border-bottom: 1px solid #ccc;
            img{
              width: 100px;
              height: 100px;
              border-radius: 50%;
              overflow: hidden;
            }
            p{
              @include font_size($font_medium);
              @include font_color();
              display: flex;
              align-items: center;
              margin-left: 20px;
            }
          }
        }
      }
      .list-keys{
        position: fixed;
        right: 10px;
        top: 60%;
        transform: translateY(-50%);
        li{
          @include font_color();
          @include font_size($font_medium_s);
          padding: 3px 0;
          &.active{
            text-shadow: 0 0 10px #000;
          }
        }
      }
      .fix-title{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        padding: 10px 20px;
        box-sizing: border-box;
        @include font_size($font_medium);
        color: #fff;
        @include bg_color();
      }
    }
  }
  .v-enter{
    transform: translateX(100%);
  }
  .v-enter-to{
    transform: translateX(0%);
  }
  .v-enter-active{
    transition: transform 1s;
  }
  .v-leave{
    transform: translateX(0%);
  }
  .v-leave-to{
    transform: translateX(100%);
  }
  .v-leave-active{
    transition: transform 1s;
  }
</style>
