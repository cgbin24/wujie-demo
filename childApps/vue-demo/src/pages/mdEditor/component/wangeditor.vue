<template>
  <div class="wangeditorWrapper">
    <Toolbar
      style="border-bottom: 1px solid #ebeef5"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script lang=ts setup>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
// 编辑器实例
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('<p>初始内容</p>')
const mode = "simple"
const toolbarConfig = {}
const editorConfig = {
  placeholder: "请输入内容",
}

const handleCreated = (editor: any) => {
  editorRef.value = editor
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})


</script>

<style lang=scss scoped>
.wangeditorWrapper {
  overflow: hidden;
  border: 1px solid #ebeef5;
  border-radius: 4px;
}
</style>