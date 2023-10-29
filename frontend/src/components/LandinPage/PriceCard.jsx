import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { priceCards } from "@/utils/data";
import Link from "next/link";

const PriceCard = () => {
  return (
    <section
      id="plus"
      className="min-h-screen grid grid-cols-1 w-full content-center justify-items-center flex-wrap text-white sm:grid-cols-2 lg:grid-cols-3"
    >
      {priceCards?.map((item) => (
        <div
          id="container-card"
          className="grid w-[320px] h-[500px] bg-mLightGray dark:bg-mDarkGray hover:border hover:border-solid hover:border-mYellow rounded-xl text-center p-8 gap-4"
          key={item.id}
        >
          <h2 className="font-bold text-lg">{item?.name}</h2>
          <div>
            <h3 className="text-mYellow text-4xl font-bold">{item?.price}$</h3>
            <p className="text-mBlack dark:text-mBlue text-md font-bold">
              Por mes
            </p>
          </div>
          <ul className="grid gap-3 text-left">
            {item?.feautures?.map((feature, index) => (
              <div className="flex gap-2" key={`feat${item.id}${index}`}>
                <GoCheckCircleFill className="text-mYellow rounded-full text-3xl" />
                <li key={`li${item.id}${index}`}>{feature}</li>
              </div>
            ))}
          </ul>
          <button className="p-2 bg-mYellow font-medium text-mBlack rounded-md">
            <Link href={"/signup"}>Try for free</Link>
          </button>
        </div>
      ))}
    </section>
  );
};

export default PriceCard;
