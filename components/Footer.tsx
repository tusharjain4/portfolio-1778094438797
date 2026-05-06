'use client';

interface FooterProps {
  email: string;
  linkedin: string;
  github: string;
  name: string;
}

const Footer: React.FC<FooterProps> = ({ email, linkedin, github, name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-secondary py-16 border-t border-border">
      <div className="section-container flex flex-col items-center">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-8">
          <p className="text-lg mb-4 sm:mb-0">© {currentYear} {name}. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href={`mailto:${email}`}
              className="px-4 py-2 border border-border rounded-full text-text-primary hover:bg-pageBackground transition-colors"
            >
              Email
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border rounded-full text-text-primary hover:bg-pageBackground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border rounded-full text-text-primary hover:bg-pageBackground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div
          className="w-full h-16 mt-8"
          style={{ backgroundImage: `url('/assets/images/img_squares.svg')`, backgroundSize: 'contain', backgroundRepeat: 'repeat-x' }}
          aria-hidden="true"
        ></div>
      </div>
    </footer>
  );
};

export default Footer;