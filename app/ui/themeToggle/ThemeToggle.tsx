'use client'

import { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoon  } from "react-icons/io5";


const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <div>
            <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white bg-[#00a388] px-2 py-1 rounded-full  w-20 flex justify-between  bg-slate-50 dark:dark:bg-[#232325] transition-all transition-duration-500 relative" >
                <span 
                className={`block absolute content-[' '] w-6 h-6 bg-[#00a388] rounded-full top-1 left-0
                ${darkMode ? 'translate-x-12' : 'translate-x-1'}
                transition-all ease-in-out duration-500 
                `}
                
            
            ></span>
                <span><IoSunnyOutline color="yellow" size={25} /></span>
                <span><IoMoon color="black" size={25}/></span>
            </button>
        </div>
    );
};
export default ThemeToggle