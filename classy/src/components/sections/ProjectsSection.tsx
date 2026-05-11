import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

interface Project {
  name: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  /** Tailwind gradient classes for the cover strip */
  cover: string;
  /** Simple Icons CDN slugs shown on the cover */
  coverIcons: string[];
}

const G = 'C9A84C';

// Cover gradients keyed by category
const catGradients: Record<string, string> = {
  'AI / ML':        'from-amber-950/80 via-yellow-900/40 to-transparent',
  'Web Apps':       'from-blue-950/80 via-cyan-900/40 to-transparent',
  'Tools':          'from-violet-950/80 via-purple-900/40 to-transparent',
  'Data Analysis':  'from-emerald-950/80 via-green-900/40 to-transparent',
};

const projects: Project[] = [
  // AI / ML
  {
    name: 'DominoML',
    category: 'AI / ML',
    description: 'Visual drag-and-drop ML pipeline builder with Marked.js + MathJax rendering.',
    tech: ['Flask', 'SQLite', 'Marked.js', 'MathJax'],
    demo: 'https://domino-ml.onrender.com',
    cover: catGradients['AI / ML'],
    coverIcons: [`flask/${G}`, `python/${G}`],
  },
  {
    name: 'GlideML',
    category: 'AI / ML',
    description: 'Visual ML pipeline builder with a clean drag-and-drop interface for constructing ML workflows.',
    tech: ['React', 'Vite', 'TypeScript'],
    demo: 'https://glideml.vercel.app',
    cover: catGradients['AI / ML'],
    coverIcons: [`react/${G}`, `vite/${G}`],
  },
  {
    name: 'Axiom Canvas',
    category: 'AI / ML',
    description: 'Math visualization engine powered by Desmos API with OpenRouter AI and RAG capabilities.',
    tech: ['Desmos API', 'OpenRouter AI', 'RAG', 'JS'],
    demo: 'https://axiom-canvas.onrender.com',
    cover: catGradients['AI / ML'],
    coverIcons: [`huggingface/${G}`, `javascript/${G}`],
  },
  {
    name: 'GlitchFlick',
    category: 'AI / ML',
    description: 'GenAI video script creation tool using Gemini API and ElevenLabs voice synthesis.',
    tech: ['Gemini API', 'ElevenLabs', 'Python'],
    cover: catGradients['AI / ML'],
    coverIcons: [`googlegemini/${G}`, `python/${G}`],
  },
  {
    name: 'WikiViz',
    category: 'AI / ML',
    description: 'Interactive visual explorer for Wikipedia content with Gemini-powered AI summaries.',
    tech: ['React', 'TypeScript', 'Vite', 'Gemini API'],
    cover: catGradients['AI / ML'],
    coverIcons: [`react/${G}`, `googlegemini/${G}`],
  },
  {
    name: 'CloudMorph Lens',
    category: 'AI / ML',
    description: 'Deep learning platform for cloud type classification and pixel-level segmentation from satellite imagery.',
    tech: ['PyTorch', 'ResNet50', 'U-Net', 'Grad-CAM', 'Flask'],
    cover: catGradients['AI / ML'],
    coverIcons: [`pytorch/${G}`, `flask/${G}`],
  },
  {
    name: 'Transformer ↔ Emoji',
    category: 'AI / ML',
    description: 'From-scratch PyTorch Transformer (encoder-decoder) for translating text phrases into emojis.',
    tech: ['PyTorch', 'Transformers', 'NLP', 'AdamW'],
    cover: catGradients['AI / ML'],
    coverIcons: [`pytorch/${G}`],
  },
  // Web Apps
  {
    name: 'Clearview Eco',
    category: 'Web Apps',
    description: 'Pollution reporting & geo-verification map using TensorFlow image classification and geotagging.',
    tech: ['TensorFlow', 'React', 'Geotagging'],
    demo: 'https://clearvieweco.netlify.app',
    cover: catGradients['Web Apps'],
    coverIcons: [`tensorflow/${G}`, `react/${G}`],
  },
  {
    name: 'Whiz-It',
    category: 'Web Apps',
    description: 'Scalable real-time quizzing platform with AI feedback, leaderboards, and admin panel (RBAC).',
    tech: ['Vue.js', 'Flask', 'Redis', 'Celery', 'Google AI'],
    cover: catGradients['Web Apps'],
    coverIcons: [`vuedotjs/${G}`, `redis/${G}`, `flask/${G}`],
  },
  {
    name: 'Qwix.it',
    category: 'Web Apps',
    description: 'Household service booking platform connecting customers with professionals, including payment flow.',
    tech: ['Flask', 'JS', 'Bootstrap', 'SQLite'],
    cover: catGradients['Web Apps'],
    coverIcons: [`flask/${G}`, `javascript/${G}`],
  },
  {
    name: 'VeraMind',
    category: 'Web Apps',
    description: 'AI-powered mental wellness platform for anxiety tracking, journaling, and cognitive pattern identification.',
    tech: ['Vue 3', 'Vite', 'Python', 'FastAPI'],
    cover: catGradients['Web Apps'],
    coverIcons: [`vuedotjs/${G}`, `fastapi/${G}`],
  },
  {
    name: 'Wixplore',
    category: 'Web Apps',
    description: 'Cultural data intelligence platform with AI agents for data profiling, analysis, and language extraction.',
    tech: ['Vue 3', 'Node.js', 'Python', 'Vercel'],
    cover: catGradients['Web Apps'],
    coverIcons: [`vuedotjs/${G}`, `nodedotjs/${G}`],
  },
  {
    name: 'Origami Simulator',
    category: 'Web Apps',
    description: '3D physics-based origami simulator with step-by-step folding, wind/gravity effects, and crease pattern editor.',
    tech: ['Three.js', 'React 18', 'Tailwind', 'Vite'],
    cover: catGradients['Web Apps'],
    coverIcons: [`threedotjs/${G}`, `react/${G}`],
  },
  // Tools
  {
    name: 'MarkTex',
    category: 'Tools',
    description: 'Full-featured Markdown + LaTeX editor with live preview, annotation mode, and PDF/HTML export.',
    tech: ['Markdown', 'LaTeX', 'Python'],
    demo: 'https://marktex.wasmer.app',
    cover: catGradients['Tools'],
    coverIcons: [`markdown/${G}`, `overleaf/${G}`],
  },
  {
    name: 'DevLoft',
    category: 'Tools',
    description: '19 client-side developer utilities: JSON tools, regex tester, LLM cost estimator, sanitizer. Zero dependencies.',
    tech: ['HTML', 'CSS', 'Vanilla JS'],
    demo: 'https://devloft-tools.netlify.app',
    cover: catGradients['Tools'],
    coverIcons: [`javascript/${G}`, `html5/${G}`],
  },
  {
    name: 'PyCrumbs',
    category: 'Tools',
    description: 'Interactive Python learning platform with step-by-step tutorials for beginners.',
    tech: ['React', 'Python', 'Netlify'],
    demo: 'https://pycrumbs.netlify.app',
    cover: catGradients['Tools'],
    coverIcons: [`python/${G}`, `react/${G}`],
  },
  {
    name: 'MindFluence',
    category: 'Tools',
    description: 'Mind-path navigator for guided thinking and mental wellness journeys.',
    tech: ['JavaScript', 'Netlify'],
    demo: 'https://mindfluence.netlify.app',
    cover: catGradients['Tools'],
    coverIcons: [`javascript/${G}`],
  },
  // Data Analysis
  {
    name: 'Bhopal Food Data',
    category: 'Data Analysis',
    description: 'Geospatial analysis of 5,000 Zomato/Swiggy orders across 20 Bhopal localities with heatmaps and datasets.',
    tech: ['Python', 'Pandas', 'GeoPandas', 'Vercel'],
    demo: 'https://bhopal-food-delivery.vercel.app',
    cover: catGradients['Data Analysis'],
    coverIcons: [`pandas/${G}`, `python/${G}`],
  },
  {
    name: 'Aura-Delhi',
    category: 'Data Analysis',
    description: 'AI air quality intelligence platform for Delhi-NCR with real-time AQI, source identification, and policy dashboards.',
    tech: ['Next.js', 'FastAPI', 'PyTorch', 'TimescaleDB', 'GCP'],
    cover: catGradients['Data Analysis'],
    coverIcons: [`nextdotjs/${G}`, `pytorch/${G}`, `googlecloud/${G}`],
  },
  {
    name: 'Kanha House',
    category: 'Data Analysis',
    description: 'Clean landing page for Kanha Student House, a PG/hostel accommodation site.',
    tech: ['HTML', 'CSS', 'JS', 'Netlify'],
    demo: 'https://kanha-min.netlify.app',
    cover: catGradients['Data Analysis'],
    coverIcons: [`html5/${G}`, `javascript/${G}`],
  },
];

