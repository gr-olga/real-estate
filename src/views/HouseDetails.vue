<script setup lang="ts">
import Item from "@/components/Item.vue";
import {computed} from "vue";
import router from "@/router";
import {useRoute} from "vue-router";
import {store} from "@/store";
import {isMyItem} from "@/utils/utils";

const route = useRoute();

const house = computed(() => store.state.houses.find((house) => String(house.id) === String(route.params.houseId)))

function goToEdit(id: number): void {
  router.push(`/edit/${id}`)
}

function handleOpen(id: number): void {
  store.commit('setTogglePopup')
  store.commit('setId', id)
}
</script>

<template>
  <div class="house-details" v-if="house">
    <RouterLink to="/" class="house-details__back">
      <img src="@/assets/images/ic_back_grey@3x.png"
           alt="back arrow"
           class="house-details__icon -back "/>
      <h4 class="house-create__back-title"> Back to overview</h4>
    </RouterLink>
    <div class="house-details__all">
      <div class="house-details__item">
        <img class="house-details__item-image" src="@/assets/images/img_placeholder_house@3x.png" alt="house">
        <div class="house-details__info">
          <div class="house-details__address-line">
            <h1 class="house-details__address-title">{{ house.location.street }}</h1>
            <div class="house-details__actions" v-if="isMyItem(house.id)">
              <button class="item__action -edit" type="button" @click="goToEdit(house.id)">
                <img class="item__action-icon" src="@/assets/images/ic_edit@3x.png" alt="edit">
              </button>
              <button class="item__action -remove" type="button" @click="handleOpen(house.id)">
                <img class="item__action-icon" src="@/assets/images/ic_delete@3x.png" alt="delete">
              </button>
            </div>
          </div>
          <div class="house-details__block">
            <img class="house-details__icon" src="@/assets/images/ic_location@3x.png" alt="location">
            <h5 class="house-details__block-text">{{ house.location.zip }} {{ house.location.city }}</h5>
          </div>
          <div class="house-details__block">
            <div class="house-details__block">
              <img class="house-details__icon" src="@/assets/images/ic_price@3x.png" alt="price">
              <h5 class="house-details__block-text">{{ house.price }}</h5>
            </div>
            <div class="house-details__block">
              <img class="house-details__icon -inside" src="@/assets/images/ic_size@3x.png" alt="price">
              <h5 class="house-details__block-text">{{ house.size }}</h5>
            </div>
            <div class="house-details__block">
              <img class="house-details__icon -inside" src="@/assets/images/ic_construction_date@3x.png" alt="price">
              <h5 class="house-details__block-text">Build in {{ house.constructionYear }}</h5>
            </div>
          </div>
          <div class="house-details__block">
            <div class="house-details__block">
              <img class="house-details__icon" src="@/assets/images/ic_bed@3x.png" alt="price">
              <h5 class="house-details__block-text">{{ house.rooms.bedrooms }}</h5>
            </div>
            <div class="house-details__block">
              <img class="house-details__icon -inside" src="@/assets/images/ic_bath@3x.png" alt="price">
              <h5 class="house-details__block-text">{{ house.rooms.bathrooms }}</h5>
            </div>
            <div class="house-details__block">
              <img class="house-details__icon -inside" src="@/assets/images/ic_garage@3x.png" alt="price">
              <h5 class="house-details__block-text" v-if="house.hasGarage">Yes</h5>
              <h5 class="house-details__block-text" v-else>No</h5>
            </div>
          </div>
        </div>
        <span class="house-details__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </span>
      </div>

      <div class="house-details__list">
        <h3 class="house-details__list-title">Recommended for you</h3>
        <Item v-for="house in store.state.houses" :house="house"/>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;

.house-details {
  display: flex;
  flex-direction: column;

  &__back {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    color: color.$secondary-text-color;
    text-decoration: none;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  &__all {
    display: flex;
    flex-direction: row;
  }

  &__item {
    display: flex;
    flex-direction: column;
    background-color: white;
    max-width: 700px;
  }

  &__info {
    padding: 20px 30px;
  }

  &__address-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__address-title {
    font-size: 32px;
    font-weight: bold;
  }

  &__block {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }

  &__block-text {
    font-size: 18px;
    color: color.$secondary-text-color;
    margin-left: 10px;
  }

  &__icon {
    width: 18px;
    height: 18px;

    &.-back {
      width: 15px;
      height: 15px;
    }
  }

  .-inside {
    margin-left: 10px;
  }

  &__item-image {
    width: 700px;
  }

  &__description {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    padding: 0 30px 10px;
  }

  .item__action {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .item__action-icon {
    width: 20px;
    height: 20px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    max-width: 400px;
  }

  &__list-title {
    font-size: 18px;
    font-weight: bold;
  }
}

$breakpoint: 468px;
@media (max-width: $breakpoint) {
  .house-details {

    &__all {
      flex-direction: column;
    }

    &__item {
      max-width: 350px;
    }

    &__item-image {
      width: 100%;
    }

    &__list {
      margin: auto;
    }

    &__address-title {
      font-size: 24px;
      font-weight: bold;
    }

    &__block-text {
      font-size: 14px;
      margin-left: 10px;
    }

    &__list {
      margin-top: 10px;
    }

  }
  .house-create__back-title {
    display: none;
  }
}

</style>