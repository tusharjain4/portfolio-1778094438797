'use client';

interface AboutProps {
  about: string;
  experience: number;
  currentRole: string;
  highlights: string[];
  name: string;
}

const About: React.FC<AboutProps> = ({ about, experience, currentRole, highlights, name }) => {
  const firstName = name.split(' ')[0];
  return (
    <section id="about" className="py-24 bg-pageBackground text-text-primary">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About {firstName}</h2>
          <p className="text-lg leading-relaxed text-secondary mb-8">
            {about}
          </p>
          <div className="bg-white p-6 rounded-xl shadow-layout-shadow border border-border">
            <h3 className="text-xl font-semibold mb-3">Professional Snapshot</h3>
            <ul className="list-none space-y-2 text-base text-text-primary">
              <li><strong>Experience:</strong> {experience} years</li>
              <li><strong>Current Role:</strong> {currentRole}</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">My Journey Highlights</h3>
          <ul className="relative border-l border-border pl-6 space-y-8">
            {highlights.map((highlight, index) => (
              <li key={index} className="relative group">
                <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-0 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-200 group-hover:bg-accent"></div>
                <p className="text-lg text-text-primary leading-relaxed">{highlight}</p>
                <p className="text-sm text-secondary mt-1">Recent</p> {/* Placeholder for year as data doesn't provide */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;