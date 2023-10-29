"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toggleTheme } from "@/redux/features/themeSlice";
import { setSection } from "@/redux/features/activeSectionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

import { navLinks } from "../../utils/data";
import ToggleThemeBtn from "./ToggleThemeBtn";
import logo from "@/assets/shared/logo.png";

const NavBar = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.darkMode);
  const activeSection = useAppSelector(
    (state) => state.activeSection.activeSection
  );
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionPositionsRef = useRef({});

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {}, [theme]);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Calcula las posiciones de las secciones
    navLinks.forEach((link) => {
      const sectionElement = document.getElementById(link.hash.substring(1));
      if (sectionElement) {
        sectionPositionsRef.current[link.hash] = {
          top: sectionElement.offsetTop,
          bottom: sectionElement.offsetTop + sectionElement.offsetHeight,
        };
      }
    });
  }, [navLinks]);

  useEffect(() => {
    // Maneja el scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Actualiza la sección activa al hacer scroll
    const currentSection = navLinks.find((link) => {
      const sectionPosition = sectionPositionsRef.current[link.hash];
      return (
        sectionPosition &&
        scrollPosition >= sectionPosition.top &&
        scrollPosition < sectionPosition.bottom
      );
    });

    if (currentSection && currentSection.hash !== activeSection) {
      dispatch(setSection(currentSection.hash));
    }
  }, [scrollPosition, dispatch, activeSection, navLinks]);

  // Función para manejar el click en una sección y hacer scroll suave
  const handleSectionClick = (section) => {
    const sectionPosition = sectionPositionsRef.current[section];

    if (sectionPosition) {
      const offsetTop = sectionPosition.top;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Actualiza la sección activa al hacer clic
      dispatch(setSection(section));
    }
  };

  return (
    <nav className="fixed flex w-full p-5 justify-between z-10 bg-mWhite border-b-2 border-b-mLightGray dark:border-b-mWhite dark:bg-mBlack ">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => push("/")}
      >
        <Image src={logo} alt="miFinanzas" width={39} height={39} />
        <span className="font-semibold text-xl">miFinanzs</span>
      </div>

      <div className="nav-action hidden md:block">
        <ul className="flex items-center gap-4 lg:mr-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={
                activeSection === link.hash
                  ? "ease-in-out font-extrabold text-mRed dark:text-mYellow"
                  : ""
              }
            >
              <Link
                href={link.hash}
                onClick={() => handleSectionClick(link.hash)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>|</li>
          <ToggleThemeBtn handleOnClick={handleChangeTheme} />
          <button
            className="bg-mWhite text-mBlack font-semibold p-1 w-20 rounded-2xl"
            onClick={() => push("/login")}
          >
            LOGIN
          </button>
        </ul>
      </div>
      <div className="nav-hamburger hidden">
        {/* Contenido del menú hamburguesa... */}
      </div>
    </nav>
  );
};

export default NavBar;
