import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-hairline-soft py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-heading-sm font-optimistic-heading text-ink-deep">HNR.</a>
          </div>
          
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`text-body-sm-bold rounded-full py-2 px-4 transition-colors ${
                    isActive 
                      ? 'bg-ink-deep text-canvas border border-ink-deep' 
                      : 'bg-canvas text-ink border border-hairline hover:bg-surface-soft'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-ink focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-canvas border-b border-hairline-soft px-4 pt-2 pb-6 space-y-2 shadow-sticky-panel absolute w-full left-0 top-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsOpen(false);
                }}
                className={`block px-4 py-3 text-body-sm-bold rounded-xl ${
                  isActive ? 'bg-ink-deep text-canvas' : 'text-ink hover:bg-surface-soft'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
