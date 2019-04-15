<template>
  <div>
    <a href="javascript:;" @click="$store.dispatch('switch_dailog')">点击</a>
    <dailog></dailog>
  </div>
</template>

<script>
import dailog from '@/components/test/dailog.vue'

export default {
  name: 'test',
  components: {
    'dailog': dailog
  }
}
</script>

<style scoped>

</style>
