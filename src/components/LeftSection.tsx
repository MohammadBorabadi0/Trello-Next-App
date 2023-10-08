// import Image from "next/image";
import Nav from "./Nav";
// Icons
import { BsTrello } from "react-icons/bs";
import { CiSquareMore } from "react-icons/ci";

const LeftSection = () => {
  return (
    <section className="flex items-center">
      <div className="cursor-pointer hover-link px-2 py-1 rounded-md">
        <CiSquareMore />
      </div>
      <div className="flex items-center gap-1 bg-transparent text-white cursor-pointer hover-link px-2 py-1 rounded-md">
        <BsTrello />
        <span className="font-bold text-lg">Trello</span>
      </div>
      <Nav />
      <button className="text-white font-semibold link-active active ml-2 px-2 py-1 rounded-md">
        Create
      </button>
    </section>
  );
};

export default LeftSection;
