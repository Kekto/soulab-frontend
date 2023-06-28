<template>
  <fieldset>
    <legend>
      <slot name="title" />
    </legend>
    <form class="form" @submit="$emit(`submitForm`)">
      <slot />
      <button class="button-9" type="submit">Submit</button>
    </form>
  </fieldset>
</template>

<script>

export default {
  name: 'form-component',
  emits: [
    'submitForm'
  ]
}
</script>

<style scoped lang="scss">
fieldset{
  width: 50%;
  margin: auto;
  padding: 10px 30px 30px 30px;
}
.form{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  button {
    width: fit-content;
    align-self: center;
  }
}

.button-9 {
  background-color: #0a0a0a;
  border-radius: 6px;
  border-width: 0;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  height: 44px;
  line-height: 20px;
  margin: 12px 0 0;
  padding: 0 25px;
  transition: background-color .2s,box-shadow .08s ease-in;
  user-select: none;
  width: 100%;
}
.button-9:hover{
  background-color: #797979;
}
</style>