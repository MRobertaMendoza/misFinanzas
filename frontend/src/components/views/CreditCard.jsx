"use client";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { addCard } from "@/redux/features/creditCardSlice";

const CreditCard = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addView, setAddView] = useState(false);

  // Crud for add delete and edit cards
  const dispatch = useAppDispatch();
  // get cards from redux
  const cards = useAppSelector((state) => state.cards);

  const handleAddCard = (name, number) => {
    // add card
    const card = {
      name,
      number,
    };
    dispatch(addCard(card));
    // reset inputs
    setName("");
    setNumber("");
    // close add view
    handleAddView();
  };
  const handleAddView = () => {
    setAddView(!addView);
  };
  return (
    <>
      <section className="grid grid-cols-4 w-full dark:bg-mDarkGray">
        {/* add card */}
        <div className="flex flex-col items-center justify-center w-48 h-48 p-4 m-4 bg-mLightGray rounded-lg shadow-md dark:bg-mDarkGray">
          <div className="flex flex-col items-center justify-center w-full h-full mt-4">
            {!addView ? (
              <button
                onClick={handleAddView}
                className="text-2xl font-bold text-center text-mWhite"
              >
                Agregar Tarjeta
              </button>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full mt-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Numero"
                  className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <button
                  className="w-full h-12 p-2 m-2 text-white bg-mDarkGray rounded-md"
                  onClick={() => handleAddCard(name, number)}
                >
                  Agregar
                </button>
              </div>
            )}
            <div></div>
          </div>
        </div>

        {/* Cards */}
        {cards?.map((card) => (
          <div
            key={card.name}
            className="flex flex-col items-center justify-center w-48 h-48 p-4 m-4 bg-mLightGray rounded-lg shadow-md dark:bg-mDarkGray"
          >
            <h1 className="text-xl font-bold text-white text-center">
              {card.name}
            </h1>
            <div className="flex flex-col items-center justify-center w-full h-full mt-4">
              <h1 className="text-2xl font-bold text-center text-mWhite">
                {card.number}
              </h1>
              <div className="flex items-center justify-center w-full mt-4">
                <h1 className="text-sm text-mWhite">12/24</h1>
                <h1 className="ml-4 text-sm text-mWhite">123</h1>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CreditCard;
