'use client';

interface HeroProps {
  name: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ name, tagline }) => {
  const [firstName, lastName] = name.split(' ');

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center py-20 bg-background text-text-primary overflow-hidden">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-20 lg:pt-0">
        <div className="lg:col-span-2 flex flex-col items-start w-full">
          <h1 className="text-hero-title-clamp font-extrabold leading-[0.85] w-full text-left">
            <span>Hello</span>
            <div className="flex justify-end lg:justify-start lg:ml-auto space-x-2 text-xl sm:text-2xl mt-4">
              <span className="bg-primary text-white px-4 py-2 rounded-full font-semibold">Software</span>
              <span className="bg-primary text-white px-4 py-2 rounded-full font-semibold">Developer</span>
            </div>
          </h1>
          <h1 className="text-hero-title-clamp font-extrabold leading-[0.85] w-full text-left mt-4 sm:mt-0">
            <span>I&apos;m</span>{' '}
            <span className="text-accent">{firstName}</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between w-full lg:mt-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0 lg:w-1/3">
            <span className="text-lg text-secondary mb-2">Scroll to explore</span>
            <div className="h-px w-24 bg-border"></div> {/* Underline effect */}
          </div>

          <div className="lg:w-1/3 flex justify-center">
            <img
              src="/assets/images/img_rectangle_1.png"
              alt="Pooja R. Sonar"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-full h-auto rounded-xl object-cover shadow-lg"
              style={{ borderRadius: '16px' }}
            />
          </div>

          <p className="text-lg text-secondary text-center lg:text-right mt-8 lg:mt-0 lg:w-1/3 lg:pl-8">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;