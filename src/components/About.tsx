import { Brain, Code2, Smartphone, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-16 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Brain className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">AI Enthusiast</h3>
              <p className="text-slate-600 leading-relaxed">
                Specialized in Machine Learning and Deep Learning, with hands-on experience in building
                and training CNN models for real-world applications like plant disease detection and medical image classification.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Smartphone className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">App Developer</h3>
              <p className="text-slate-600 leading-relaxed">
                Creating intuitive Android applications with Firebase integration and bringing AI models to life
                through mobile platforms. Currently expanding skills in React Native for cross-platform development.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">My Goal</h3>
                <p className="text-lg leading-relaxed text-blue-50">
                  To become an AI-driven mobile app developer, combining intelligence and design to create
                  smart solutions for everyday life. I strive to bridge the gap between cutting-edge machine
                  learning research and practical, user-friendly applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
