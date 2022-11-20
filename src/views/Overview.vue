<script setup lang="ts">
import Item from "@/components/Item.vue";
import {reactive, ref} from "vue";
import {getHouses} from "@/services/HouseService";
import type {HouseType} from "@/models/HouseType";

let input = ref("");

interface OverviewState {
   houses: ReadonlyArray<HouseType>
}

const state: OverviewState = reactive({
  houses: []
})

getHouses().then((res) => {
  state.houses = res.data;
}).catch((e) => {
  console.error('Error fetching Houses');
})

// const sortByAlphabet = [...houses].sort((a, b) => parseInt(a.size) (parseInt(b.size)))

// function sortedList() {
//   return houses.filter((house) => {
//         house.filter((item) => {
//           item.include(input.value)
//         })
//       }
//   );
// }
</script>

<template>
  <div class="overview">
    <div class="overview__line">
      <h1 class="overview__title">Houses</h1>
      <button class="overview__create-btn"> + Create new</button>
    </div>
    <div class="overview__line">
      <input class="overview__search" type="search" placeholder="Search for a house" v-model="input"/>
      <!--      <img class="overview__search-img" src="@/assets/images/ic_search@3x.png" alt="search">-->
      <div class="overview__sort">
        <button class="overview__sort-btn">Prise</button>
        <button class="overview__sort-btn">Size</button>
      </div>
    </div>
    <div class="overview__items-box">
      <Item v-for="house in state.houses" :house="house" />
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
    min-width: 200px;
    font-size: 18px;
    font-weight: bold;
    color: white;

  }

  &__sort-btn {
    background-color: color.$primary-element-color;
    border: #EB5440 1px solid;
    border-radius: 5px;
    max-width: 250px;
    min-width: 100px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    padding: 10px;
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