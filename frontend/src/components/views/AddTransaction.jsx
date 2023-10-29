"use client";
import { Button, Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TagSVG from "@/assets/shared/Tags.jsx";
import DescriptionSVG from "@/assets/shared/Description.jsx";
import DateSVG from "@/assets/shared/Date.jsx";
import CashSVG from "@/assets/shared/Cash.jsx";
import RepeatSVG from "@/assets/shared/Repeat.jsx";

const AddTransaction = () => {
  const [selectedButton, setSelectedButton] = useState("GASTOS");
  const [activeButton, setActiveButton] = useState(null);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleButtonClick = (button) => {
    //Para seleccionar Gastos o ingreso
    setSelectedButton(button);
  };

  const handleButtonSelect = (button) => {
    //Para seleccionar Efectivo, Cuenta C o VISA
    setActiveButton(button);
  };

  const renderForm = () => (
    <section className="flex items-center justify-center flex-col">
      <div className="m-5 p-2 flex justify-between gap-5 bg-mlightGray text-mWhite border rounded-xl dark:bg-mDarkGray">
        <button
          type="button"
          className={`text-mBlack px-2 rounded-xl ${
            activeButton === "Efectivo" && "bg-mLightGray"
          }`}
          onClick={() => handleButtonSelect("Efectivo")}
        >
          Efectivo
        </button>
        <button
          type="button"
          className={`text-mBlack px-2 rounded-xl ${
            activeButton === "Cuenta C." && "bg-mLightGray"
          }`}
          onClick={() => handleButtonSelect("Cuenta C.")}
        >
          Cuenta C.
        </button>
        <button
          type="button"
          className={`text-mBlack px-2 rounded-xl ${
            activeButton === "VISA" && "bg-mLightGray"
          }`}
          onClick={() => handleButtonSelect("VISA")}
        >
          VISA
        </button>
      </div>
      <div className="w-72 flex items-center mb-4">
        <div className="mr-2">
          <TagSVG fillColor={isDarkMode === "dark" ? "#EEEEEE" : "black"} />
        </div>
        <Input
          label="Categoría"
          color={isDarkMode === "dark" ? "white" : "black"}
        />
      </div>
      <div className="w-72 flex items-center mb-4">
        <div className="mr-2">
          <DescriptionSVG
            fillColor={isDarkMode === "dark" ? "#EEEEEE" : "black"}
          />
        </div>
        <Input
          label="Descripción"
          color={isDarkMode === "dark" ? "white" : "black"}
        />
      </div>
      <div className="w-72 flex items-center mb-4">
        <div className="mr-2">
          <DateSVG fillColor={isDarkMode === "dark" ? "#EEEEEE" : "black"} />
        </div>
        <Input
          label="Fecha"
          type="date"
          color={isDarkMode === "dark" ? "white" : "black"}
        />
      </div>
      <div className="w-72 flex items-center mb-4">
        <div className="mr-2">
          <CashSVG fillColor={isDarkMode === "dark" ? "#EEEEEE" : "black"} />
        </div>
        <div className="flex  gap-4">
          <label className="text-mBlack dark:text-mWhite">Total</label>
          <label className="text-mBlue dark:text-mYellow">0$</label>
        </div>
      </div>
      <div className="w-72 flex items-center mb-4">
        <div className="mr-2">
          <RepeatSVG fillColor={isDarkMode === "dark" ? "#EEEEEE" : "black"} />
        </div>
        <Select
          variant="outlined"
          label="Repetir"
          color={isDarkMode === "dark" ? "blue-gray" : "gray"}
        >
          <Option>fijo</Option>
          <Option>único</Option>
          <Option>2 veces</Option>
          <Option>3 veces</Option>
          <Option>4 veces</Option>
        </Select>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-3">
        <Button>Cancelar</Button>
        <Button color={isDarkMode === "dark" ? "yellow" : "blue"}>
          Registrar {selectedButton === "GASTOS" ? "Gasto" : "Ingreso"}
        </Button>
      </div>
    </section>
  );

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="w-56 text-center mt-40 sm:mt-16">
        <div className="flex gap-2">
          <button
            className={`w-full border rounded p-1 border-mBlack dark:border-mWhite text-mBlack dark:text-mWhite ${
              selectedButton === "GASTOS"
                ? "bg-blue-500"
                : "bg-mWhite dark:bg-[#44444C]"
            }`}
            onClick={() => handleButtonClick("GASTOS")}
          >
            GASTOS
          </button>
          <button
            className={`w-full border rounded p-1 border-mBlack dark:border-mWhite text-mBlack dark:text-mWhite ${
              selectedButton === "INGRESOS"
                ? "bg-blue-500"
                : "bg-mWhite dark:bg-[#44444C]"
            }`}
            onClick={() => handleButtonClick("INGRESOS")}
          >
            INGRESOS
          </button>
        </div>
      </div>
      {selectedButton === "GASTOS" && renderForm()}
      {selectedButton === "INGRESOS" && renderForm()}
    </div>
  );
};

export default AddTransaction;
