import Footer from "@/components/composants/Footer";
import Formulaire from "@/components/composants/Formulaire";
import MainContent from "@/components/composants/MainContent";
import Navigation from "@/components/composants/Navigation";
import Prestations from "@/components/composants/Prestations";
import App from "@/components/composants/Swiper";
import Swiper from "@/components/composants/Swiper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Navigation/>
      <MainContent/>
      <App/>
      <Prestations/>
      <Formulaire/>
      <Footer/>
      
    </div>
  );
}
