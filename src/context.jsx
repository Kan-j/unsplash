import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();


export const AppProvider = ({children}) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    )
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")


    // Search Term
    const [searchTerm, setSearchTerm] = useState('cat')

    function onWindowMatch(){
        if(
            localStorage.theme === 'dark' || 
            (!("theme" in localStorage) && darkQuery.matches)){
                element.classList.add("dark")
        }else{
            element.classList.remove("dark")
        }
    }

    darkQuery.addEventListener("change", (e)=> {
        if(!("theme" in localStorage)) {
            if(e.matches){
                element.classList.add("dark");
            }else {
                element.classList.remove("dark");
            }
        }
    })

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark')
                localStorage.setItem('theme', 'dark')
                break;
            case 'light':
                element.classList.remove('dark')
                localStorage.setItem('theme', 'light')
                break;
            default:
                localStorage.removeItem('theme')
                onWindowMatch();
                break;
        }
    }, [theme])

    return <AppContext.Provider value={{colorTheme,theme, setTheme, searchTerm, setSearchTerm}}>
        {children}
    </AppContext.Provider>
}



export const useGlobalContext = () => {
    return useContext(AppContext);
}
