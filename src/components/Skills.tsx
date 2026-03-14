'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Network } from 'lucide-react'
import React from 'react'

interface Skill {
  name: string;
  logo?: string;
  icon?: React.ElementType;
  color?: string;
}

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/20',
    glowColor: 'shadow-blue-500/10',
    skills: [
      { name: 'Next.js', logo: 'nextdotjs/white' },
      { name: 'React.js', logo: 'react/61DAFB' },
      { name: 'JavaScript', logo: 'javascript/F7DF1E' },
      { name: 'TypeScript', logo: 'typescript/3178C6' },
      { name: 'HTML5', logo: 'html5/E34F26' },
      { name: 'CSS3', logo: 'css/1572B6' },
      { name: 'Redux', logo: 'redux/764ABC' },
      { name: 'Tailwind CSS', logo: 'tailwindcss/06B6D4' },
      { name: 'Shadcn/UI', logo: 'shadcnui/white' },
      { name: 'React Router', logo: 'reactrouter/CA4245' },
      { name: 'TanStack', logo: 'tanstack/white' },
      { name: 'React Hook Form', logo: 'reacthookform/EC5990' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/20',
    glowColor: 'shadow-emerald-500/10',
    skills: [
      { name: 'Node.js', logo: 'nodedotjs/339933' },
      { name: 'Express.js', logo: 'express/white' },
      { name: 'REST APIs', icon: Network, color: 'text-slate-300 group-hover:text-white' },
      { name: 'Mongoose', logo: 'mongoose/880000' },
      { name: 'Prisma', logo: 'prisma/white' },
      { name: 'Socket.IO', logo: 'socketdotio/white' },
      { name: 'Razorpay', logo: 'razorpay/white' },
      { name: 'JWT', logo: 'jsonwebtokens/white' },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-500/20',
    glowColor: 'shadow-orange-500/10',
    skills: [
      { name: 'PostgreSQL', logo: 'postgresql/4169E1' },
      { name: 'MongoDB', logo: 'mongodb/47A248' },
      { name: 'Redis', logo: 'redis/FF4438' },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    color: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/20',
    glowColor: 'shadow-pink-500/10',
    skills: [
      { name: 'Git', logo: 'git/F05032' },
      { name: 'GitHub', logo: 'github/white' },
      { name: 'Docker', logo: 'docker/2496ED' },
      { name: 'Postman', logo: 'postman/FF6C37' },
      { name: 'Jest', logo: 'jest/C21325' },
    ],
  },
]

function SkillLogo({ skill, delay, inView }: { skill: Skill; delay: number; inView: boolean }) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 200, damping: 10 }}
      whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.15, ease: 'easeOut' } }}
      className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-150 group cursor-default shadow-lg hover:shadow-xl"
    >
      <div className="w-12 h-12 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-white/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {Icon ? (
          <Icon className={`w-9 h-9 ${skill.color} relative z-10 transition-transform duration-300 group-hover:scale-110`} />
        ) : (
          <img 
            src={`https://cdn.simpleicons.org/${skill.logo}`} 
            alt={`${skill.name} logo`} 
            loading="lazy"
            className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-110 relative z-10" 
          />
        )}
      </div>
      <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors text-center font-mono tracking-tight">
        {skill.name}
      </span>
    </motion.div>
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

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <SkillLogo
                    key={skill.name}
                    skill={skill}
                    delay={catIdx * 0.15 + skillIdx * 0.05}
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
          {['Socket.IO', 'JWT', 'Razorpay', 'Jest', 'Shadcn/UI', 'GraphQL', 'CI/CD'].map((tech, i) => (
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
