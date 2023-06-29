<template>
  <transition name="toast">
    <TransitionGroup name="list" tag="div" class="toast-wrapper" v-if="toasts">
      <div
        v-for="toast in toasts"
        :key="toast"
        class="custom-toast"
        :class="{
          danger: toast.type === ToastTypeEnum.danger,
          success: toast.type === ToastTypeEnum.success,
        }"
      >
        {{ toast.message }} <br />
      </div>
    </TransitionGroup>
  </transition>
</template>

<script>
  import { useToastStore } from "../pinia/toast/toast.store";
  import { ToastTypeEnum } from "../models/enums/ToastType.enum";

export default {
  name: 'toast-notification',
    setup(){
      const toastStore = useToastStore();
        
     return {toastStore, ToastTypeEnum}
    },
    computed:{
      toasts(){
        return this.toastStore.getAllToasts;
      }
    }
  }
</script>
  
  <style lang="scss">
  .toast-wrapper {
    position: fixed;
    top: 15px;
    right: 10px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .custom-toast {
    padding: 20px;
    color: white;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: 0 auto;
  }
  
  .danger {
    background: $danger;
  }
  
  .success {
    background: $success;
  }
  
  .toast-enter-from {
    opacity: 0;
    transform: translateY(-60px);
  }
  
  .toast-enter-active {
    transition: all 0.3s ease;
  }
  
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
  
  .toast-leave-active {
    transition: all 0.3s ease;
  }
  
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  </style>