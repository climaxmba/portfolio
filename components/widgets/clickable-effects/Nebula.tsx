import Link from "next/link";

export function NebulaButton({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
    return (
      <button
        onClick={onClick}
        className="group relative px-10 py-3 rounded-full overflow-hidden border transition-all duration-500 font-semibold tracking-wide
                   bg-white border-indigo-200 text-indigo-900 shadow-sm hover:shadow-indigo-100
                   active:scale-95 active:brightness-95 active:shadow-inner
                   dark:bg-slate-900 dark:border-indigo-500/30 dark:text-indigo-100 dark:shadow-none
                   dark:active:bg-slate-950"
      >
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-10 group-hover:opacity-30 dark:opacity-20 dark:group-hover:opacity-60">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,#4338ca_0%,#7e22ce_30%,transparent_60%)] animate-nebula-drift" />
          <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,#1e40af_0%,transparent_50%)] animate-nebula-drift-reverse" />
        </div>
        
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full animate-twinkle bg-indigo-400 dark:bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  };

  export function NebulaLink({ children, href, onClick }: { children: React.ReactNode, href: string, onClick?: () => void }) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="group relative px-10 py-3 rounded-full overflow-hidden border transition-all duration-500 font-semibold tracking-wide
                   bg-white border-indigo-200 text-indigo-900 shadow-sm hover:shadow-indigo-100
                   active:scale-95 active:brightness-95 active:shadow-inner
                   dark:bg-slate-900 dark:border-indigo-500/30 dark:text-indigo-100 dark:shadow-none
                   dark:active:bg-slate-950"
      >
        <div className="absolute inset-0 transition-opacity duration-1000 opacity-10 group-hover:opacity-30 dark:opacity-20 dark:group-hover:opacity-60">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,#4338ca_0%,#7e22ce_30%,transparent_60%)] animate-nebula-drift" />
          <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,#1e40af_0%,transparent_50%)] animate-nebula-drift-reverse" />
        </div>
        
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full animate-twinkle bg-indigo-400 dark:bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Link>
    );
  };
