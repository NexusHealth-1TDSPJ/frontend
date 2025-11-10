import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="hidden fixed top-0 left-0 w-full h-screen bg-[#a2ffe9] z-10 flex-col justify-center items-center gap-6 transition-all duration-300 ease-in-out sm:gap-6 md:flex md:flex-row md:static md:w-auto md:h-auto md:bg-transparent md:gap-4 md:items-center">
      <Link className="w-4/5 max-w-xs text-center text-lg py-4 text-slate-700 hover:text-white hover:bg-[#a2ffe9] border-b border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:w-auto md:border-b-0 md:px-4 md:py-2 md:rounded-md md:text-sm md:font-medium md:hover:bg-[#a2ffe9] md:transition-colors" to="/">Home</Link>
      <Link className="w-4/5 max-w-xs text-center text-lg py-4 text-slate-700 hover:text-white hover:bg-[#a2ffe9] border-b border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:w-auto md:border-b-0 md:px-4 md:py-2 md:rounded-md md:text-sm md:font-medium md:hover:bg-[#a2ffe9] md:transition-colors" to="/sobre">Sobre</Link>
      <Link className="w-4/5 max-w-xs text-center text-lg py-4 text-slate-700 hover:text-white hover:bg-[#a2ffe9] border-b border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:w-auto md:border-b-0 md:px-4 md:py-2 md:rounded-md md:text-sm md:font-medium md:hover:bg-[#a2ffe9] md:transition-colors" to="/servicos">Serviços</Link>
      <Link className="w-4/5 max-w-xs text-center text-lg py-4 text-slate-700 hover:text-white hover:bg-[#a2ffe9] border-b border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:w-auto md:border-b-0 md:px-4 md:py-2 md:rounded-md md:text-sm md:font-medium md:hover:bg-[#a2ffe9] md:transition-colors" to="/integrantes">Integrantes</Link>
      <Link className="w-4/5 max-w-xs text-center text-lg py-4 text-slate-700 hover:text-white hover:bg-[#a2ffe9] border-b border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:w-auto md:border-b-0 md:px-4 md:py-2 md:rounded-md md:text-sm md:font-medium md:hover:bg-[#a2ffe9] md:transition-colors" to="/perguntas">Perguntas Frequentes</Link>
      <Link className="w-4/5 max-w-xs text-center text-lg py-4 text-slate-700 hover:text-white hover:bg-[#a2ffe9] border-b border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:w-auto md:border-b-0 md:px-4 md:py-2 md:rounded-md md:text-sm md:font-medium md:hover:bg-[#a2ffe9] md:transition-colors" to="/cadastro">Cadastre-se</Link>
      <Link className="w-4/5 max-w-xs text-center text-lg py-4 text-slate-700 hover:text-white hover:bg-[#a2ffe9] border-b border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:w-auto md:border-b-0 md:px-4 md:py-2 md:rounded-md md:text-sm md:font-medium md:hover:bg-[#a2ffe9] md:transition-colors" to="/login">Login</Link>
    </nav>
  );
}
