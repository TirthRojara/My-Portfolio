'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/20',
    glowColor: 'shadow-blue-500/10',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'React.js', level: 90 },
      { name: 'Redux', level: 80 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/20',
    glowColor: 'shadow-emerald-500/10',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 87 },
      { name: 'REST APIs', level: 90 },
      { name: 'Mongoose', level: 83 },
      { name: 'Prisma', level: 78 },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-500/20',
    glowColor: 'shadow-orange-500/10',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/20',
    glowColor: 'shadow-pink-500/10',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Postman', level: 88 },
    ],
  },
]

function SkillBar({ name, level, delay, inView }: { name: string; level: number; delay: number; inView: boolean }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="relative py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-purple-400 text-sm font-semibold font-mono tracking-wider uppercase">Tech Stack</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A snapshot of my technical toolkit, refined through real-world projects.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className={`glass border ${category.borderColor} rounded-2xl p-6 card-shine hover:shadow-xl ${category.glowColor} transition-all duration-300`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.15 + skillIdx * 0.08}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {['Socket.IO', 'JWT', 'Razorpay', 'Jest', 'Shadcn/UI', 'REST', 'GraphQL', 'CI/CD'].map((tech, i) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full glass border border-white/8 text-sm font-mono font-medium text-slate-400 hover:text-white hover:border-purple-500/40 transition-all duration-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
