import { useState, useEffect, useRef } from 'react';
import { FlaskConical, ChevronDown, ExternalLink, Award } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

interface Experiment {
  title: string;
  subtitle: string;
  description: string;
  howItWorks: string;
  tech: string[];
  type: 'Research' | 'Analysis' | 'Achievement' | 'Education';
  links?: { label: string; url: string }[];
}

const experiments: Experiment[] = [
  {
    title: 'TerraHeal',
    subtitle: 'Post-Wildfire Vegetation Recovery',
    description: 'Remote sensing research on vegetation recovery patterns following wildfire events.',
    howItWorks: 'Analyzes satellite imagery using spectral indices (NDVI, NBR) to track post-wildfire vegetation regeneration over time. Combines temporal remote sensing data with terrain analysis to identify recovery rates across different biomes.',
    tech: ['Remote Sensing', 'Python', 'GeoPandas', 'NDVI Analysis'],
    type: 'Research',
  },
  {
    title: 'TypeState',
    subtitle: 'Keystroke Dynamics Authentication',
    description: 'Statistical analysis of typing patterns for passive user authentication via keystroke dynamics.',
    howItWorks: 'Collects inter-key timing, dwell time, and flight time from typing sessions. Applies statistical models (Mahalanobis distance, HMM) to build user-specific behavioral profiles for continuous authentication without passwords.',
    tech: ['Python', 'Statistics', 'HMM', 'Scikit-learn'],
    type: 'Research',
  },
  {
    title: 'QSR Demand Forecasting',
    subtitle: 'Business Data Analysis',
    description: 'Forecasting demand and identifying product affinities for Quick Service Restaurants using transactional data.',
    howItWorks: 'Applies time-series decomposition (SARIMA, Prophet) alongside market basket analysis (Apriori algorithm) to forecast weekly demand and discover high-affinity item pairings. Delivers actionable inventory and menu insights.',
    tech: ['Pandas', 'Prophet', 'Apriori', 'SQL', 'Matplotlib'],
    type: 'Analysis',
  },
  {
    title: 'CloudMorph Lens',
    subtitle: 'Cloud Classification & Segmentation',
    description: 'Deep learning platform for automated cloud type classification and pixel-level segmentation from satellite imagery.',
    howItWorks: 'ResNet50 for multi-label classification of cloud types (cirrus, cumulus, stratus, nimbus, altostratus). U-Net for pixel-level cloud segmentation. Includes Grad-CAM explainability and a Flask web UI for uploading and visualizing results.',
    tech: ['PyTorch', 'ResNet50', 'U-Net', 'Grad-CAM', 'Flask'],
    type: 'Research',
  },
  {
    title: 'Transformer from Scratch',
    subtitle: 'Text-to-Emoji Translation',
    description: 'From-scratch PyTorch implementation of the full Transformer (encoder-decoder) for translating text phrases to emojis.',
    howItWorks: 'Implements scaled dot-product attention, multi-head attention, sinusoidal positional encoding, and position-wise FFN from the "Attention Is All You Need" paper. Trained with AdamW and greedy decoding for inference. Includes attention visualization utilities.',
    tech: ['PyTorch', 'Transformers', 'NLP', 'AdamW'],
    type: 'Research',
  },
  {
    title: 'DataCamp Certification',
    subtitle: 'Data Science Associate, 2025',
    description: 'Professional certification covering Python, SQL, and PyTorch from DataCamp.',
    howItWorks: 'Completed the full Data Science Associate track covering Python for data analysis, advanced SQL querying, and deep learning with PyTorch. Certified 2025.',
    tech: ['Python', 'SQL', 'PyTorch'],
    type: 'Education',
  },
  {
    title: 'Silver Medal, Anukriti',
    subtitle: 'Paradox · IIT Madras 2025',
    description: 'Silver medal at Anukriti, the technical arts event at Paradox, IIT Madras 2025.',
    howItWorks: 'Competed in the interdisciplinary technical arts competition at IIT Madras\'s cultural fest Paradox, earning a Silver Medal at the institute level.',
    tech: ['IIT Madras', 'Paradox 2025'],
    type: 'Achievement',
  },
  {
    title: 'Tech Dominion Winner',
    subtitle: 'Inter-house Hackathon · IIT Madras',
    description: 'Hackathon winner at the Inter-house Tech Dominion competition at IIT Madras.',
    howItWorks: 'Won the Inter-house Tech Dominion hackathon at IIT Madras, a competitive programming and product-building event across all student houses.',
    tech: ['IIT Madras', 'Hackathon'],
    type: 'Achievement',
  },
];

const typeColors: Record<string, string> = {
  Research: 'hsl(40 45% 55%)',
  Analysis: 'hsl(200 40% 55%)',
  Achievement: 'hsl(150 40% 48%)',
  Education: 'hsl(280 35% 55%)',
};

export default function ExperimentsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { ref, isVisible } = useFadeIn();
  const detailRef = useRef<HTMLDivElement>(null);

  // Scroll the detail panel into view after the expand animation has started
  useEffect(() => {
    if (expanded !== null) {
      const timer = setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [expanded]);

  return (
    <section id="experiments" className="min-h-screen py-24 px-6 md:px-20 lg:px-32 pb-32">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gold font-mono text-sm">05</span>
          <div className="h-px flex-1 bg-gold/20" />
          <h2 className="text-3xl md:text-4xl font-bold">Research & Achievements</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-12 pl-8">
          Papers, analysis, certifications, and awards.
        </p>

        {/* Type legend */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.entries(typeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              {type}
            </div>
          ))}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {experiments.map((exp, i) => (
            <button
              key={i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`text-left p-6 rounded-lg border transition-all duration-300 ${
                expanded === i
                  ? 'border-gold/40 bg-gold/5'
                  : 'border-border bg-surface hover:border-gold/20'
              }`}
            >
              <div className="flex items-start gap-3">
                {exp.type === 'Achievement' ? (
                  <Award size={18} className="text-gold mt-0.5 shrink-0" />
                ) : (
                  <FlaskConical size={18} className="text-gold mt-0.5 shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="font-semibold font-sans truncate">{exp.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{exp.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className="hidden md:inline text-[10px] px-2 py-0.5 rounded-full border"
                        style={{
                          color: typeColors[exp.type],
                          borderColor: `${typeColors[exp.type]}40`,
                        }}
                      >
                        {exp.type}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`text-muted-foreground transition-transform duration-300 ${
                          expanded === i ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded detail */}
        <div
          ref={detailRef}
          className={`overflow-hidden transition-all duration-500 ${
            expanded !== null ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {expanded !== null && (
            <div className="p-6 rounded-lg border border-border bg-[hsl(0_0%_8%)]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: typeColors[experiments[expanded].type] }} />
                <h4 className="text-lg font-semibold text-gold font-sans">{experiments[expanded].title}</h4>
                <span className="text-xs text-muted-foreground ml-1">{experiments[expanded].subtitle}</span>
              </div>
              <div className="mb-4 mt-3">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Details</span>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {experiments[expanded].howItWorks}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {experiments[expanded].tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs rounded-full border border-gold/20 text-gold/80">
                    {t}
                  </span>
                ))}
              </div>
              {experiments[expanded].links && (
                <div className="flex gap-3">
                  {experiments[expanded].links!.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border border-border text-muted-foreground hover:border-gold/30 hover:text-gold transition-colors"
                    >
                      {link.label} <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
