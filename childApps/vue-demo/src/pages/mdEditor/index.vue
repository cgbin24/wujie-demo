<template>
  <div class=editorWrapper>
    <h3 class="intro">富文本编辑器</h3>
    <n-tabs type="segment">
      <n-tab-pane name="chap1" tab="WangEditor">
        <section class="editorItemComp">
          <!-- <h4 class="subTitle">WangEditor</h4> -->
          <Wangeditor></Wangeditor>
        </section>
      </n-tab-pane>
      <n-tab-pane name="chap2" tab="QuillEditor">
        <section class="editorItemComp">
          <!-- <h4 class="subTitle">QuillEditor</h4> -->
          <QuillEditor />
        </section>
      </n-tab-pane>
      <n-tab-pane name="chap3" tab="Tinymce">
        <section class="editorItemComp">
          <!-- <h4 class="subTitle">QuillEditor</h4> -->
          <Tinymce />
        </section>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script lang=ts setup>
import Wangeditor from './component/wangeditor.vue';
import QuillEditor from './component/quillEditor.vue';
import Tinymce from './component/tinymce.vue';

</script>

<style lang=scss scoped>
.editorWrapper {
  overflow-y: auto;
  .intro {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 20px;
    border-bottom: 1px solid #ebeef5;
  }
  .editorItemComp {
    width: 80%;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    .subTitle {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>