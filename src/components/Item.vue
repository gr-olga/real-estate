<script setup lang="ts">
import type {HouseType} from "@/models/HouseType";
import router from "@/router";
import {store} from "@/store";

defineProps<{
  house: HouseType
}>()

function goToEdit(id: string): void {
  router.push(`edit/${id}`)
}

function goToDetails(id: string): void {
  router.push(`house-details/${id}`)
}

function handleOpen(id: string) {
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
        <h3 class="item__details-address">{{ house.location.street }}</h3>
        <div class="item__details-prize">€ {{ house.price }}</div>
        <h5 class="item__details-text">{{ house.location.zip }}</h5>
        <div class="item__details-box">
          <img class="item__details-icon" src="@/assets/images/ic_bed@3x.png" alt="bed">
          <h5>{{ house.rooms.bedrooms }}</h5>
          <img class="item__details-icon" src="@/assets/images/ic_bath@3x.png" alt="bed">
          <h5>{{ house.rooms.bathrooms }}</h5>
          <img class="item__details-icon" src="@/assets/images/ic_size@3x.png" alt="bed">
          <h5>{{ house.size }}</h5>
        </div>
      </div>
    </div>
    <div class="item__actions">
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
  }

  &__details {
    display: flex;
    flex-direction: row;
  }

  &__details-info {
    margin-left: 20px;
  }

  &__details-img {
    width: 150px;
    height: 150px;
  }

  &__details-address {
    font-size: 22px;
    font-weight: bold;
  }

  &__details-prize {
    font-size: 18px;
    color: #4A4B4C;
  }

  &__details-icon {
    width: 15px;
    height: 15px;
  }

  &__details-text {
    font-size: 18px;
    color: #4A4B4C;
  }

  &__details-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }

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