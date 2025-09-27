import Reduzindo from "../../img/reduzindo-faltas.png";
import Beneficios from "../../img/beneficios.png";
import "./home.css";

export default function Home() {
  document.title = "Home - Nexus Health";

  return (
    <main className="fundo-home">
      <header className="cabecalho-home">
        <h1 className="titulo-home">Bem-vindo ao Nexus Health</h1>
        <p className="texto-introducao">
          Aqui você pode encontrar informações sobre consultas, exames e muito mais. Nossa missão é facilitar o acesso à saúde digital, tornando-o simples e intuitivo para todos.
        </p>
      </header>

      <section className="secao-introducao">
        <div className="texto-intro">
          <h2 className="titulo-intro">Esse é o seu espaço para cuidar da saúde</h2>
          <p className="paragrafo-intro">Oferecemos uma plataforma intuitiva para você cuidar da sua saúde sem complicação.</p>
        </div>
        <img
          src={Reduzindo}
          alt="Gráfico ilustrativo mostrando a redução de faltas em consultas médicas"
          className="imagem-intro"
          loading="lazy"
        />
      </section>

      <section className="secao-diferenciacao">
        <h2 className="titulo-diferenciacao">O que fazemos para nos diferenciar</h2>
        <p className="paragrafo-diferenciacao">Utilizamos tecnologia de ponta para oferecer um atendimento personalizado e eficiente.</p>
        <p>Nossa equipe é composta por profissionais altamente capacitados, prontos para atender suas necessidades.</p>
      </section>

      <section className="secao-beneficios">
        <h2 className="titulo-beneficios">Benefícios de escolher o Nexus Health</h2>
        <img
          src={Beneficios}
          alt="Imagem destacando os principais benefícios do Nexus Health, como conforto e agilidade"
          className="imagem-beneficios"
          loading="lazy"
        />
      </section>
    </main>
  );
}
