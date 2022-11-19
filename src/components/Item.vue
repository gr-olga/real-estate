<script setup lang="ts">

</script>

<template>
  <div class="item">
    <div class="item__details">
      <img class="item__details-img" src="@/assets/images/img_placeholder_house@3x.png" alt="house"/>
      <div class="item__details-info">
        <h3>Street</h3>
        <div>Prise 4000</div>
        <h5>ZIP city</h5>
        <div>
          <img src="@/assets/images/ic_bed@3x.png" alt="bed">
          <h5>count</h5>
          <img src="@/assets/images/ic_bath@3x.png" alt="bed">
          <h5>count</h5>
          <img src="@/assets/images/ic_size@3x.png" alt="bed">
          <h5>count</h5>
        </div>
      </div>
    </div>
    <div class="item__actions">
      <button class="item__action -edit" type="button">
        <img src="@/assets/images/ic_edit@3x.png" alt="edit">
      </button>
      <button class="item__action -remove" type="button">
        <img src="@/assets/images/ic_delete@3x.png" alt="edit">
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__details {

  }

  &__details-img {
    width: 150px;
    height: 150px;
  }
}
</style>