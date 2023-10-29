"use client";
import { setSection } from "@/redux/features/activeSectionSlice";
import DropProfile from "../dropProfile/DropProfile";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import ToggleThemeBtn from "@/components/LandinPage/ToggleThemeBtn";
import { toggleTheme } from "@/redux/features/themeSlice";

const TopBar = () => {
  const theme = useAppSelector((state) => state.theme.darkMode);

  const dispatch = useAppDispatch();

  const handleClick = (section) => {
    dispatch(setSection(section));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className="grid grid-cols-3 p-1 w-full">
      <div className="w-44">
        <DropProfile firstName="Víctor" picture={"/defaultAvatar.png"} />
      </div>
      <div className="text-transparent"> Temp </div>
      <div className="flex justify-end gap-3">
        <ToggleThemeBtn handleOnClick={handleChangeTheme} />
        <div
          onClick={() => handleClick("addTransaction")}
          className="mr-4 cursor-pointer bg-mBlue w-10 rounded-full flex justify-center items-center font-medium text-mWhite text-4xl "
        >
          +
        </div>
      </div>
    </div>
  );
};

export default TopBar;
