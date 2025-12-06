<template>
  <div class="menuWrapper">
    <div class="menuList">
      <div class="menuListItem" v-for="menuItem in menuList" :key="menuItem.path">
        {{ menuItem.name }}
        <div class="subMenuList">
          <div class="subMenu" v-for="subMenu in menuItem.children" :key="subMenu.path">
            <router-link :to="subMenu.path">{{ subMenu.name }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang=ts setup>
import { PropType } from 'vue';
import { RouteRecordRaw } from 'vue-router'
const props = defineProps({
  menuList: {
    type: Array as PropType<RouteRecordRaw[]>,
    default: () => [],
    required: true
  }
})

</script>

<style lang=scss scoped>
.menuWrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  .menList {
    width: 100%;
    height: 100%;
    .menuListItem {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      background: #000;
      cursor: pointer;
      .subMenuList {
        margin-top: 100px;
        .subMenu {
          margin-bottom: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>