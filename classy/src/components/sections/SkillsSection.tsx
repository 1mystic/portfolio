import { useState } from 'react';
import { FlaskConical } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

interface SkillBlock {
  name: string;
  category: string;
  projects: number;
  color: string;
  size: number;
  details: string;
  icons: { src: string; alt: string }[];
}

// All icon colours use gold (#C9A84C) for visual consistency with the theme
const G = 'C9A84C';

const skills: SkillBlock[] = [
  {
    name: 'Python',
    category: 'Core',
    projects: 15,
    color: 'hsl(40 45% 55%)',
    size: 5,
    details: 'Primary language: data pipelines, ML models, Flask APIs, automation, scripting',
    icons: [
      { src: `https://cdn.simpleicons.org/python/${G}`, alt: 'Python' },
      { src: `https://cdn.simpleicons.org/anaconda/${G}`, alt: 'Anaconda' },
    ],
  },
  {
    name: 'Machine Learning',
    category: 'ML',
    projects: 10,
    color: 'hsl(40 50% 65%)',
    size: 4,
    details: 'TensorFlow, PyTorch, Scikit-learn: CNNs, Transformers, regression, classification, clustering',
    icons: [
      { src: `https://cdn.simpleicons.org/tensorflow/${G}`, alt: 'TensorFlow' },
      { src: `https://cdn.simpleicons.org/pytorch/${G}`, alt: 'PyTorch' },
      { src: `https://cdn.simpleicons.org/scikitlearn/${G}`, alt: 'Scikit-learn' },
    ],
  },
  {
    name: 'React / Next.js',
    category: 'Web',
    projects: 8,
    color: 'hsl(200 40% 55%)',
    size: 3,
    details: 'Frontend SPA and SSR apps: Vite, TypeScript, Tailwind CSS, shadcn/ui',
    icons: [
      { src: `https://cdn.simpleicons.org/react/${G}`, alt: 'React' },
      { src: `https://cdn.simpleicons.org/nextdotjs/${G}`, alt: 'Next.js' },
      { src: `https://cdn.simpleicons.org/vite/${G}`, alt: 'Vite' },
    ],
  },
  {
    name: 'Flask / FastAPI',
    category: 'Web',
    projects: 7,
    color: 'hsl(210 40% 50%)',
    size: 3,
    details: 'REST APIs, auth, Celery task queues, Jinja2 templates, SQLite/PostgreSQL integration',
    icons: [
      { src: `https://cdn.simpleicons.org/flask/${G}`, alt: 'Flask' },
      { src: `https://cdn.simpleicons.org/fastapi/${G}`, alt: 'FastAPI' },
    ],
  },
  {
    name: 'SQL & Databases',
    category: 'Data',
    projects: 8,
    color: 'hsl(160 35% 48%)',
    size: 3,
    details: 'MySQL, PostgreSQL, SQLite, Redis: schema design, complex queries, indexing, caching',
    icons: [
      { src: `https://cdn.simpleicons.org/postgresql/${G}`, alt: 'PostgreSQL' },
      { src: `https://cdn.simpleicons.org/mysql/${G}`, alt: 'MySQL' },
      { src: `https://cdn.simpleicons.org/redis/${G}`, alt: 'Redis' },
    ],
  },
  {
    name: 'Data Analysis',
    category: 'Data',
    projects: 9,
    color: 'hsl(155 35% 45%)',
    size: 3,
    details: 'Pandas, NumPy, Matplotlib, Seaborn: EDA, feature engineering, statistical analysis',
    icons: [
      { src: `https://cdn.simpleicons.org/pandas/${G}`, alt: 'Pandas' },
      { src: `https://cdn.simpleicons.org/numpy/${G}`, alt: 'NumPy' },
    ],
  },
  {
    name: 'Vue.js',
    category: 'Web',
    projects: 4,
    color: 'hsl(200 45% 60%)',
    size: 2,
    details: 'Vue 3 Options & Composition API: Whiz-It, Wixplore, Qwix.it frontend',
    icons: [
      { src: `https://cdn.simpleicons.org/vuedotjs/${G}`, alt: 'Vue.js' },
    ],
  },
  {
    name: 'RAG & LLMs',
    category: 'ML',
    projects: 3,
    color: 'hsl(35 40% 52%)',
    size: 2,
    details: 'OpenRouter AI, Gemini API, ElevenLabs: RAG pipelines, prompt engineering, AI tool integration',
    icons: [
      { src: `https://cdn.simpleicons.org/huggingface/${G}`, alt: 'HuggingFace' },
      { src: `https://cdn.simpleicons.org/googlegemini/${G}`, alt: 'Gemini' },
    ],
  },
  {
    name: 'JavaScript / TS',
    category: 'Web',
    projects: 10,
    color: 'hsl(205 40% 52%)',
    size: 2,
    details: 'ES2022+, TypeScript, DOM manipulation, browser APIs, canvas, Desmos integration',
    icons: [
      { src: `https://cdn.simpleicons.org/javascript/${G}`, alt: 'JavaScript' },
      { src: `https://cdn.simpleicons.org/typescript/${G}`, alt: 'TypeScript' },
    ],
  },
  {
    name: 'GCP & DevOps',
    category: 'Ops',
    projects: 3,
    color: 'hsl(150 30% 45%)',
    size: 2,
    details: 'Google Cloud Platform, Docker, Kubernetes, Wasmer: CI/CD, cloud deployment',
    icons: [
      { src: `https://cdn.simpleicons.org/googlecloud/${G}`, alt: 'GCP' },
      { src: `https://cdn.simpleicons.org/docker/${G}`, alt: 'Docker' },
    ],
  },
  {
    name: 'Java',
    category: 'Core',
    projects: 3,
    color: 'hsl(38 40% 48%)',
    size: 1,
    details: 'OOP, data structures and algorithms, academic and competitive programming',
    icons: [
      { src: `https://cdn.simpleicons.org/openjdk/${G}`, alt: 'Java' },
    ],
  },
  {
    name: 'Research',
    category: 'Ops',
    projects: 4,
    color: 'hsl(280 30% 52%)',
    size: 1,
    details: 'Vegetation recovery (TerraHeal), keystroke dynamics (TypeState), QSR demand forecasting, cloud classification',
    icons: [],
  },
];

