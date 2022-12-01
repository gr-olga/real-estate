<script setup lang="ts">
import {Ref, ref} from "vue";
import type {NewHouseType} from "@/models/NewHouseType";
import {addHouseImage, createHouse} from "@/services/HouseService";
import router from "@/router";

const form: Ref<NewHouseType> = ref({
  price: "" as any,
  bedrooms: "" as any,
  bathrooms: "" as any,
  size: "" as any,
  streetName: "",
  houseNumber: "",
  numberAddition: "",
  zip: "",
  city: "",
  constructionYear: "" as any,
  hasGarage: false,
  description: ""
})

let image = ref(null as any)

function onAddFile($event: Event): void {
  image.value = ($event.target as any).files[0];
}

async function handleSubmit(): Promise<void> {
  const {data} = await createHouse(form.value)
  await addHouseImage(data.id, image.value);
  await router.push(`/house-details/${data.id}`)
}
</script>

<template>
  <div class="box">
    <div class="house-create">
      <RouterLink to="/" class="house-create__back">
        <img src="@/assets/images/ic_back_grey@3x.png"
             alt="back arrow"
             class="house-create__icon -back "/>
        Back to overview
      </RouterLink>
      <h1 class="house-create__title">Create new listing</h1>
      <form name="add-house" class="house-create__form" @submit.prevent="handleSubmit">
        <label class="house-create__label">
          <span class="house-create__label-text">Street name*</span>
          <input
              type="text"
              class="house-create__input -street"
              v-model="form.streetName"
              placeholder="Enter the street"
              required/>
        </label>
        <div class="house-create__box">
          <label class="house-create__label">
            <span class="house-create__label-text">House number*</span>
            <input type="number"
                   class="house-create__input -house-number -double"
                   v-model="form.houseNumber"
                   placeholder="Enter house number"
                   required/>
          </label>
          <label class="house-create__label">
            <span class="house-create__label-text">Addition</span>
            <input type="text"
                   class="house-create__input -addition -double"
                   v-model="form.numberAddition"
                   placeholder="e.g.A"/>
          </label>
        </div>
        <label class="house-create__label">
          <span class="house-create__label-text">Postal code*</span>
          <input type="text"
                 class="house-create__input -postal-code"
                 v-model="form.zip"
                 placeholder="e.g. 1000 AA"
                 required/>
        </label>
        <label class="house-create__label">
          <span class="house-create__label-text">City*</span>
          <input type="text"
                 class="house-create__input -city"
                 v-model="form.city"
                 placeholder="e.g. Utrecht"
                 required/>
        </label>
        <label class="house-create__label drop">
          <span class="house-create__label-text">Upload picture(PNG or JPG)*</span>
          <label class="drop-container">
            <input type="file"
                   class="house-create__input -image"
                   alt="house"
                   @change="onAddFile"
                   required/>
          </label>
          <img v-if="image" :src="image" alt="Uploaded House image"/>
        </label>

        <label class="house-create__label">
          <span class="house-create__label-text">Price*</span>
          <input type="number"
                 class="house-create__input -price"
                 placeholder="e.g. $150.000"
                 v-model="form.price"
                 min="0"
                 required/>
        </label>
        <div class="house-create__box">
          <label class="house-create__label">
            <span class="house-create__label-text">Size*</span>
            <input type="number"
                   class="house-create__input -size -double"
                   placeholder="e.g. 60m2"
                   v-model="form.size"
                   required/>
          </label>
          <label class="house-create__label">
            <span class="house-create__label-text">Garage*</span>
            <select class="house-create__input -garage -double"
                    v-model="form.hasGarage"
                    required>
              <option class="house-create__input" value="">Select</option>
              <option class="house-create__input" :value="true">Yes</option>
              <option class="house-create__input" :value="false">No</option>
            </select>
          </label>
        </div>
        <div class="house-create__box">
          <label class="house-create__label">
            <span class="house-create__label-text">Bedrooms*</span>
            <input type="number"
                   class="house-create__input -bedrooms -double"
                   v-model="form.bedrooms"
                   placeholder="Enter amount"
                   min="0"
                   required/>
          </label>
          <label class="house-create__label">
            <span class="house-create__label-text">Bathrooms*</span>
            <input type="number"
                   class="house-create__input -bathroom -double"
                   v-model="form.bathrooms"
                   placeholder="Enter amount"
                   min="0"
                   required/>
          </label>
        </div>
        <label class="house-create__label">
          <span class="house-create__label-text">Construction date*</span>
          <input type="number"
                 class="house-create__input -construction-date"
                 v-model="form.constructionYear"
                 placeholder="e.g. 1990"
                 min="1500"
                 required/>
        </label>
        <label class="house-create__label">
          <span class="house-create__label-text">Description*</span>
          <textarea
              rows="7"
              class="house-create__input -description"
              v-model="form.description"
              placeholder="Enter description"
              required/>
        </label>
        <button class="house-create__post" type="submit">Post</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;


.box {
  display: flex;
  flex-direction: column;
  background-image: url("@/assets/images/img_background@3x.png");
  background-size: 100vw;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.house-create {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;

  &__back {
    font-size: 18px;
    color: color.$secondary-text-color;
    margin-top: 20px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-weight: bold;
  }

  &__icon {
    &.-back {
      width: 15px;
      height: 15px;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 400px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  &__label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__label-text {
    font-size: 14px;
    font-weight: bolder;
    color: color.$secondary-text-color;
  }

  &__input {
    min-width: 350px;
    max-width: 500px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 5px;
    border: white 1px solid;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }

  .drop {
    align-self: flex-start;
  }

  .-image {
    visibility: hidden;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #444;
    background: #FFF;
    border-radius: 10px;
    border: 1px solid #555;

    .-image[type=file]::file-selector-button {
      margin-right: 20px;
      border: none;
      background: #084CDF;
      padding: 10px 20px;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      transition: background .2s ease-in-out;
    }

    .-image[type=file]::file-selector-button:hover {
      background: #0D45A5;
    }
  }

  .drop-container {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    border: 2px dashed #555;
    color: #444;
    cursor: pointer;
    transition: background .2s ease-in-out, border .2s ease-in-out;
    background-image: url("@/assets/images/ic_upload@3x.png");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .drop-container:hover {
    background: #EEE;
    border-color: #111;
  }

  .drop-container:hover .drop-title {
    color: #222;
  }

  &__box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .-double {
    min-width: 150px;
    padding: 15px 2px;
  }

  &__post {
    background-color: color.$primary-element-color;
    border: color.$primary-element-color 1px solid;
    border-radius: 5px;
    max-width: 250px;
    min-width: 100px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    padding: 10px;
    align-self: flex-end;
    margin-top: 20px;
    cursor: pointer;
  }
}

</style>