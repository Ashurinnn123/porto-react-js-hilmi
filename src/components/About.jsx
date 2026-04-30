import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Code2, Rocket } from 'lucide-react';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  const details = [
    {
      icon: <GraduationCap className="text-blue-600" size={24} />,
      title: "Education",
      desc: "Universitas Muhammadiyah Malang, Informatics."
    },
    {
      icon: <Code2 className="text-blue-600" size={24} />,
      title: "Focus",
      desc: "Web Development (Frontend)."
    },
    {
      icon: <Rocket className="text-blue-600" size={24} />,
      title: "Motivation",
      desc: "Ready to contribute and solve real-world problems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <div className={`text-center mb-16 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                Driven by curiosity, fueled by coffee.
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As a fresh graduate from Universitas Muhammadiyah Malang with a degree in Informatics, I have developed a strong foundation in software engineering and a deep passion for web development. My academic journey has equipped me with both theoretical knowledge and practical experience in building functional, user-centric applications.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I am highly motivated to step into the professional world. I am an eager learner, a team player, and I am always looking for opportunities to contribute my skills to impactful projects while continuously growing as a developer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {details.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${(idx * 150) + 400}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
