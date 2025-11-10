import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

interface EntradaDeCadastro {
  nome: string;
  cpf: string;
  idade: number; 
  nivelFamiliaridade: string;
  tipoAtendimento: string;
  senha: string;
  confirmarSenha: string;
}

export default function Cadastro() {
  document.title = "Cadastro - Área do paciente";

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [erroApi, setErroApi] = useState<string | null>(null); 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EntradaDeCadastro>();

  const senha = watch("senha", "");

  const onSubmit: SubmitHandler<EntradaDeCadastro> = async (data) => {
    setErroApi(null); 

    const backendPayload = {
      nome_paciente: data.nome,
      cpf_paciente: data.cpf,
      idade_paciente: data.idade, 
      nivel_tecnico: parseInt(data.nivelFamiliaridade, 10), 
      tipo_atendimento: data.tipoAtendimento,
      senha_paciente: data.senha,
    };

    try {
      const response = await fetch("https://java-hc-4.onrender.com/paciente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(backendPayload),
      });

      if (!response.ok) {

        const errorData = await response.json();
        const mensagemErro = errorData.entity || `Erro ${response.status}: Não foi possível cadastrar.`;
        setErroApi(mensagemErro); 
        throw new Error(mensagemErro);
      }

      const result = await response.json();
      console.log("Cadastro realizado com sucesso:", result);
      
      navigate("/login");

    } catch (error) {
      console.error("Erro no cadastro:", error);
      if (!erroApi) {
        // @ts-ignore
        setErroApi(error.message || "Falha na comunicação com o servidor.");
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#a2ffe9] mb-6">Criar Conta</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome completo
            </label>
            <input
              type="text"
              {...register("nome", {
                required: "O nome é obrigatório",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
              className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.nome ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Digite seu nome"
              maxLength={50}
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">CPF</label>
            <input
              type="text"
              {...register("cpf", {
                required: "O CPF é obrigatório",
                pattern: { value: /^[0-9]{11}$/, message: "Digite um CPF válido (somente números)" },
              })}
              className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.cpf ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Digite seu CPF"
              maxLength={11}
            />
            {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Idade</label>
            <input
              type="number"
              {...register("idade", {
                required: "A idade é obrigatória",
                valueAsNumber: true,
                min: { value: 0, message: "Idade inválida" },
                max: { value: 120, message: "Idade inválida" },
              })}
              className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.idade ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Sua idade"
            />
            {errors.idade && <p className="text-red-500 text-sm mt-1">{errors.idade.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nível de familiaridade com tecnologia
            </label>
            <select
              {...register("nivelFamiliaridade", { required: "Selecione um nível" })}
              className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.nivelFamiliaridade
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            >
              <option value="">Selecione</option>
              {(() => {
                const opcoes: any[] = [];
                for (let i = 1; i <= 10; i++) {
                  opcoes.push(<option key={i} value={i}>{i}</option>);
                }
                return opcoes;
              })()}
            </select>
            {errors.nivelFamiliaridade && (
              <p className="text-red-500 text-sm mt-1">{errors.nivelFamiliaridade.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de atendimento</label>
            <select
              {...register("tipoAtendimento", { required: "Selecione o tipo de atendimento" })}
              className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.tipoAtendimento ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            >
              <option value="">Selecione</option>
              <option value="Presencial">Presencial</option>
              <option value="Teleconsulta">Teleconsulta</option>
            </select>
            {errors.tipoAtendimento && <p className="text-red-500 text-sm mt-1">{errors.tipoAtendimento.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                {...register("senha", {
                  required: "A senha é obrigatória",
                  minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" },
                  maxLength: { value: 8, message: "A senha deve ter no máximo 8 caracteres" },
                })}
                className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.senha ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Crie uma senha (6 a 8 caracteres)"
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {mostrarSenha ? <GoEyeClosed size={20} /> : <GoEye size={20} />}
              </button>
            </div>
            {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirmar senha</label>
            <div className="relative">
              <input
                type={mostrarConfirmarSenha ? "text" : "password"}
                {...register("confirmarSenha", {
                  required: "Confirme sua senha",
                  validate: (senhaConfirma) => senhaConfirma === senha || "As senhas não coincidem",
                })}
                className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.confirmarSenha ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Confirme sua senha"
              />
              <button
                type="button"
                onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {mostrarConfirmarSenha ? <GoEyeClosed size={20} /> : <GoEye size={20} />}
              </button>
            </div>
            {errors.confirmarSenha && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmarSenha.message}</p>
            )}
          </div>

          {erroApi && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
              <p>{erroApi}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#a2ffe9] text-black font-bold py-2 rounded-lg hover:bg-[#0099ff] transition"
          >
            Cadastrar
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Ir para o login
          </Link>
        </p>
      </div>
    </main>
  );
}