import React, { useState } from 'react';
 
export default function Perguntas() {
    document.title = "Perguntas Frequentes";
    const [activeIndex, setActiveIndex] = useState(null);
 
    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
 
    return (
        <main className="p-8">
            <h1 className="text-center text-3xl font-bold mb-8">Perguntas Frequentes</h1>
 
            {/* Consultas Presenciais */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Consultas Presenciais</h2>
                <div>
                    <div
                        className="accordion-item bg-blue-600 text-white p-4 mb-2 rounded-lg cursor-pointer hover:bg-[#a2ffe9] transition duration-300"
                        onClick={() => handleClick(0)}
                    >
                        <p className="font-semibold">1. Preciso chegar com antecedência para a minha consulta?</p>
                    </div>
                    {activeIndex === 0 && (
                        <div className="bg-white text-black p-4 rounded-lg mb-2">
                            Sim, geralmente é recomendado chegar pelo menos 30 minutos antes para fazer o check-in e evitar atrasos.
                        </div>
                    )}
 
                    <div
                        className="accordion-item bg-blue-600 text-white p-4 mb-2 rounded-lg cursor-pointer hover:bg-[#a2ffe9] transition duration-300"
                        onClick={() => handleClick(1)}
                    >
                        <p className="font-semibold">2. Posso levar um acompanhante na consulta?</p>
                    </div>
                    {activeIndex === 1 && (
                        <div className="bg-white text-black p-4 rounded-lg mb-2">
                            Sim, o Hospital das Clínicas permite acompanhantes, especialmente para idosos, crianças e pessoas com necessidades especiais.
                        </div>
                    )}
 
                    <div
                        className="accordion-item bg-blue-600 text-white p-4 mb-2 rounded-lg cursor-pointer hover:bg-[#a2ffe9] transition duration-300"
                        onClick={() => handleClick(2)}
                    >
                        <p className="font-semibold">3. O que acontece se eu me atrasar para a consulta?</p>
                    </div>
                    {activeIndex === 2 && (
                        <div className="bg-white text-black p-4 rounded-lg mb-2">
                            Dependendo da política do hospital, você pode perder a vaga ou precisar remarcar. É sempre bom avisar com antecedência se houver imprevistos.
                        </div>
                    )}
 
                    {/* Continue com o resto das perguntas seguindo a mesma estrutura */}
                </div>
            </section>
 
            {/* Continue com outras seções (Consultas Remotas, Pós-consulta, etc.) */}
        </main>
    );
}