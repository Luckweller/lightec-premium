import { useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronRight, Mail, MapPin, Menu, Phone, Play, Sparkles, X } from "lucide-react";

const RU = {
  nav: ["Проекты", "Студия", "Экспертиза", "Контакты"],
  start: "Обсудить проект",
  badge: "Спортивный свет / Архитектура / Медиа-свет",
  hero: "Свет\nкак система",
  heroText:
    "LAITEC проектирует, поставляет и запускает точные световые системы для спортивных арен, общественных пространств и архитектурных объектов.",
  viewWork: "Смотреть проекты",
  showreel: "Видео проектов",
  philosophy: "Философия",
  philosophyTitle: "Инженерная точность и эмоциональный свет.",
  philosophyText1:
    "Мы позиционируем LAITEC не как поставщика светильников, а как инженерную световую студию: идея, расчёты, проект, оборудование, монтаж, управление, пусконаладка.",
  philosophyText2:
    "Сайт должен продавать доверие к сложным объектам: стадионы, арены, фасады, медиа-свет, динамические сценарии и телевизионные требования.",
  selected: "Избранные проекты",
  selectedTitle: "Объекты с присутствием.",
  allProjects: "Все проекты",
  expertise: "Экспертиза",
  expertiseTitle: "Одна система. Много уровней.",
  contact: "Контакты",
  contactTitle: "Давайте сделаем объект видимым.",
  phone: "Телефон",
  email: "Email",
  offices: "Офисы",
  officeText: "Санкт‑Петербург / Краснодар",
  footer: "© 2026 LAITEC. Светотехническое проектирование и реализация световых систем.",
};

const EN = {
  nav: ["Work", "Studio", "Expertise", "Contact"],
  start: "Start project",
  badge: "Sports / Architecture / Media light",
  hero: "Light\nas system",
  heroText:
    "LAITEC engineers precise and reliable lighting environments for sports venues, public spaces and architectural objects.",
  viewWork: "View work",
  showreel: "Showreel",
  philosophy: "Studio philosophy",
  philosophyTitle: "Engineering precision with emotional light.",
  philosophyText1:
    "LAITEC is not just a lighting supplier. It is an engineering lighting studio: concept, calculations, documentation, equipment, installation, control and commissioning.",
  philosophyText2:
    "The website should sell trust in complex projects: stadiums, arenas, facades, media light, dynamic scenarios and television-ready requirements.",
  selected: "Selected work",
  selectedTitle: "Projects with presence.",
  allProjects: "All projects",
  expertise: "Expertise",
  expertiseTitle: "One system. Many layers.",
  contact: "Contact",
  contactTitle: "Let’s make the object visible.",
  phone: "Phone",
  email: "Email",
  offices: "Offices",
  officeText: "Saint Petersburg / Krasnodar",
  footer: "© 2026 LAITEC. Lighting engineering and implementation.",
};

const projectImages = {
  lukoil: "/projects/lukoil-arena.jpg",
  krasnodar: "/projects/stadium-krasnodar.jpg",
  gazprom: "/projects/gazprom-arena.jpg",
  hollywood: "/projects/trk-hollywood.jpg",
  avangard: "/projects/avangard-show-lighting.jpg",
};

