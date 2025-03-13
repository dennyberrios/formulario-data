import { axiosInstance } from "../services/Http/api";

class APIControllers {
  Search = async (endpoint) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error({ MSG: "Error get data:", error });
      throw error;
    }
  };

  Create = async (endpoint, data) => {
    try {
      const response = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error({ MSG: "Error create data:", error });
      throw error;
    }
  };

  Update = async (endpoint, data) => {
    try {
      const response = await axiosInstance.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error({ MSG: "Error update data:", error });
      throw error;
    }
  };

  Delete = async (endpoint) => {
    try {
      const response = await axiosInstance.delete(endpoint);
      return response.data;
    } catch (error) {
      console.error({ MSG: "Error delete data:", error });
      throw error;
    }
  };
}

export default new APIControllers();
