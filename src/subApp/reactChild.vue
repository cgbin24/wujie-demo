<script setup>
import hostMap from '../hostMap'

const appUrl = hostMap('//localhost:7710')

</script>

<template>
  <div class="wrap">
    <WujieVue
      width="100%"
      height="100%"
      name="react-demo"
      :url="appUrl"
      :sync="true"
    ></WujieVue>
  </div>
</template>
