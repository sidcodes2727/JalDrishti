import { motion } from 'framer-motion';

export default function Hero({ onUpload, onDashboard, onAbout }) {
  return (
    <section className="relative overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 md:h-96 md:w-96 rounded-full blur-3xl"
             style={{ background: 'radial-gradient(circle at 50% 50%, rgba(100,255,218,0.18), transparent 60%)' }} />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl"
             style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 60%)' }} />
      </div>

      <div className="container py-20 md:py-28 relative">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Heavy Metal Pollution Index
        </motion.h1>

        <motion.p
          className="mt-4 text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Quantify water quality, visualize hotspots, and export clean reports. Built for scientists and policymakers.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button className="btn" onClick={onUpload}>Upload Data</button>
          <button
            onClick={onDashboard}
            className="px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white transition"
          >
            View Dashboard
          </button>
          <button
            onClick={onAbout}
            className="px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 bg-card hover:bg-white/5 text-white transition"
          >
            About HMPI
          </button>
        </motion.div>

        {/* mini highlights */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          <div className="card p-4">
            <div className="text-white font-semibold">AI-aided analysis</div>
            <div className="text-white/60 text-sm mt-1">Get instant HMPI insights from raw samples.</div>
          </div>
          <div className="card p-4">
            <div className="text-white font-semibold">Interactive maps</div>
            <div className="text-white/60 text-sm mt-1">Spot hotspots and compare geographies.</div>
          </div>
          <div className="card p-4">
            <div className="text-white font-semibold">One‑click reports</div>
            <div className="text-white/60 text-sm mt-1">Share clean, export‑ready summaries.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
