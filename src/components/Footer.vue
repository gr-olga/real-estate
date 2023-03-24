<template>
  <footer class="footer">
    <div class="footer__container">
      <RouterLink
          class="footer__links-item"
          to="/"
          exact
          active-class="current"
      >
        <div  class="footer__img-home"></div>
        <img
            class="footer__img-home"
            src="@/assets/images/ic_mobile_navigarion_home@3x.png"
            alt="home"/>
      </RouterLink>
      <RouterLink
          class="footer__links-item"
          to="/about"
          active-class="current"
      >
        <img
            class="footer__img"
            src="@/assets/images/ic_mobile_navigarion_info@3x.png"
            alt="about">
      </RouterLink>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;

.footer {
  display: block;
  background-color: white;
  position: relative;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 35px;
    margin-right: 35px;
  }
  &__img {
    max-width: 35px;
  }
  &__img-home {
    max-width: 40px;
  }
}
</style>