export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-black text-neutral-400 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            C
          </div>
          <span className="text-white font-bold text-lg">Climax Mba</span>
        </div>

        <div className="flex gap-8 text-sm">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href='#experience' className="hover:text-white transition-colors">Experience</a>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} Climax Mba. All rights reserved.
        </div>
      </div>
    </footer>
  );
}