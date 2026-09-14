const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl duration-300 flex flex-col">
      {/* Icon Section */}
      <div className="mb-4">{icon}</div>

      {/* Title Section */}
      <h4 className="text-xl font-bold text-slate-800 capitalize mb-2">
        {title}
      </h4>

      {/* Description Section */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">{text}</p>
    </article>
  );
};

export default SkillsCard;
