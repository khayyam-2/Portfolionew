import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8 rounded-full" />

          <p className="text-center text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            Interested in collaborating on AI projects or building something amazing together?
            Feel free to reach out through any of these channels.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a
              href="mailto:abbasikhayyam37@gmail.com"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Email</h3>
              <p className="text-slate-600 break-all">abbasikhayyam37@gmail.com</p>
            </a>

            <a
              href="https://github.com/khayyam-2/khayyam-project"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Github className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">GitHub</h3>
              <p className="text-slate-600">khayyam-2</p>
            </a>

            <a
              href="https://www.linkedin.com/in/khayyam-abbasi-035aa6361/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Linkedin className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">LinkedIn</h3>
              <p className="text-slate-600">Khayyam Abbasi</p>
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <Send className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need an AI-powered mobile app, a machine learning solution, or want to discuss
              innovative tech ideas, I'm here to help bring your vision to life.
            </p>
            <a
              href="mailto:abbasikhayyam37@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg group"
            >
              Get In Touch
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-24 text-center text-slate-600 border-t border-slate-200 pt-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Khayyam Abbasi. Built with React, TypeScript & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
