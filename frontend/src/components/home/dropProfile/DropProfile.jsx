"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const DropProfile = (props) => {
  const { firstName, picture } = props;
  const [open, setOpen] = useState(false);
  const componenteRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componenteRef.current &&
        !componenteRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const signOut = () => {
    alert("Sign out");
  };

  const handleOpenList = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        ref={componenteRef}
        className="flex relative min-w-40  h-10 px-1 bg-mLightGray dark:bg-mDarkGray rounded-full cursor-pointer items-center select-none"
      >
        <div className="flex items-center" onClick={handleOpenList}>
          <div className="profile-image">
            <Image src={picture} width={50} height={50} alt="Profile picture" />
          </div>
          <div className="profile-info">
            <h1>{firstName}</h1>
          </div>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path d="M7 10.3867L12 15.3867L17 10.3867H7Z" fill="black" />
            </svg>
          </div>
        </div>
        {open && (
          <div className="absolute right-0 top-10 bg-mWhite dark:bg-mDarkGray ">
            <ul className="flex flex-col gap-1 py-3 shadow-lg">
              <li className="px-3 hover:bg-white">Profile</li>
              <li className="px-3 hover:bg-white">Settings</li>
              <li className="px-3 hover:bg-white">Contact us</li>
              <li onClick={signOut} className="px-3 hover:bg-white">
                Log out
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropProfile;
