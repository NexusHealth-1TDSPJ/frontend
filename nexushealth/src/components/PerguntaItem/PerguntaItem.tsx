interface PerguntaItemProps {
  pergunta: string;
  resposta: string;
  estaAtivo: boolean;
  aoClicar: () => void;
}

export default function PerguntaItem({ pergunta, resposta, estaAtivo, aoClicar }: PerguntaItemProps) {
  return (
    <div className="mb-4">
      <button
        className={`bg-blue-600 text-white px-6 py-4 mb-2 rounded-lg cursor-pointer hover:bg-[#a2ffe9] transition duration-300 ${
          estaAtivo ? "ring-2 ring-blue-300" : ""
        }`}
        onClick={aoClicar}
        aria-expanded={estaAtivo}
      >
        <span className="font-semibold">{pergunta}</span>
      </button>

      {estaAtivo && (
        <div className="bg-white text-black px-6 py-4 rounded-lg mb-2">
          {resposta}
        </div>
      )}
    </div>
  );
}
