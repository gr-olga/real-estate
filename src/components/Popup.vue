<script setup lang="ts">

</script>

<template>
  <div class="popup">
    <h1 class="popup__title">Delete listing</h1>
    <p class="popup__text">Are you sure you want to delete this listing? This action cannot be undone</p>
    <button class="popup__btn -yes">Yes, delete</button>
    <button class="popup__btn -no">Go back</button>

  </div>
</template>

<style scoped lang="scss">
.popup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  position: absolute;
  z-index: 10;
  background-color: white;
  border-radius: 8px;
  padding-bottom: 30px;

  &__title {
    font-size: 32px;
    font-weight: bold;
    margin-top: 15px;
  }

  &__text {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: #4A4B4C;
    max-width: 65%;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  &__btn {
    width: 60%;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    padding: 10px;
  }

  .-yes {
    background-color: #EB5440;
    border: #EB5440 1px solid;
  }

  .-no {
    background-color: #4A4B4C;
    border: #4A4B4C 1px solid;
    margin-top: 10px;
  }
}
</style>