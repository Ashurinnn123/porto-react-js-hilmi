import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="py-section-lg bg-canvas">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div ref={ref} className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="text-center mb-section">
            <h2 className="text-display-lg font-optimistic-heading text-ink-deep mb-4">Get In Touch</h2>
            <p className="mt-4 text-body-md text-slate max-w-2xl mx-auto">Have a project in mind or just want to say hi? Feel free to reach out!</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Info */}
            <div className="bg-surface-soft p-xl md:p-section rounded-xxxl">
              <h3 className="text-heading-lg font-optimistic-heading text-ink-deep mb-xl text-center">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-xl">
                <a href="https://wa.me/6282139135946" target="_blank" rel="noreferrer" className="flex items-center gap-base text-ink hover:text-primary transition-colors group p-base bg-canvas rounded-xl hover:shadow-sticky-panel">
                  <div className="w-[40px] h-[40px] bg-surface-soft rounded-circle flex items-center justify-center text-ink group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-body-sm text-steel">Phone / WhatsApp</p>
                    <p className="text-body-md-bold text-ink-deep">082139135946</p>
                  </div>
                </a>
                <a href="mailto:hilminaufal@example.com" className="flex items-center gap-base text-ink hover:text-primary transition-colors group p-base bg-canvas rounded-xl hover:shadow-sticky-panel">
                  <div className="w-[40px] h-[40px] bg-surface-soft rounded-circle flex items-center justify-center text-ink group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-body-sm text-steel">Email</p>
                    <p className="text-body-md-bold text-ink-deep">hilminaufal537@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/hilmi-naufal-ramadhani-8b701627a/" target="_blank" rel="noreferrer" className="flex items-center gap-base text-ink hover:text-primary transition-colors group p-base bg-canvas rounded-xl hover:shadow-sticky-panel">
                  <div className="w-[40px] h-[40px] bg-surface-soft rounded-circle flex items-center justify-center text-ink group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <p className="text-body-sm text-steel">LinkedIn</p>
                    <p className="text-body-md-bold text-ink-deep">Hilmi Naufal Ramadhani</p>
                  </div>
                </a>

                <a href="https://github.com/Ashurinnn123" target="_blank" rel="noreferrer" className="flex items-center gap-base text-ink hover:text-primary transition-colors group p-base bg-canvas rounded-xl hover:shadow-sticky-panel">
                  <div className="w-[40px] h-[40px] bg-surface-soft rounded-circle flex items-center justify-center text-ink group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <p className="text-body-sm text-steel">GitHub</p>
                    <p className="text-body-md-bold text-ink-deep">@hilminaufal</p>
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
