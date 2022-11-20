<script setup lang="ts">

import Item from "@/components/Item.vue";
</script>

<template>
  <div class="house-details">
    <RouterLink to="/">Back to overview</RouterLink>
    <div class="house-details__all">
      <div class="house-details__item">
        <img class="house-details__item-image" src="@/assets/images/img_placeholder_house@3x.png" alt="house">
        <div class="house-details__info">
          <div class="house-details__address-line">
            <h1 class="house-details__address-title">Address</h1>
            <div class="item__actions">
              <button class="item__action -edit" type="button">
                <img class="item__action-icon" src="@/assets/images/ic_edit@3x.png" alt="edit">
              </button>
              <button class="item__action -remove" type="button">
                <img class="item__action-icon" src="@/assets/images/ic_delete@3x.png" alt="edit">
              </button>
            </div>
          </div>
          <div class="house-details__block">
            <img class="house-details__icon" src="@/assets/images/ic_location@3x.png" alt="location">
            <h5 class="house-details__block-text">1011 Amsterdam</h5>
          </div>
          <div class="house-details__block">
            <div class="house-details__block">
              <img class="house-details__icon" src="@/assets/images/ic_price@3x.png" alt="price">
              <h5 class="house-details__block-text">500.000</h5>
            </div>
            <div class="house-details__block">
              <img class="house-details__icon -inside" src="@/assets/images/ic_size@3x.png" alt="price">
              <h5 class="house-details__block-text">120m2</h5>
            </div>
            <div class="house-details__block">
              <img class="house-details__icon -inside" src="@/assets/images/ic_construction_date@3x.png" alt="price">
              <h5 class="house-details__block-text">Build in 1990</h5>
            </div>
          </div>
          <div class="house-details__block">
            <div class="house-details__block">
              <img class="house-details__icon" src="@/assets/images/ic_bed@3x.png" alt="price">
              <h5 class="house-details__block-text">5</h5>
            </div>
            <div class="house-details__block">
              <img class="house-details__icon -inside" src="@/assets/images/ic_bath@3x.png" alt="price">
              <h5 class="house-details__block-text">2</h5>
            </div>
            <div class="house-details__block">
              <img class="house-details__icon -inside" src="@/assets/images/ic_garage@3x.png" alt="price">
              <h5 class="house-details__block-text">Yes</h5>
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
        <Item/>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.house-details {
  display: flex;
  flex-direction: column;

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
    padding: 40px 30px;
  }


  &__address-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    color: #4A4B4C;
    margin-left: 10px;
  }

  &__icon {
    width: 18px;
    height: 18px;
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
  &__list-title{
    font-size: 18px;
    font-weight: bold;
  }
}

</style>