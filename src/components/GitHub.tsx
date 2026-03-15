'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, Activity, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const GITHUB_USERNAME = 'Tirthrojara'

const stats = [
  { label: 'GitHub Username', value: '@Tirthrojara', icon: Github },
  { label: 'Focus Area', value: 'MERN Stack', icon: Activity },
  { label: 'Status', value: 'Open to Work', icon: Star },
]

export default function GitHubSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="github" ref={ref} className="relative py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-violet-400 text-sm font-semibold font-mono tracking-wider uppercase">Activity</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Consistent contributions and open source work across the stack.
          </p>
        </motion.div>

        {/* GitHub stats cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass border border-violet-500/20 rounded-2xl p-6 flex flex-col items-center text-center card-shine hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-3xl font-black text-white mb-4 shadow-lg shadow-violet-500/30">
              TR
            </div>
            <h3 className="text-white font-bold text-xl mb-1">Tirth Rojara</h3>
            <p className="text-violet-400 font-mono text-sm mb-4">@{GITHUB_USERNAME}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              MERN Stack Developer. Building scalable web apps with modern tech.
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-indigo-500 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              View Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Stats image */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass border border-white/6 rounded-2xl p-4 flex items-center justify-center card-shine hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&bg_color=0f172a&border_color=6366f1&icon_color=a855f7&title_color=818cf8&text_color=94a3b8&hide_border=false&border_radius=12`}
                alt="GitHub Stats"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div> */}

          {/* Top languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass border border-white/6 rounded-2xl p-4 flex items-center justify-center card-shine hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&bg_color=0f172a&border_color=6366f1&title_color=818cf8&text_color=94a3b8&hide_border=false&border_radius=12`}
                alt="Top Languages"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Contribution chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="glass border border-white/6 rounded-2xl p-6 card-shine hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-5">
            <Activity className="w-5 h-5 text-indigo-400" />
            <h3 className="text-white font-bold text-lg">Contribution Activity</h3>
          </div>
          <div className="w-full overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
              alt="GitHub Contribution Chart"
              className="w-full min-w-[600px] rounded-lg opacity-90"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
