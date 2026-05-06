import { motion } from 'motion/react';
import { ExternalLink, Instagram, Youtube } from 'lucide-react';

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.25v7.39c.01 4.94-3.9 9.3-8.83 9.31-4.96.01-9.33-4.04-9.31-9.01.02-4.99 4.1-9.3 9.1-9.28.1 0 .21 0 .31.01V7.93c-2.31-.19-4.54 1.35-5.32 3.54-.78 2.2-.14 4.79 1.6 6.33 1.74 1.54 4.38 1.83 6.42.75 1.4-.73 2.29-2.26 2.3-3.83V.02z" />
  </svg>
);

export default function Portfolio() {
  const categories = ['All', 'Photography', 'Videography', 'Journalism'];

  const works = [
    {
      title: 'Sowan PKL',
      category: 'Cinematic',
      img: `${import.meta.env.BASE_URL}Screenshot 2026-05-07 040606.png`,
      link: 'https://www.instagram.com/reel/DXmQYKfFObU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      title: 'ASAS',
      category: 'Poster Design',
      img: `${import.meta.env.BASE_URL}Screenshot 2026-05-07 040528.png`,
      link: 'https://www.instagram.com/p/DXGAnh5EzBc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      title: 'Pembelajaran Kelas Industri',
      category: 'Poster Design',
      img: `${import.meta.env.BASE_URL}573835482_17853420315575932_3443563399173574956_n.webp`,
      link: 'https://www.instagram.com/p/DRJ3gGQE5J7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      title: 'Launching Kelas Industri',
      category: 'Cinematic',
      img: `${import.meta.env.BASE_URL}Screenshot 2026-05-07 042136.png`,
      link: 'https://www.instagram.com/reel/DPVusrklODW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      title: 'Juara 1 Video Kreatif dalam Lomba Merah Putih',
      category: 'Poster Design',
      img: `${import.meta.env.BASE_URL}540255289_17896763184280549_5513792194827279090_n.webp`,
      link: 'https://www.instagram.com/p/DOA-xpcE7Ki/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      title: 'Konten Bukan Sekedar Tontonan',
      category: 'Video Edukasi',
      img: `${import.meta.env.BASE_URL}Screenshot 2026-05-07 042302.png`,
      link: 'https://www.instagram.com/reel/DT8MrpHE8f4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="badge-indigo mb-4">Galeri Projek</span>
            <h3 className="text-4xl md:text-5xl font-display font-bold mt-4">Selected <span className="text-slate-500">Productions</span></h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all hover:border-indigo-500/50"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <motion.a
              href={work.link || "https://www.instagram.com/vistamedia.ibrahimy/"}
              target="_blank"
              rel="noopener noreferrer"
              key={work.title}
              className="group relative aspect-[4/5] rounded-[32px] overflow-hidden glass-card border border-white/5 block cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-widest mb-2 block">{work.category}</span>
                  <h4 className="text-xl md:text-2xl font-bold mb-4 line-clamp-2">{work.title}</h4>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 glass-card p-12 text-center relative overflow-hidden bg-gradient-to-br from-indigo-600/10 to-transparent">
          <a
            href="https://www.youtube.com/@vistamediaibrahimy"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 right-0 p-12 opacity-[0.02] hover:opacity-[0.08] transition-opacity cursor-pointer"
          >
            <Youtube size={240} />
          </a>
          <h4 className="text-3xl font-display font-bold mb-4">Ingin melihat lebih banyak?</h4>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Ikuti perjalanan kreatif kami di media sosial untuk update harian dan konten eksklusif.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.youtube.com/@vistamediaibrahimy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-500 transition-all shadow-indigo"
            >
              <Youtube />
              Subscribe YouTube
            </a>
            <a
              href="https://www.instagram.com/vistamediaibrahimy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              <Instagram />
              Follow Instagram
            </a>
            <a
              href="https://www.tiktok.com/@vistamediaibrahimy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              <TikTokIcon size={20} />
              Follow TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
