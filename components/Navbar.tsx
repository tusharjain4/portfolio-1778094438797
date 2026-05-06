'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface NavbarProps {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ name }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-20 transition-colors duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="section-container h-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="#hero" className="text-text font-bold text-2xl tracking-wider uppercase">
            {initials}
          </Link>
          <div className="h-6 w-px bg-border hidden sm:block"></div>
          <span className="text-text-secondary text-lg hidden sm:block">Software Developer</span>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="#hero" className="text-text text-lg font-medium hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-text text-lg font-medium hover:text-primary transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-text text-lg font-medium hover:text-primary transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;