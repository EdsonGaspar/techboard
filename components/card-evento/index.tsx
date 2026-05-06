import Image from "next/image";
import { DadosCard } from "./dados";

export function CardEvento() {
  return (
    <ul className="grid md:grid-cols-3 lg:grid-cols-4  justify-between max-w-7xl mx-auto py-6 gap-6">
      {DadosCard.map((item) => {
        return (
          <li
            key={item.id}
            className="max-w-72 h-`119.75`  bg-[#212121] text-white"
          >
            <Image src={item.image} alt={`Imagem ${item.titulo}`} width={500} />
            <div className="py-6 px-4 space-y-2">
              <button className="bg-[#4A4949] p-2 rounded-md uppercase tracking-wider text-xs">
                {item.botao}
              </button>
              <p>{item.data}</p>
              <div className="flex flex-col justify-between h-40">
                <h3 className="tracking-wider text-2xl font-bold">
                  {item.titulo}
                </h3>
                <p>{item.descricao}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
