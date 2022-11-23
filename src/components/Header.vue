<script setup lang="ts">

</script>

<template>
  <div class="header">
    <img class="header__img" src="@/assets/images/img_logo_dtt@3x.png" alt="DTT">
    <div class="header__links">
      <RouterLink
          class="header__links-item"
          to="/"
          exact
          active-class="current"
      >
        Houses
      </RouterLink>
      <RouterLink
          class="header__links-item"
          to="/about"
          active-class="current"
      >About
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;
//@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Roboto:wght@500&display=swap');
//@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Roboto:wght@500&display=swap');
.header {
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: auto;
  background-color: white;
  align-items: center;
  padding-top: 20px;


  &__img {
    max-width: 150px;
  }

  &__links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-item {
      color: color.$primary-text-color;
      text-decoration: none;
      margin-left: 40px;
      font-size: 18px;
    }
  }
}

.current {
  color: color.$tertiary-element-color2;
}

</style>