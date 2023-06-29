import axios from "axios";

export const userService = {
	async createUser(data) {
		return axios
			.post("user/history", data)
			.then((res) => res)
			.catch((err) => Promise.resolve(err));
	},
	async fetchAllUsers() {
		return axios
			.get("user/history")
			.then((res) => res)
			.catch((err) => Promise.resolve(err));
	},
};
