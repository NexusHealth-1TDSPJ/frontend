import Fachada from "../../img/fachada-hc.jpg";
import Medico from "../../img/medicos-hc.jpg"

export default function Sobre() {
    document.title = "Sobre";
    return(
        <main>
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
            <section>
                <div>
                    <img src={Medico} alt="Foto de Médicos do Hospital das Clínicas" />
                    <p>Desde que foi inaugurado em 19 de abril de 1944, o Complexo Hospital das Clínicas da Faculdade de
                        Medicina da USP se destaca como um dos principais centros do Brasil na geração e divulgação de
                        conhecimento técnico e científico. Reconhecido por sua excelência, é uma referência nacional nas
                        áreas de ensino, pesquisa e atendimento à saúde. Com uma infraestrutura de cerca de 380 mil
                        metros quadrados, o complexo dispõe de aproximadamente dois mil leitos e conta com o trabalho de
                        15 mil profissionais de diversas áreas. Sua composição inclui sete institutos, dois hospitais de
                        apoio, diversos laboratórios de pesquisa médica, unidades especializadas e espaços de suporte,
                        como o edifício administrativo, o Centro de Convenções Rebouças e a Escola de Educação
                        Permanente.</p>
                </div>
            </section>
        </main>
    )
}