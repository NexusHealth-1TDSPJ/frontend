import { Link } from "react-router-dom";
export default function Login() {
  document.title = "Login";

  return (
    <main >
      <div >
        <h1>
          Login
        </h1>

        <form >
          <div>
            <label >
              E-mail
            </label>
          </div>

          <div>
            <label >
              Senha
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}