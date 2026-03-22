"use client"
import { useCallback, useState } from "react";

interface Particle {
    id: number;
    angle: number;
    velocity: number;
    size: number;
}

export function SolarButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    const [particles, setParticles] = useState<Particle[]>([]);
  
    const triggerBurst = useCallback(() => {
      onClick?.();
      const newParticles = Array.from({ length: 16 }).map((_, i) => ({
        id: Date.now() + i,
        angle: (i * 360) / 16 + (Math.random() * 10 - 5),
        velocity: 60 + Math.random() * 40,
        size: 2 + Math.random() * 3,
      }));
      setParticles((prev) => [...prev, ...newParticles]);
      setTimeout(() => {
        setParticles((prev) => prev.filter(p => !newParticles.find(np => np.id === p.id)));
      }, 800);
    }, [onClick]);
  
    return (
      <button
        onClick={triggerBurst}
        className="group relative px-8 py-3 rounded-full font-bold transition-all duration-300 overflow-visible active:scale-95 
                   bg-orange-500 text-white shadow-lg shadow-orange-200 
                   dark:bg-orange-600 dark:shadow-none"
      >
        {/* Moving Gas Halos (Visible on Hover) */}
        <div className="absolute inset-[-15px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(251,191,36,0.6)_0%,transparent_60%)] animate-gas-drift-1" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,0.5)_0%,transparent_60%)] animate-gas-drift-2" />
        </div>
        
        {/* Corona Glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 blur-md transition-all duration-500 
                        opacity-40 group-hover:opacity-70 group-hover:scale-125
                        dark:opacity-20 dark:group-hover:opacity-50" />
        
        {/* Particles Burst on Click */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-particle-burst"
              style={{
                '--angle': `${p.angle}deg`,
                '--dist': `${p.velocity}px`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                boxShadow: '0 0 5px #fde047'
              } as React.CSSProperties & { [key: string]: string | number }}
            />
          ))}
        </div>
  
        <div className="absolute inset-0 rounded-full overflow-hidden border border-orange-400/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fde047_0%,#ea580c_100%)] group-hover:brightness-110 transition-all duration-300" />
        </div>
  
        <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
          {children}
        </span>
      </button>
    );
  };

  export function SolarLink({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) {
    const [particles, setParticles] = useState<Particle[]>([]);
  
    const triggerBurst = useCallback(() => {
      onClick?.();
      const newParticles = Array.from({ length: 16 }).map((_, i) => ({
        id: Date.now() + i,
        angle: (i * 360) / 16 + (Math.random() * 10 - 5),
        velocity: 60 + Math.random() * 40,
        size: 2 + Math.random() * 3,
      }));
      setParticles((prev) => [...prev, ...newParticles]);
      setTimeout(() => {
        setParticles((prev) => prev.filter(p => !newParticles.find(np => np.id === p.id)));
      }, 800);
    }, [onClick]);
  
    return (
      <a
        href={href}
        onClick={triggerBurst}
        className="group relative px-8 py-3 rounded-full font-bold transition-all duration-300 overflow-visible active:scale-95 
                   bg-orange-500 text-white shadow-lg shadow-orange-200 
                   dark:bg-orange-600 dark:shadow-none inline-flex items-center justify-center"
      >
        {/* Moving Gas Halos (Visible on Hover) */}
        <div className="absolute inset-[-15px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(251,191,36,0.6)_0%,transparent_60%)] animate-gas-drift-1" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,0.5)_0%,transparent_60%)] animate-gas-drift-2" />
        </div>
        
        {/* Corona Glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-400 blur-md transition-all duration-500 
                        opacity-40 group-hover:opacity-70 group-hover:scale-125
                        dark:opacity-20 dark:group-hover:opacity-50" />
        
        {/* Particles Burst on Click */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-particle-burst"
              style={{
                '--angle': `${p.angle}deg`,
                '--dist': `${p.velocity}px`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                boxShadow: '0 0 5px #fde047'
              } as React.CSSProperties & { [key: string]: string | number }}
            />
          ))}
        </div>
  
        <div className="absolute inset-0 rounded-full overflow-hidden border border-orange-400/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fde047_0%,#ea580c_100%)] group-hover:brightness-110 transition-all duration-300" />
        </div>
  
        <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-md">
          {children}
        </span>
      </a>
    );
  };
