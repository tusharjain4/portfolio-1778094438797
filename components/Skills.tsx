'use client';

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-24 bg-white text-text-primary">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="lg:sticky lg:top-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">My Skills</h2>
          <p className="text-lg leading-relaxed text-secondary">
            A comprehensive overview of the technical tools and concepts I leverage to build robust and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, index) => (
            <div key={index} className="bg-pageBackground p-6 rounded-xl border border-border shadow-md">
              <div className="flex items-center mb-4">
                {/* Placeholder for icon, as no specific icons were provided in assets for skills */}
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mr-4">
                  {category.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="bg-white text-sm text-text-primary px-3 py-1 rounded-full border border-border">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;