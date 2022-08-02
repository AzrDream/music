<template>
<div class="singer">
  歌手
</div>
</template>

<script>
// import { getHotArtists } from '../api'
import { getAllArtists } from '../api'

export default {
  name: 'Singer',
  created () {
    getAllArtists()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
