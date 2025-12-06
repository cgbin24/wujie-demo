<template>
    <div class=layoutWrapper>
      <!-- 侧边栏 -->
      <sidebar></sidebar>
      <!-- 容器 -->
      <main-container></main-container>
    </div>
</template>

<script lang=ts setup>
import Sidebar from './sidebar/index.vue'
import MainContainer from './mainContainer/index.vue'

</script>

<style lang=scss scoped>
.layoutWrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-shrink: initial;
}
</style>