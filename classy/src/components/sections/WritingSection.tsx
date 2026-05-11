import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

interface Post {
  title: string;
  date: string;
  description: string;
  tag: string;
  image: string;
}

const posts: Post[] = [
  {
    title: 'Building a Drag-and-Drop ML Pipeline in Flask',
    date: 'Feb 2025',
    description: 'How I architected DominoML, a visual node-based ML builder on top of Flask, SQLite, and MathJax for equation rendering.',
    tag: 'Engineering',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'RAG with Desmos: Building Axiom Canvas',
    date: 'Jan 2025',
    description: 'Combining OpenRouter AI with Desmos API and a retrieval-augmented generation pipeline to create a math visualization engine.',
    tag: 'AI / LLMs',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80',
  },
  {
    title: 'Keystroke Dynamics for Passive Authentication',
    date: 'Dec 2024',
    description: 'Statistical modeling of typing patterns using Mahalanobis distance and Hidden Markov Models for password-free authentication.',
    tag: 'Research',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
  },
  {
    title: 'QSR Demand Forecasting with Prophet & Apriori',
    date: 'Nov 2024',
    description: 'Using time-series forecasting and market basket analysis on restaurant transactional data to drive inventory decisions.',
    tag: 'Data Analysis',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    title: 'Post-Wildfire Vegetation Recovery via Remote Sensing',
    date: 'Oct 2024',
    description: 'Tracking NDVI and NBR spectral indices over time to quantify vegetation regeneration rates across biomes after wildfire events.',
    tag: 'Research',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
  },
];

export default function WritingSection() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const { ref, isVisible } = useFadeIn();

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIdx((i) => (i + 1) % Math.min(posts.length, 3));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredPosts = posts.slice(0, 3);

  return (
    <section id="writing" className="min-h-screen py-24 px-6 md:px-20 lg:px-32">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gold font-mono text-sm">04</span>
          <div className="h-px flex-1 bg-gold/20" />
          <h2 className="text-3xl md:text-4xl font-bold">Writing</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-12 pl-8">
          Articles, technical deep dives and tutorials &middot; {posts.length} posts &middot; Latest: Feb 2025
        </p>

        {/* Carousel */}
        <div className="relative mb-16 overflow-hidden rounded-xl border border-border">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${carouselIdx * 100}%)` }}
          >
            {featuredPosts.map((post, i) => (
              <div key={i} className="min-w-full relative aspect-[21/9]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <span className="text-gold text-xs font-mono uppercase tracking-wider">{post.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">{post.title}</h3>
                  <p className="text-white/70 text-sm mt-2 max-w-lg">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Carousel controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={() => setCarouselIdx((i) => (i - 1 + featuredPosts.length) % featuredPosts.length)}
              className="w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:border-gold transition-colors"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={() => setCarouselIdx((i) => (i + 1) % featuredPosts.length)}
              className="w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:border-gold transition-colors"
            >
              <ChevronRight size={14} />
            </button>
          </div>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredPosts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === carouselIdx ? 'bg-gold w-6' : 'bg-white/30 w-2'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Blog list */}
        <div className="space-y-0 border-t border-border">
          {posts.map((post, i) => (
            <button
              key={i}
              onMouseEnter={() => setHoveredPost(i)}
              onMouseLeave={() => setHoveredPost(null)}
              className={`w-full flex items-center justify-between py-5 px-4 border-b border-border transition-all duration-300 text-left group ${
                hoveredPost === i ? 'bg-gold/5' : ''
              }`}
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="text-xs text-muted-foreground font-mono shrink-0 w-16">{post.date}</span>
                <span className={`font-medium transition-colors ${hoveredPost === i ? 'text-gold' : ''}`}>
                  {post.title}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-gold/20 text-gold/60 hidden md:inline shrink-0">
                  {post.tag}
                </span>
              </div>
              <ArrowUpRight
                size={14}
                className={`shrink-0 text-muted-foreground transition-all ${
                  hoveredPost === i ? 'text-gold translate-x-0.5 -translate-y-0.5' : ''
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
