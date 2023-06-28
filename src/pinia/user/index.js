import { defineStore } from "pinia";
import { userState } from "./user.state";

export const useUserStore = defineStore("user", {
	state: userState,
	getters: {},
	actions: {},
});