const projectData = [
  {
    slug: "lukoil-arena",
    title: { ru: "Лукойл Арена", en: "Lukoil Arena" },
    location: { ru: "Москва", en: "Moscow" },
    category: {
      ru: "Спортивное освещение / прожекторное оборудование",
      en: "Sports lighting / floodlight equipment",
    },
    year: "2014",
    image: projectImages.lukoil,
    pdfPage: 9,
  },
  {
    slug: "stadium-krasnodar",
    title: { ru: "Стадион Краснодар", en: "Stadium Krasnodar" },
    location: { ru: "Краснодар", en: "Krasnodar" },
    category: { ru: "Наружное и фасадное освещение", en: "Facade and outdoor lighting" },
    year: "2016",
    image: projectImages.krasnodar,
    pdfPage: 10,
  },
  {
    slug: "gazprom-arena",
    title: { ru: "Газпром Арена", en: "Gazprom Arena" },
    location: { ru: "Санкт‑Петербург", en: "Saint Petersburg" },
    category: {
      ru: "Спортивное и архитектурное освещение",
      en: "Sports and architectural lighting",
    },
    year: "2018",
    image: projectImages.gazprom,
    pdfPage: 12,
  },
  {
    slug: "trk-hollywood",
    title: { ru: "ТРК Hollywood", en: "TRK Hollywood" },
    location: { ru: "Санкт‑Петербург", en: "Saint Petersburg" },
    category: {
      ru: "Динамическое архитектурное освещение",
      en: "Dynamic architectural lighting",
    },
    year: "2025",
    image: projectImages.hollywood,
    pdfPage: 27,
  },
  {
    slug: "avangard",
    title: { ru: "Школа олимпийского резерва «Авангард»", en: "Avangard Olympic Reserve School" },
    location: { ru: "ЯНАО", en: "Yamal-Nenets AO" },
    category: { ru: "Шоу-освещение спортивного комплекса", en: "Dynamic LED show lighting" },
    year: "2024",
    image: projectImages.avangard,
    pdfPage: 34,
  },
];

const expertiseData = [
  ["01", { ru: "Спортивное ядро", en: "Sports core" }, { ru: "Стадионы, арены, тренировочные поля и телевизионные световые сцены.", en: "Stadiums, arenas, training fields and television-ready lighting scenes." }],
  ["02", { ru: "Общественные зоны", en: "Public areas" }, { ru: "Трибуны, входные группы, зрительские зоны и безопасное движение.", en: "Concourses, entrances, spectator zones and safe movement scenarios." }],
  ["03", { ru: "Архитектурная оболочка", en: "Architectural skin" }, { ru: "Фасадная подсветка, динамические эффекты и медиа-свет.", en: "Facade lighting, dynamic effects and media-light identity." }],
  ["04", { ru: "Системы управления", en: "Control systems" }, { ru: "DMX, DALI, Art-Net, шоу-режимы и централизованная логика управления.", en: "DMX, DALI, Art-Net, show modes and centralised lighting logic." }],
];

const services = {
  ru: ["Световая концепция", "Расчёты освещённости", "Визуализация", "Рабочая документация", "Поставка оборудования", "Монтаж и пусконаладка"],
  en: ["Lighting concept", "Lighting calculations", "Visualisation", "Working documentation", "Equipment supply", "Installation & commissioning"],
};

