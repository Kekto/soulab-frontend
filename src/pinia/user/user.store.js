import { defineStore } from "pinia";
import { userState } from "./user.state";
// import { userService } from "./user.service";

export const useUserStore = defineStore("user", {
	state: userState,
	getters: {},
	actions: {
		createUser: async (data) => {
			// await userService
			// 	.createUser(data)
			// 	.then((res) => console.log(res))
			// 	.catch((err) => console.log(err.message));
			console.log(data);
		},
	},
});
