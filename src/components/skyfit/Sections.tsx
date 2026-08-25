import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { skyfitConfig } from "@/lib/skyfit-config";
import { Arrow, Counter, Reveal } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

/* ---------------- NUMBERS ---------------- */
export function Numbers() {
  const items = [
    { node: <Counter to={2800} suffix="+" />, label: "M² de estrutura" },
    { node: <Counter to={11} suffix="+" />, label: "Modalidades" },
    { node: <Counter to={4.8} decimals={1} />, label: "Google" },
    { node: <>23:00</>, label: "Horário" },
  ];
  return (
    <section id="numeros" className="border-y border-white/10 bg-[#050505] py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow mb-14 flex items-center gap-4">
            <span className="h-px w-10 bg-electric" /> SKYFIT em números
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.08}>
              <div className="border-t border-white/15 pt-5">
                <div className="display text-[13vw] leading-[0.82] sm:text-[9vw] lg:text-[5.2vw]">
                  {it.node}
                </div>
                <p className="eyebrow mt-4">{it.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FULL BLEED ---------------- */
export function FullBleed() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const img = skyfitConfig.images[1];

  return (
    <section ref={ref} className="relative h-[85svh] min-h-[520px] w-full overflow-hidden">
      <motion.img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="absolute inset-0 h-[118%] w-full object-cover object-center"
        style={reduce ? undefined : { y }}
      />
      <div className="absolute inset-0 bg-[#050505]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-center px-5 md:px-10">
        <Reveal>
          <h2 className="text-[13vw] leading-[0.86] sm:text-[10vw] lg:text-[6.6vw]">
            Mais espaço.
            <br />
            Mais performance<span className="text-electric">.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
export function Story() {
  const img = skyfitConfig.images[2];
  const highlights = ["2.800+ m²", "Climatização", "Estacionamento", "Aulas coletivas"];
  return (
    <section id="estrutura" className="bg-[#050505] py-24 md:py-40">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-electric" /> A estrutura
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[11vw] leading-[0.86] sm:text-[8vw] lg:text-[4.6vw]">
              Um espaço
              <br />
              pensado para
              <br />
              evoluir<span className="text-electric">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-steel mt-8 max-w-md text-base leading-relaxed md:text-lg">
              Uma estrutura ampla, climatizada e pensada para transformar cada treino em uma
              experiência completa.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm tracking-wide">
                  <span className="h-1 w-1 rotate-45 bg-electric" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="group relative overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] lg:aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-[#050505]/15" />
            <div className="absolute bottom-0 left-0 flex items-center gap-4 bg-[#050505]/80 px-5 py-3 backdrop-blur-sm">
              <span className="display text-electric text-sm">03</span>
              <span className="eyebrow text-foreground">Interior</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- MODALITIES ---------------- */
export function Modalities() {
  const [active, setActive] = useState(0);
  const list = skyfitConfig.modalities;
  const imgs = skyfitConfig.images;

  return (
    <section id="modalidades" className="border-t border-white/10 bg-[#0A0A0A] py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[11vw] leading-[0.86] sm:text-[7vw] lg:text-[4.2vw]">
              Modalidades
            </h2>
            <p className="eyebrow">{skyfitConfig.modalitiesCount} opções de treino</p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {list.map((m, i) => (
              <div
                key={m.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
                role="button"
                aria-pressed={active === i}
                className={`group flex cursor-pointer items-baseline gap-6 border-b border-white/10 py-5 outline-none transition-colors duration-300 ${
                  active === i ? "text-foreground" : "text-steel"
                }`}
              >
                <span
                  className={`display text-xs transition-colors duration-300 ${active === i ? "text-electric" : "text-white/25"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3
                    className={`text-2xl transition-transform duration-500 md:text-4xl ${active === i ? "translate-x-2" : ""}`}
                  >
                    {m.name}
                  </h3>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ${active === i ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <p className="text-steel overflow-hidden pl-2 text-sm">{m.desc}</p>
                  </div>
                </div>
                <span
                  className={`h-px transition-all duration-500 ${active === i ? "w-10 bg-electric" : "w-0 bg-transparent"}`}
                />
              </div>
            ))}
          </div>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[3/4] overflow-hidden">
              {imgs.map((im, i) => (
                <motion.img
                  key={im.src}
                  src={im.src}
                  alt={im.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  animate={{ opacity: active % imgs.length === i ? 1 : 0, scale: active % imgs.length === i ? 1 : 1.06 }}
                  transition={{ duration: 0.9, ease }}
                />
              ))}
              <div className="absolute inset-0 bg-[#050505]/25" />
              <div className="absolute right-0 bottom-0 bg-electric px-4 py-2">
                <span className="display text-xs text-[#050505]">
                  {String(active + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
export function Gallery() {
  const [a, b, c, d] = skyfitConfig.images;
  const Item = ({
    img,
    index,
    className,
  }: {
    img: (typeof skyfitConfig.images)[number];
    index: number;
    className?: string;
  }) => (
    <div className={`group relative overflow-hidden ${className ?? ""}`}>
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-[#050505]/25 transition-colors duration-500 group-hover:bg-[#050505]/45" />
      <div className="absolute bottom-4 left-4 flex items-center gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-2">
        <span className="display text-electric text-xs">{String(index).padStart(2, "0")}</span>
        <span className="eyebrow text-foreground">{img.label}</span>
      </div>
    </div>
  );

  return (
    <section className="bg-[#050505] py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow mb-12 flex items-center gap-4">
            <span className="h-px w-10 bg-electric" /> Galeria
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:grid-rows-[22vw_22vw]">
          <Reveal className="md:col-span-8 md:row-span-2">
            <Item img={a} index={1} className="h-[70vw] md:h-full" />
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-4">
            <Item img={c} index={3} className="h-[60vw] md:h-full" />
          </Reveal>
          <Reveal delay={0.14} className="md:col-span-4">
            <Item img={d} index={4} className="h-[80vw] md:h-full" />
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-12">
            <Item img={b} index={2} className="h-[70vw] md:h-[26vw]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DIFFERENTIALS ---------------- */
export function Differentials() {
  const [active, setActive] = useState(0);
  const items = skyfitConfig.differentials;
  return (
    <section id="diferenciais" className="border-y border-white/10 bg-[#0A0A0A] py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 lg:grid-cols-12">
        <Reveal className="hidden lg:col-span-5 lg:block">
          <div className="relative aspect-[4/5] overflow-hidden">
            {items.map((it, i) => (
              <motion.img
                key={it.title}
                src={it.photo}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.06 }}
                transition={{ duration: 0.9, ease }}
              />
            ))}
            <div className="absolute inset-0 bg-[#050505]/30" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="mb-12 text-[11vw] leading-[0.86] sm:text-[7vw] lg:text-[4.2vw]">
              Diferenciais
            </h2>
          </Reveal>
          {items.map((it, i) => (
            <div
              key={it.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              className="group border-t border-white/10 py-7 outline-none last:border-b"
            >
              <div className="flex items-baseline gap-6">
                <span
                  className={`display text-xs transition-colors ${active === i ? "text-electric" : "text-white/25"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`text-3xl transition-all duration-500 md:text-5xl ${
                    active === i ? "translate-x-2 text-foreground" : "text-steel"
                  }`}
                >
                  {it.title}
                </h3>
              </div>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                  active === i ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="text-steel overflow-hidden pl-12 text-sm md:text-base">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const img = skyfitConfig.images[1];
  const concepts = [
    { t: "PERFORMANCE", d: "Treino conduzido por estrutura e equipamento certos." },
    { t: "DISCIPLINA", d: "Aberto até 23:00 para caber na sua rotina." },
    { t: "RESULTADO", d: "Ambiente que sustenta constância no longo prazo." },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#050505] py-24 md:py-40">
      <motion.img
        src={img.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-[112%] w-full object-cover opacity-25"
        style={reduce ? undefined : { y }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/85 to-[#050505]" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <h2 className="max-w-4xl text-[11vw] leading-[0.86] sm:text-[8vw] lg:text-[5vw]">
            Feito para quem
            <br />
            leva treino a sério<span className="text-electric">.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {concepts.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="border-t border-white/15 pt-6">
                <span className="display text-electric text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-4xl md:text-5xl">{c.t}</h3>
                <p className="text-steel mt-4 text-sm leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOCIAL PROOF ---------------- */
export function SocialProof() {
  return (
    <section className="border-y border-white/10 bg-[#0A0A0A] py-24 md:py-32">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-10 px-5 md:flex-row md:items-end md:justify-between md:px-10">
        <Reveal>
          <div className="flex items-end gap-6">
            <span className="display text-[22vw] leading-[0.78] md:text-[10vw]">
              <Counter to={4.8} decimals={1} />
            </span>
            <span className="display text-steel mb-3 text-2xl">/ 5</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="md:text-right">
            <div className="mb-3 flex gap-1 md:justify-end" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-electric text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="display text-xl">4,8 estrelas no Google</p>
            <p className="eyebrow mt-3">
              <Counter to={skyfitConfig.reviews} /> avaliações
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- INSTAGRAM ---------------- */
export function Instagram() {
  const feed = [...skyfitConfig.images, ...skyfitConfig.images].slice(0, 6);
  return (
    <section className="bg-[#050505] py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[9vw] leading-[0.86] sm:text-[6vw] lg:text-[3.6vw]">
              {skyfitConfig.instagram}
            </h2>
            <a
              href={skyfitConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost group"
            >
              Ver no Instagram <Arrow />
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {feed.map((im, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <a
                href={skyfitConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden"
              >
                <img
                  src={im.src}
                  alt={im.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-[900ms] group-hover:scale-[1.05] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#050505]/40 transition-opacity duration-500 group-hover:opacity-0" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */
export function Location() {
  return (
    <section id="contato" className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        <div className="px-5 py-20 md:px-10 md:py-28">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-electric" /> Localização
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-[10vw] leading-[0.86] sm:text-[6vw] lg:text-[3.4vw]">
              SKYFIT Varginha
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <address className="mt-10 space-y-1 text-lg not-italic">
              <p>Av. Princesa do Sul, 393</p>
              <p>Jardim Andere</p>
              <p className="text-steel">Varginha — MG</p>
            </address>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={`tel:+${skyfitConfig.whatsapp}`}
              className="display text-electric mt-8 block text-3xl transition-opacity hover:opacity-70 md:text-4xl"
            >
              {skyfitConfig.phone}
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="eyebrow mt-8 flex items-center gap-3">
              <span className="h-1 w-1 rotate-45 bg-electric" /> Estacionamento incluso
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href={skyfitConfig.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-electric group mt-10"
            >
              Abrir no Maps <Arrow />
            </a>
          </Reveal>
        </div>
        <div className="relative min-h-[380px] border-t border-white/10 lg:border-t-0 lg:border-l">
          <iframe
            title="Mapa SKYFIT Varginha"
            src={skyfitConfig.mapsEmbed}
            loading="lazy"
            className="absolute inset-0 h-full w-full grayscale-[0.9] contrast-125 invert-[0.92] hue-rotate-180"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
export function FinalCta() {
  return (
    <section className="grain relative overflow-hidden bg-[#050505] py-32 md:py-48">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(35,110,255,0.22),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 text-center md:px-10">
        <Reveal>
          <h2 className="text-[14vw] leading-[0.84] sm:text-[10vw] lg:text-[7.5vw]">
            Pronto para
            <br />
            começar<span className="text-electric">?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-steel mx-auto mt-8 max-w-xl text-base leading-relaxed md:text-lg">
            Conheça a SKYFIT Varginha e encontre o ambiente certo para o seu próximo nível.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <a
            href={`https://wa.me/${skyfitConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-electric group mt-12 text-base"
          >
            Fale com a SKYFIT <Arrow className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Modalidades", href: "#modalidades" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-3">
        <div>
          <p className="display text-2xl">
            SKY<span className="text-electric">FIT</span> Varginha
          </p>
          <p className="eyebrow mt-4">{skyfitConfig.area} · {skyfitConfig.modalitiesCount} modalidades</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-steel text-sm tracking-widest uppercase transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="text-steel space-y-3 text-sm">
          <a
            href={skyfitConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="block transition-colors hover:text-electric"
          >
            {skyfitConfig.instagram}
          </a>
          <a href={`tel:+${skyfitConfig.whatsapp}`} className="block transition-colors hover:text-electric">
            {skyfitConfig.phone}
          </a>
          <p className="max-w-xs">{skyfitConfig.address}</p>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1600px] items-center justify-between border-t border-white/10 pt-6">
        <span className="eyebrow">SKYFIT Varginha</span>
        <span className="eyebrow">Varginha — MG</span>
      </div>
    </footer>
  );
}
