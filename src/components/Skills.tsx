export default function Skills() {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      color: 'from-blue-600 to-blue-700',
      skills: [
        { name: 'TensorFlow & Keras', level: 85 },
        { name: 'CNNs & Deep Learning', level: 80 },
        { name: 'Model Training & Optimization', level: 85 },
        { name: 'Image Classification', level: 90 },
      ],
    },
    {
      title: 'Programming Languages',
      color: 'from-emerald-600 to-emerald-700',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'XML', level: 80 },
        { name: 'React Native', level: 65 },
      ],
    },
    {
      title: 'App Development',
      color: 'from-sky-600 to-sky-700',
      skills: [
        { name: 'Android Studio', level: 85 },
        { name: 'Firebase Integration', level: 80 },
        { name: 'UI/UX Design', level: 75 },
        { name: 'TensorFlow Lite', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-16 rounded-full" />

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg mb-6 font-semibold shadow-md`}>
                  {category.title}
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
