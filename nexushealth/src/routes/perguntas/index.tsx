import { useState } from "react";
import { perguntas } from "../../data/listaPerguntas";
import PerguntaItem from "../../components/PerguntaItem/PerguntaItem";

export default function Perguntas() {
  const [ativo, setAtivo] = useState<{ grupo: number; item: number } | null>(null);

  return (
    <main className="p-8 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-center text-3xl font-bold mb-8">Perguntas Frequentes</h1>

        {perguntas.map((grupo, i) => (
          <section key={i}>
            <h2 className="text-2xl font-semibold mb-4 text-center">{grupo.categoria}</h2>
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
