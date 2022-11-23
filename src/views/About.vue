<script setup lang="ts">

</script>

<template>
  <div class="about">
    <h1 class="about__title">About DTT real estate</h1>
    <p class="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <h2 class="about__title">Design and Development</h2>
    <div class="about__addition">
      <img src="@/assets/images/img_logo_dtt@3x.png" alt="logo" class="about__logo">
      <div class="about__link">
        <span class="about__link-title"> By DTT</span>
        <a class="about__link-url">www.d-tt.nl</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;

.about {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: color.$secondary-text-color;
  max-width: 80%;
  padding-bottom: 40px;

  &__title {
    font-size: 32px;
    font-weight: bold;
    margin-top: 15px;
    color: black;
  }

  &__paragraph {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  &__addition {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  &__logo {
    width: 300px;
    margin-top: 15px;
  }

  &__link {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
  }

  &__link-url {
    color: color.$hyperlink-text-color;
  }

  &__link-title {
    color: color.$secondary-text-color;
  }
}
</style>