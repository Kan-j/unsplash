import React, { useState } from 'react'
import { useGlobalContext } from './context'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { FaMoon } from "react-icons/fa6";
import { RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
    const {colorTheme,theme, setTheme} = useGlobalContext();
    const [darkSide, setDarkSide] = useState(colorTheme)

    const toggleDarkMode = (checked) => {
        if(theme === 'dark'){
            setTheme('light')
        } 
        else{
            setTheme('dark')
        } 
        setDarkSide(checked);
    }



  return (
    <section>
        <article className='w-full flex justify-center px-6 pt-4'>
            <button onClick={toggleDarkMode} className=''>
            {theme === 'light' && <FaMoon color='black' fontSize={30} />}
            {theme === 'dark' && <RiSunFill color='white' fontSize={30}/>}
            
            </button>
            
        </article>
    </section>
  )
}

export default ThemeToggle