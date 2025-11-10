import { Link, useNavigate } from "react-router-dom"; 
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

interface EntradaDeLogin {
  cpf: string;
  senha: string;
}

export default function Login() {
  document.title = "Login - Área do paciente";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EntradaDeLogin>();

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erroApi, setErroApi] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const onSubmit: SubmitHandler<EntradaDeLogin> = async (data) => {
    setErroApi(null);


    const backendPayload = {
      cpf_paciente: data.cpf,
      senha_paciente: data.senha,
    };

    try {
      const response = await fetch("https://java-hc-4.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(backendPayload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const mensagem = errorData.entity || "CPF ou senha inválidos.";
        setErroApi(mensagem);
        throw new Error(mensagem);
      }

      const result = await response.json();
      
      localStorage.setItem("token", result.token);

      navigate("/");

    } catch (error) {
      console.error("Erro no login:", error);
      if (!erroApi) {
        setErroApi("Não foi possível conectar ao servidor.");
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#a2ffe9] mb-6">Entrar</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">CPF</label>
            <input
              type="text"
              {...register("cpf", {
                required: "O CPF é obrigatório",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "Digite um CPF válido (somente números)",
                },
              })}
              className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.cpf
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Digite seu CPF"
              maxLength={11}
            />
            {errors.cpf && (
              <p className="text-red-500 text-sm mt-1">
                {errors.cpf.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                {...register("senha", {
                  required: "A senha é obrigatória",
                })}
                className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.senha
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Digite sua senha"
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                {mostrarSenha ? <GoEyeClosed size={20} /> : <GoEye size={20} />}
              </button>
            </div>
            {errors.senha && (
              <p className="text-red-500 text-sm mt-1">
                {errors.senha.message as string}
              </p>
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
            Entrar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Ainda não tem uma conta?{" "}
          <Link to="/cadastro" className="text-blue-600 font-medium hover:underline">
            Criar conta
          </Link>
        </p>
      </div>
    </main>
  );
}