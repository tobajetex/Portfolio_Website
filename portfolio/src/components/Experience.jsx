import { experiences } from "../data";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="align-element">
        <SectionTitle text="Professional Experience" />
        <div className="py-16 space-y-10">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="border-l-4 border-emerald-500 pl-6 py-2"
            >
              <div className="flex flex-wrap items-baseline gap-x-4">
                <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                <span className="text-emerald-600 font-semibold">
                  {exp.company}
                </span>
                <span className="text-slate-400 text-sm">{exp.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-slate-600 text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-emerald-500 mt-1">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
