<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import Item from "@/components/Item.vue";
import {computed, reactive, ref} from "vue";
import {getHouses} from "@/services/HouseService";
import type {HouseType} from "@/models/HouseType";
import {store} from "@/store";
import Empty from "@/components/Empty.vue";

let searchInput = ref("");

interface OverviewState {
  sortBy: 'price' | 'size' | ''
}

const state = reactive({
  sortBy: ''
})

getHouses().then((res) => {
  store.commit('setHouses', res.data)
}).catch((e) => {
  console.error('Error fetching Houses');
})

const filteredHouses = computed(() => {
  return [...store.state.houses].filter(({location}: HouseType) => {
    const searchBy = `${location.street} ${location.city} ${location.zip}`.toLowerCase();
    return searchBy.includes(searchInput.value.toLowerCase())
  })
})

const sortHouses = computed(() => {
  return [...filteredHouses.value].sort((a: HouseType, b: HouseType) => (a as any)[state.sortBy] - (b as any)[state.sortBy])
})




</script>

<template>
  <div class="overview">
    <div class="overview__line">
      <h1 class="overview__title">Houses</h1>
      <RouterLink to="/house-create" class="overview__create-btn">
        <button class="overview__create-btn"> + Create new</button>
      </RouterLink>
    </div>
    <div class="overview__line">
      <input class="overview__search" type="search" placeholder="Search for a house" v-model="searchInput"/>
      <!--      <img class="overview__search-img" src="@/assets/images/ic_search@3x.png" alt="search">-->
      <div class="overview__sort">
        <button class="overview__sort-btn" @click="state.sortBy = 'price'" :class="{'-active': state.sortBy === 'price'}">Price</button>
        <button class="overview__sort-btn" @click="state.sortBy = 'size'" :class="{'-active': state.sortBy === 'size'}">Size</button>
      </div>
    </div>
    <div class="overview__items-box">
      <Empty v-if="sortHouses.length === 0"/>
      <Item v-for="house in sortHouses" :house="house"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;

.overview {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &__title {
    font-size: 32px;
    font-weight: bold;
  }

  &__line {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__create-btn {
    background-color: color.$primary-element-color;
    border: #EB5440 1px solid;
    border-radius: 5px;
    max-width: 350px;
    min-width: 100px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    padding: 7px;
    cursor: pointer;
  }

  &__sort-btn {
    background-color: color.$tertiary-element-color2;
    border: color.$tertiary-element-color2 1px solid;
    border-radius: 5px;
    max-width: 450px;
    min-width: 100px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    padding: 10px;
    cursor: pointer;

    &.-active {
      background-color: color.$primary-element-color;
      border-color: color.$primary-element-color;
    }

    &:not(:last-of-type) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:not(:first-of-type) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &__search {
    background-color: color.$tertiary-element-color1;
    border-radius: 5px;
    border: color.$tertiary-element-color1 1px solid;
    max-width: 550px;
    min-width: 300px;
    padding: 10px;

  }

  &__serch-img {
    max-width: 20px;
    max-height: 20px;
    margin-left: -300px;
  }

  &__items-box {
    width: 100%;
  }
}
</style>