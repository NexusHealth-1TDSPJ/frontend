// @ts-ignore
import Erik from '../../img/erik.jpg';
// @ts-ignore
import Hector from '../../img/hector.jpg';
// @ts-ignore
import Joao from '../../img/joao.jpg';

export default function Integrantes() {
  document.title = "Integrantes";

  return (
    <main className="bg-gray-50 py-8 px-4">
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Quem somos</h1>
        <div className="text-lg text-gray-700">
          <p className="mb-6">
            A Nexus Health é uma empresa que, em parceria com o Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP),
            busca transformar o acesso à saúde digital. Nosso foco é auxiliar pacientes com conhecimento tecnológico limitado,
            garantindo que consultas presenciais e teleconsultas sejam mais acessíveis e intuitivas para todos.
          </p>
          <p className="mb-6">
            Sabemos que a tecnologia pode ser um obstáculo para muitos, e é por isso que desenvolvemos soluções que
            simplificam o uso de celulares na saúde digital. Por meio de suporte personalizado, interfaces intuitivas e conteúdos
            educativos, capacitamos os pacientes a navegar pela plataforma hospitalar com segurança e confiança.
          </p>
          <p>
            Com a Nexus Health, a afinidade digital deixa de ser uma barreira e passa a ser um facilitador no cuidado com a saúde.
            Nossa missão é promover uma experiência médica mais inclusiva, garantindo que todos possam acessar os serviços
            de forma simples, independente do nível de familiaridade com a tecnologia.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Nossa equipe</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src={Erik} alt="Foto de Erik" className="w-32 h-32 rounded-full mb-4 object-cover" />
            <h2 className="text-xl font-medium text-gray-900">Erik Naoki Miyasato</h2>
            <p className="text-sm text-gray-600 mb-2">RM: 565771 - 1TDSPJ</p>
            <div className="flex gap-4 mt-2">
              <a href="http://linkedin.com/in/erik-miyasato-4b9062367" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
              <a href="https://github.com/erikmiyasato" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src={Hector} alt="Foto de Hector" className="w-32 h-32 rounded-full mb-4 object-cover" />
            <h2 className="text-xl font-medium text-gray-900">Hector Salgado Soria</h2>
            <p className="text-sm text-gray-600 mb-2">RM: 565498 - 1TDSPJ</p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/hector-soria-76ab6726b/" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
              <a href="https://github.com/Hectorsalgadoo" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src={Joao} alt="Foto de João" className="w-32 h-32 rounded-full mb-4 object-cover" />
            <h2 className="text-xl font-medium text-gray-900">João Henrique Batista Leal</h2>
            <p className="text-sm text-gray-600 mb-2">RM: 564361 - 1TDSPJ</p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-leal-8ba769307/" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
              <a href="https://github.com/JoaoHBatistaLeal" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
