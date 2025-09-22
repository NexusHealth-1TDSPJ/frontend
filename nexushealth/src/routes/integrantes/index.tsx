import Erik from '../../img/erik.jpg'
import Hector from '../../img/hector.jpg'
import Joao from '../../img/joao.jpg'

export default function Integrantes() {
    document.title = "Integrantes";
    return(
        <main>
            <section>
            <h1>Quem somos</h1>
                <div>
                    <p>A Nexus health é uma empresa que, em parceria com o Hospital das Clínicas da Faculdade de Medicina da USP
                        (HCFMUSP), busca transformar o acesso à saúde digital. Nosso foco é auxiliar pacientes com conhecimento
                        tecnológico limitado, garantindo que consultas presenciais e teleconsultas sejam mais acessíveis e
                        intuitivas para todos. </p>

                    <p>Sabemos que a tecnologia pode ser um obstáculo para muitos, e é por isso que desenvolvemos soluções que
                        simplificam o uso de celulares na saúde digital. Por meio de suporte personalizado, interfaces
                        intuitivas e conteúdos educativos, capacitamos os pacientes a navegar pela plataforma hospitalar com
                        segurança e confiança.</p>

                        <p>Com a Nexus Health, a afinidade digital deixa de ser uma barreira e passa a ser um facilitador no cuidado
                            com a saúde. Nossa missão é promover uma experiência médica mais inclusiva, garantindo que todos possam
                        acessar os serviços de forma simples, independente do nível de familiaridade com a tecnologia.</p>
                </div>
            </section>
            <section>
                <h2>Nossa equipe</h2>
                <div>
                    <h3>Erik Naoki Miyasato - RM: 56577 - 1TDSPJ</h3>
                    <img src={Erik} alt="Foto de Erik" />
                    <p>
                        <a href="http://linkedin.com/in/erik-miyasato-4b9062367" target="_blank">LinkedIn</a> |
                        <a href="https://github.com/erikmiyasato" target="_blank">GitHub</a>
                    </p>
                </div>
                <div>
                    <h3>Hector Salgado Soria - RM: 565498 - 1TDSPJ</h3>
                    <img src={Hector} alt="Foto de Hector " />
                    <p>
                        <a href="https://www.linkedin.com/in/hector-soria-76ab6726b/" target="_blank">LinkedIn</a> |
                        <a href="https://github.com/Hectorsalgadoo" target="_blank">GitHub</a>
                    </p>
                </div>
                <div>
                    <h3>João Henrique Batista Leal- RM: 56436 - 1TDSPJ</h3>
                    <img src={Joao} alt="Foto de João" />
                    <p>
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-leal-8ba769307/" target="_blank">LinkedIn</a> |
                        <a href="https://github.com/JoaoHBatistaLeal" target="_blank">GitHub</a>
                    </p>
                </div>
            </section>

        </main>
    )
}