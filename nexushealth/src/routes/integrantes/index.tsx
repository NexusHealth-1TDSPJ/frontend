import Erik from '../../img/erik.jpg';
import Hector from '../../img/hector.jpg';
import Joao from '../../img/joao.jpg';
import './integrantes.css';

export default function Integrantes() {
  document.title = "Integrantes";

  return (
    <main className="fundo-integrantes">
      <section className="introducao-integrantes">
        <h1 className="titulo-introducao">Quem somos</h1>
        <div className="texto-introducao">
          <p className="paragrafo-introducao">
            A Nexus Health é uma empresa que, em parceria com o Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP),
            busca transformar o acesso à saúde digital. Nosso foco é auxiliar pacientes com conhecimento tecnológico limitado,
            garantindo que consultas presenciais e teleconsultas sejam mais acessíveis e intuitivas para todos.
          </p>
          <p className="paragrafo-introducao">
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

      <section className="secao-equipe">
        <h2 className="titulo-equipe">Nossa equipe</h2>

        <div className="bloco-integrante">
          <img src={Erik} alt="Foto de Erik" className="foto-integrante" />
          <h3 className="nome-integrante">Erik Naoki Miyasato - RM: 56577 - 1TDSPJ</h3>
          <div className="links-integrante">
            <a href="http://linkedin.com/in/erik-miyasato-4b9062367" target="_blank" className="link-social">LinkedIn</a>
            <a href="https://github.com/erikmiyasato" target="_blank" className="link-social">GitHub</a>
          </div>
        </div>

        <div className="bloco-integrante">
          <img src={Hector} alt="Foto de Hector" className="foto-integrante" />
          <h3 className="nome-integrante">Hector Salgado Soria - RM: 565498 - 1TDSPJ</h3>
          <div className="links-integrante">
            <a href="https://www.linkedin.com/in/hector-soria-76ab6726b/" target="_blank" className="link-social">LinkedIn</a>
            <a href="https://github.com/Hectorsalgadoo" target="_blank" className="link-social">GitHub</a>
          </div>
        </div>

        <div className="bloco-integrante">
          <img src={Joao} alt="Foto de João" className="foto-integrante" />
          <h3 className="nome-integrante">João Henrique Batista Leal - RM: 56436 - 1TDSPJ</h3>
          <div className="links-integrante">
            <a href="https://www.linkedin.com/in/jo%C3%A3o-leal-8ba769307/" target="_blank" className="link-social">LinkedIn</a>
            <a href="https://github.com/JoaoHBatistaLeal" target="_blank" className="link-social">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
}
