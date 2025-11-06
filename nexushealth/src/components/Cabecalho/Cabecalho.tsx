import Menu from "../Menu/menu";

export default function Cabecalho() {
  return (
    <header className="w-full bg-[#a2ffe9] text-slate-900 flex flex-wrap justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-16 z-20 relative shadow-sm">
      <h1 className="text-2xl font-bold tracking-tight">Nexus Health</h1>
      <Menu />
    </header>
  );
}
