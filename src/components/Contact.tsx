'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tirthrjr@gmail.com',
    href: 'mailto:tirthrjr@gmail.com',
    color: 'text-red-400',
    bg: 'from-red-500/10 to-pink-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Tirth Rojara',
    href: 'https://linkedin.com/in/tirth-rojara',
    color: 'text-blue-400',
    bg: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Tirthrjr',
    href: 'https://github.com/Tirthrjr',
    color: 'text-purple-400',
    bg: 'from-purple-500/10 to-indigo-500/10',
    border: 'border-purple-500/20',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px]" />
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
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-500" />
            <span className="text-pink-400 text-sm font-semibold font-mono tracking-wider uppercase">Get In Touch</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Open to new roles, collaborations, and exciting projects. Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick info */}
            <div className="glass border border-white/6 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>India 🇮🇳</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-5 h-5 text-purple-400 shrink-0" />
                <span>IST (UTC +5:30)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span>Available for full-time / freelance roles</span>
              </div>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className={`flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r ${item.bg} border ${item.border} backdrop-blur-sm transition-all duration-200 group`}
                >
                  <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.label}</p>
                    <p className={`font-semibold ${item.color} group-hover:underline`}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass border border-white/6 rounded-2xl p-8 space-y-5"
            >
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                />
              </div>

              {/* Status feedback */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3"
                >
                  <CheckCircle className="w-4 h-4" />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 disabled:opacity-60 shadow-lg shadow-indigo-500/25"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
