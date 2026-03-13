'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Code2, Layers, Cpu, User } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing maintainable, readable, and well-documented code following best practices.',
    color: 'from-indigo-500 to-blue-500',
    glow: 'shadow-indigo-500/20',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    desc: 'Building systems that scale horizontally with microservices and event-driven patterns.',
    color: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: Cpu,
    title: 'Modern Technologies',
    desc: 'Leveraging the latest in the JavaScript ecosystem to deliver cutting-edge solutions.',
    color: 'from-cyan-500 to-teal-500',
    glow: 'shadow-cyan-500/20',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="relative py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500" />
          <span className="text-indigo-400 text-sm font-semibold font-mono tracking-wider uppercase">About Me</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-center mb-16"
        >
          Crafting Digital <span className="gradient-text">Experiences</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Avatar card */}
            <div className="glass rounded-2xl p-6 border border-white/6 mb-8 flex items-center gap-5">
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-black text-white">
                  TR
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#030712]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tirth Rojara</h3>
                <p className="text-sm text-indigo-400 font-mono">MERN Stack Developer</p>
                <p className="text-xs text-slate-500 mt-1">India 🇮🇳 · Available for work</p>
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I&apos;m a passionate <span className="text-indigo-400 font-semibold">MERN Stack Developer</span> who 
              thrives on building scalable, production-ready full-stack web applications. My toolkit spans from 
              databases to UIs, covering every layer of the modern web.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I love working across the entire stack — from designing efficient 
              <span className="text-cyan-400"> MongoDB</span> schemas and building robust 
              <span className="text-green-400"> Express.js</span> APIs, to crafting beautiful 
              <span className="text-blue-400"> React</span> UIs powered by scalable 
              <span className="text-yellow-400"> Node.js</span> backends.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Open to Work', 'Fast Learner', 'Team Player', 'Problem Solver'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full glass border border-white/8 text-xs font-medium text-slate-300">
                  ✦ {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className={`glass border-gradient rounded-xl p-6 card-shine hover:shadow-xl ${item.glow} transition-all duration-300 group cursor-default`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
