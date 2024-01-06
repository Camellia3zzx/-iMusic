<template>
  <div>
    <song class="place"></song>
  </div>
</template>

<script>
import song from '@/components/song.vue'

export default {
  name: 'searchlistIndex',
  components: {
    song
  }

}
</script>
<style lang="css" scoped>
.place{
float: left;
}
</style>
