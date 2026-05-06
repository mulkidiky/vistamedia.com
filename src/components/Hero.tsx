import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge-indigo mb-8">Visual Storytelling Team</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Mengabadikan <span className="text-gradient">Moment</span>, <br />Menyatukan Cerita.
            </motion.h1>

            <motion.p
              className="max-w-xl text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              The official creative powerhouse of SMKS Ibrahimy 1 Sukorejo. We specialize in high-end cinematography, professional photography, and digital design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://www.youtube.com/@vistamediaibrahimy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-600/20 uppercase tracking-wider flex items-center gap-2"
              >
                Explore Our Reel <ChevronRight size={18} />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 border border-white/10 hover:border-white/20 font-bold rounded-full transition-all flex items-center gap-2"
              >
                <Play size={18} className="fill-white" /> Show Gallery
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="flex gap-10 border-t border-white/5 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div>
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">Events Covered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24k</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">Followers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">Specialists</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Preview */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full max-w-lg mx-auto lg:max-w-none">
            <motion.a
              href="https://youtu.be/aOXqm4twyp4?si=iLQa4l-yXnl7CGDH"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-[400px] rounded-[40px] overflow-hidden relative group border border-white/10 shadow-2xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}Screenshot 2026-05-07 035603.png`}
                alt="Media Workshop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                <p className="text-white font-bold text-lg capitalize">pengenalan 9 jurusan</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">SMKS IBRAHIMY 1 Sukorejo</p>
              </div>
            </motion.a>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="glass-card p-6 flex flex-col justify-end min-h-[140px] relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
                <p className="text-sm font-bold">4K Cinema Gear</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Production Ready</p>
              </motion.div>
              <motion.div
                className="glass-card p-6 flex flex-col justify-end min-h-[140px] relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>
                <p className="text-sm font-bold">Studio Lighting</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Professional Setup</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