const categoryOrder = ['AI / ML', 'Web Apps', 'Tools', 'Data Analysis'];

function CoverStrip({ cover, coverIcons, name }: { cover: string; coverIcons: string[]; name: string }) {
  return (
    <div className={`w-full h-16 rounded-t-lg bg-gradient-to-r ${cover} flex items-center gap-3 px-4 mb-3 border-b border-border/40`}>
      <div className="flex items-center gap-2">
        {coverIcons.map((slug) => (
          <img
            key={slug}
            src={`https://cdn.simpleicons.org/${slug}`}
            alt={slug.split('/')[0]}
            width={20}
            height={20}
            className="opacity-80"
            loading="lazy"
          />
        ))}
      </div>
      <span className="text-xs font-mono text-white/40 truncate">{name.toLowerCase().replace(/\s/g, '-')}</span>
    </div>
  );
}

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="projects" className="min-h-screen py-24 px-6 md:px-20 lg:px-32">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gold font-mono text-sm">03</span>
          <div className="h-px flex-1 bg-gold/20" />
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-12 pl-8">
          {projects.length} projects across ML, full-stack, tooling, and data analysis.
        </p>

        {/* Category columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryOrder.map((cat) => (
            <div key={cat}>
              <h3 className="text-sm font-mono text-gold/80 uppercase tracking-wider mb-4">{cat}</h3>
              <div className="space-y-3">
                {projects
                  .filter((p) => p.category === cat)
                  .map((project) => {
                    const expanded = expandedProject === project.name;
                    return (
                      <div key={project.name}>
                        <button
                          onClick={() => setExpandedProject(expanded ? null : project.name)}
                          className={`w-full text-left rounded-lg border transition-all duration-300 overflow-hidden ${
                            expanded
                              ? 'border-gold/40 bg-gold/5'
                              : 'border-border bg-surface hover:border-gold/20'
                          }`}
                        >
                          {/* Cover strip — always visible */}
                          <CoverStrip cover={project.cover} coverIcons={project.coverIcons} name={project.name} />

                          <div className="px-4 pb-3 flex items-center gap-2">
                            <span className="text-sm font-medium flex-1">{project.name}</span>
                            {(project.demo || project.github) && (
                              <ExternalLink size={11} className="text-muted-foreground shrink-0" />
                            )}
                          </div>
                        </button>

                        {/* Expanded detail */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            expanded ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-4 rounded-lg bg-[hsl(0_0%_8%)] border border-border text-sm">
                            <p className="text-muted-foreground mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-2 py-0.5 text-xs rounded-full border border-gold/20 text-gold/80"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-3 items-center">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-muted-foreground hover:text-gold transition-colors"
                                  title="GitHub"
                                >
                                  <Github size={14} />
                                </a>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs text-gold/70 hover:text-gold transition-colors"
                                >
                                  Live demo <ExternalLink size={11} />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
