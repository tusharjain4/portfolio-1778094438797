'use client';

interface JourneyProps {
  highlights: string[];
}

const Journey: React.FC<JourneyProps> = ({ highlights }) => {
  return (
    <section id="journey" className="py-24 bg-white text-text-primary">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="lg:sticky lg:top-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">My Journey</h2>
          <p className="text-lg leading-relaxed text-secondary">
            Key milestones and achievements that have shaped my professional path.
          </p>
        </div>

        <div className="relative border-l border-border pl-6 space-y-10">
          {highlights.map((highlight, index) => (
            <div key={index} className="relative group p-4 border border-border rounded-xl bg-pageBackground shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[2.5rem] top-6 transform -translate-y-1/2 flex items-center justify-center text-white transition-colors duration-200 group-hover:bg-accent">
                {/* Icon placeholder */}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-text-primary">Achievement {index + 1}</h3>
                <p className="text-base text-secondary mt-2">{highlight}</p>
                {/* Year placeholder as exact years for each highlight are not in data */}
                <p className="text-sm text-secondary mt-1">Ongoing / Recent</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;