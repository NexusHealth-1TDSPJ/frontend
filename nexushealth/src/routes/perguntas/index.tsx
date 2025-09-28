import { useState } from "react";
import { perguntas } from "../../data/listaPerguntas";
import PerguntaItem from "../../components/PerguntaItem/PerguntaItem";
import "./perguntas.css";

export default function Perguntas() {
  const [ativo, setAtivo] = useState<{ grupo: number; item: number } | null>(null);

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
                    estaAtivo={ativo?.grupo === i && ativo?.item === j}
                    aoClicar={() => setAtivo({ grupo: i, item: j })}
                    />
                ))}
                </section>
            ))}
        </div>
    </main>
    );
    }
