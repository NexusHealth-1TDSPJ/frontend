import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/integrantes">Integrantes</Link>
            <Link to="/perguntas">Perguntas Frequentes</Link>
        </nav>
    )
}