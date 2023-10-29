"use client";
import ContactForm from "@/components/LandinPage/ContactForm";
import NavBar from "@/components/LandinPage/NavBar";
import PriceCard from "@/components/LandinPage/PriceCard";
import TeamInfo from "@/components/LandinPage/TeamInfo";
import LandingHeader from "../components/LandinPage/LandingHeader";
import TryDemo from "@/components/LandinPage/TryDemo";
import Blog from "@/components/LandinPage/Blog";
import Footer from "@/components/LandinPage/Footer";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center bg-mWhite text-mBlack dark:bg-mBlack dark:text-mWhite">
      <>
        <NavBar />
        <div className="w-full flex flex-col items-center justify-center">
          <LandingHeader />
        </div>
        <div className="w-full flex flex-col items-center justify-center dark:bg-gradient-to-b dark:from-[#44444C] dark:from-5% dark:via-[#313135] dark:via-25% dark:to-mBlack ">
          <TryDemo />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <Blog />
          <PriceCard />
          <TeamInfo />
          <ContactForm />
        </div>
        <Footer />
      </>
    </main>
  );
}
