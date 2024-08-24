"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ContactItemProps {
    icon: string;
    hoverIcon: string;
    link: string;
    alt: string;
    text: string;
    intervalDelay: number; // Delay para mostrar el hoverIcon
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, hoverIcon, link, alt, text, intervalDelay }) => {
    const [isHovered, setIsHovered] = useState(false);
    const intervalTime = 5000; // tiempo de espera para mostrar el hoverIcon

    useEffect(() => {
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setIsHovered(true);
                setTimeout(() => {
                    setIsHovered(false);
                }, 200); // Tiempo que se muestra el hoverIcon
            }, intervalTime);
    
            return () => clearInterval(interval);
        }, intervalDelay);
    
        return () => clearTimeout(timeout);
    }, [intervalDelay]);
    return (
        <a href={link} target="_blank" rel="noreferrer" className="group relative flex-1 flex flex-col items-center p-4 bg-white bg-slate-400 dark:bg-slate-700 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <Image src={icon} alt={alt} className={`w-16 h-16 transition-opacity duration-100 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0`} />
            <Image src={hoverIcon} alt={`${alt} Hover`} className={`w-16 h-16 transition-opacity duration-100 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 absolute`} />
            <p className="mt-4 text-lg font-medium">{text}</p>
        </a>
    );
};

export default ContactItem;