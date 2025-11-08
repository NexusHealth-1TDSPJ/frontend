import Menu from "../Menu/menu";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cabecalho() {
  const navigate = useNavigate();
  const [primeiroNome, setPrimeiroNome] = useState<string>("");
  const [autenticado, setAutenticado] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setAutenticado(true);

    const fetchUser = async () => {
      try {
        const response = await fetch(
          "colocar o endpoint depois que fizerem o deploy do backend (GET com nome do paciente)",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,},});

        if (!response.ok) {
          throw new Error("Erro ao buscar paciente");}

        const data = await response.json();
        const primeiro = data.nome?.split(" ")[0] || "";
        setPrimeiroNome(primeiro);
      } catch (error) {
        console.error(error);}};

    fetchUser();},[]);

  return (
    <header className="w-full bg-[#a2ffe9] text-slate-900 flex flex-wrap justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-16 z-20 relative shadow-sm">
      <h1 className="text-2xl font-bold tracking-tight">Nexus Health</h1>

      {autenticado && (
        <div className="flex items-center gap-4">
          <Menu />
          {primeiroNome && (
            <div className="flex items-center gap-2">
              <span className="font-medium">{primeiroNome}</span>
              <button
                onClick={() => navigate("/editar-usuario")}
                className="text-slate-900 hover:text-slate-700">
                <HiOutlineUserCircle size={28}/>
              </button>
            </div>)}
        </div>
    )}
    </header>
  );
}
