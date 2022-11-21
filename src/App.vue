<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Popup from "@/components/Popup.vue";
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
<!--    <Popup/>-->
  </header>
  <div class="app">
    <RouterView/>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: color.$background1-element-color;
}
</style>
