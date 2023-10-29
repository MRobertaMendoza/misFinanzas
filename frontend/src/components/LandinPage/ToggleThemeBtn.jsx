"use client";

import { useState } from "react";

const ToggleThemeBtn = ({ handleOnClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex bg-mBlack rounded-2xl cursor-pointer select-none items-center dark:bg-mWhite">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          onClick={handleOnClick}
          className="sr-only"
        />
        <div className="box bg-primary block h-8 w-14 rounded-full"></div>
        <div
          className={`dot absolute top-1 flex h-6 w-6
                     items-center justify-center rounded-full transition dark:bg-mBlack bg-mWhite
                      ${isChecked ? "left-1" : "right-1 "}`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleThemeBtn;
