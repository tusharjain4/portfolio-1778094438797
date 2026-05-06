'use client';

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const projectImages = [
    '/assets/images/img_rectangle_369.png',
    '/assets/images/img_rectangle_369_1.png',
  ];

  return (
    <section id="projects" className="py-24 bg-pageBackground text-text-primary">
      <div className="section-container">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center lg:text-left">My Works</h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-border pt-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <h3 className="text-3xl font-semibold uppercase tracking-wide mb-4">{project.name}</h3>
                <p className="text-lg text-secondary leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-white text-text-primary text-sm px-3 py-1 rounded-full border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={projectImages[index % projectImages.length]}
                  alt={project.name}
                  className="w-full h-auto object-cover rounded-xl shadow-layout-shadow"
                  style={{ minHeight: '400px', borderRadius: '12px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;