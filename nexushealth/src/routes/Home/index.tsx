// @ts-ignore
import Reduzindo from "../../img/reduzindo-faltas.png";
// @ts-ignore
import Beneficios from "../../img/beneficios.png";

export default function Home() {
  document.title = "Home - Nexus Health";

  return (
      <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 max-w-7xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Nexus Health</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Aqui você pode encontrar informações sobre consultas, exames e muito mais. Nossa missão é facilitar o acesso à saúde digital, tornando-o simples e intuitivo para todos.
        </p>
      </header>

      <section className="mb-16 flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Esse é o seu espaço para cuidar da saúde</h2>
          <p className="text-lg">Oferecemos uma plataforma intuitiva para você cuidar da sua saúde sem complicação.</p>
        </div>
        <img
          src={Reduzindo}
          alt="Gráfico ilustrativo mostrando a redução de faltas em consultas médicas"
          className="w-full max-w-md mt-6 md:mt-0 rounded-lg shadow-lg"
          loading="lazy"
        />
      </section>

      <section className="mb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">O que fazemos para nos diferenciar</h2>
        <p className="mb-4">Utilizamos tecnologia de ponta para oferecer um atendimento personalizado e eficiente.</p>
        <p>Nossa equipe é composta por profissionais altamente capacitados, prontos para atender suas necessidades.</p>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Benefícios de escolher o Nexus Health</h2>
        <img
          src={Beneficios}
          alt="Imagem destacando os principais benefícios do Nexus Health, como conforto e agilidade"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          loading="lazy"
        />
      </section>
    </main>
    
  );
}
