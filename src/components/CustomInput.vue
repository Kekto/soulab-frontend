<template>
  <div class="custom-input">
    <label :for="label"> {{ label }}</label>
    <input type="text" placeholder="Please input" :id="label" :value="modelValue" @input="$emit(`update:modelValue`,$event.target.value)">
    <span v-if="modelValue" class="clear-input" @click="$emit(`update:modelValue`,'')">✕</span>
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
  "label input clear"
  "message message message";
  grid-template-columns: min-content auto 8px;
  grid-template-rows: auto 20px;
  gap: 2px 8px;
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
    font-size: 12px;
    padding-right: 16px;
  }
  .clear-input{
    grid-area: clear;
    align-self: center;
    font-weight: bold;
    cursor: pointer;
  }
  
}
</style>