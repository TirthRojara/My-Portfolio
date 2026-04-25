'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Shield, Server, MessageCircle, ShieldCheck, CreditCard, Layers, Lock, Radio, Database, TestTube, MonitorSmartphone, FlaskConical, Send, Sparkles } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Job Portal',
    subtitle: 'Full Stack Application',
    // description: 'A production-grade job portal featuring real-time updates, subscription payments, and role-based access control. Designed for horizontal scalability using Redis Pub/Sub and real-time communication with Socket.IO.',
    description: 'A production-grade job portal featuring real-time updates, subscription payments, role-based access control, and AI-powered content generation. Designed for horizontal scalability with Redis Pub/Sub and real-time communication via Socket.IO.',
    icon: '💼',
    gradient: 'from-indigo-600 to-purple-600',
    borderColor: 'border-indigo-500/20',
    glowColor: 'shadow-indigo-500/15',
    tech: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Socket.io', 'Razorpay', 'JWT', 'TypeScript'],
    features: [
      { icon: Sparkles, text: 'AI-powered job & candidate content generation' },
      { icon: CreditCard, text: 'Subscription system via Razorpay' },
      { icon: Radio, text: 'WebSocket communication using Socket.IO' },
      { icon: Zap, text: 'Real-time updates via Socket.IO' },
      { icon: Database, text: 'Redis caching for faster data access' },
      // { icon: Server, text: 'Redis Pub/Sub for horizontal scaling' },
      { icon: ShieldCheck, text: 'Secure JWT-based authentication system' },
      { icon: Lock, text: 'Role-based access control' },
      { icon: MonitorSmartphone, text: 'Responsive UI optimized for mobile and desktop' },
      { icon: Layers, text: 'Modular backend architecture for maintainability' }
    ],
    github: 'https://github.com/TirthRojara/Job-portal-backend',
    live: 'https://jobportal.tirthrojara.in/login',
    badge: 'Featured',
  },
  {
    id: 2,
    title: 'Project Manager',
    subtitle: 'MERN Stack Application',
    description: 'A comprehensive project management tool enabling teams to track tasks, manage projects, and collaborate efficiently with a clean, intuitive interface.',
    icon: '📋',
    gradient: 'from-emerald-600 to-teal-600',
    borderColor: 'border-emerald-500/20',
    glowColor: 'shadow-emerald-500/15',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Jest', 'JavaScript', 'HTML', 'Tailwind CSS'],
    features: [
      { icon: Shield, text: 'JWT authentication & authorization' },
      { icon: Zap, text: 'Full CRUD for projects & tasks' },
      { icon: Server, text: 'RESTful API architecture' },
      { icon: Zap, text: 'API tested with Jest' },
      { icon: Lock, text: 'Protected API routes with JWT middleware' },
      { icon: FlaskConical, text: 'Backend API tested using Jest' },
      { icon: MonitorSmartphone, text: 'Responsive UI optimized for mobile and desktop' }
    ],
    github: 'https://github.com/Tirthrojara/Project-Manager-Full-Stack',
    live: 'https://vercel-project-manager-frontend.vercel.app',
    badge: 'MERN',
  },
  {
    id: 3,
    title: 'Real-time Chat App',
    subtitle: 'WebSocket Application',
    description: 'A blazing-fast real-time chat application with room management, active user tracking, and unique username requirements built on WebSockets.',
    icon: '💬',
    gradient: 'from-orange-600 to-pink-600',
    borderColor: 'border-orange-500/20',
    glowColor: 'shadow-orange-500/15',
    tech: ['Node.js', 'Express.js', 'Socket.IO', 'JavaScript', 'HTML', 'CSS'],
    features: [
      { icon: Radio, text: 'WebSocket communication via Socket.IO' },
      { icon: MessageCircle, text: 'Real-time bidirectional messaging' },
      { icon: Server, text: 'Room-based chat system' },
      { icon: Zap, text: 'Active users list & presence tracking' },
      { icon: Shield, text: 'Unique username enforcement' },
      { icon: Send, text: 'Instant message broadcasting within rooms' },
    ],
    github: 'https://github.com/Tirthrojara/Real-Time-Chat-App',
    live: 'https://real-time-chat-app-1ba0.onrender.com',
    badge: 'Socket.IO',
  },
]

const techColors: Record<string, string> = {
  React: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  'Node.js': 'text-green-400 bg-green-500/10 border-green-500/20',
  'Express.js': 'text-slate-300 bg-slate-500/10 border-slate-500/20',
  PostgreSQL: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Redis: 'text-red-400 bg-red-500/10 border-red-500/20',
  'Socket.io': 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  'Socket.IO': 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  Razorpay: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
  MongoDB: 'text-green-300 bg-green-500/10 border-green-500/20',
  JWT: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  Jest: 'text-red-300 bg-red-500/10 border-red-500/20',
  JavaScript: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  'Next.js': 'text-white bg-white/10 border-white/20',
  'Tailwind CSS': 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  TypeScript: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  HTML: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  CSS: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="projects" ref={ref} className="relative py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-500" />
            <span className="text-emerald-400 text-sm font-semibold font-mono tracking-wider uppercase">Portfolio</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real-world applications built with production-level code, scalable architectures, and modern tooling.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative glass border ${project.borderColor} rounded-2xl overflow-hidden card-shine hover:shadow-2xl hover:${project.glowColor} transition-all duration-500 flex flex-col`}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              {/* Card header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                      <p className={`text-xs font-mono bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.badge}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Features */}
              <div className="px-6 pb-4 space-y-2">
                {project.features.map((feat, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-xs text-slate-300">
                    <feat.icon className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{feat.text}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2 py-0.5 rounded text-xs font-mono font-medium border ${techColors[t] ?? 'text-slate-400 bg-white/5 border-white/10'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-auto px-6 pb-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg glass border border-white/8 text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>

              {/* Hover glow layer */}
              <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none rounded-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Tirthrojara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 font-medium"
          >
            <Github className="w-4 h-4" />
            View all projects on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
