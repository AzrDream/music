<template>
    <div class="song">
      <div class="song-top">
        <h3>最新音乐</h3>
      </div>
      <SongListItem :songs="songs"></SongListItem>
    </div>
</template>

<script>
import SongListItem from '../SongListItem'
export default {
  name: 'SongList',
  components: {
    SongListItem
  },
  props: {
    songs: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
</style>
