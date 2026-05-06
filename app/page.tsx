import Image from "next/image";
import imgLogo from "../assets/logo.png";
import imgBanner from "../assets/banner.png";
import { FormularioDoEvento } from "@/components/form-event/form-evento";
import { ListaTemas } from "@/components/categoria/temas-list";
import { CardEvento } from "@/components/card-evento";
export default function Home() {
  return (
    <main className="bg-[#06151A] border">
      <header>
        <div className="w-7xl mx-auto flex items-center justify-center  py-8">
          <Image src={imgLogo} alt="Logo" />
        </div>
      </header>
      <section className="bg-linear-180 from-[#17E4B9] to-[#091D24]">
        <div className=" min-h-[70vh] w-7xl mx-auto relative flex h- items-center justify-center">
          <Image
            src={imgBanner}
            alt="Banner principal"
            className="max-h-[70vh] h-full object-contain w-auto"
          />
        </div>
      </section>
      <section className="w-7xl mx-auto ">
        <FormularioDoEvento />
      </section>
      <section>
        <ListaTemas />
      </section>
      <section>
        <CardEvento />
      </section>
    </main>
  );
}
