import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600">Have a project in mind or just want to say hi? Feel free to reach out!</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Info */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <a href="https://wa.me/6282139135946" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Phone / WhatsApp</p>
                    <p className="font-semibold text-slate-800">082139135946</p>
                  </div>
                </a>
                <a href="mailto:hilminaufal@example.com" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <p className="font-semibold text-slate-800">hilminaufal537@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/hilmi-naufal-ramadhani-8b701627a/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">LinkedIn</p>
                    <p className="font-semibold text-slate-800">Hilmi Naufal Ramadhani</p>
                  </div>
                </a>

                <a href="https://github.com/Ashurinnn123" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">GitHub</p>
                    <p className="font-semibold text-slate-800">@hilminaufal</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
