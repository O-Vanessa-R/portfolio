import { JSX } from "react";

const SkillsGrid = ({ title, skills }: { title: string; skills: { name: string; icon: JSX.Element }[] }) => {
    return (
        <section className="my-10 text-center">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group flex flex-col items-center text-center transition duration-300 hover:scale-110"
                        aria-label={skill.name}
                    >
                        <div className="text-4xl text-[#69dac7]">{skill.icon}</div>
                        <span className="mt-2 text-sm text-[#69dac7] group-hover:font-semibold">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default SkillsGrid;