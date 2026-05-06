import { motion } from 'motion/react';
import { Camera, Film, PenTool, Radio, Globe, Heart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: 'Photography',
      desc: 'Mencakup liputan acara, potret siswa, hingga fotografi produk.',
      size: 'large',
      color: 'from-orange-500/20',
    },
    {
      icon: Film,
      title: 'Videography',
      desc: 'Sinematografi berkualitas untuk event sekolah dan video promosi.',
      size: 'small',
      color: 'from-blue-500/20',
    },
    {
      icon: PenTool,
      title: 'Graphic Design',
      desc: 'Visual identitas yang mendukung branding sekolah.',
      size: 'small',
      color: 'from-purple-500/20',
    },
    {
      icon: Radio,
      title: 'Podcast & Audio',
      desc: 'Bercerita melalui suara di studio podcast modern kami.',
      size: 'small',
      color: 'from-green-500/20',
    },
    {
      icon: Globe,
      title: 'Digital Presence',
      desc: 'Mengelola sosial media dan website resmi Ibrahimy.',
      size: 'large',
      color: 'from-pink-500/20',
    },
    {
      icon: Heart,
      title: 'Community',
      desc: 'Membangun ekosistem kreatif di lingkungan sekolah.',
      size: 'small',
      color: 'from-red-500/20',
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            className="badge-indigo mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Layanan Kami
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-display font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Creative <span className="text-slate-500">Multitools</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`glass-card p-8 group relative overflow-hidden flex flex-col justify-end border-white/5 hover:border-indigo-500/40 transition-all duration-500 ${
                service.size === 'large' ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-indigo-500 group-hover:scale-110 transition-all duration-500">
                <service.icon size={64} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500 shadow-indigo">
                  <service.icon size={24} />
                </div>
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-slate-400 text-sm max-w-md group-hover:text-slate-200 transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
