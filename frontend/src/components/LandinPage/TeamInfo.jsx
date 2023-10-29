import { AiOutlineLinkedin } from "react-icons/ai";
import profiles from "@/assets/profiles/index";
import Image from "next/image";
const TeamInfo = () => {
  const initialState = [
    {
      id: 0,
      name: "Josefina Eciolaza",
      position: "PM",
      image: profiles.josefina,
      linkedin: "",
      otherSocialMedia: "",
    },
    {
      id: 1,
      name: "Santiago Rovaletti",
      position: "BACKEND",
      image: profiles.santiago,
      linkedin: "",
      otherSocialMedia: "",
    },
    {
      id: 2,
      name: "Víctor Morales",
      position: "FRONTEND",
      image: profiles.victor,
      linkedin: "",
      otherSocialMedia: "",
    },
    {
      id: 3,
      name: "Nazareno Susunday",
      position: "UI-UX",
      image: profiles.nazareno,
      linkedin: "",
      otherSocialMedia: "",
    },
    {
      id: 4,
      name: "Mirgelys Serrano",
      position: "BACKEND",
      image: profiles.mirge,
      linkedin: "",
      otherSocialMedia: "",
    },
    {
      id: 5,
      name: "Esmir R.Castellano",
      position: "FRONTEND",
      image: profiles.esmir,
      linkedin: "",
      otherSocialMedia: "",
    },
    {
      id: 6,
      name: "Lucas Barceló",
      position: "FRONTEND",
      image: profiles.lucas,
      linkedin: "",
      otherSocialMedia: "",
    },
    {
      id: 7,
      name: "Roberta Mendoza",
      position: "QA",
      image: profiles.roberta,
      linkedin: "",
      otherSocialMedia: "",
    },
  ];
  return (
    <section
      id="nosotros"
      className="min-h-screen p-10 w-full grid grid-cols-2 gap-4 md:grid-cols-4 md:content-evenly"
    >
      {initialState.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center gap-2"
        >
          <Image
            src={item.image}
            alt="Team member picture"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h3 className="font-bold text-xl text-center">{item.name}</h3>
          <div className="flex items-center gap-2">
            <p>{item.position}</p>
            <AiOutlineLinkedin className="text-3xl" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamInfo;
