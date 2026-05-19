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
                  className={`text-body-sm-bold rounded-full py-2 px-4 transition-all duration-300 ${
                    isActive 
                      ? 'bg-ink-deep text-canvas border border-ink-deep' 
                      : 'bg-canvas text-ink border border-hairline hover:bg-surface-soft hover:border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-ink focus:outline-none relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute transition-all duration-300 transform ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
                <Menu size={24} />
              </span>
              <span className={`absolute transition-all duration-300 transform ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
                <X size={24} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with slide and fade animation */}
      <div 
        className={`md:hidden absolute w-full left-0 top-full bg-canvas border-b shadow-sticky-panel overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 border-hairline-soft' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="px-4 pt-2 pb-6 flex flex-col space-y-2">
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
                className={`block px-4 py-3 text-body-sm-bold rounded-xl transition-all duration-300 ${
                  isActive ? 'bg-ink-deep text-canvas pl-6' : 'text-ink hover:bg-surface-soft hover:pl-6'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
