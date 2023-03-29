<script setup lang="ts">
import type { HouseType } from "@/models/HouseType";
import type { Ref } from "vue";
import { onMounted, reactive, ref } from "vue";
import type { NewHouseType } from "@/models/NewHouseType";
import { addHouseImage, editHouse, getHouse } from "@/services/HouseService";
import { useRoute } from "vue-router";
import router from "@/router";

const route = useRoute();

interface EditState {
  house: HouseType | undefined;
}

const state: EditState = reactive({
  house: undefined,
});

let form: Ref<NewHouseType> = ref({
  price: 0,
  bedrooms: 0,
  bathrooms: 0,
  size: 0,
  streetName: "",
  houseNumber: 0,
  numberAddition: "",
  zip: "",
  city: "",
  constructionYear: 1600,
  hasGarage: false,
  description: "",
});

onMounted(async () => {
  state.house = await getHouse(route.params.houseId as string);
  if (state.house) {
    const streetName = (
      state.house.location.street.match(/[A-z -]+/) as any
    )[0];
    const houseNumber = Number(
      (state.house.location.street.match(/[0-9]+/) as any)[0]
    );
    const numberAddition = (
      state.house.location.street.match(/[0-9]+[A-z]+/) as any
    )[0].match(/[A-z]+/)[0];

    form.value = {
      ...form.value,
      price: state.house.price,
      bedrooms: state.house.rooms.bedrooms,
      bathrooms: state.house.rooms.bathrooms,
      size: state.house.size,
      streetName,
      houseNumber,
      numberAddition,
      zip: state.house.location.zip,
      city: state.house.location.city,
      constructionYear: state.house.constructionYear,
      hasGarage: state.house.hasGarage,
      description: state.house.description,
    };
  }
});
let image = ref(null as any);

function onAddFile($event: Event): void {
  image.value = ($event.target as any).files[0];

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    image.value = reader.result;
  });
  reader.readAsDataURL(image.value);
}

async function handleSubmit(): Promise<void> {
  console.log(111);
  await editHouse(Number(route.params.houseId), form.value);
  const { houseId } = route.params as any;
  await addHouseImage(houseId, image.value);
  await router.push(`/house-details/${houseId}`);
}
</script>