function PremiumButton({ children, dark = false, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex items-center gap-4 rounded-full px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] transition ${
        dark ? "bg-black text-white hover:bg-neutral-800" : "bg-white text-black hover:bg-[#d7ff4f]"
      }`}
    >
      {children}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-black/10 transition group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
        <ArrowUpRight size={16} />
      </span>
    </motion.button>
  );
}

function ProjectModal({ project, lang, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] text-white"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      <button
        onClick={onClose}
        className="fixed right-5 top-5 z-[120] grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-black/40 backdrop-blur-xl transition hover:border-[#d7ff4f] hover:text-[#d7ff4f]"
      >
        <X size={20} />
      </button>

      <section className="relative min-h-screen overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title[lang]}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(215,255,79,.18),transparent_26%),linear-gradient(90deg,rgba(0,0,0,.92),rgba(0,0,0,.28),rgba(0,0,0,.78))]" />
        <div className="relative z-10 flex min-h-screen items-end px-5 pb-12 md:px-10 md:pb-16">
          <div className="max-w-7xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-[#d7ff4f]">{project.year} / {project.location[lang]}</p>
            <h1 className="max-w-6xl text-[18vw] font-extralight uppercase leading-[0.78] tracking-[-0.12em] md:text-[11vw]">
              {project.title[lang]}
            </h1>
            <div className="mt-8 grid max-w-5xl gap-6 border-t border-white/15 pt-8 md:grid-cols-[1fr_.7fr]">
              <p className="text-xl leading-9 text-white/68">{project.category[lang]}</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                  <p className="text-3xl font-light">01</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/40">Concept</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                  <p className="text-3xl font-light">02</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/40">Supply</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                  <p className="text-3xl font-light">03</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/40">Launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default function LaitecPremiumPreview() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0.45]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [lang, setLang] = useState("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const t = lang === "ru" ? RU : EN;
  const heroImage = useMemo(() => projectImages.gazprom, []);
  const navHref = ["#work", "#studio", "#expertise", "#contact"];

  return (
    <div
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-[#f7f4ee] selection:bg-[#d7ff4f] selection:text-black"
    >
      <motion.div
        animate={{ x: cursor.x - 210, y: cursor.y - 210 }}
        transition={{ type: "spring", damping: 28, stiffness: 130, mass: 0.35 }}
        className="pointer-events-none fixed z-[120] hidden h-[420px] w-[420px] rounded-full bg-[#d7ff4f]/[0.14] blur-3xl mix-blend-screen lg:block"
      />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.055]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl"
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">
          <a href="#" className="flex items-end gap-4">
            <span className="text-[26px] font-light tracking-[0.34em]">LAITEC</span>
            <span className="mb-1 hidden text-[9px] uppercase tracking-[0.3em] text-white/40 md:block">lighting engineering studio</span>
          </a>

          <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.24em] text-white/55 lg:flex">
            {t.nav.map((item, i) => (
              <motion.a
                key={item}
                href={navHref[i]}
                whileHover={{ y: -2 }}
                className="relative overflow-hidden hover:text-white"
              >
                <span className="relative z-10">{item}</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35 }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-[#d7ff4f]"
                />
              </motion.a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setLang(lang === "ru" ? "en" : "ru")}
              className="rounded-full border border-white/15 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/70 transition hover:border-[#d7ff4f] hover:text-[#d7ff4f]"
            >
              {lang === "ru" ? "EN" : "RU"}
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/70 transition hover:border-[#d7ff4f] hover:text-[#d7ff4f]">
              {t.start}
            </button>
          </div>

          <button onClick={() => setMenuOpen(true)} className="lg:hidden">
            <Menu />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] overflow-hidden bg-black/95 p-6 lg:hidden"
          >
            <motion.div
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(215,255,79,.18),transparent_28%),linear-gradient(135deg,#050505,#111_55%,#1d2409)]"
            />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xl tracking-[0.3em]">LAITEC</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.04]"
              >
                <X />
              </button>
            </div>

            <div className="relative z-10 mt-16 grid gap-7 text-4xl font-extralight tracking-[-0.06em]">
              {t.nav.map((item, i) => (
                <motion.a
                  key={item}
                  href={navHref[i]}
                  onClick={() => setMenuOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-white/10 pb-5"
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                onClick={() => setLang(lang === "ru" ? "en" : "ru")}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.38 }}
                className="mt-8 w-fit rounded-full border border-[#d7ff4f]/40 bg-[#d7ff4f]/10 px-5 py-3 text-sm uppercase tracking-[0.22em] text-[#d7ff4f]"
              >
                {lang === "ru" ? "English" : "Русский"}
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">LAITEC</p>
              <p className="mt-3 text-lg leading-7 text-white/70">
                {lang === "ru" ? "Инженерный свет для спортивных и архитектурных объектов." : "Engineered light for sports and architectural projects."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed left-0 top-0 z-[90] h-px w-full bg-white/10">
        <motion.div
          style={{ scaleX: useTransform(scrollY, [0, 4200], [0, 1]) }}
          className="h-full origin-left bg-[#d7ff4f]"
        />
      </div>

      <main className="relative z-10">
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(215,255,79,.12),transparent_22%),radial-gradient(circle_at_80%_40%,rgba(215,255,79,.08),transparent_24%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,.04),transparent_18%)]" />
        </motion.div>
        <section className="relative min-h-screen overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-[0.035] mix-blend-screen">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,white,transparent_20%),radial-gradient(circle_at_80%_40%,white,transparent_20%),radial-gradient(circle_at_50%_80%,white,transparent_20%)]" />
          </div>
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(215,255,79,.28),transparent_28%),linear-gradient(135deg,#111,#050505_45%,#1d2409)]" />
            <img src={heroImage} alt="LAITEC project" className="relative h-full w-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(215,255,79,0.16),transparent_24%),linear-gradient(90deg,rgba(0,0,0,.94),rgba(0,0,0,.34),rgba(0,0,0,.88))]" />
            <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050505] to-transparent" />
          </motion.div>

          <motion.div
            style={{ y: useTransform(scrollY, [0, 800], [0, 180]) }}
            className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1600px] flex-col justify-end px-5 pb-10 md:px-10 md:pb-16"
          >
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="max-w-7xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-white/60 backdrop-blur-xl">
                <Sparkles size={14} className="text-[#d7ff4f]" /> {t.badge}
              </div>
              <h1 className="max-w-6xl whitespace-pre-line text-[18vw] font-extralight uppercase leading-[0.76] tracking-[-0.12em] sm:text-[15vw] lg:text-[11vw]">{t.hero}</h1>
              <div className="mt-10 grid max-w-5xl gap-8 border-t border-white/15 pt-8 md:grid-cols-[1.2fr_.8fr]">
                <p className="max-w-2xl text-lg leading-8 text-white/68 md:text-xl">{t.heroText}</p>
                <div className="flex flex-wrap items-start gap-4 md:justify-end">
                  <PremiumButton>{t.viewWork}</PremiumButton>
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-4 rounded-full border border-white/18 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white/75 transition hover:border-white/40 hover:text-white"
                  >
                    <Play size={16} /> {t.showreel}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="studio" className="mx-auto grid max-w-[1600px] gap-16 px-5 py-28 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-40">
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#d7ff4f]">{t.philosophy}</p>
            <h2 className="text-5xl font-extralight leading-[0.95] tracking-[-0.07em] md:text-7xl lg:text-8xl">{t.philosophyTitle}</h2>
          </div>
          <div className="grid content-end gap-8 text-xl leading-9 text-white/60">
            <p>{t.philosophyText1}</p>
            <p>{t.philosophyText2}</p>
          </div>
        </section>

        <section id="work" className="relative bg-[#050505] text-white">
          <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 lg:py-32">
            <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#d7ff4f]">{t.selected}</p>
                <h2 className="max-w-4xl text-5xl font-extralight leading-[0.9] tracking-[-0.08em] md:text-8xl">{t.selectedTitle}</h2>
              </div>
              <PremiumButton>{t.allProjects}</PremiumButton>
            </div>
          </div>

          <div className="relative">
            {projectData.map((project, index) => (
              <motion.article
                whileHover={{ scale: 1 }}
                whileHover={{ scale: 1 }}
                key={project.slug}
                onClick={() => setActiveProject(project)}
                className={`group ${index === projectData.length - 1 ? "relative" : "sticky top-0"} flex min-h-screen cursor-pointer items-end overflow-hidden border-t border-white/10 bg-black will-change-transform`}
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.45 }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(215,255,79,.22),transparent_28%),linear-gradient(135deg,#111,#050505_50%,#1d2409)]" />
                <motion.img
                  src={project.image}
                  alt={project.title[lang]}
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-1000 group-hover:scale-105 group-hover:opacity-75 [transform:translateZ(0)] [backface-visibility:hidden]"
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(215,255,79,.13),transparent_23%),linear-gradient(90deg,rgba(0,0,0,.94),rgba(0,0,0,.35),rgba(0,0,0,.82))]" />
                <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:120px_120px]" />

                <div className="relative z-10 mx-auto grid w-full max-w-[1600px] gap-10 px-5 pb-12 md:px-10 md:pb-16 lg:grid-cols-[0.55fr_1fr] lg:items-end">
                  <div className="hidden lg:block">
                    <p className="text-[13vw] font-extralight leading-none tracking-[-0.13em] text-white/10">0{index + 1}</p>
                  </div>

                  <div>
                    <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-white/55">
                      <span className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">{project.year}</span>
                      <span className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">{project.location[lang]}</span>
                      <span className="rounded-full border border-[#d7ff4f]/30 bg-[#d7ff4f]/10 px-4 py-2 text-[#d7ff4f] backdrop-blur-xl">Case study</span>
                    </div>

                    <motion.h3
                      className="max-w-6xl text-[15vw] font-extralight uppercase leading-[0.76] tracking-[-0.13em] md:text-[10vw] lg:text-[7vw] [transform:translateZ(0)] [backface-visibility:hidden]"
                      initial={{ y: 70, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ amount: 0.55 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {project.title[lang]}
                    </motion.h3>

                    <div className="mt-8 grid max-w-5xl gap-7 border-t border-white/15 pt-7 md:grid-cols-[1fr_auto] md:items-end">
                      <p className="max-w-2xl text-lg leading-8 text-white/62 md:text-xl">{project.category[lang]}</p>
                      <span className="inline-flex w-fit items-center gap-4 rounded-full bg-white px-6 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition group-hover:bg-[#d7ff4f]">
                        {lang === "ru" ? "Открыть кейс" : "Open case"}
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-32">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d7ff4f]/[0.05] blur-3xl"
          />

          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <div className="grid gap-12 md:grid-cols-3">
              {["120+", "15", "24/7"].map((num, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.12 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
                >
                  <p className="text-7xl font-extralight tracking-[-0.08em] text-[#d7ff4f]">{num}</p>
                  <p className="mt-5 text-sm uppercase tracking-[0.24em] text-white/45">
                    {i === 0 && (lang === "ru" ? "реализованных систем" : "implemented systems")}
                    {i === 1 && (lang === "ru" ? "лет опыта" : "years experience")}
                    {i === 2 && (lang === "ru" ? "инженерная поддержка" : "engineering support")}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 lg:py-40">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#d7ff4f]">{t.expertise}</p>
              <h2 className="text-5xl font-extralight leading-[0.95] tracking-[-0.07em] md:text-7xl">{t.expertiseTitle}</h2>
            </div>
            <div className="border-t border-white/12">
              {expertiseData.map(([num, title, text]) => (
                <div key={num} className="group grid gap-6 border-b border-white/12 py-10 md:grid-cols-[100px_1fr_1.4fr_40px] md:items-center">
                  <span className="text-sm text-white/35">{num}</span>
                  <h3 className="text-3xl font-light tracking-[-0.04em] transition group-hover:text-[#d7ff4f]">{title[lang]}</h3>
                  <p className="text-lg leading-8 text-white/55">{text[lang]}</p>
                  <ChevronRight className="hidden text-white/25 transition group-hover:translate-x-1 group-hover:text-[#d7ff4f] md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 lg:py-40">
          <div className="mb-14 text-[11px] uppercase tracking-[0.3em] text-white/35">{lang === "ru" ? "Услуги" : "Services"}</div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services[lang].map((service) => (
              <div key={service} className="group min-h-52 bg-[#0b0b0b] p-8 transition hover:bg-[#111]">
                <div className="mb-16 flex justify-between text-white/30">
                  <span className="text-[11px] uppercase tracking-[0.22em]">LAITEC</span>
                  <ArrowUpRight size={18} className="transition group-hover:text-[#d7ff4f]" />
                </div>
                <h3 className="text-3xl font-light tracking-[-0.05em] group-hover:text-[#d7ff4f]">{service}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#080808] px-5 py-28 text-white md:px-10 lg:py-40">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute left-[-15%] top-1/2 h-[1000px] w-[1000px] -translate-y-1/2 rounded-full border border-white/[0.03]"
          />
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:90px_90px]" />
          <div className="absolute right-[-20%] top-[-20%] h-[700px] w-[700px] rounded-full bg-[#d7ff4f]/[0.06] blur-3xl" />

          <div className="relative mx-auto max-w-[1600px]">
            <div className="mb-16 max-w-4xl">
              <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#d7ff4f]">
                {lang === "ru" ? "Метод" : "Method"}
              </p>
              <h2 className="text-5xl font-extralight leading-[0.9] tracking-[-0.08em] md:text-8xl">
                {lang === "ru" ? "От идеи до запуска света." : "From concept to light launch."}
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-4">
              {[
                ["01", lang === "ru" ? "Аудит" : "Audit", lang === "ru" ? "Задачи объекта, нормы, ТВ-требования и сценарии использования." : "Object goals, standards, broadcast requirements and use scenarios."],
                ["02", lang === "ru" ? "Проект" : "Design", lang === "ru" ? "Световые расчёты, спецификации, визуализация и рабочая документация." : "Lighting calculations, specifications, visualisation and working documentation."],
                ["03", lang === "ru" ? "Поставка" : "Supply", lang === "ru" ? "Подбор оборудования, логистика, контроль совместимости систем." : "Equipment selection, logistics and system compatibility control."],
                ["04", lang === "ru" ? "Пуск" : "Launch", lang === "ru" ? "Монтаж, настройка управления, тесты и ввод в эксплуатацию." : "Installation, control setup, testing and commissioning."],
              ].map(([num, title, text], i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="group min-h-[320px] bg-[#0d0d0d] p-8 transition hover:bg-[#111]"
                >
                  <div className="mb-20 flex items-center justify-between">
                    <span className="text-sm text-[#d7ff4f]">{num}</span>
                    <span className="h-2 w-2 rounded-full bg-white/20 transition group-hover:bg-[#d7ff4f]" />
                  </div>
                  <h3 className="text-4xl font-light tracking-[-0.06em]">{title}</h3>
                  <p className="mt-6 text-lg leading-8 text-white/50">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-black px-5 py-32 text-white md:px-10 lg:py-44">
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:120px_120px]" />
          <motion.div
            animate={{ opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="h-full w-full bg-[radial-gradient(circle_at_70%_30%,rgba(215,255,79,.18),transparent_26%),radial-gradient(circle_at_20%_80%,rgba(215,255,79,.08),transparent_24%)]" />
          </motion.div>

          <div className="relative mx-auto grid max-w-[1600px] gap-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#d7ff4f]">
                {lang === "ru" ? "Технологии" : "Technology"}
              </p>

              <h2 className="max-w-4xl text-5xl font-extralight leading-[0.9] tracking-[-0.08em] md:text-8xl">
                {lang === "ru" ? "Системы управления и медиа-свет." : "Control systems and media light."}
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
              {[
                ["DMX", "Dynamic show control and сценическое управление"],
                ["DALI", "Architectural lighting automation systems"],
                ["Art-Net", "Media lighting and pixel mapping infrastructure"],
                ["Broadcast", "TV-ready sports lighting environments"],
              ].map(([title, text], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="group bg-[#0c0c0c] p-10 transition hover:bg-[#111]"
                >
                  <div className="mb-14 flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/45">
                      protocol
                    </span>
                    <ArrowUpRight className="text-white/20 transition group-hover:text-[#d7ff4f]" />
                  </div>

                  <h3 className="text-5xl font-extralight tracking-[-0.08em] text-[#d7ff4f]">
                    {title}
                  </h3>

                  <p className="mt-6 max-w-sm text-lg leading-8 text-white/50">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#d7ff4f] text-black">
          <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-[1.1fr_.9fr] lg:py-36">
            <div>
              <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-black/50">{t.contact}</p>
              <h2 className="max-w-4xl text-6xl font-extralight leading-[0.86] tracking-[-0.09em] md:text-8xl lg:text-9xl">{t.contactTitle}</h2>
            </div>
            <div className="grid content-end gap-4">
              <div className="rounded-[2rem] bg-black p-8 text-white"><Phone className="mb-8 text-[#d7ff4f]" /><p className="text-sm uppercase tracking-[0.22em] text-white/40">{t.phone}</p><p className="mt-3 text-2xl font-light">+7 (812) 407‑28‑16</p></div>
              <div className="rounded-[2rem] bg-black p-8 text-white"><Mail className="mb-8 text-[#d7ff4f]" /><p className="text-sm uppercase tracking-[0.22em] text-white/40">{t.email}</p><p className="mt-3 text-2xl font-light">info@laitec.ru</p></div>
              <div className="rounded-[2rem] bg-black p-8 text-white"><MapPin className="mb-8 text-[#d7ff4f]" /><p className="text-sm uppercase tracking-[0.22em] text-white/40">{t.offices}</p><p className="mt-3 text-2xl font-light">{t.officeText}</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-white/10 px-5 py-20 text-center text-sm text-white/35">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {t.footer}
        </motion.p>
      </footer>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} lang={lang} onClose={() => setActiveProject(null)} />}
      </AnimatePresence></div>
    );
}
