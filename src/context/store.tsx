"use client";

import {
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    useState,
    useEffect,
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

export const GlobalContextProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        if (localStorage.getItem("theme") == 'light') {
            setTheme(localStorage.getItem("theme") as string);
        } else setTheme("dark");
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const body = document.querySelector("body");
        if (theme == "light") body?.classList.remove("dark");
        else body?.classList.add("dark");
    }, [theme]);

    return (
        <GlobalContext.Provider value={{ theme, setTheme }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
