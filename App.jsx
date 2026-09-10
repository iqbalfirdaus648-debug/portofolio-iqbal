import React, { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, BarChart3, Brain, Database, Menu, X } from "lucide-react";
import profilePhoto from "./assets/profile.png";

const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "projects", label: "Proyek" },
  { id: "skills", label: "Keahlian" },
  { id: "contact", label: "Kontak" },
];

const projects = [
  {
    title: "Sistem Monitoring & Forecasting Distributor Pertamina",
    org: "PT Duta Buana Perkasa",
    featured: true,
    description:
      "Sistem end-to-end: data warehouse PostgreSQL, model forecasting LSTM & SARIMAX untuk prediksi penjualan harian, model content-based filtering untuk rekomendasi produk, backend FastAPI, dan dashboard React real-time.",
    tags: ["PostgreSQL", "Python", "TensorFlow/Keras", "SARIMAX", "FastAPI", "React"],
  },
  {
    title: "Prediksi Produk Pelumas Terlaris",
    org: "Algoritma C4.5",
    featured: false,
    description:
      "Model klasifikasi decision tree (C4.5) untuk memprediksi produk pelumas dengan potensi penjualan tertinggi berdasarkan pola historis transaksi.",
    tags: ["Python", "scikit-learn", "Decision Tree"],
  },
  {
    title: "Analisis Data Transaksi & Dashboard Business Intelligence",
    org: "PT Duta Buana Perkasa, 2024",
    featured: false,
    description:
      "Analisis data transaksi penjualan dan perancangan dashboard business intelligence untuk mendukung pengambilan keputusan manajemen, dibangun dengan Google Looker Studio.",
    tags: ["Google Looker Studio", "SQL", "Data Visualization"],
  },
];

const skillGroups = [
  { label: "Data & Engineering", items: ["SQL", "PostgreSQL", "Python", "Pandas", "ETL"] },
  { label: "Machine Learning & Forecasting", items: ["scikit-learn", "TensorFlow / Keras", "LSTM", "SARIMAX", "Decision Tree"] },
  { label: "Backend & API", items: ["FastAPI", "REST API", "SQLAlchemy"] },
  { label: "Visualisasi & BI", items: ["React", "Recharts", "Google Looker Studio"] },
];

const services = [
  { icon: Database, title: "Data Engineering", desc: "Membersihkan dan menyusun data mentah jadi struktur database yang siap dianalisis." },
  { icon: Brain, title: "Machine Learning", desc: "Membangun model forecasting dan klasifikasi untuk kebutuhan prediksi bisnis." },
  { icon: BarChart3, title: "BI & Visualisasi", desc: "Merancang dashboard yang menerjemahkan data jadi keputusan yang jelas." },
];

export default function App() {
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="min-h-screen text-white font-body"
      style={{
        background: "linear-gradient(160deg, #120E2B 0%, #1B1140 55%, #1E1650 100%)",
      }}
    >
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#120E2B]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="font-display font-semibold tracking-wide text-sm">
              M. Iqbal
            </span>
          </button>

          <nav className="hidden sm:flex items-center gap-7 text-sm text-slate-300">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`transition-colors relative py-1 ${
                  activeId === id ? "text-cyan-400" : "hover:text-cyan-400"
                }`}
              >
                {label}
                {activeId === id && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-cyan-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3 text-slate-400">
            <a href="https://github.com/iqbalfirdaus648-debug" target="_blank" rel="noreferrer" className="hover:text-cyan-400" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/mohamad-iqbal" target="_blank" rel="noreferrer" className="hover:text-cyan-400" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="mailto:iqbalfirdaus648@gmail.com" className="hover:text-cyan-400" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>

          <button
            className="sm:hidden text-slate-300"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="sm:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm text-slate-300 bg-[#120E2B]/95">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`text-left transition-colors ${
                  activeId === id ? "text-cyan-400" : "hover:text-cyan-400"
                }`}
              >
                {label}
              </button>
            ))}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <a href="https://github.com/iqbalfirdaus648-debug" target="_blank" rel="noreferrer" className="hover:text-cyan-400" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/mohamad-iqbal" target="_blank" rel="noreferrer" className="hover:text-cyan-400" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:iqbalfirdaus648@gmail.com" className="hover:text-cyan-400" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-6 sm:px-10 pt-14 pb-20 grid sm:grid-cols-2 gap-10 items-center scroll-mt-20">
        <div>
          <p className="text-sm text-cyan-400 mb-4">Untuk keputusan berbasis data</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight">
            Data Analyst
            <br />
            &amp; AI Engineer
            <br />
            <span className="text-cyan-400">Portfolio</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-md leading-relaxed">
            Mohammad Iqbal Firdaus — membangun sistem data end-to-end, dari
            data mentah, model prediksi, sampai dashboard yang siap dipakai
            untuk mengambil keputusan bisnis.
          </p>
          <button
            onClick={() => handleNavClick("about")}
            className="inline-flex items-center gap-2 mt-8 text-sm text-cyan-400 border-l-2 border-cyan-400 pl-3 py-1 hover:text-white hover:border-white transition-colors"
          >
            Selengkapnya tentang saya
          </button>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl bg-cyan-400/10 blur-2xl" />
          <img
            src={profilePhoto}
            alt="Mohammad Iqbal Firdaus"
            className="relative rounded-2xl w-full max-w-sm mx-auto object-cover border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="about" className="max-w-6xl mx-auto px-6 sm:px-10 py-16 border-t border-white/10 scroll-mt-20">
        <p className="text-sm text-cyan-400 mb-2">Layanan</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10">
          Apa yang Saya Kerjakan
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4">
                <Icon size={18} className="text-cyan-400" />
              </div>
              <h3 className="font-medium mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 sm:px-10 py-16 border-t border-white/10 scroll-mt-20">
        <p className="text-sm text-cyan-400 mb-2">Portofolio</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10">
          Proyek Pilihan
        </h2>
        <div className="space-y-8">
          {projects.map((p) => (
            <article key={p.title} className="border-l border-white/10 pl-4 sm:pl-6 pb-2">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-lg font-medium text-white">{p.title}</h3>
                {p.featured && (
                  <span className="text-xs text-cyan-400 border border-cyan-400/40 rounded px-1.5 py-0.5">
                    Proyek Utama
                  </span>
                )}
              </div>
              <p className="text-sm text-cyan-400/80 mt-0.5">{p.org}</p>
              <p className="text-slate-400 leading-relaxed mt-3 text-[15px]">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 sm:px-10 py-16 border-t border-white/10 scroll-mt-20">
        <p className="text-sm text-cyan-400 mb-2">Perangkat</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10">Keahlian</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm text-slate-400 mb-3">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-sm text-slate-200 border border-white/15 rounded px-2.5 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 sm:px-10 py-16 border-t border-white/10 scroll-mt-20">
        <p className="text-sm text-cyan-400 mb-2">Hubungi Saya</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Mari Bekerja Sama</h2>
        <p className="text-slate-400 max-w-md mb-6">
          Terbuka untuk peluang sebagai Data Analyst, Data Scientist, atau AI Engineer.
        </p>
        <a
          href="mailto:iqbalfirdaus648@gmail.com"
          className="inline-flex items-center gap-2 text-cyan-400 border border-cyan-400/40 rounded px-4 py-2 hover:bg-cyan-400/10 transition-colors"
        >
          <Mail size={15} />
          iqbalfirdaus648@gmail.com
        </a>
      </footer>
    </div>
  );
}
