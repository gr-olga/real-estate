<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Popup from "@/components/Popup.vue";
import {store} from "@/store";

</script>

<template>
  <header>
    <Header/>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">overview</RouterLink>
        <p></p>
        <RouterLink to="/house-create">house-create</RouterLink>
        <p></p>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div class="app">
    <RouterView/>
  </div>
  <Popup v-if="store.state.isPopupOpen"/>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: color.$background1-element-color;
  width: 100%;
}
</style>
