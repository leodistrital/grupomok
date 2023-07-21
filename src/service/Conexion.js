import axios from "axios";

const URL = `https://randomuser.me/api/?results=100`;

export class Conexion {
	header = {};

	gettable() {
		return axios
			.get(URL, {
				headers: this.header,
			})
			.then((res) => {
				return res.data;
			})
			.catch(function (err) {
				return err;
			});
	}
}
