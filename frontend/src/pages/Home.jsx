import SidebarCard from "../components/SidebarCard";
import { Globe } from "lucide-react";

const Home = () => {
  return (
    <div className="flex w-full">
      <div className="w-[30%] bg-[#222831] h-screen">
        <div className="ml-5 mt-5 w-[70%]">
          <div className="flex py-3 justify-between items-center">
            <p className="text-white text-sm font-bold">WoWiPlat</p>
            <button className="px-3 py-2 rounded-md bg-[#7bc74d] -400"> 
              Empezar
            </button>
          </div>
          <div className="py-3">
            <Globe className="text-[#B5DA8A]" />
          </div>
          <div className="mb-5">
            <h2 className="text-white text-4xl font-semibold w-[70%] mb-2">El Control del Espectáculo En tus manos</h2>
            <p className="text-gray-400">No mas desastre en tu organización</p>
          </div>
          <div>
            <p className="text-[#B5DA8A] mb-4 font-semibold">Que ofrecemos</p>
            <div className="flex gap-x-3">
              <SidebarCard description="Instant Productivity" icon="🚀"/>
              <SidebarCard description="Expense Management" icon="💰"/>
              <SidebarCard description="Advanced Technology" icon="🖥️"/>
            </div>
            <div className="mt-4">
              <ul className="flex gap-x-3">
                <li className="text-[#B5DA8A] font-semibold text-sm">Contact</li>
                <li className="text-[#B5DA8A] font-semibold text-sm">Social</li>
                <li className="text-[#B5DA8A] font-semibold text-sm">Address</li>
                <li className="text-[#B5DA8A] font-semibold text-sm">Legal Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Additional Content</h1>
      </div>
    </div>
  );
};

export default Home;
