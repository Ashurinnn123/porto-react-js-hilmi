import { useScrollReveal } from '../hooks/useScrollReveal';
import project1 from '../assets/Game.jpg';
import project2 from '../assets/TBuddy.png';
import project3 from '../assets/LandingPage Project.png';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  const projects = [
    {
      title: "Mobile Programming Final Project Game",
      desc: "Developing a mobile game as a major project for a Mobile Programming course. The development process includes deciding on a game theme, designing the main menu and level selection screens, and implementing serialization features to save and load game progress.",
      image: project1,
      tags: ["Java", "Android Studio"]
    },
    {
      title: "Product Base Capstone Project - Bangkit",
      desc: "A capstone project at Bangkit Academy, led by Google, Tokopedia, Gojek, and Traveloka. Developed a mobile application to help travelers discover sustainable tourist destinations. Key features include information on eco-friendly and local cultural sites, a rating and review system, trip planning, and education on sustainable travel practices.",
      image: project2,
      tags: ["Python", "Machine Learning", "TensorFlow"]
    },
    {
      title: "Agen Perumahan Landing Page",
      desc: "Membangun website agen properti untuk pencarian, pembelian, dan penyewaan rumah di Malang, lengkap dengan katalog hunian, detail harga, fasilitas premium, serta integrasi kontak agen.",
      image: project3,
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <div className={`text-center mb-16 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Here are some of my recent works ranging from landing pages to full-stack web applications.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${idx * 200}ms`, animationFillMode: 'forwards' }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
                    <a href="#" className="p-3 bg-white text-blue-900 rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white text-blue-900 rounded-full hover:scale-110 transition-transform">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
