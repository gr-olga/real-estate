<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import Item from "@/components/Item.vue";
import {computed, reactive, ref} from "vue";
import type {HouseType} from "@/models/HouseType";
import {store} from "@/store";
import Empty from "@/components/Empty.vue";

let searchInput = ref("");

interface OverviewState {
  sortBy: 'price' | 'size' | ''
}

const state: OverviewState = reactive({
  sortBy: ''
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
        <button type="button" class="overview__create-btn-normal">
          <img src="@/assets/images/ic_plus_white@3x.png"
               alt="add icon"
               class="overview__img"/>
          <h3 class="overview__create-btn-text"> Create new </h3>
        </button>
        <button type="button" class="overview__create-btn-mobile">
          <img src="@/assets/images/ic_plus_grey@3x.png"
               alt="add icon"
               class="overview__img"/>
        </button>
      </RouterLink>
    </div>
    <div class="overview__line line-search">
      <input class="overview__search" type="search" placeholder="Search for a house" v-model="searchInput"/>
      <div class="overview__sort">
        <button type="button" class="overview__sort-btn"
                @click="state.sortBy = 'price'"
                :class="{'-active': state.sortBy === 'price'}">
          Price
        </button>
        <button type="button" class="overview__sort-btn"
                @click="state.sortBy = 'size'"
                :class="{'-active': state.sortBy === 'size'}">
          Size
        </button>
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
    border: color.$primary-element-color 1px solid;
    border-radius: 7px;
    max-width: 350px;
    min-width: 100px;
    padding: 7px 10px;
    cursor: pointer;

    &-normal {
      background-color: transparent;
      border: none;
    }

    &-text {
      font-size: 18px;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
    }

    &-mobile {
      display: none;
    }
  }

  &__sort-btn {
    background-color: color.$tertiary-element-color2;
    border: color.$tertiary-element-color2 1px solid;
    border-radius: 7px;
    max-width: 450px;
    min-width: 100px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    padding: 10px;
    cursor: pointer;
    text-transform: capitalize;

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
    min-width: 330px;
    padding: 10px;

  }

  &__img {
    width: 15px;
    height: 15px;
  }

  &__items-box {
    width: 100%;
  }
}

$breakpoint: 768px;

@media (max-width: $breakpoint) {

  .overview__line {
    align-items: center;
  }

  .overview__create-btn {
    display: flex;
    background-color: transparent;
    border: none;
    max-width: 35px;
    max-height: 35px;
    cursor: pointer;
    flex-direction: row;
    min-width: 35px;

    &-normal {
      display: none;
    }

    &-mobile {
      display: block;
      border: none;
      background: transparent;
    }
  }
  .overview__title {
    margin: auto;
  }
  .line-search {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .overview__sort {
    display: flex;
    flex-direction: row;
    min-width: 330px;

    &-btn {
      min-width: 165px;
      margin-top: 15px;
    }
  }

}
</style>


