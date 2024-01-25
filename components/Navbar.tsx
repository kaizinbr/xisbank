"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={`
                    col-span-12 px-8 h-20 flex items-center justify-between
                    fixed top-0 left-0 right-0
                    bg-parchment-100 z-50

                `}
            >
                <div
                    className={`
                        flex items-center justify-between
                        w-full
                    `}
                >
                    <div
                        className={`
                            flex items-center justify-center gap-8
                        `}
                    >
                        <h1
                            className={`
                                    neulisTitle
                                    text-4xl 
                                    text-secondary-500
                                    
                                `}
                        >
                            xịs
                        </h1>
                        <nav
                            className={`
                                hidden desktop:flex
                            `}
                        >
                            <ul
                                className={`
                                flex items-center justify-center gap-5
                            `}
                            >
                                <li
                                    className={`
                                    text-irish-coffee-900 font-bold
                                    hover:text-irish-coffee-800
                                    transition duration-300
                                `}
                                    py-6
                                >
                                    <Link href="#">Início</Link>
                                </li>
                                <li
                                    className={`
                                    text-irish-coffee-900 font-bold
                                    hover:text-irish-coffee-800
                                    transition duration-300
                                `}
                                    py-6
                                >
                                    <Link href="#">Para você</Link>
                                </li>
                                <li
                                    className={`
                                    text-irish-coffee-900 font-bold
                                    hover:text-irish-coffee-800
                                    transition duration-300
                                `}
                                    py-6
                                >
                                    <Link href="#">Para o seu negócio</Link>
                                </li>
                                <li
                                    className={`
                                    text-irish-coffee-900 font-bold
                                    hover:text-irish-coffee-800
                                    transition duration-300
                                `}
                                    py-6
                                >
                                    <Link href="#">Sobre os xis</Link>
                                </li>
                                <li
                                    className={`
                                    text-irish-coffee-900 font-bold
                                    hover:text-irish-coffee-800
                                    transition duration-300
                                `}
                                    py-6
                                >
                                    <Link href="#">Perguntas</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div
                        className={`
                            items-center justify-center gap-3
                            flex flex-row 
                        `}
                    >
                        <div
                            className={`
                                items-center justify-center gap-3 flex flex-row
                            `}
                        >
                            <button
                                className={`
                                    items-center justify-center
                                    bg-transparent rounded-xl px-4 py-2
                                    border-2 border-irish-coffee-800
                                    text-irish-coffee-800
                                    hover:text-irish-coffee-50 hover:bg-irish-coffee-900
                                    transition duration-300
                                hidden desktop:flex
                                `}
                            >
                                Área do cliente
                            </button>
                            <button
                                className={`
                                    flex items-center justify-center
                                    bg-secondary-500 rounded-xl px-4 py-2
                                    border-2 border-secondary-500
                                    text-irish-coffee-100
                                    hover:text-irish-coffee-50 hover:bg-secondary-600 hover:border-secondary-600
                                    transition duration-300
                                    font-bold
                                `}
                            >
                                Abrir conta
                            </button>
                        </div>
                        <div
                            className={`
                                desktop:hidden
                        `}
                        >
                            <button
                                className={`
                                    size-12 flex items-center justify-center
                                `}
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            >
                                {isOpen ?
                                (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>)
                                : (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 9h16.5m-16.5 6.75h16.5"
                                    />
                                </svg>)
                                
                                
}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div
                className={`
                desktop:hidden
                w-full h-full 
                fixed top-20 left-0 right-0
                z-40 bg-stone-700/30
                backdrop-filter backdrop-blur-sm

                transition duration-300

                ${isOpen ? "z-40" : "-z-20 bg-transparent"}
            
            `}
            > */}
            <nav
                className={`
                        flex flex-col items-start justify-start 
                        w-full h-fit px-8 pt-8 pb-4
                        z-40

                        fixed top-20 left-0 right-0
                
                        bg-parchment-100 shadow-2xl
                        rounded-b-xl

                        transition duration-300
                        
                        ${
                            isOpen
                                ? "translate-y-0"
                                : "-translate-y-[calc(100%+5rem)] "
                        }
                    `}
            >
                <ul
                    className={`
                            flex flex-col items-start justify-start gap-4
                            w-full h-full 
                        `}
                >
                    <li
                        className={`
                                text-irish-coffee-900 font-bold
                                hover:text-irish-coffee-800
                                transition duration-300
                                w-full py-3
                            `}
                    >
                        <Link
                            href="#"
                            className={`
                                    flex items-center justify-between
                                    w-full text-xl
                                `}
                        >
                            <span>Início</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </li>

                    <li
                        className={`
                                text-irish-coffee-900 font-bold
                                hover:text-irish-coffee-800
                                transition duration-300
                                w-full py-3
                            `}
                    >
                        <Link
                            href="#"
                            className={`
                                    flex items-center justify-between
                                    w-full text-xl
                                `}
                        >
                            <span>Para você</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li
                        className={`
                                text-irish-coffee-900 font-bold
                                hover:text-irish-coffee-800
                                transition duration-300
                                w-full py-3
                            `}
                    >
                        <Link
                            href="#"
                            className={`
                                    flex items-center justify-between
                                    w-full text-xl
                                `}
                        >
                            <span>Para seu negócio</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li
                        className={`
                                text-irish-coffee-900 font-bold
                                hover:text-irish-coffee-800
                                transition duration-300
                                w-full py-3
                            `}
                    >
                        <Link
                            href="#"
                            className={`
                                    flex items-center justify-between
                                    w-full text-xl
                                `}
                        >
                            <span>
                                Sobre o <span className="neulis">xịs</span>
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li
                        className={`
                                text-irish-coffee-900 font-bold
                                hover:text-irish-coffee-800
                                transition duration-300
                                w-full py-3
                            `}
                    >
                        <Link
                            href="#"
                            className={`
                                    flex items-center justify-between
                                    w-full text-xl
                                `}
                        >
                            <span>Acessar conta</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </li>
                    <li
                        className={`
                                text-irish-coffee-900 font-bold
                                hover:text-irish-coffee-800
                                transition duration-300
                                w-full py-3
                            `}
                    >
                        <Link
                            href="#"
                            className={`
                                    flex items-center justify-between
                                    w-full text-xl
                                `}
                        >
                            <span>Criar conta</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Link>
                    </li>
                </ul>

                <div className="w-full mt-4 flex justify-center items-center">
                    <div className="h-1 w-20 rounded-full bg-irish-coffee-950"></div>
                </div>
            </nav>
            {/* </div> */}
        </>
    );
}
