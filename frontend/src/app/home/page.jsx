"use client";
import AddTransaction from "@/components/views/AddTransaction";
import CreditCard from "@/components/views/CreditCard";
import Table from "@/components/views/Table";
import { useAppSelector } from "@/redux/hooks";

const AppHome = () => {
  const activeSection = useAppSelector(
    (state) => state?.activeSection?.activeSection || "exception"
  );
  switch (activeSection) {
    case "dashboard":
      return <div className="dark:bg-mBlack w-full "></div>;
    case "cards":
      return (
        <div className="dark:bg-mBlack w-full ">
          <CreditCard />
        </div>
      );
    case "bills":
      return (
        <div className="dark:bg-mBlack w-full ">
          <Table />
        </div>
      );
    case "earnings":
      return (
        <div className="dark:bg-mBlack w-full ">
          <Table />
        </div>
      );
    case "addTransaction":
      return (
        <div className="dark:bg-mBlack w-full ">
          <AddTransaction />
        </div>
      );
    case "exception":
      return (
        <div className="dark:bg-mBlack w-full ">
          <h1>Bienvenido al Sistema</h1>
        </div>
      );
    default:
      return (
        <div className="dark:bg-mBlack w-full ">
          <h1>Bienvenido al Sistema</h1>
        </div>
      );
  }
};

export default AppHome;
