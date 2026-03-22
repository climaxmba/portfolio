"use client";
import skills from "@/lib/data/skillsData";

export default function TechStack() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900 border-y border-neutral-100 dark:border-neutral-800 overflow-hidden transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            What I work with
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
      </div>
      
      <div className="relative w-full">
        {/* Gradient Masks to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white dark:from-neutral-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white dark:from-neutral-900 to-transparent z-10"></div>

        {/* Scroll Container */}
        <div className="flex w-max animate-scroll gap-8 md:gap-12 opacity-80">
          {/* Render items twice to create the infinite loop effect */}
          {[...skills, ...skills, ...skills].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 group cursor-default min-w-[120px]"
            >
              <div className="transition-all transform group-hover:-translate-y-1 duration-300">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
