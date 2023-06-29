import { defineStore } from "pinia";
import { userState } from "./user.state";
import { userService } from "./user.service";
import { useToastStore } from "../toast/toast.store";
import { ToastTypeEnum } from "@/models/enums/ToastType.enum.js";

export const useUserStore = defineStore("user", {
	state: userState,
	getters: {
		getAllUsers() {
			return this.users;
		},
	},
	actions: {
		async createUser(data) {
			await userService
				.createUser(data)
				.then((res) => {
					this.fetchAllUsers();
					useToastStore().addToast({
						message: res.data,
						type: ToastTypeEnum.success,
					});
				})
				.catch((err) => console.log(err.message));
		},
		async fetchAllUsers() {
			await userService
				.fetchAllUsers()
				.then((res) => (this.users = res.data))
				.catch((err) => console.log(err.message));
		},
	},
});
