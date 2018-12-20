<template>
  <div id="app">
    <router-view></router-view>
    <progress-line></progress-line>
  </div>
</template>

<script>
import ProgressLine from '@/components/ProgressLine.vue'

export default {
  name: 'app',
  components: {
    ProgressLine
  }
}
</script>

<style>
@import "./assets/css/base.css";
@import "./assets/css/common.css";
</style>
