import { defineStore } from "pinia";
import { ToastState } from "./toast.state.js";

export const useToastStore = defineStore("toastStore", {
	state: ToastState,
	getters: {
		getAllToasts: (state) => {
			return state.toasts;
		},
	},
	actions: {
		addToast(data) {
			this.toasts.unshift(data);
			setTimeout(() => {
				this.toasts.pop();
			}, 3000);
		},
	},
});
