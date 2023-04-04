<template>
  <div class=wrapper>
    <header>
      <div class="navWrap">
        <router-link to="/react-demo">react-demo</router-link>
        <router-link to="/vue-demo">vue-demo</router-link>
      </div>
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script lang=ts setup>

</script>

<style lang=scss scoped>
.wrapper {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
.navWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 10px 4px #ccc;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 32px;
    margin-right: 20px;
    font-size: 12px;
    color: #252832;
    background: rgba(37, 40, 50, 0.1);
    border-radius: 4px;
    box-sizing: border-box;
    text-decoration: none;
    &:hover {
      color:  rgba(61, 135, 255, 1);
    }
    &.router-link-active {
      color: #fff;
      background: rgba(61, 135, 255, 1);
    }
  }
}
.container {
  
}
</style>