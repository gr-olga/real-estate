<script setup lang="ts">
import type {HouseType} from "@/models/HouseType";
import router from "@/router";
import {store} from "@/store";
import {isMyItem} from "@/utils/utils";

defineProps<{
  house: HouseType
}>()

function goToEdit(id: number): void {
  router.push(`edit/${id}`)
}

function goToDetails(id: number): void {
  router.push(`house-details/${id}`)
}

function handleOpen(id: number) {
  store.commit('setTogglePopup')
  store.commit('setId', id)
}
</script>

<template>
  <div class="item">
    <div class="item__details">
      <button @click="goToDetails(house.id)" class="item__detail-link">
        <img class="item__details-img" src="@/assets/images/img_placeholder_house@3x.png" alt="house"/>
      </button>
      <div class="item__details-info">
        <h3 class="item__details-address" @click="goToDetails(house.id)">{{ house.location.street }}</h3>
        <div class="item__details-price">€ {{ house.price }}</div>
        <div class="item__details-zip">{{ house.location.zip }}</div>
        <div class="item__details-box">
          <div class="item__detail-box-item">
            <img class="item__details-icon" src="@/assets/images/ic_bed@3x.png" alt="bed">
            <div>{{ house.rooms.bedrooms }}</div>
          </div>
          <div class="item__detail-box-item">
            <img class="item__details-icon" src="@/assets/images/ic_bath@3x.png" alt="bed">
            <div>{{ house.rooms.bathrooms }}</div>
          </div>
          <div class="item__detail-box-item">
            <img class="item__details-icon" src="@/assets/images/ic_size@3x.png" alt="bed">
            <div>{{ house.size }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item__actions" v-if="isMyItem(house.id)">
      <button @click="goToEdit(house.id)" class="item__action -edit" type="button">
        <img class="item__action-icon" src="@/assets/images/ic_edit@3x.png" alt="edit">
      </button>
      <button class="item__action -remove" type="button" @click="handleOpen(house.id)">
        <img class="item__action-icon" src="@/assets/images/ic_delete@3x.png" alt="bin">
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;

.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  align-items: flex-start;

  &__detail-link {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  &__details {
    display: flex;
    flex-direction: row;
  }

  &__details-info {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px 0;
  }

  &__details-img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
  }

  &__detail-box-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  &__details-address {
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
  }

  &__details-price {
    font-size: 18px;
    color: color.$secondary-text-color;
  }

  &__details-icon {
    width: 15px;
    height: 15px;
  }

  &__details-zip {
    font-size: 18px;
    color: color.$tertiary-element-color2;
    text-transform: uppercase;
  }

  &__details-box {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 10px;
    color: color.$secondary-text-color;
  }
}

.item__actions {
  padding: 10px 0;
}

.item__action-icon {
  width: 15px;
  height: 15px;
}

.item__action {
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>