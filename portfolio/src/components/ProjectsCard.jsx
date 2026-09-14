import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 flex flex-col">
      {/* Safety check: Only renders the image if 'img' is provided */}
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-t-lg h-64"
        />
      )}

      <div className="p-8 flex flex-col flex-1">
        <h2 className="text-xl tracking-wide font-bold text-slate-800">
          {title}
        </h2>
        <p className="mt-4 text-slate-600 leading-loose text-sm flex-1">
          {text}
        </p>

        <div className="mt-6 flex gap-x-4">
          {url && url !== "#" && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-emerald-600 duration-300" />
            </a>
          )}
          {github && github !== "#" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-emerald-600 duration-300" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
