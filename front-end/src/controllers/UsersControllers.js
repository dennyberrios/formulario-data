import apiControllers from "./apiControllers";

class UsersController {
  getUsers = async () => {
    try {
      const response = await apiControllers.Search(`/users/search`);
      return response;
    } catch (error) {
      console.error({ MSG: "Error get data:", error });
      throw error;
    }
  };

  getUsersById = async (id) => {
    try {
      const response = await apiControllers.Search(`/users/search/${id}`);
      return response;
    } catch (error) {
      console.error({ MSG: "Error get data:", error });
      throw error;
    }
  };

  createUser = async (data) => {
    try {
      const response = await apiControllers.Create(`/users/add`, data);
      return response;
    } catch (error) {
      console.error({ MSG: "Error add data:", error });
      throw error;
    }
  };

  updateUser = async (id, data) => {
    try {
      const response = await apiControllers.Update(`/users/update/${id}`, data);
      return response;
    } catch (error) {
      console.error({ MSG: "Error update data:", error });
      throw error;
    }
  };

  deleteUser = async (id) => {
    try {
      const response = await apiControllers.Delete(`/users/delete/${id}`);
      return response;
    } catch (error) {
      console.error({ MSG: "Error delete data:", error });
      throw error;
    }
  };
}

export default new UsersController();
