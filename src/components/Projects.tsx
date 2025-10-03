import { Leaf, Activity, Zap, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Leaf,
      title: 'Plant Disease Detection',
      description: 'Android app using Deep Learning (CNN) to predict plant diseases offline with TensorFlow Lite integration.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Android Studio', 'TFLite'],
      color: 'from-emerald-600 to-emerald-700',
      gradient: 'from-emerald-50 to-green-50',
    },
    {
      icon: Activity,
      title: 'Musculoskeletal Radiography Classification',
      description: 'Deep learning model for detecting fractures from X-ray images with high accuracy using CNN architecture.',
      tech: ['Python', 'Deep Learning', 'CNN', 'Medical Imaging', 'TensorFlow'],
      color: 'from-blue-600 to-blue-700',
      gradient: 'from-blue-50 to-sky-50',
    },
    {
      icon: Zap,
      title: 'Speed Meter Bowling App',
      description: 'Android app measuring cricket ball speed using device sensors and real-time processing.',
      tech: ['Java', 'Android Studio', 'Sensors API', 'XML', 'Firebase'],
      color: 'from-orange-600 to-orange-700',
      gradient: 'from-orange-50 to-amber-50',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-16 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://github.com/khayyam-2/khayyam-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg group"
            >
              View All Projects
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
