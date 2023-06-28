<template>
  <div class="custom-input">
    <label :for="label"> {{ label }}</label>
    <input type="text" :id="label" :value="modelValue" @input="$emit(`update:modelValue`,$event.target.value)">
    <span class="validation-message">{{ validationMessage }}</span>
  </div>
</template>

<script>
export default {
  name: 'custom-input',
  components: {},
  props:{
    label:String,
    modelValue: String,
    validationMessage: String,
  },
  emits: [
    'update:modelValue',
  ]
}
</script>

<style scoped lang="scss">
.custom-input{
  display: grid;
  grid-template-areas: 
  "label input"
  "message message";
  grid-template-columns: min-content auto;
  grid-template-rows: auto 30px;
  gap: 12px 8px;
  input {
    grid-area: input;
    justify-self: stretch;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid;
  }
  label {
    white-space: nowrap;
    grid-area: label;
    align-self: center;
  }
  .validation-message {
    grid-area: message;
    color: red;
    justify-self: flex-end;
  }
  
}
</style>