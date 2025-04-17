import { Download } from 'lucide-react';
import photo from '../assets/photo.jpeg';

const HomePage = () => {
    return (
        <main className="main">
            <h1 className="h1 !pb-3 text-center">Bienvenue sur mon portfolio !</h1>
            <h2 className="h2 hook !pb-5 !font-bold text-center">Vanessa ROLLAND - Développeuse Web</h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16">
                <img
                    src={photo}
                    alt="Photo de Vanessa Rolland"
                    className="rounded-4xl w-68 h-auto shadow-md"
                />

                <section className="p max-w-xl text-center md:text-left text-base leading-relaxed mx-auto">
                    <p>
                        Je suis Vanessa, développeuse web passionnée par la création d’interfaces modernes,
                        intuitives et réactives.
                    </p>
                    <p className="mt-4">
                        Je maîtrise les technologies HTML, CSS, JavaScript, TypeScript, React, Node.JS, AWS...
                        J’aime relever de nouveaux défis techniques et explorer sans cesse de nouvelles solutions
                        pour offrir la meilleure expérience utilisateur possible.
                    </p>
                    <p className="mt-4">
                        Je vous invite à découvrir mes projets, qui reflètent mon parcours et mes compétences.
                    </p>

                    <blockquote className="hook italic border-l-4 border-[#69dac7] pl-4 mt-6">
                        “La technologie est un outil, mais c’est l’humain qui fait la différence.”
                    </blockquote>

                    <p className="mt-6">
                        Si mon profil vous intéresse, n’hésitez pas à me contacter via le formulaire contact ou Linkedin.
                        <br />
                        Au plaisir d’échanger et de collaborer sur vos futurs projets !
                    </p>


                </section>
            </div>
            <p className="mt-4 font-semibold text-center">Vanessa</p>
            <section className="mt-8 text-center">
                <a
                    href="/cv-vanessa-rolland.pdf"
                    download
                    className="bg-[#69dac7] hover:bg-[#69dac7ad] text-black font-medium py-3 px-6 rounded-full shadow-md transition duration-300 inline-flex items-center gap-2"
                >
                    <Download /> Mon CV
                </a>
            </section>
        </main>
    );
};

export default HomePage;
