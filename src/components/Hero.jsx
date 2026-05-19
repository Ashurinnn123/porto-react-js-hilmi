import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import profilePic from '../assets/Hilmi Naufal R.jpg';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="home" className="pt-hero pb-section md:pt-[140px] md:pb-section-lg overflow-hidden bg-canvas">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div 
          ref={ref}
          className={`flex flex-col-reverse lg:flex-row items-center gap-xxl lg:gap-xxxl opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-2.5 py-1 mb-6 text-caption-bold text-ink-deep bg-warning rounded-full">
              Available for Work
            </div>
            <h1 className="text-hero-display font-optimistic-heading text-ink-deep tracking-tight mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Hilmi Naufal Ramadhani</span>
            </h1>
            <h2 className="text-heading-md font-optimistic-heading text-charcoal mb-8">
              Fresh Graduate Web Developer
            </h2>
            <p className="text-body-md text-slate mb-10 max-w-2xl mx-auto lg:mx-0">
              Passionate about building clean, modern, and responsive web applications. Ready to contribute and grow in the fast-paced world of tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="px-[30px] py-[14px] w-full sm:w-auto text-button-md text-on-ink-button bg-ink-button hover:bg-charcoal rounded-full transition-colors flex items-center justify-center gap-2">
                Hire Me <ArrowRight size={18} />
              </a>
              <a href="#projects" className="px-[28px] py-[12px] w-full sm:w-auto text-button-md text-ink-deep bg-transparent border-2 border-ink-deep hover:bg-surface-soft rounded-full transition-colors text-center">
                View My Work
              </a>
            </div>
          </div>
          
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] lg:w-[420px] lg:h-[520px] rounded-xxxl overflow-hidden bg-surface-soft z-10 flex-shrink-0">
              <img src={profilePic} alt="Hilmi Naufal Ramadhani" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
