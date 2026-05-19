import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Mail, MapPin, Menu, Phone, Play, Sparkles, X } from "lucide-react";

const RU = {
  nav: ["Проекты", "Студия", "Экспертиза", "Контакты"],
  start: "Обсудить проект",
  badge: "Спортивный свет / Архитектура / Медиа-свет",
  hero: "Свет\nкак система",
  heroText: "LAITEC проектирует, поставляет и запускает точные световые системы для спортивных арен, общественных пространств и архитектурных объектов.",
  viewWork: "Смотреть проекты",
  showreel: "Видео проектов",
  philosophy: "Философия",
  philosophyTitle: "Инженерная точность и эмоциональный свет.",
  philosophyText1: "Мы позиционируем LAITEC не как поставщика светильников, а как инженерную световую студию: идея, расчёты, проект, оборудование, монтаж, управление, пусконаладка.",
  philosophyText2: "Сайт должен продавать доверие к сложным объектам: стадионы, арены, фасады, медиа-свет, динамические сценарии и телевизионные требования.",
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
  footer: "© 2026 LAITEC. Светотехническое проектирование и реализация световых систем."
};

const EN = {
  nav: ["Work", "Studio", "Expertise", "Contact"],
  start: "Start project",
  badge: "Sports / Architecture / Media light",
  hero: "Light\nas system",
  heroText: "LAITEC engineers precise and reliable lighting environments for sports venues, public spaces and architectural objects.",
  viewWork: "View work",
  showreel: "Showreel",
  philosophy: "Studio philosophy",
  philosophyTitle: "Engineering precision with emotional light.",
  philosophyText1: "LAITEC is not just a lighting supplier. It is an engineering lighting studio: concept, calculations, documentation, equipment, installation, control and commissioning.",
  philosophyText2: "The website should sell trust in complex projects: stadiums, arenas, facades, media light, dynamic scenarios and television-ready requirements.",
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
  footer: "© 2026 LAITEC. Lighting engineering and implementation."
};

const projectImages = {
  lukoil: "/projects/lukoil-arena.jpg",
  krasnodar: "/projects/stadium-krasnodar.jpg",
  gazprom: "/projects/gazprom-arena.jpg",
  hollywood: "/projects/trk-hollywood.jpg",
  avangard: "/projects/avangard-show-lighting.jpg",
};

const projectData = [
  { title: { ru: "Лукойл Арена", en: "Lukoil Arena" }, location: { ru: "Москва", en: "Moscow" }, category: { ru: "Спортивное освещение / прожекторное оборудование", en: "Sports lighting / floodlight equipment" }, year: "2014", image: projectImages.lukoil, pdfPage: 9 },
  { title: { ru: "Стадион Краснодар", en: "Stadium Krasnodar" }, location: { ru: "Краснодар", en: "Krasnodar" }, category: { ru: "Наружное и фасадное освещение", en: "Facade and outdoor lighting" }, year: "2016", image: projectImages.krasnodar, pdfPage: 10 },
  { title: { ru: "Газпром Арена", en: "Gazprom Arena" }, location: { ru: "Санкт‑Петербург", en: "Saint Petersburg" }, category: { ru: "Спортивное и архитектурное освещение", en: "Sports and architectural lighting" }, year: "2018", image: projectImages.gazprom, pdfPage: 12 },
  { title: { ru: "ТРК Hollywood", en: "TRK Hollywood" }, location: { ru: "Санкт‑Петербург", en: "Saint Petersburg" }, category: { ru: "Динамическое архитектурное освещение", en: "Dynamic architectural lighting" }, year: "2025", image: projectImages.hollywood, pdfPage: 27 },
  { title: { ru: "Школа олимпийского резерва «Авангард»", en: "Avangard Olympic Reserve School" }, location: { ru: "ЯНАО", en: "Yamal-Nenets AO" }, category: { ru: "Шоу-освещение спортивного комплекса", en: "Dynamic LED show lighting" }, year: "2024", image: projectImages.avangard, pdfPage: 34 },
];

const expertiseData: [
  string,
  { ru: string; en: string },
  { ru: string; en: string }
][] = [
  ["01", { ru: "Спортивное ядро", en: "Sports core" }, { ru: "Стадионы, арены, тренировочные поля и телевизионные световые сцены.", en: "Stadiums, arenas, training fields and television-ready lighting scenes." }],
  ["02", { ru: "Общественные зоны", en: "Public areas" }, { ru: "Трибуны, входные группы, зрительские зоны и безопасное движение.", en: "Concourses, entrances, spectator zones and safe movement scenarios." }],
  ["03", { ru: "Архитектурная оболочка", en: "Architectural skin" }, { ru: "Фасадная подсветка, динамические эффекты и медиа-свет.", en: "Facade lighting, dynamic effects and media-light identity." }],
  ["04", { ru: "Системы управления", en: "Control systems" }, { ru: "DMX, DALI, Art-Net, шоу-режимы и централизованная логика управления.", en: "DMX, DALI, Art-Net, show modes and centralised lighting logic." }],
];

const services = {
  ru: ["Световая концепция", "Расчёты освещённости", "Визуализация", "Рабочая документация", "Поставка оборудования", "Монтаж и пусконаладка"],
  en: ["Lighting concept", "Lighting calculations", "Visualisation", "Working documentation", "Equipment supply", "Installation & commissioning"],
};

