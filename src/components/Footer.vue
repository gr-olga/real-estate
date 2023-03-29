<template>
  <footer class="footer">
    <div class="footer__container">
      <RouterLink
        class="footer__links-item"
        to="/"
        exact
        active-class="current-home"
      >
        <button class="footer__img-home" />
      </RouterLink>
      <RouterLink class="footer__links-item" to="/about" active-class="current">
        <button class="footer__img" />
      </RouterLink>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/_colors.scss" as color;

.footer {
  display: block;
  background-color: white;
  position: relative;

  &__container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 35px;
    margin-right: 35px;
    width: 100%;
    height: 60px;
  }

  &__img {
    width: 35px;
    height: 35px;
    background-image: url("@/assets/images/ic_mobile_navigarion_info@3x.png");
    background-size: 35px;
    border: none;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
  }

  &__img-home {
    width: 40px;
    height: 40px;
    background-image: url("@/assets/images/ic_mobile_navigarion_home@3x.png");
    background-size: 40px;
    border: none;
    background-color: white;
    background-repeat: no-repeat;
  }
}

.current-home {
  background-image: url("@/assets/images/ic_mobile_navigarion_home_active@3x.png");
}

.current {
  background-image: url("@/assets/images/ic_mobile_navigarion_info_active@3x.png");
}
</style>
