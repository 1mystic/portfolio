import { useScrollSpy } from '@/hooks/useScrollSpy';

const sections = [
  { id: 'hero',        label: '00', name: 'Home' },
  { id: 'process',     label: '01', name: 'How I Work' },
  { id: 'skills',      label: '02', name: 'Skills & Stack' },
  { id: 'projects',    label: '03', name: 'Projects' },
  { id: 'writing',     label: '04', name: 'Writing' },
  { id: 'experiments', label: '05', name: 'Research' },
];

export default function SideNav() {
  const activeId = useScrollSpy(sections.map((s) => s.id));

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center justify-center gap-6 z-50 max-lg:hidden">
      {sections.map((s) => {
        const active = activeId === s.id;
        return (
          <button
            key={s.id}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex flex-col items-center gap-1 transition-all duration-300"
          >
            <span
              className={`text-[10px] font-mono transition-colors duration-300 ${
                active ? 'text-gold' : 'text-muted-foreground'
              }`}
            >
              {s.label}
            </span>
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                active
                  ? 'bg-gold scale-125 shadow-[0_0_8px_hsl(40_45%_55%/0.5)]'
                  : 'bg-muted-foreground/40 group-hover:bg-muted-foreground'
              }`}
            />

            {/* Hover label — slides in from the left */}
            <div
              className={`
                absolute left-full ml-4 top-1/2 -translate-y-1/2
                pointer-events-none select-none
                opacity-0 -translate-x-2
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-200 ease-out
              `}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[hsl(0_0%_10%)] border border-border shadow-lg whitespace-nowrap">
                <span className="text-[10px] font-mono text-gold">{s.label}</span>
                <span className="text-xs text-foreground/90">{s.name}</span>
              </div>
              {/* Arrow pointing left */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-border" />
            </div>
          </button>
        );
      })}
    </nav>
  );
}
