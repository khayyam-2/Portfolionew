import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              KA
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
            Khayyam Abbasi
          </h1>

          <p className="text-2xl md:text-3xl text-slate-700 mb-6 font-light">
            Machine Learning Engineer & Android Developer
          </p>

          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            BS Computer Science student passionate about building intelligent, data-driven solutions
            and user-friendly applications that make a real impact.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="https://github.com/khayyam-2/khayyam-project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/khayyam-abbasi-035aa6361/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href="mailto:abbasikhayyam37@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-slate-600 hover:text-slate-800 transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
