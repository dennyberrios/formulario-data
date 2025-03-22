import { createContext, useEffect, useState } from "react";
import UsersControllers from "../controllers/UsersControllers";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [reloadLayout, setReloadLayout] = useState(false);

  useEffect(() => {
    async function getUsers() {
      const response = await UsersControllers.getUsers();
      setData(response.result);
    }
    getUsers();
  }, [reloadLayout]);

  async function getUserById(id) {
    const response = await UsersControllers.getUsersById(id);
    return response;
  }

  async function userCreate(data) {
    const response = await UsersControllers.createUser(data);
    return response;
  }

  async function userUpdate(id, data) {
    const response = await UsersControllers.updateUser(id, data);
    return response;
  }

  async function userDelete(id) {
    await UsersControllers.deleteUser(id);
  }

  return (
    <UserContext.Provider
      value={{
        data,
        userDelete,
        setReloadLayout,
        reloadLayout,
        getUserById,
        userCreate,
        userUpdate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
