import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="About me" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a versatile Software Engineer and IT Professional with a unique
            blend of full-stack development, AI integration, and enterprise IT
            infrastructure experience.
          </p>
          <p className="text-slate-600 mt-4 leading-loose">
            From patching security vulnerabilities and stabilizing CI/CD
            pipelines during my backend internship, to managing 99.5% uptime for
            IT infrastructure and deploying enterprise HRMS systems, I bridge
            the gap between writing clean code and keeping the servers it runs
            on alive.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
