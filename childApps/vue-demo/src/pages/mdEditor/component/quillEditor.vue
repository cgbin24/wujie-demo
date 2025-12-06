<template>
  <div class="quillEditorWrapper">
    <quill-editor
      theme="snow"
      toolbar="full"
      style="height: 500px;"
      :modules="modules"
    ></quill-editor>
  </div>
</template>

<script lang=ts setup>
import { QuillEditor } from "@vueup/vue-quill"
import '@vueup/vue-quill/dist/vue-quill.snow.css';
// import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import ImageUploader from "quill-image-uploader"
import axiosIns from "../../../api";


const modules = {
  name: "",
  module: ImageUploader,
  options: {
    upload: (file: any) => {
      return new Promise((resolve, reject) => {
        console.log(file, '=====选择文件=====');
        
        // const params = {
        //   file
        // }
        // axiosIns.post("/file/upload", params)
        
        const formData = new FormData()
        formData.append("file", file)

        console.log(formData, "=======格式化======");
        axiosIns.post("/os-admin/file/upload", formData, {
          headers: {
            "Content-Type": 'multipart/form-data;'
          }
        })
        .then(res => {
          console.log("Upload successful: ", res);
          resolve(res.data.url)
        })
        .catch(err => {
          reject("Upload failed")
          console.log("Error: ", err);
        })
      })
    }
  }
}

</script>

<style lang=scss scoped>
.quillEditorWrapper {
  border: 1px solid #ebeef5;
  border-radius: 4px;
}
</style>