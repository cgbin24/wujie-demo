<template>
  <div class=sidebarWrapper>
    <Menu :menu-list="routes"></Menu>
  </div>
</template>

<script lang=ts setup>
import routes from '../../router/routes';
import Menu from './component/menu.vue';

</script>

<style lang=scss scoped>
.sidebarWrapper {
  width: 200px;
  height: 100vh;
  border-right: 1px solid #ebeef5;
}
</style>