const categories = [
  { name: 'Core', color: 'hsl(40 45% 55%)' },
  { name: 'ML', color: 'hsl(40 50% 65%)' },
  { name: 'Web', color: 'hsl(200 40% 55%)' },
  { name: 'Data', color: 'hsl(160 35% 48%)' },
  { name: 'Ops', color: 'hsl(150 30% 45%)' },
];

export default function SkillsSection() {
  const [selected, setSelected] = useState<SkillBlock | null>(null);
  const { ref, isVisible } = useFadeIn();

  const totalSize = skills.reduce((a, b) => a + b.size, 0);

  return (
    <section id="skills" className="min-h-screen py-24 px-6 md:px-20 lg:px-32">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-gold font-mono text-sm">02</span>
          <div className="h-px flex-1 bg-gold/20" />
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Stack</h2>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((c) => (
            <div key={c.name} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c.color }} />
              {c.name}
            </div>
          ))}
        </div>

        {/* Treemap */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skills.map((skill) => {
            const widthPercent = (skill.size / totalSize) * 100;
            const isActive = selected?.name === skill.name;
            return (
              <button
                key={skill.name}
                onClick={() => setSelected(isActive ? null : skill)}
                className="relative rounded-lg border transition-all duration-300 overflow-hidden group"
                style={{
                  flexBasis: `clamp(140px, calc(${Math.max(widthPercent * 2.5, 15)}% - 0.5rem), 100%)`,
                  flexGrow: skill.size,
                  minHeight: `${80 + skill.size * 18}px`,
                  maxWidth: '100%',
                  borderColor: isActive ? skill.color : 'hsl(0 0% 20%)',
                  backgroundColor: isActive ? `${skill.color}20` : 'hsl(0 0% 12%)',
                }}
              >
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${skill.color}10` }}
                />

                <div className="relative p-3 h-full flex flex-col justify-between">
                  {/* Icons row */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {skill.icons.length > 0 ? (
                      skill.icons.map((ic) => (
                        <img
                          key={ic.alt}
                          src={ic.src}
                          alt={ic.alt}
                          width={22}
                          height={22}
                          className="opacity-70 group-hover:opacity-100 transition-opacity"
                          loading="lazy"
                        />
                      ))
                    ) : (
                      <FlaskConical size={20} className="opacity-60" style={{ color: skill.color }} />
                    )}
                  </div>

                  {/* Name */}
                  <span className="text-sm font-medium text-foreground text-left">{skill.name}</span>

                  {/* Footer row */}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">{skill.projects} projects</span>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            selected ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {selected && (
            <div className="p-6 rounded-lg border border-border bg-surface">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-2">
                  {selected.icons.slice(0, 2).map((ic) => (
                    <img key={ic.alt} src={ic.src} alt={ic.alt} width={18} height={18} />
                  ))}
                  {selected.icons.length === 0 && (
                    <FlaskConical size={18} style={{ color: selected.color }} />
                  )}
                </div>
                <h4 className="text-lg font-semibold font-sans">{selected.name}</h4>
                <span className="text-xs text-muted-foreground ml-auto font-mono">{selected.category}</span>
              </div>
              <p className="text-muted-foreground text-sm">{selected.details}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
