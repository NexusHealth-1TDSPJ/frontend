import "../../routes/Perguntas/perguntas.css";
import { useEffect, useRef } from "react";

interface PerguntaItemProps {
  pergunta: string;
  resposta: string;
  indice: number;
  ativo: number | null;
  aoClicar: (index: number) => void;
}

export default function PerguntaItem({ pergunta, resposta, indice, ativo, aoClicar }: PerguntaItemProps) {
  const respostaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ativo === indice && respostaRef.current) {
      respostaRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [ativo, indice]);

  const estaAtivo = ativo === indice;

  return (
    <div className="bloco-pergunta">
      <button
        className={`item-pergunta ${estaAtivo ? "ativo" : ""}`}
        onClick={() => aoClicar(indice)}
        aria-expanded={estaAtivo}
        aria-controls={`resposta-${indice}`}
      >
        <span className="texto-pergunta">{indice + 1}. {pergunta}</span>
      </button>

      {estaAtivo && (
        <div
          id={`resposta-${indice}`}
          ref={respostaRef}
          className="resposta-pergunta"
        >
          {resposta}
        </div>
      )}
    </div>
  );
}
