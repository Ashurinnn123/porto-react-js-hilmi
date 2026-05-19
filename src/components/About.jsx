import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Code2, Rocket } from 'lucide-react';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  const details = [
    {
      icon: <GraduationCap className="text-primary" size={32} />,
      title: "Education",
      desc: "Universitas Muhammadiyah Malang, Informatics."
    },
    {
      icon: <Code2 className="text-primary" size={32} />,
      title: "Focus",
      desc: "Web Development (Frontend)."
    },
    {
      icon: <Rocket className="text-primary" size={32} />,
      title: "Motivation",
      desc: "Ready to contribute and solve real-world problems."
    }
  ];

  return (
    <section id="about" className="py-section-lg bg-surface-soft">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div ref={ref}>
          <div className={`text-center mb-section opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-display-lg font-optimistic-heading text-ink-deep">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-xxl lg:gap-section items-center">
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <h3 className="text-heading-sm font-optimistic-heading text-ink-deep mb-6">
                Driven by curiosity, fueled by coffee.
              </h3>
              <p className="text-body-md text-ink mb-6">
                As a fresh graduate from Universitas Muhammadiyah Malang with a degree in Informatics, I have developed a strong foundation in software engineering and a deep passion for web development. My academic journey has equipped me with both theoretical knowledge and practical experience in building functional, user-centric applications.
              </p>
              <p className="text-body-md text-ink">
                I am highly motivated to step into the professional world. I am an eager learner, a team player, and I am always looking for opportunities to contribute my skills to impactful projects while continuously growing as a developer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-xl">
              {details.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-xl bg-canvas rounded-xl border border-hairline-soft opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${(idx * 150) + 400}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-subtitle-lg text-ink-deep mb-2">{item.title}</h4>
                  <p className="text-body-sm text-charcoal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
