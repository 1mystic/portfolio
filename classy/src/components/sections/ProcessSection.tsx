import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFadeIn } from '@/hooks/useFadeIn';

const steps = [
  {
    title: 'Problem & Scope',
    description: 'Define the problem clearly, whether it\'s a product idea, dataset challenge, or research question. Set measurable success criteria before touching a line of code.',
    code: `# Scoping a project
objective = "Predict QSR demand by location"
metrics   = ["MAPE", "RMSE", "Coverage@80%"]
data      = ["transactions", "weather", "events"]
timeline  = "2 weeks"`,
  },
  {
    title: 'Data & Pipeline',
    description: 'Ingest, clean, and transform raw data. For ML projects this means EDA with Pandas, feature engineering, and validation splits. For web apps it means schema design and API contracts.',
    code: `import pandas as pd

df = pd.read_csv("orders.csv")
df["date"] = pd.to_datetime(df["date"])
df = df.dropna(subset=["location", "amount"])

# Feature engineering
df["day_of_week"] = df["date"].dt.dayofweek
df["is_weekend"]  = df["day_of_week"].isin([5, 6])`,
  },
  {
    title: 'Build & Iterate',
    description: 'Start simple with a baseline model or MVP UI, then iterate. For ML: Scikit-learn → PyTorch/TensorFlow. For web: Flask/React prototype → production-grade architecture.',
    code: `from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import cross_val_score

model = GradientBoostingRegressor(
    n_estimators=200, learning_rate=0.05
)
scores = cross_val_score(model, X, y, cv=5, scoring="neg_mae")
print(f"CV MAE: {-scores.mean():.2f} ± {scores.std():.2f}")`,
  },
  {
    title: 'Evaluate & Validate',
    description: 'Rigorous offline evaluation using holdout sets, cross-validation, and error analysis. For research projects: statistical significance. For apps: user testing and performance profiling.',
    code: `from sklearn.metrics import mean_absolute_error
import numpy as np

y_pred = model.predict(X_test)
mae    = mean_absolute_error(y_test, y_pred)
mape   = np.mean(np.abs((y_test - y_pred) / y_test)) * 100

print(f"MAE:  {mae:.2f}")
print(f"MAPE: {mape:.1f}%")
assert mape < 15, "Model below target threshold"`,
  },
  {
    title: 'Ship & Document',
    description: 'Deploy to Netlify, Vercel, Render, or Wasmer depending on the stack. Write clean docs, tag releases, and open-source where possible. Portfolio-ready output every time.',
    code: `# Example: Flask app → Render deployment
# render.yaml
services:
  - type: web
    name: domino-ml
    runtime: python
    buildCommand: pip install -r requirements.txt
    startCommand: gunicorn app:app
    envVars:
      - key: FLASK_ENV
        value: production`,
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="process" className="min-h-screen py-24 px-6 md:px-20 lg:px-32">
      <div
        ref={ref}
        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-gold font-mono text-sm">01</span>
          <div className="h-px flex-1 bg-gold/20" />
          <h2 className="text-3xl md:text-4xl font-bold">How I Work</h2>
        </div>

        {/* Timeline */}
        <div className="flex items-center justify-center gap-0 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <button
                onClick={() => setActive(i)}
                className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm transition-all duration-300 ${
                  i === active
                    ? 'border-gold bg-gold/20 text-gold scale-110'
                    : i < active
                    ? 'border-gold/50 bg-gold/10 text-gold/70'
                    : 'border-border text-muted-foreground hover:border-gold/30'
                }`}
              >
                {i + 1}
              </button>
              {i < steps.length - 1 && (
                <div
                  className={`w-12 md:w-20 h-0.5 transition-colors duration-300 ${
                    i < active ? 'bg-gold/50' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3 text-gold">{steps[active].title}</h3>
            <p className="text-muted-foreground leading-relaxed">{steps[active].description}</p>
          </div>

          {/* Code block */}
          <div className="bg-[hsl(0_0%_8%)] rounded-lg border border-border overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="text-xs text-muted-foreground ml-2 font-mono">workflow.py</span>
            </div>
            <pre className="p-4 text-sm text-green-400/80 overflow-x-auto leading-relaxed">
              <code>{steps[active].code}</code>
            </pre>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <span className="text-xs text-muted-foreground font-mono">
              {active + 1} / {steps.length}
            </span>
            <button
              onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
              disabled={active === steps.length - 1}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold disabled:opacity-30 transition-colors"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
