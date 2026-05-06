const Temas = [
  { id: 1, name: "front end" },
  { id: 2, name: "back end" },
  { id: 3, name: "devops" },
  { id: 4, name: "inteligência" },
  { id: 5, name: "data science" },
  { id: 8, name: "cloud" },
];

export function ListaTemas() {
  return (
    <ul>
      {Temas.map((tema) => {
        return (
          <li key={tema.id}>
            <h3 className="text-white font-semibold text-xl tracking-wide uppercase font-obrion">
              {tema.name} {tema.id}
            </h3>
          </li>
        );
      })}
    </ul>
  );
}
