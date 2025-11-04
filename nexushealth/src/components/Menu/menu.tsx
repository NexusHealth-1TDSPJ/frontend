import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav className="menu-nav">
            <Link className="menu-link" to="/">Home</Link>
            <Link className="menu-link" to="/sobre">Sobre</Link>
            <Link className="menu-link" to="/contato">Contato</Link>
            <Link className="menu-link" to="/servicos">Serviços</Link>
            <Link className="menu-link" to="/integrantes">Integrantes</Link>
            <Link className="menu-link" to="/perguntas">Perguntas Frequentes</Link>
            <Link className="menu-link" to="/login">Login</Link>
            <Link className="menu-link" to="/cadastro">Cadastro</Link>
        </nav>
    )
}