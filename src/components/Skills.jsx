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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <div className={`text-center mb-16 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600">Technologies I use to build modern applications.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${(idx * 100) + 200}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex justify-between items-center px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <span className="font-semibold text-slate-700 text-lg">{skill.name}</span>
                  <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
                    skill.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                    skill.level === 'Intermediate' ? 'bg-indigo-100 text-indigo-700' :
                    'bg-slate-200 text-slate-700'
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
