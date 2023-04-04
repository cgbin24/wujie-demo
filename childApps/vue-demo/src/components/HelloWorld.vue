<script setup lang="ts">
import { ref } from 'vue'


defineProps<{ msg: string }>()

const showModal = ref(false)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="showModal = true">点击弹窗</button>
  </div>

  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="模态框"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        噢！
      </template>
      内容
      <template #footer>
        尾部
      </template>
    </n-card>
  </n-modal>

</template>

<style scoped>

</style>
