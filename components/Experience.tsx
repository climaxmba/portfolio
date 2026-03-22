"use client"

import experiences from "@/lib/data/experienceData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden transition-colors">
      {/* Decorative Side SVG - Left */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 opacity-30 text-indigo-200 dark:text-indigo-900">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="200" r="100" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="0" cy="100" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="0" cy="300" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          <line x1="0" y1="400" x2="200" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      {/* Decorative Side SVG - Right */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 opacity-30 text-indigo-200 dark:text-indigo-900 rotate-180">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="200" r="100" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="0" cy="100" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="0" cy="300" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
          <line x1="0" y1="400" x2="200" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-16 text-center">Where I've Worked</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 dark:bg-neutral-800"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:grid md:grid-cols-2 md:gap-12">

              {/* Left Side (Time/Header for Even, Content for Odd on Desktop) */}
              <div className={`md:text-right md:pr-12 ${index % 2 !== 0 ? 'order-1 hidden md:block' : ''}`}>
                {index % 2 === 0 ? (
                  <>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{exp.role}</h3>
                    <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{exp.company.name} ({exp.location})</div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">{exp.period}</div>
                  </>
                ) : (
                  <>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs rounded border border-neutral-200 dark:border-neutral-700">{skill}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Timeline Node */}
              <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 shadow-md transform -translate-x-1/2 mt-1.5 z-10 ${index === 0 ? 'bg-indigo-600 border-white dark:border-neutral-900' : 'bg-white dark:bg-neutral-800 border-indigo-400 dark:border-indigo-600'}`}></div>

              {/* Right Side (Content for Even, Time/Header for Odd on Desktop) */}
              <div className={`pl-12 md:pl-0 pt-1 md:pt-0 ${index % 2 !== 0 ? 'order-2' : ''}`}>
                {index % 2 === 0 ? (
                  <>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 md:justify-start">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs rounded border border-neutral-200 dark:border-neutral-700">{skill}</span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{exp.role}</h3>
                    <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{exp.company.name}</div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">{exp.period}</div>

                    {/* Mobile Only Description for Odd items */}
                    <div className="md:hidden">
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs rounded border border-neutral-200 dark:border-neutral-700">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}