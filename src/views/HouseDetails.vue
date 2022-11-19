<script setup lang="ts">

import Item from "@/components/Item.vue";
</script>

<template>
  <div class="house-details">
    <button>Back to overview</button>
    <div class="house-details__all">
      <div class="house-details__item">
        <img class="house-details__item-image" src="@/assets/images/img_placeholder_house@3x.png" alt="house">
        <div class="house-details__info">
          <div></div>
          <h1>Address</h1>
          <div class="item__actions">
            <button class="item__action -edit" type="button">
              <img src="@/assets/images/ic_edit@3x.png" alt="edit">
            </button>
            <button class="item__action -remove" type="button">
              <img src="@/assets/images/ic_delete@3x.png" alt="edit">
            </button>
          </div>
          <div>
            <img src="@/assets/images/ic_location@3x.png" alt="location">
            <h5>Zip code</h5>
          </div>
          <div>
            <div>
              <img src="@/assets/images/ic_price@3x.png" alt="price">
              <h5>Price</h5>
            </div>
            <div>
              <img src="@/assets/images/ic_size@3x.png" alt="price">
              <h5>120m2</h5>
            </div>
            <div>
              <img src="@/assets/images/ic_construction_date@3x.png" alt="price">
              <h5>Build in 1990</h5>
            </div>
          </div>
          <div>
            <div>
              <img src="@/assets/images/ic_bed@3x.png" alt="price">
              <h5>5</h5>
            </div>
            <div>
              <img src="@/assets/images/ic_bath@3x.png" alt="price">
              <h5>2</h5>
            </div>
            <div>
              <img src="@/assets/images/ic_garage@3x.png" alt="price">
              <h5>Yes</h5>
            </div>
          </div>
        </div>
        <span>
          details
        </span>
      </div>

      <div class="house-details__list">
        <Item/>
      </div>
    </div>
  </div>

</template>

<style scoped>
.house-details__item-image {
  width: 300px;
  height: 300px;
}
</style>