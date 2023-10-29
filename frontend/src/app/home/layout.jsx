import NavBar from "@/components/LandinPage/NavBar";
import NavHome from "@/components/home/navbar/NavHome";
import TopBar from "@/components/home/topBar/TopBar";

export const metadata = {
  title: "MiFinanz",
  description: "Home MiFinanz",
};

const LayoutHome = ({ children }) => {
  return (
    <div className="flex max-h-screen w-full bg-mWhite dark:bg-mDarkGray">
      <NavHome />
      {/*       <NavBar />
       */}{" "}
      <div className="w-full">
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default LayoutHome;
