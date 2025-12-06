<template>
  <div class=mainContainerWrapper>
    <Transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script lang=ts setup>

</script>

<style lang=scss scoped>
.mainContainerWrapper {
  overflow-y: auto;
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  box-sizing: border-box;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>