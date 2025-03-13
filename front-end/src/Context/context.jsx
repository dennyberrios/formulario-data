import { createContext, useEffect, useState } from "react";
import usersControllers from "../controllers/usersControllers";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [reloadLayout, setReloadLayout] = useState(false);

  useEffect(() => {
    async function getUsers() {
      const response = await usersControllers.getUsers();
      setData(response.result);
    }
    getUsers();
  }, [reloadLayout]);

  async function userDelete(id) {
    await usersControllers.deleteUser(id);
  }

  return (
    <UserContext.Provider
      value={{
        data,
        userDelete,
        setReloadLayout,
        reloadLayout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
