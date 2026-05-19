import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "ReactJS", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="py-section-lg bg-surface-soft">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div ref={ref}>
          <div className={`text-center mb-section opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-display-lg font-optimistic-heading text-ink-deep mb-4">Technical Skills</h2>
            <p className="mt-4 text-body-md text-slate max-w-2xl mx-auto">Technologies I use to build modern applications.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-base">
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${(idx * 100) + 200}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex justify-between items-center px-xl py-base bg-canvas border border-hairline-soft rounded-xl hover:shadow-sticky-panel transition-all duration-300 transform hover:-translate-y-1">
                  <span className="text-subtitle-lg text-ink-deep">{skill.name}</span>
                  <span className={`text-caption-bold px-[10px] py-[4px] rounded-full ${
                    skill.level === 'Advanced' ? 'bg-success text-canvas' :
                    skill.level === 'Intermediate' ? 'bg-attention text-canvas' :
                    'bg-surface-soft text-steel'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
