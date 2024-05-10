"use client";

import {
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";
import React from "react";

interface ContextProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
    theme: "",
    setTheme: (): string => "",
});

export const GlobalContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("");
    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
