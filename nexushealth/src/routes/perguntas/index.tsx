import { useState } from "react";
import { perguntas } from "../../data/listaPerguntas";
import PerguntaItem from "../../components/PerguntaItem/PerguntaItem";
import "./perguntas.css";

export default function Perguntas() {
  const [ativo, setAtivo] = useState<number | null>(null);

  return (
    <main className="fundo-perguntas">
        <div className="conteudo-perguntas">
            <h1 className="titulo-perguntas">Perguntas Frequentes</h1>

            {perguntas.map((grupo, i) => (
                <section key={i}>
                <h2 className="subtitulo-perguntas">{grupo.categoria}</h2>
                {grupo.itens.map((item, j) => (
                    <PerguntaItem
                    key={j}
                    pergunta={item.pergunta}
                    resposta={item.resposta}
                    indice={i * 100 + j}
                    ativo={ativo}
                    aoClicar={setAtivo}
                    />
                ))}
                </section>
            ))}
        </div>
    </main>
    );
    }
