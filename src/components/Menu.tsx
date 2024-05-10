"use client";

import menuStyles from '@/css/menu.module.css'
import { LiaLinkedinIn, LiaGithub } from "react-icons/lia";
import { TbWorld, TbMoonFilled, TbMenu2 } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";
import { useGlobalContext } from '@/context/store';

export default function Menu() {
    //Variables
    const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
    const { theme, setTheme } = useGlobalContext();
    const classLiIcon =
        "flex justify-center items-center text-lg rounded-full p-1 border border-black dark:border-primary-dark-gray hover:dark:border-primary-dark-orange hover:border-primary-light-blue hover:dark:text-primary-dark-orange hover:text-primary-light-blue transition transition-colors duration-200";
    const classLiA =
        "dark:text-primary-dark-gray text-black hover:dark:text-primary-dark-orange hover:text-primary-light-blue transition transition-colors duration-200 flex justify-center items-center";
    //UseEffects and life hooks

    //Métodos
    const handleClickResponsiveMenu = () => {
        setShowResponsiveMenu(!showResponsiveMenu);
    };
    const handleClickTheme = () => {
        if(theme == 'dark') setTheme('light');
        else setTheme('dark')
    };

    return (
        <header>
            <nav className="hidden lg:flex justify-evenly w-full h-16 relative dark:bg-white/10 bg-black/10 z-20">
                {/* <LanguageSelector /> */}
                <a
                    href="/"
                    className={"flex justify-center items-center w-20 h-full dark:bg-primary-dark bg-primary-light dark:before:bg-primary-dark-orange before:bg-primary-light-blue " + menuStyles.logo}
                >
                    <span className="dark:text-white text-black transition-transform duration-200 hover:animate-reflection">
                        DOCPI
                    </span>
                </a>
                <ul className="flex justify-between items-center h-full w-44">
                    <li>
                        <a className={`${classLiA} text-lg`} href="/projects">
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a className={`${classLiA} text-lg`} href="/about">
                            Sobre mí
                        </a>
                    </li>
                </ul>
                <ul className="flex h-full justify-evenly items-center gap-3">
                    <li className={classLiIcon}>
                        <a
                            className="flex justify-center items-center"
                            href="https://www.linkedin.com/in/camilo-l%C3%B3pez-901099283/"
                        >
                            <LiaLinkedinIn />
                        </a>
                    </li>
                    <li className={classLiIcon}>
                        <a
                            className="flex justify-center items-center"
                            href="https://github.com/CamiloLopez15"
                        >
                            <LiaGithub />
                        </a>
                    </li>
                    <li className={classLiIcon}>
                        <a
                            className="flex justify-center items-center"
                            href="https://camilolopez15.github.io/"
                        >
                            {" "}
                            <TbWorld />
                        </a>
                    </li>
                    <li className={classLiIcon}>
                        <button onClick={handleClickTheme}>
                            <TbMoonFilled />
                        </button>
                    </li>
                </ul>
            </nav>

            <nav className="flex lg:hidden justify-evenly w-full h-16 relative dark:bg-white/10 bg-black/10">
                <div className="flex justify-between items-center w-full px-4">
                    <a
                        href="/"
                        className="logo flex justify-center items-center w-20 h-full dark:bg-primary-dark bg-primary-light dark:before:bg-primary-dark-orange before:bg-primary-light-blue"
                    >
                        <span className="dark:text-white text-black transition-transform duration-200 hover:animate-reflection">
                            DOCPI
                        </span>
                    </a>
                    <button
                        className="text-3xl"
                        id="MenuOpen"
                        onClick={handleClickResponsiveMenu}
                    >
                        <TbMenu2 />
                    </button>
                </div>
                <div
                    className={`absolute flex flex-col justify-between z-50 w-full min-h-screen dark:bg-black bg-white ${
                        showResponsiveMenu ? "flex" : "hidden"
                    }`}
                >
                    <div
                        className={`flex justify-end items-center w-full h-20 relative px-3`}
                    >
                        {/* <LanguageSelector /> */}
                        <button
                            className="text-3xl"
                            onClick={handleClickResponsiveMenu}
                        >
                            <CgClose />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-8 justify-center items-center w-full my-10">
                        <li>
                            <a
                                className={`${classLiA} text-3xl`}
                                href="/projects"
                            >
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a className={`${classLiA} text-3xl`} href="/about">
                                Sobre mí
                            </a>
                        </li>
                    </ul>
                    <ul className="flex border-t-2 items-center justify-center py-5 gap-8">
                        <li className={classLiIcon}>
                            <a href="https://www.linkedin.com/in/camilo-l%C3%B3pez-901099283/">
                                <LiaLinkedinIn />
                            </a>
                        </li>
                        <li className={classLiIcon}>
                            <a href="https://github.com/CamiloLopez15">
                                <LiaGithub />
                            </a>
                        </li>
                        <li className={classLiIcon}>
                            <a href="https://camilolopez15.github.io/">
                                <TbWorld />
                            </a>
                        </li>
                        <li className={classLiIcon}>
                            <button onClick={handleClickTheme}>
                                <TbMoonFilled />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
