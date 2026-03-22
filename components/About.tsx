"use client"
import { Github, Linkedin, Mail, User } from 'lucide-react';
import { MachineLink } from './widgets/clickable-effects/Machine';

export default function About() {
  return (
    <section id="about" className="relative py-24 transition-colors overflow-hidden bg-white dark:bg-neutral-950">
      
      {/* --- ABSTRACT BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated SVG Pattern Overlay */}
        <svg 
          className="absolute inset-0 w-full h-full text-indigo-600 dark:text-indigo-400" 
          aria-hidden="true"
        >
          <defs>
            <pattern 
              id="abstract-grid" 
              width="60" 
              height="60" 
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" />
              <path d="M0 60L60 0" className="stroke-current opacity-20 dark:opacity-50" strokeWidth="0.5" />
              
              <animateTransform 
                attributeName="patternTransform" 
                type="translate" 
                from="0 0" 
                to="60 60" 
                dur="30s" 
                repeatCount="indefinite" 
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#abstract-grid)" />
        </svg>

        {/* Dynamic Glow Orbs */}
        <div className="absolute -top-[5%] -right-[5%] w-[40%] h-[40%] bg-indigo-200/50 dark:bg-indigo-900/50 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-blue-200/50 dark:bg-blue-900/50 rounded-full blur-[80px]" />
        
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-indigo-500/50 dark:bg-indigo-500/50 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '12s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content: Focused Professional Summary */}
          <div className="order-2 md:order-1">
            <header className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
                Who am <span className="text-indigo-600 dark:text-indigo-400">I?</span>
              </h2>
              <div className="h-1.5 w-20 bg-indigo-600 rounded-full"></div>
            </header>

            <div className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed max-w-xl">
              <p>
                I am a <span className="font-semibold text-neutral-900 dark:text-white">Frontend Engineer</span> with over 3 years of experience architecting scalable, high-performance web applications using <span className="text-indigo-600 dark:text-indigo-400 font-medium">React, TypeScript, and the modern JavaScript ecosystem</span>. I specialize in bridging the gap between complex technical requirements and intuitive user experiences, with a deep focus on system architecture, state management, and optimizing Core Web Vitals. My commitment to excellence is reflected in my open-source contributions and my ability to deliver pixel-perfect, accessible solutions that drive tangible business value.
              </p>
            </div>

            {/* CTA & Socials */}
            <div className="flex flex-wrap items-center gap-6 mt-12">
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/climaxmba" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                  className="group relative p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl transition-all hover:border-indigo-500 shadow-sm hover:shadow-indigo-500/10"
                >
                  <Linkedin size={24} className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </a>
                <a 
                  href="https://github.com/climaxmba" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub"
                  className="group relative p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl transition-all hover:border-indigo-500 shadow-sm hover:shadow-indigo-500/10"
                >
                  <Github size={24} className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                </a>
              </div>
              
              <MachineLink
                href="#contact"
                >
                <Mail size={20} className="group-hover:rotate-10 transition-transform" />
                Work with me
              </MachineLink>
            </div>
          </div>

          {/* Right Profile Section */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative group">
              {/* Animated rings */}
              <div className="absolute -inset-4 border-2 border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 40%' }}></div>
              <div className="absolute -inset-8 border border-indigo-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%' }}></div>
              
              {/* Profile Blob */}
              <div
                className="w-72 h-72 md:w-96 md:h-96 bg-neutral-100 dark:bg-neutral-800 overflow-hidden border-12 border-white dark:border-neutral-900 shadow-2xl relative z-10 transition-all duration-700 group-hover:scale-[1.02]"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
              >
                <div className="w-full h-full bg-linear-to-tr from-indigo-100 to-white dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center text-neutral-400">
                  <User size={100} strokeWidth={1} className="group-hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
              
              {/* Status Badge */}
              <div className="absolute bottom-4 -right-4 bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-2xl z-20 border border-neutral-100 dark:border-neutral-700 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest">Available for hire</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}