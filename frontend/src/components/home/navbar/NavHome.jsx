"use client";
import { VscGraph } from "react-icons/vsc";
import { GoEye } from "react-icons/go";
import { use, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSection } from "@/redux/features/activeSectionSlice";

const NavHome = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  return (
    <section
      className={`${
        open ? "w-60" : "w-20"
      } bg-black min-h-screen   flex flex-col transition-all duration-300`}
    >
      <div className="text-white">
        <div className="p-10">
          <h2 className="">miFinanz</h2>
        </div>
        <div className="p-10 flex flex-col gap-8">
          <div className="flex gap-2 text-xl cursor-pointer">
            <VscGraph />
            <p
              onClick={() => handleSetSection("dashboard")}
              className="hover:text-mLightGray"
            >
              Dashboard
            </p>
          </div>
          <div className="cursor-pointer">
            <p
              onClick={() => handleSetSection("cards")}
              className="hover:text-mLightGray"
            >
              Tarjetas
            </p>
          </div>
          <div className="cursor-pointer">
            <p
              onClick={() => handleSetSection("bills")}
              className="hover:text-mLightGray"
            >
              Gastos
            </p>
          </div>
          <div className="cursor-pointer">
            <p
              onClick={() => handleSetSection("earnings")}
              className="hover:text-mLightGray"
            >
              Ingresos
            </p>
          </div>
        </div>
        <div
          className={`${
            !open && "hidden"
          } bg-gray-300 h-52 w-48 rounded-2xl m-5 flex flex-col  text-gray-600`}
        >
          <div className="justify-center items-center text-center">
            <GoEye className="text-8xl" />
            <p className="text-black">Conoce toda las herramientas</p>
            <button className="border border-blue-400	w-32 h-14 text-blue-400 rounded-xl">
              TUTORIAL
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <i className="cursor-pointer" onClick={() => setOpen(false)}>
            X
          </i>
          <i className="cursor-pointer" onClick={() => setOpen(true)}>
            -Open-
          </i>
        </div>
      </div>
    </section>
  );
};
export default NavHome;
