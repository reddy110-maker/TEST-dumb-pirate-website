/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Anchor, Coins, Ship, Skull, Waves, Wind } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e4e3e0] font-sans selection:bg-[#f27d26] selection:text-black">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-[#141414]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f27d26_0%,transparent_50%)]" />
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center px-4"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Skull size={64} className="text-[#f27d26]" />
            </motion.div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic">
            The Pirate's Cove
          </h1>
          <p className="text-xl md:text-2xl font-mono opacity-60 max-w-2xl mx-auto uppercase tracking-widest">
            Digital plunder for the bold and the brave
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Drop Anchor</span>
          <Anchor size={20} className="animate-bounce opacity-40" />
        </motion.div>
      </header>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#141414] border border-[#141414]">
          <FeatureCard 
            icon={<Ship size={32} />}
            title="Sturdy Vessels"
            description="Built on the strongest hulls of modern technology to weather any digital storm."
          />
          <FeatureCard 
            icon={<Coins size={32} />}
            title="Hidden Loot"
            description="Discover secret features and optimized code buried deep within our repositories."
          />
          <FeatureCard 
            icon={<Wind size={32} />}
            title="Swift Sails"
            description="Lightning-fast performance that catches the trade winds of the global network."
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 border-t border-[#141414]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Waves className="text-[#f27d26]" />
            <h2 className="text-4xl font-bold italic serif">Chart Your Course</h2>
          </div>
          
          <div className="space-y-12">
            <div className="group cursor-pointer">
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs font-mono opacity-40">01 / NAVIGATION</span>
                <span className="text-[#f27d26] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-3xl font-medium group-hover:italic transition-all">The Seven Seas of Data</h3>
              <p className="mt-4 text-lg opacity-60 leading-relaxed">
                Navigating the vast oceans of information requires a keen eye and a steady hand. Our tools help you map out your journey through the fog of complexity.
              </p>
              <div className="mt-6 h-px bg-[#141414] group-hover:bg-[#f27d26] transition-colors" />
            </div>

            <div className="group cursor-pointer">
              <div className="flex justify-between items-end mb-4">
                <span className="text-xs font-mono opacity-40">02 / ALLIANCE</span>
                <span className="text-[#f27d26] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="text-3xl font-medium group-hover:italic transition-all">The Brethren Court</h3>
              <p className="mt-4 text-lg opacity-60 leading-relaxed">
                Join a crew of like-minded adventurers. Collaboration is the wind in our sails, and together we conquer the most challenging horizons.
              </p>
              <div className="mt-6 h-px bg-[#141414] group-hover:bg-[#f27d26] transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#141414] text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] opacity-30">
          © 2026 The Pirate's Cove • No Quarter Given
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-[#0a0a0a] p-12 hover:bg-[#0f0f0f] transition-colors group">
      <div className="text-[#f27d26] mb-8 group-hover:scale-110 transition-transform inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 uppercase tracking-tight italic">{title}</h3>
      <p className="opacity-50 leading-relaxed font-mono text-sm">
        {description}
      </p>
    </div>
  );
}
