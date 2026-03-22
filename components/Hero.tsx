import { MapPin } from 'lucide-react';
import Image from 'next/image';
import heroImg from '@/assets/hero.webp';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-medium text-neutral-900 dark:text-white leading-tight">
            Building & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Contributing
            </span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            I am a passionate Frontend Engineer who enjoys contributing skills and ideas to build impactful solutions. I bridge the gap between complex problems and elegant, user-friendly experiences.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href='#contact'
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-indigo-300 dark:hover:shadow-indigo-900/70 font-medium"
            >
              Contact Me
            </a>
            <a
              href='#projects'
              className="px-8 py-3 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all font-medium"
            >
              View Work
            </a>
          </div>
        </div>
        
        <div className="content-center">
          <Image src={heroImg} alt="An overview of Climax's work" className='block h-auto w-full drop-shadow-[0_0_100px_rgba(255,215,0,0.5)]' />
        </div>
      </div>
    </section>
  );
}