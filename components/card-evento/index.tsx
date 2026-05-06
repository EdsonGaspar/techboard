import Image from "next/image";
import pixel from "../../assets/pixel.png";

const DadosCard = [
  {
    id: 1,
    image: pixel,
    botao: "Front-End",
    data: "20/02/2026",
    titulo: " Mulheres no front-end",
    descricao:
      "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
  },
  {
    id: 2,
    image: pixel,
    botao: "Front-End",
    data: "20/02/2026",
    titulo: " Mulheres no front-end",
    descricao:
      "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
  },
  {
    id: 3,
    image: pixel,
    botao: "Front-End",
    data: "20/02/2026",
    titulo: " Mulheres no front-end",
    descricao:
      "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
  },
  {
    id: 4,
    image: pixel,
    botao: "Front-End",
    data: "20/02/2026",
    titulo: " Mulheres no front-end",
    descricao:
      "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
  },
  {
    id: 5,
    image: pixel,
    botao: "Front-End",
    data: "20/02/2026",
    titulo: " Mulheres no front-end",
    descricao:
      "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
  },
];

export function CardEvento() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between max-w-7xl mx-auto py-6 gap-6">
      {DadosCard.map((item) => {
        return (
          <div
            key={item.id}
            className="max-w-72 h-`119.75`  bg-[#212121] text-white"
          >
            <Image src={item.image} alt={`Imagem ${item.titulo}`} width={500} />
            <div className="py-6 px-4 space-y-2">
              <button className="bg-[#4A4949] p-2 rounded-md uppercase tracking-wider">
                {item.botao}
              </button>
              <p>{item.data}</p>
              <div className="flex flex-col justify-between gap-2">
                <h3 className="tracking-wider text-2xl font-bold">
                  {item.titulo}
                </h3>
                <p>{item.descricao}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
