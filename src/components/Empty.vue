<script setup lang="ts">

</script>

<template>
  <div class="empty">
    <div class="empty__box">
      <img class="empty__image" src="@/assets/images/img_empty_houses@3x.png" alt="no houses">
      <h3 class="empty__text">No results found</h3>
      <p class="empty__text">Please try another keyword</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.empty {
  display: flex;
  justify-content: center;
  align-items: center;

  &__box {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__image {
    width: 350px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  &__text{
    font-size: 18px;
    color: #4A4B4C;
  }

}
</style>