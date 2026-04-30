import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import profilePic from '../assets/Hilmi Naufal R.jpg';

export default function Hero() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
              Available for Work
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Hi, I'm <span className="text-blue-600">Hilmi Naufal Ramadhani</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-8">
              Fresh Graduate Web Developer
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0">
              Passionate about building clean, modern, and responsive web applications. Ready to contribute and grow in the fast-paced world of tech.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="px-8 py-3 w-full sm:w-auto text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
                Hire Me <ArrowRight size={18} />
              </a>
              <a href="#projects" className="px-8 py-3 w-full sm:w-auto text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-lg shadow-sm transition-all text-center">
                View My Work
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto md:w-96 md:h-96 w-64 h-64 bg-blue-100 flex items-center justify-center relative z-10 animate-float">
              <img src={profilePic} alt="Hilmi Naufal Ramadhani" className="w-full h-full object-cover object-top" />
            </div>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 pointer-events-none scale-150 sm:scale-100 hidden sm:block">
              <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
