import Reduzindo from "../../img/reduzindo-faltas.png"
import Beneficios from"../../img/beneficios.jpeg"

export default function Home() {
    document.title = "Home - Nexus Health";
    return(
        <main>
            <h1>Bem-vindo ao Nexus Health</h1>
            <section>
                <h2>Esse é o seu espaço para cuidar da saúde</h2>
                <p>Aqui você pode encontrar informações sobre consultas, exames e muito mais.
                    Nossa missão é facilitar o acesso à saúde digital, tornando-o simples e intuitivo para todos.
                </p>
                <img src={Reduzindo} alt="Imagem ilustrativa sobre a redução de faltas em consultas médicas" />
            </section>
            <section>
                <h2>O que fazemos para nos diferenciar</h2>
                <p>Utilizamos tecnologia de ponta para oferecer um atendimento personalizado e eficiente.</p>
                <p>Nossa equipe é composta por profissionais altamente capacitados, prontos para atender suas necessidades.</p>
            </section>
            <section>
                <h2>Benefícios de escolher o Nexus Health</h2>
                <img src={Beneficios} alt="Imagem ilustrativa sobre os benefícios do Nexus Health" />
            </section>
        </main>
    )
}