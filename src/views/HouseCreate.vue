<script setup lang="ts">

</script>

<template>
  <div class="house-create">
    <button class="house-create__btn -back"> Back to overview*</button>
    <form name="add-house" class="house-create__form">
      <label class="house-create__label">
        <span class="house-create__label-text">Street name*</span>
        <input type="text" class="house-create__input -street" placeholder="Enter the street" required/>
      </label>
      <label class="house-create__label">
        <span class="house-create__label-text">House number*</span>
        <input type="text" class="house-create__input -house-number" placeholder="Enter house number" required/>
      </label>
      <label class="house-create__label">
        <span class="house-create__label-text">Addition</span>
        <input type="text" class="house-create__input -addition" placeholder="e.g.A"/>
      </label>
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
      <label class="house-create__label">
        <span class="house-create__label-text">Size*</span>
        <input type="number" class="house-create__input -size" placeholder="e.g. 60m2" required/>
      </label>
      <label class="house-create__label">
        <span class="house-create__label-text">Garage*</span>
        <select class="house-create__input -garage" required>
          <option value="">Select</option>
          <option value="Option 1">yes</option>
          <option value="Option 1">no</option>
        </select>
      </label>
      <label class="house-create__label">
        <span class="house-create__label-text">Bedrooms*</span>
        <input type="number" class="house-create__input -bedrooms" placeholder="enter amount" required/>
      </label>
      <label class="house-create__label">
        <span class="house-create__label-text">Bathrooms*</span>
        <input type="number" class="house-create__input -size" placeholder="enter amount" required/>
      </label>
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
.house-create {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

   &__input{

  }

}


</style>