import { InputFormEvento } from "./input-event";
import { SelectFormEvento } from "./select-event";

export function FormularioDoEvento() {
  return (
    <form className="bg-[#212121] text-white w-96 mx-auto py-8 px-7 space-y-8 rounded-xl my-16 flex flex-col items-center justify-center">
      <h2 className="text-xl">Preencha para criar um evento</h2>
      <div className="w-full space-y-4">
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="evento">Qual e o nome do evento?</label>
          <InputFormEvento
            id="evento"
            type="text"
            placeholder="Summer dev hits"
          />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label htmlFor="data">Data do evento</label>
          <InputFormEvento id="data" type="date" />
        </fieldset>
        <fieldset className="flex flex-col gap-2">
          <label>Tema do evento?</label>
          <SelectFormEvento />
        </fieldset>
      </div>
      <button className="bg-[#17D9B1] text-[#212121] font-semibold py-2 px-4 rounded-lg cursor-pointer">
        Criar Evento
      </button>
    </form>
  );
}
