import Image from "next/image";
import logo from "@/public/images/logo.png"
import ThemeToggle from "../themeToggle/ThemeToggle";

// import styles from './header.module.css';
const Header = () => {
    return (
        <header className=" fixed w-screen px-20 py-10 bg-[#00a388] h-20 flex items-center justify-between text-[#fff]">
            <picture className="bg-[#00a388]">
                <Image className="rounded-full mw-100" src={logo.src} alt="logo" width={150} height={150} />
            </picture>

            <nav>
                <ul className="flex gap-10">
                    <li>
                        <a href="#welcome">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#expertise">Expertise</a>
                    </li>
                    <li>
                        <a href="#proyects">Proyects</a>
                    </li>
                </ul>
            </nav>

            <ThemeToggle />
        </header>
    );
};

export default Header;