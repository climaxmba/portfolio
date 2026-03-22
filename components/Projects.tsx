"use client"
import projects from '@/lib/data/projectsData';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-900 dark:bg-black text-white transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Real-world applications where I've applied technical expertise to solve user problems.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Visuals - Alternate Side based on index */}
              <div className={`relative h-[300px] md:h-[400px] w-full flex items-center justify-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end order-1 lg:order-2'}`}>
                {/* Desktop Mockup */}
                <div className={`absolute top-0 md:top-4 w-[85%] h-[80%] bg-neutral-800 dark:bg-neutral-900 rounded-lg border border-neutral-700 shadow-2xl z-0 overflow-hidden group hover:scale-[1.02] transition-transform duration-500 ${index % 2 === 0 ? 'left-0' : 'right-0'}`}>
                  <div className="h-6 bg-neutral-900 border-b border-neutral-700 flex items-center px-3 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  {/* Placeholder for desktopImage */}
                  <div className="p-4 flex flex-col items-center justify-center h-full text-neutral-500 bg-neutral-800 dark:bg-neutral-900">
                    <span className="font-bold text-xl">{project.title} Desktop</span>
                  </div>
                </div>

                {/* Mobile Mockup */}
                <div className={`absolute bottom-0 md:-bottom-4 w-[100px] md:w-[140px] h-[200px] md:h-[280px] bg-black rounded-4xl border-4 border-neutral-800 shadow-xl z-10 overflow-hidden ${index % 2 === 0 ? 'right-4 md:right-20' : 'left-4 md:left-20'}`}>
                  <div className="w-1/2 h-4 bg-black absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20"></div>
                  {/* Placeholder for mobileImage */}
                  <div className="w-full h-full bg-neutral-900/90 flex items-center justify-center text-neutral-400 text-xs text-center px-2">
                    Mobile View
                  </div>
                </div>
              </div>

              {/* Content - Alternate Side based on index */}
              <div className={`${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                <h3 className={`text-3xl font-bold mb-4 ${index % 2 === 0 ? 'text-indigo-400' : 'text-purple-400'}`}>{project.title}</h3>
                <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-3 py-1 bg-neutral-800 dark:bg-neutral-800 rounded-full text-sm font-medium border border-neutral-700 ${index % 2 === 0 ? 'text-indigo-300' : 'text-purple-300'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.isPrivateRepo ? (
                    <span className="flex items-center gap-2 text-neutral-500 cursor-not-allowed">
                      <Github size={20} /> Private Repo
                    </span>
                  ) : (
                    <a href={project.repository ?? '#'} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-white border-b-2 pb-1 transition-colors ${index % 2 === 0 ? 'border-indigo-500 hover:text-indigo-400' : 'border-purple-500 hover:text-purple-400'}`}>
                      <Github size={20} /> View Source
                    </a>
                  )}

                  {project.isClientProject ? (
                    <span className="flex items-center gap-2 px-6 py-2 bg-neutral-800 text-neutral-400 rounded-full cursor-not-allowed border border-neutral-700">
                      Client Project
                    </span>
                  ) : (
                    <a href={project.live ?? '#'} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-6 py-2 rounded-full transition-colors ${index % 2 === 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-purple-600 hover:bg-purple-700'}`}>
                      Play Game <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}