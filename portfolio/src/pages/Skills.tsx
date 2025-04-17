
import { frontEndSkills, backEndSkills, cloudSkills, toolsSkills } from "../assets/Skills";
import SkillsGrid from "../components/SkillsGrid";

const SkillsPage = () => {
    return (
        <main className="main">
            <h1 className="h1">Compétences</h1>
            <p className="p text-center mb-6">
                Voici un aperçu de mes compétences techniques et des technologies que je maîtrise.
                <br />Je suis toujours en quête d'apprentissage et d'amélioration continue.
                <br />
            </p>
            <SkillsGrid title="Front-End" skills={frontEndSkills} />
            <SkillsGrid title="Back-End & API" skills={backEndSkills} />
            <SkillsGrid title="Cloud & Serverless" skills={cloudSkills} />
            <SkillsGrid title="Outils & Méthodologies" skills={toolsSkills} />
        </main>
    );
};

export default SkillsPage;