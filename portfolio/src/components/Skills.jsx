import { skillCategories } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="py-20 bg-slate-50" id="skills">
      <div className="align-element">
        <SectionTitle text="Technical Skills" />
        <div className="py-16 space-y-12">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-2xl font-bold text-emerald-700 mb-6 capitalize">
                {category.category}
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => (
                  <SkillsCard key={skill.id} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
