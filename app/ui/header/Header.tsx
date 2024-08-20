'use client'

import Image from "next/image";
import logo from "@/public/images/logo.png"
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import styles from './header.module.css';

interface NavItem {
    id: number;
    text: string;
    link: string;
}
const Header = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => { setNav(!nav) };

    const navItems: NavItem[] = [
        { id: 1, text: 'Home', link: '#welcome' },
        { id: 2, text: 'About', link: '#about' },
        { id: 3, text: 'Expertise', link: '#expertise' },
        // { id: 4, text: 'Proyects', link: '#proyects' },
    ];

    return (
        <header className=" fixed z-10 w-screen px-1 pr-10 sm:px-20 py-10 bg-[#00a388] h-20 flex items-center justify-between text-[#fff]">

                {/* Logo */}
                <picture className="bg-[#00a388]">
                    <Image className="rounded-full mw-100" src={logo.src} alt="logo" width={150} height={150} />
                </picture>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                        >
                            <a href={item.link}>
                            {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:block">
                    <ThemeToggle />
                </div>
                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    { !nav &&  <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <li className="flex items-center justify-between pr-[5%]">
                        <picture>
                            <Image className="rounded-full mw-100" src={logo.src} alt="logo" width={150} height={150} />
                        </picture>

                        <ThemeToggle />

                        <div onClick={handleNav} className='block md:hidden ml-4'>
                            <AiOutlineClose size={20} />
                        </div>
                    </li>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <a key={item.id} href={item.link}>
                            <li
                                className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                            >
                                {item.text}
                            </li>
                        </a>
                    ))}
                </ul>
        </header>
    );
};

export default Header;
