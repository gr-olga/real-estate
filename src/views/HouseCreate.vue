<script setup lang="ts">

</script>

<template>
  <div class="house-create">
    <RouterLink to="/" class="house-create__back"> Back to overview*</RouterLink>
    <h1 class="house-create__title">Create new listing</h1>
    <form name="add-house" class="house-create__form">
      <label class="house-create__label">
        <span class="house-create__label-text">Street name*</span>
        <input type="text" class="house-create__input -street" placeholder="Enter the street" required/>
      </label>
      <div class="house-create__box">
        <label class="house-create__label">
          <span class="house-create__label-text">House number*</span>
          <input type="text" class="house-create__input -house-number -double" placeholder="Enter house number"
                 required/>
        </label>
        <label class="house-create__label">
          <span class="house-create__label-text">Addition</span>
          <input type="text" class="house-create__input -addition -double" placeholder="e.g.A"/>
        </label>
      </div>
      <label class="house-create__label">
        <span class="house-create__label-text">Postal code*</span>
        <input type="text" class="house-create__input -postal-code" placeholder="e.g. 1000 AA" required/>
      </label>
      <label class="house-create__label">
        <span class="house-create__label-text">City*</span>
        <input type="text" class="house-create__input -city" placeholder="e.g. Utrecht" required/>
      </label>
      <label class="house-create__label">
        <span class="house-create__label-text">Upload picture(PNG or JPG)*</span>
        <input type="file" class="house-create__input -image" alt="house" required/>
        <img src="#" alt="image">
      </label>

      <label class="house-create__label">
        <span class="house-create__label-text">Price*</span>
        <input type="number" class="house-create__input -price" placeholder="e.g. $150.000" required/>
      </label>
      <div class="house-create__box">
        <label class="house-create__label">
          <span class="house-create__label-text">Size*</span>
          <input type="number" class="house-create__input -size -double" placeholder="e.g. 60m2" required/>
        </label>
        <label class="house-create__label">
          <span class="house-create__label-text">Garage*</span>
          <select class="house-create__input -garage -double" required>
            <option value="">Select</option>
            <option value="Option 1">yes</option>
            <option value="Option 1">no</option>
          </select>
        </label>
      </div>
      <div class="house-create__box">
        <label class="house-create__label">
          <span class="house-create__label-text">Bedrooms*</span>
          <input type="number" class="house-create__input -bedrooms -double" placeholder="enter amount" required/>
        </label>
        <label class="house-create__label">
          <span class="house-create__label-text">Bathrooms*</span>
          <input type="number" class="house-create__input -size -double" placeholder="enter amount" required/>
        </label>
      </div>
      <label class="house-create__label">
        <span class="house-create__label-text">Construction date*</span>
        <input type="number" class="house-create__input -construction-date" placeholder="e.g. 1990" required/>
      </label>
      <label class="house-create__label">
        <span class="house-create__label-text">Description*</span>
        <input type="text" class="house-create__input -description" placeholder="Enter description" required/>
      </label>
      <button>Post</button>
    </form>

  </div>
</template>

<style scoped lang="scss">
@use '@/assets/_colors.scss' as color;

.house-create {
  display: flex;
  flex-direction: column;
  background-image: url("@/assets/images/img_background@3x.png");
  max-width: 100%;
  align-items: flex-start;

  &__title {
    font-size: 18px;
    font-weight: bold;
  }

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 400px;
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

  &__box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .-double {
    min-width: 150px;
    padding: 20px 0;
  }


}


</style>