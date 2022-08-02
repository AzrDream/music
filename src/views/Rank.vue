<template>
<div class="rank">
  排行榜
</div>
</template>

<script>
import { getTopListDetail } from '../api'

export default {
  name: 'Rank',
  created () {
    getTopListDetail()
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
