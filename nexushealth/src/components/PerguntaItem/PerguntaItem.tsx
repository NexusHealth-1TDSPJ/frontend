import "../../routes/Perguntas/perguntas.css";

interface PerguntaItemProps {
  pergunta: string;
  resposta: string;
  estaAtivo: boolean;
  aoClicar: () => void;
}

export default function PerguntaItem({ pergunta, resposta, estaAtivo, aoClicar }: PerguntaItemProps) {
  return (
    <div className="bloco-pergunta">
      <button
        className={`item-pergunta ${estaAtivo ? "ativo" : ""}`}
        onClick={aoClicar}
        aria-expanded={estaAtivo}
      >
        <span className="texto-pergunta">{pergunta}</span>
      </button>

      {estaAtivo && (
        <div className="resposta-pergunta">
          {resposta}
        </div>
      )}
    </div>
  );
}
