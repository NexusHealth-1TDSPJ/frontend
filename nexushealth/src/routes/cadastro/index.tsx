import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Cadastro() {
  document.title = "Cadastro";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Dados enviados:", data);
  };
    const senha = watch("senha", "");
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Criar Conta
        </h1>

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
                errors.nome
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              {...register("email", {
                required: "O e-mail é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Digite um e-mail válido",
                },
              })}
              className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Digite seu e-mail"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              {...register("senha", {
                required: "A senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "A senha deve ter pelo menos 6 caracteres",
                },
              })}
              className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.senha
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Crie uma senha"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirmar senha
            </label>
            <input
              type="password"
              {...register("confirmarSenha", {
                required: "Confirme sua senha",
                validate: (value) =>
                  value === senha || "As senhas não coincidem",
              })}
              className={`w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.confirmarSenha
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Confirme sua senha"
            />
            {errors.confirmarSenha && (
              <p className="text-red-500 text-sm mt-1">
                
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
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