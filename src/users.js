import axios from "axios";

class Users {
  static async all() {
    return axios.get("/someurl").then((resp) => resp.data);
  }
}

export default Users;