function PremiumButton({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <button className={`group inline-flex items-center gap-4 rounded-full px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] transition ${dark ? "bg-black text-white hover:bg-neutral-800" : "bg-white text-black hover:bg-[#d7ff4f]"}`}>
      {children}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-black/10 transition group-hover:translate-x-1 group-hover:bg-black group-hover:text-white">
        <ArrowUpRight size={16} />
      </span>
    </button>
  );
}

export default function LaitecUltraPremium() {
  const [lang, setLang] = useState<"ru" | "en">("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = lang === "ru" ? RU : EN;
  const heroImage = useMemo(() => projectImages.gazprom, []);
  const navHref = ["#work", "#studio", "#expertise", "#contact"];

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-[#f7f4ee] selection:bg-[#d7ff4f] selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.055]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">
          <a href="#" className="flex items-end gap-4">
            <span className="text-[26px] font-light tracking-[0.34em]">LAITEC</span>
            <span className="mb-1 hidden text-[9px] uppercase tracking-[0.3em] text-white/40 md:block">lighting engineering studio</span>
          </a>

          <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.24em] text-white/55 lg:flex">
            {t.nav.map((item, i) => <a key={item} className="hover:text-white" href={navHref[i]}>{item}</a>)}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={() => setLang(lang === "ru" ? "en" : "ru")} className="rounded-full border border-white/15 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white/70 transition hover:border-[#d7ff4f] hover:text-[#d7ff4f]">
              {lang === "ru" ? "EN" : "RU"}
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/70 transition hover:border-[#d7ff4f] hover:text-[#d7ff4f]">
              {t.start}
            </button>
          </div>

          <button onClick={() => setMenuOpen(true)} className="lg:hidden"><Menu /></button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[80] bg-black/95 p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xl tracking-[0.3em]">LAITEC</span>
            <button onClick={() => setMenuOpen(false)}><X /></button>
          </div>
          <div className="mt-16 grid gap-7 text-3xl font-light">
            {t.nav.map((item, i) => <a key={item} href={navHref[i]} onClick={() => setMenuOpen(false)}>{item}</a>)}
            <button onClick={() => setLang(lang === "ru" ? "en" : "ru")} className="mt-8 w-fit rounded-full border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.22em]">
              {lang === "ru" ? "English" : "Русский"}
            </button>
          </div>
        </div>
      )}

      <main className="relative z-10">
        <section className="relative min-h-screen overflow-hidden pt-20">
          <motion.div initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, ease: "easeOut" }} className="absolute inset-0">
            <img src={heroImage} alt="LAITEC project" className="h-full w-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(215,255,79,0.16),transparent_24%),linear-gradient(90deg,rgba(0,0,0,.94),rgba(0,0,0,.34),rgba(0,0,0,.88))]" />
            <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050505] to-transparent" />
          </motion.div>

          <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1600px] flex-col justify-end px-5 pb-10 md:px-10 md:pb-16">
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.2 }} className="max-w-7xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-white/60 backdrop-blur-xl">
                <Sparkles size={14} className="text-[#d7ff4f]" /> {t.badge}
              </div>
              <h1 className="max-w-6xl whitespace-pre-line text-[18vw] font-extralight uppercase leading-[0.76] tracking-[-0.12em] sm:text-[15vw] lg:text-[11vw]">{t.hero}</h1>
              <div className="mt-10 grid max-w-5xl gap-8 border-t border-white/15 pt-8 md:grid-cols-[1.2fr_.8fr]">
                <p className="max-w-2xl text-lg leading-8 text-white/68 md:text-xl">{t.heroText}</p>
                <div className="flex flex-wrap items-start gap-4 md:justify-end">
                  <PremiumButton>{t.viewWork}</PremiumButton>
                  <button className="group inline-flex items-center gap-4 rounded-full border border-white/18 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white/75 transition hover:border-white/40 hover:text-white">
                    <Play size={16} /> {t.showreel}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
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

        <section id="work" className="bg-[#f4f0e8] text-black">
          <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 lg:py-36">
            <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-black/45">{t.selected}</p>
                <h2 className="max-w-3xl text-5xl font-extralight leading-[0.95] tracking-[-0.07em] md:text-8xl">{t.selectedTitle}</h2>
              </div>
              <PremiumButton dark>{t.allProjects}</PremiumButton>
            </div>

            <div className="grid gap-4 lg:grid-cols-12">
              {projectData.map((project, index) => (
                <motion.article key={project.title.en} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: index * 0.08 }} className={`group relative min-h-[460px] overflow-hidden rounded-[2rem] bg-black ${index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5"}`}>
                  <img src={project.image} alt={project.title[lang]} className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105 group-hover:opacity-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between text-white/70">
                    <span className="text-[11px] uppercase tracking-[0.25em]">{project.year}</span>
                    <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.22em] backdrop-blur">{project.location[lang]}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="mb-4 max-w-md text-sm uppercase tracking-[0.22em] text-white/55">{project.category[lang]}</p>
                    <div className="flex items-end justify-between gap-6">
                      <h3 className="text-4xl font-light tracking-[-0.06em] md:text-6xl">{project.title[lang]}</h3>
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-black transition group-hover:bg-[#d7ff4f]"><ArrowUpRight /></span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-24 hidden rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/45 backdrop-blur md:block">
                    PDF page {project.pdfPage}
                  </div>
                </motion.article>
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

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/35">{t.footer}</footer>
    </div>
  );
}
