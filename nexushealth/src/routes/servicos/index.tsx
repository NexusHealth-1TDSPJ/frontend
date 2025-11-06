export default function Servicos() {
  document.title = "Serviços";

  return (
    <main className="bg-gray-50 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Serviços</h1>

      <section className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-3xl font-semibold text-gray-900">Serviços oferecidos pelo HCFMUSP</h2>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Instituto Central (ICHC)</h3>
          <p className="text-lg text-gray-700">
            Fundado em 1944, o Instituto Central foi o primeiro edifício do Hospital das Clínicas a ser erguido. Ele concentra grande parte das especialidades médicas e cirúrgicas. Inclui a Unidade de Emergência Referenciada, voltada a casos de alta complexidade, e o Prédio dos Ambulatórios (PAMB), que oferece atendimento ambulatorial, além de abrigar o maior centro cirúrgico e o Laboratório Central, o primeiro do serviço público brasileiro a obter a certificação ISO 9002.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Instituto do Coração (InCor)</h3>
          <p className="text-lg text-gray-700">
            Reconhecido como um dos três maiores centros cardiológicos do mundo em volume de atendimentos e em variedade de subespecialidades, o InCor foi oficializado em 1963. Sua concepção, no entanto, remonta aos anos 1950, com a proposta de ser um centro de excelência em ensino, pesquisa e assistência nas áreas de cardiologia, pneumologia e cirurgias cardíaca e torácica.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Instituto da Criança e do Adolescente (ICr)</h3>
          <p className="text-lg text-gray-700">
            Inaugurado em 1976, o Instituto da Criança foi criado para cuidar de crianças e adolescentes com enfermidades de alta complexidade. Tornou-se um modelo nacional e é reconhecido pelo Ministério da Saúde como Centro de Referência Nacional da Saúde da Criança. Desde 2016, passou a adotar o nome atual: Instituto da Criança e do Adolescente.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Instituto do Tratamento do Câncer Infantil (ITACI)</h3>
          <p className="text-lg text-gray-700">
            Ativo desde 2002 e vinculado ao ICr do HCFMUSP, o ITACI oferece tratamento especializado a crianças com câncer e doenças hematológicas. Conta com parcerias com instituições como a Fundação Criança e a Ação Solidária Contra o Câncer Infantil (ASCCI).
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Instituto de Medicina Física e Reabilitação (IMREA)</h3>
          <p className="text-lg text-gray-700">
            Criado em 1975, o IMREA presta atendimento a pessoas com deficiências físicas ou condições com potencial de gerar incapacidades. Tem como missão promover a reabilitação médica integral, oferecer orientação profissional e contribuir para a valorização social e física dos pacientes. Faz parte da estrutura acadêmica da FMUSP, integrando o Departamento de Medicina Legal, Ética Médica, Medicina Social e do Trabalho, além da Rede Lucy Montoro desde 2010.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Instituto de Ortopedia e Traumatologia (IOT)</h3>
          <p className="text-lg text-gray-700">
            Desde sua inauguração em 1953, voltada ao atendimento de casos de poliomielite em meio a uma epidemia na capital paulista, o IOT tornou-se um dos maiores centros hospitalares de ortopedia e traumatologia da América Latina, além de se destacar como polo de pesquisa nacional.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Instituto de Psiquiatria (IPq)</h3>
          <p className="text-lg text-gray-700">
            Fundado em 1952, o Instituto de Psiquiatria é pioneiro no desenvolvimento de serviços e programas especializados para todos os tipos de transtornos psiquiátricos, abrangendo todas as idades. É referência no país, abrigando a única unidade de internação infantil especializada, além de contar com serviços de neurocirurgia funcional e uma UTI própria.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Instituto de Radiologia (InRad)</h3>
          <p className="text-lg text-gray-700">
            O InRad é reconhecido como centro de excelência tanto nacional quanto internacional em diagnóstico por imagem e tratamento do câncer. Foi a primeira instituição da América Latina a empregar técnicas de medicina nuclear e também a primeira da América do Sul a contar com equipamento de braquiterapia de alta taxa de dose.
          </p>
        </div>
      </section>
    </main>
  );
}
