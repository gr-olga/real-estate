<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import Item from "@/components/Item.vue";
import {reactive, ref} from "vue";
import {getHouses} from "@/services/HouseService";
import type {HouseType} from "@/models/HouseType";
import {store} from "@/store";

let input = ref("");

interface OverviewState {
  houses: ReadonlyArray<HouseType>
}

const state: OverviewState = reactive({
  houses: [],
})

getHouses().then((res) => {
  state.houses = res.data;
  store.commit('setHouses', res.data)
}).catch((e) => {
  console.error('Error fetching Houses');
})

function sortHouses(houses: ReadonlyArray<HouseType>, option: 'size' | 'price'): void {
  state.houses = [...houses].sort((a: HouseType, b: HouseType) => a[option] - b[option])
}

// function filteredList() {
// let search = ref(input)
//  return state.houses.filter(house => {
//      Array.prototype.filter.call(house, (x) => x <= "b")
//     })
//  let search = ref(input)
//  state.houses.filter(house =>{
//       let newArray = [];
//       const serach = input.value.toLowerCase();
//       for (key in obj) {
//         el = house[key]
//         if (el.name.toLowerCase().indexOf(serach) != -1) newArray.push(el);
//       }
//       return newArray;
//     })
//
// }


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
      <input class="overview__search" type="search" placeholder="Search for a house" v-model="input"/>
      <!--      <img class="overview__search-img" src="@/assets/images/ic_search@3x.png" alt="search">-->
      <div class="overview__sort">
        <button class="overview__sort-btn" @click="sortHouses(state.houses, 'price')">Prise</button>
        <button class="overview__sort-btn" @click="sortHouses(state.houses, 'size')">Size</button>
      </div>
    </div>
    <div class="overview__items-box">
      <Item v-for="house in state.houses" :house="house"/>
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
    background-color: color.$primary-element-color;
    border: #EB5440 1px solid;
    border-radius: 5px;
    max-width: 450px;
    min-width: 100px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    padding: 10px;
    cursor: pointer;
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