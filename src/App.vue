<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/components/Header.vue";
import Popup from "@/components/Popup.vue";
import {store} from "@/store";</script>

<template>
  <Header/>
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

.header {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
