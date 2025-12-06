<template>
  <div class="tinymceWrapper">
    <!-- <Editor
      api-key="no-api-key"
      :init="{
        plugins: 'hello here!'
      }"
      /> -->
      <editor :api-key="apiKey" :initialValue="content"/>
      <!-- <Editor
      :api-key="apiKey"
      :init="{
        plugins: 'lists link image table code help wordcount'
      }" -->
  </div>
</template>

<script lang=ts setup>
// import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
// import { onMounted } from 'vue';


const apiKey = "qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc";
const content = `
<h2 style="text-align: center;">
  TinyMCE provides a <span style="text-decoration: underline;">full-featured</span> rich text editing experience, and a featherweight download.
</h2>
<p style="text-align: center;">
  <strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;">No matter what you're building, TinyMCE has got you covered.</span></span></strong>
</p>`;
// onMounted(() => {
//   tinymce.init({})
// })

</script>

<style lang=scss scoped>
.tinymceWrapper {
  border: 1px solid #ebeef5;
  border-radius: 4px;
}
</style>