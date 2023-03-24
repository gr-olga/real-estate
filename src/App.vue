<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Popup from "@/components/Popup.vue";
import {store} from "@/store";
import {getHouses} from "@/services/HouseService";
import Footer from "@/components/Footer.vue";

getHouses().then((res) => {
  store.commit('setHouses', res.data)
}).catch((e) => {
  console.error('Error fetching Houses');
})
</script>

<template>
  <Header class="header"/>
  <div class="app">
    <RouterView/>
  </div>
  <Popup v-if="store.state.isPopupOpen"/>
  <Footer class="footer"/>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;

$breakpoint: 768px;

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: color.$background1-element-color;
  width: 100%;
  flex: 1;
}

.footer {
  display: none;
}

@media (max-width: $breakpoint) {
  .header {
    display: none;
  }

  .footer {
    display: flex;
  }

}
</style>

<style lang="scss">
.app-root {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
