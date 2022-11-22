<script setup lang="ts">
import {store} from "@/store";
import {deleteHouse, getHouses} from "@/services/HouseService";

async function handleDelete(): Promise<void> {
  await deleteHouse(store.state.id)
  const res = await getHouses()
  store.commit('setHouses', res.data)
  store.commit('setTogglePopup')
}

function handleClose(): void {
  store.commit('setTogglePopup')
}
</script>

<template>
  <div class="popup">
    <div class="popup__box">
      <h1 class="popup__title">Delete listing</h1>
      <p class="popup__text">Are you sure you want to delete this listing? This action cannot be undone</p>
      <button class="popup__btn -yes" @click="handleDelete">Yes, delete</button>
      <button class="popup__btn -no" @click="handleClose">Go back</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  z-index: 9;
  background-color: rgba(234, 226, 226, 0.6);
  transition: visibility .35s, opacity 0.35s ease-in-out;

  &__box {
    display: flex;
    flex-direction: column;
    max-width: 550px;
    background-color: #FFFFFF;
    margin: auto;
    position: relative;
    align-items: center;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    top: 30%;
    padding-bottom: 30px;
  }

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
    cursor: pointer;
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