import { Download } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbarButton">
                <Link to="/" className="navbarButton">Accueil</Link>
                <Link to="/competences" className="navbarButton">Compétences</Link>
                <Link to="/projets" className="navbarButton">Projets</Link>
                <Link to="/a-propos" className="navbarButton">A propos de moi</Link>
                <Link to="/contact" className="navbarButton">Contact</Link>
                <a
                    href="/cv-vanessa-rolland.pdf"
                    download
                    className="bg-[#69dac7] hover:bg-[#69dac7ad] text-black font-medium py-3 px-6 rounded-full shadow-md transition duration-300 inline-flex items-center gap-2"
                >
                    <Download /> Mon CV
                </a>
            </div>
        </nav>
    );
};

export default Navbar;