<template>
  <div class="background">
    <div class="box">
      <div class="house-create">
        <RouterLink class="house-create__back" to="/">
          <img
            alt="back arrow"
            class="house-create__icon -back"
            src="@/assets/images/ic_back_grey@3x.png"
          />
          <h4 class="house-create__back-title">Back to overview</h4>
        </RouterLink>
        <h1 class="house-create__title">Edit listing</h1>
        <form
          class="house-create__form"
          name="edit-house"
          @submit.prevent="handleSubmit"
        >
          <label class="house-create__label">
            <span class="house-create__label-text">Street name*</span>
            <input
              v-model="form.streetName"
              class="house-create__input -street"
              placeholder="Enter the street"
              required
              type="text"
            />
          </label>
          <div class="house-create__box">
            <label class="house-create__label">
              <span class="house-create__label-text">House number*</span>
              <input
                v-model="form.houseNumber"
                class="house-create__input -house-number -double"
                placeholder="Enter house number"
                required
                type="number"
              />
            </label>
            <label class="house-create__label">
              <span class="house-create__label-text">Addition</span>
              <input
                v-model="form.numberAddition"
                class="house-create__input -addition -double"
                placeholder="e.g.A"
                type="text"
              />
            </label>
          </div>
          <label class="house-create__label">
            <span class="house-create__label-text">Postal code*</span>
            <input
              v-model="form.zip"
              class="house-create__input -postal-code"
              placeholder="e.g. 1000 AA"
              required
              type="text"
            />
          </label>
          <label class="house-create__label">
            <span class="house-create__label-text">City*</span>
            <input
              v-model="form.city"
              class="house-create__input -city"
              placeholder="e.g. Utrecht"
              required
              type="text"
            />
          </label>
          <label class="house-create__label drop">
            <span class="house-create__label-text"
              >Upload picture(PNG or JPG)*</span
            >
            <label class="drop-container">
              <input
                alt="house"
                class="house-create__input -image"
                required
                type="file"
                @change="onAddFile"
              />
            </label>
            <img
              v-if="image"
              :src="image"
              alt="Uploaded House image"
              class="house-create__preview"
            />
          </label>

          <label class="house-create__label">
            <span class="house-create__label-text">Price*</span>
            <input
              v-model="form.price"
              class="house-create__input -price"
              min="0"
              placeholder="e.g. $150.000"
              required
              type="number"
            />
          </label>
          <div class="house-create__box">
            <label class="house-create__label">
              <span class="house-create__label-text">Size*</span>
              <input
                v-model="form.size"
                class="house-create__input -size -double"
                placeholder="e.g. 60m2"
                required
                type="number"
              />
            </label>
            <label class="house-create__label">
              <span class="house-create__label-text">Garage*</span>
              <select
                v-model="form.hasGarage"
                class="house-create__input -garage -double"
                required
              >
                <option class="house-create__input" value="">Select</option>
                <option :value="true" class="house-create__input">yes</option>
                <option :value="false" class="house-create__input">no</option>
              </select>
            </label>
          </div>
          <div class="house-create__box">
            <label class="house-create__label">
              <span class="house-create__label-text">Bedrooms*</span>
              <input
                v-model="form.bedrooms"
                class="house-create__input -bedrooms -double"
                min="0"
                placeholder="Enter amount"
                required
                type="number"
              />
            </label>
            <label class="house-create__label">
              <span class="house-create__label-text">Bathrooms*</span>
              <input
                v-model="form.bathrooms"
                class="house-create__input -bathroom -double"
                min="0"
                placeholder="Enter amount"
                required
                type="number"
              />
            </label>
          </div>
          <label class="house-create__label">
            <span class="house-create__label-text">Construction date*</span>
            <input
              v-model="form.constructionYear"
              class="house-create__input -construction-date"
              min="1901"
              placeholder="e.g. 1990"
              required
              type="number"
            />
          </label>
          <label class="house-create__label">
            <span class="house-create__label-text">Description*</span>
            <textarea
              v-model="form.description"
              class="house-create__input -description"
              placeholder="Enter description"
              required
              rows="7"
            />
          </label>
          <button class="house-create__post" type="submit">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/_colors.scss" as color;

.background {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-size: 100vw;
  background-image: url("@/assets/images/img_background@3x.png");
  padding-bottom: 40px;
}

.box {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.house-create {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  align-self: flex-start;

  &__back {
    color: color.$secondary-text-color;
    margin-top: 20px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    &-title {
      font-size: 18px;
      font-weight: bold;
    }
  }

  &__icon {
    &.-back {
      width: 15px;
      height: 15px;
    }
  }

  //&__back {
  //  font-size: 18px;
  //  color: color.$secondary-text-color;
  //  margin-top: 20px;
  //  text-decoration: none;
  //}

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
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
  }

  &__preview {
    max-width: 76px;
    max-height: 76px;
  }

  .drop {
    align-self: flex-start;
  }

  .-image {
    visibility: hidden;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: #444;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #555;

    .-image[type="file"]::file-selector-button {
      margin-right: 20px;
      border: none;
      background: #084cdf;
      padding: 10px 20px;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      transition: background 0.2s ease-in-out;
    }

    .-image[type="file"]::file-selector-button:hover {
      background: #0d45a5;
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
    transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
    background-image: url("@/assets/images/ic_upload@3x.png");
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .drop-container:hover {
    background: #eee;
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

$breakpoint: 468px;
@media (max-width: $breakpoint) {
  .box {
    flex-direction: row;
  }
  .house-create__back-title {
    display: none;
  }
  .house-create__back {
    align-self: flex-start;
  }

  .house-create__title {
    align-self: center;
    margin: auto;
  }

  .house-create__form {
    max-width: 350px;
  }
  .house-create__post {
    max-width: none;
    min-width: 0;
    width: 100%;
  }
}

$breakpoint2: 400px;
@media (max-width: $breakpoint2) {
  .house-create {
    width: 100%;
    align-items: center;
  }
}
</style>
