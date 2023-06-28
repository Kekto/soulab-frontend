import axios from "axios";

export const userService = {
	async createUser(data) {
		return axios
			.post("http://localhost:8000/user", data)
			.then((res) => res)
			.catch((err) => Promise.resolve(err));
	},
};
