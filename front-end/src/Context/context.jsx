import { createContext, useEffect, useState } from "react";
import usersControllers from "../controllers/usersControllers";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await usersControllers.getUsers();
            setData(response.result)
        }
        getUsers();
    }, []);

    return (
        <UserContext.Provider value={{
            data,
            setData
        }}>
        {children}
        </UserContext.Provider>
    );
};