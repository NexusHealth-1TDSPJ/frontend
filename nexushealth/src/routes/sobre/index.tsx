import Fachada from "../../img/fachada-hc.jpg";

export default function Sobre() {
    document.title = "Sobre - Nexus Health";
    return(
        <main>
            <img src={Fachada} alt="Fachada do Hospital" />
            <h1>Sobre o Nexus Health</h1>
            <section>
                <div>
                    <img src={Fachada} alt="Fachada do Hospital" />
                    <p>O Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFMUSP) é um
                        conjunto de unidades hospitalares situado na cidade de São Paulo. Trata-se de uma autarquia
                        vinculada ao governo do estado de São Paulo, subordinada administrativamente à Secretaria de
                        Estado da Saúde. Além disso, está associado à Faculdade de Medicina da Universidade de São Paulo
                        (USP), atuando como centro de ensino, pesquisa e prestação de serviços de saúde voltados à
                        população.</p>
                        <p>Na área assistencial, o HCFMUSP realiza atividades voltadas à promoção da saúde, prevenção de
                        enfermidades, atendimento médico-hospitalar de alta complexidade (nível terciário) e
                        reabilitação de pacientes após o tratamento de doenças. No campo acadêmico, oferece cursos de
                        graduação e pós-graduação, tanto lato sensu quanto stricto sensu. Já na área de pesquisa,
                        desenvolve estudos em diversas especialidades das ciências da saúde, por meio de seus 62
                        Laboratórios de Investigação Médica.
                    </p>
                </div>
            </section>
        </main>
    )
}