import { Github, Heart, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="socials flex justify-center items-center pb-4">
                <a href="https://www.linkedin.com/in/vanessa-rolland/" className="link p-4"><Linkedin /></a>
                <a href="https://github.com/O-Vanessa-R" className="link p-4"><Github /></a>
            </div>
            <div className="copyrights flex">© 2025 fait avec
                <Heart className="px-1 inline h-4 w-4 align-text-bottom" />
            </div>
        </div>


    );
};

export default Footer;