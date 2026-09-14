import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-slate-800">
            Oloruntoba Jetawo
          </h1>
          <p className="mt-4 text-2xl md:text-3xl text-emerald-700 capitalize tracking-wide font-semibold">
            Full-Stack Developer & IT Professional
          </p>
          <p className="mt-2 text-lg text-slate-600 leading-relaxed">
            Building secure web apps, integrating AI, and keeping infrastructure
            running.
          </p>

          <div className="flex gap-x-4 mt-6">
            <a
              href="https://github.com/tobajetex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/oloruntoba-jetawo-7b25a586"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 duration-300"
            >
              Get In Touch
            </a>
            {/* DOWNLOAD RESUME BUTTON */}
            <a
              href="/Oloruntoba_Jetawo_Resume.pdf"
              download
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white duration-300"
            >
              Download Resume
            </a>
          </div>
        </article>

        <article className="hidden md:block">
          <img
            src={heroImg}
            className="h-80 lg:h-96 mx-auto"
            alt="Developer illustration"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
