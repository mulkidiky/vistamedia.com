import { motion } from 'motion/react';
import { Target, Users, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Anggota Aktif', value: '10+' },
    { icon: Target, label: 'Projek Selesai', value: '150+' },
    { icon: Award, label: 'Penghargaan', value: '3' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge-indigo mb-6 text-indigo-400">Tentang Kami</span>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
              Lebih dari sekadar media, <br />
              <span className="text-slate-500 italic">kami adalah perajin visual.</span>
            </h3>
            <p className="text-lg text-slate-400 font-light mb-10 leading-relaxed">
              Vista Media Ibrahimy adalah pusat kreativitas di SMKS Ibrahimy 1 Sukorejo. Kami melatih generasi masa depan dalam multimedia, dari sinematografi hingga desain grafis.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <stat.icon size={20} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
              <img
                src="/pak umar.jpeg"
                alt="Media Workshop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
            </div>

            {/* Artistic Border Overlay */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-brand-orange/30 rounded-3xl -z-10" />

            <div className="absolute -bottom-8 -left-8 glass-card p-6 md:p-8 max-w-xs shadow-2xl">
              <p className="text-sm font-medium italic text-white/80 leading-relaxed mb-4">
                "Kreativitas bukan sekadar apa yang kita lihat, tapi bagaimana kita membagikannya kepada dunia."
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-xs font-bold tracking-tight">Umar Hasan M.Pd</p>
                  <p className="text-[10px] opacity-40 uppercase tracking-wider">Kepala Sekolah SMKS IBRAHIMY 1 Sukorejo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
