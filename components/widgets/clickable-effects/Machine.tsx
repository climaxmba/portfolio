import Link from "next/link";

export function MachineButton({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
    return (
      <button
        onClick={onClick}
        className="group relative px-8 py-3 font-mono font-bold uppercase tracking-wider transition-all duration-150
                   bg-indigo-600 text-white border border-indigo-500 rounded-full
                   shadow-[0_2px_0_#3730a3,0_4px_6px_-1px_rgba(0,0,0,0.1)]
                   hover:shadow-[0_3px_0_#3730a3,0_6px_10px_-1px_rgba(0,0,0,0.1)]
                   active:shadow-none active:translate-y-[2px]
                   dark:bg-indigo-900 dark:text-indigo-100 dark:border-indigo-950 
                   dark:shadow-[0_2px_0_#1e1b4b] dark:hover:shadow-[0_3px_0_#1e1b4b] 
                   dark:active:shadow-none"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {children}
        </span>
        {/* Subtle Inner Highlight */}
        <div className="absolute inset-px rounded-full border-t border-white/30 dark:border-white/10 pointer-events-none" />
      </button>
    );
  };

  export function MachineLink({ href, target, children, onClick }: { href: string, target?: string, children: React.ReactNode, onClick?: () => void }) {
    return (
      <Link
        href={href}
        target={target}
        onClick={onClick}
        className="group relative inline-flex items-center justify-center px-8 py-3 font-mono font-bold uppercase tracking-wider transition-all duration-150
                   bg-indigo-600 text-white border border-indigo-500 rounded-full
                   shadow-[0_2px_0_#3730a3,0_4px_6px_-1px_rgba(0,0,0,0.1)]
                   hover:shadow-[0_3px_0_#3730a3,0_6px_10px_-1px_rgba(0,0,0,0.1)]
                   active:shadow-none active:translate-y-[2px]
                   dark:bg-indigo-900 dark:text-indigo-100 dark:border-indigo-950
                   dark:shadow-[0_2px_0_#1e1b4b] dark:hover:shadow-[0_3px_0_#1e1b4b]
                   dark:active:shadow-none"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {children}
        </span>
        {/* Subtle Inner Highlight */}
        <div className="absolute inset-px rounded-full border-t border-white/30 dark:border-white/10 pointer-events-none" />
      </Link>
    );
  };
