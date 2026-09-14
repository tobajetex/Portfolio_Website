import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section className="bg-emerald-100 py-20" id="contact">
      <div className="align-element text-center">
        <SectionTitle text="Let's Connect" />
        <p className="text-slate-600 text-lg mt-6 max-w-xl mx-auto">
          I am currently open to opportunities in Full-Stack Development,
          Backend Engineering, DevOps, QA Testing, and IT Support. Feel free to
          reach out!
        </p>
        <div className="mt-8 space-y-3 text-slate-700">
          <p>
            📧{" "}
            <a
              href="mailto:jetawotobajetex@gmail.com"
              className="text-emerald-700 font-semibold hover:underline"
            >
              jetawotobajetex@gmail.com
            </a>
          </p>
          <p>📞 08131197841</p>
          <p>📍 Ikorodu, Lagos, Nigeria</p>
        </div>
        <a
          href="mailto:jetawotobajetex@gmail.com"
          className="mt-8 inline-block bg-emerald-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-emerald-700 duration-300"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
