import { certifications } from "../data";
import SectionTitle from "./SectionTitle";

const Certifications = () => {
  return (
    <section className="py-20 bg-white" id="certifications">
      <div className="align-element">
        <SectionTitle text="Certifications" />
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-50 border border-slate-200 rounded-lg p-6 hover:border-emerald-500 hover:shadow-md duration-300"
            >
              <h4 className="font-semibold text-slate-800">{cert.title}</h4>
              <p className="text-emerald-600 text-sm mt-1">{cert.issuer}</p>
              <p className="text-slate-400 text-xs mt-3 underline">
                View Credential →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
