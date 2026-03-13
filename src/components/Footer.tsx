'use client'

import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Tirthrjr', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/tirth-rojara', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:tirthrjr@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 py-10 px-4 sm:px-6">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold gradient-text font-mono">TR.</span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by{' '}
            <span className="text-slate-300 font-medium">Tirth Rojara</span>
            {' · '}
            <span>{new Date().getFullYear()}</span>
          </p>

          {/* Social + scroll to top */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
