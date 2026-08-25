import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { skyfitConfig } from "@/lib/skyfit-config";
import { Arrow } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const hero = skyfitConfig.images[0];
  const lines = ["SEU PRÓXIMO", "NÍVEL COMEÇA", "AQUI."];

  return (
    <section
      id="inicio"
      ref={ref}
      className="grain relative flex h-[100svh] min-h-[620px] w-full items-end overflow-hidden bg-[#050505]"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imgY, scale: imgScale }}
      >
        <motion.img
          src={hero.src}
          alt={hero.alt}
          className="h-full w-full object-cover object-center"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.14, filter: "blur(18px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-[#050505]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_100%,rgba(5,5,5,0.95),transparent_60%)]" />

      {/* interface details */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute top-0 left-[18%] h-full w-px bg-white/5" />
        <div className="absolute top-0 right-[18%] h-full w-px bg-white/5" />
        <motion.div
          className="absolute top-1/2 left-10 h-24 w-px origin-top bg-gradient-to-b from-electric to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 1.1, ease }}
        />
      </div>

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-14 md:px-10 md:pb-20"
      >
        <motion.div
          className="mb-8 flex flex-wrap items-center gap-x-8 gap-y-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
        >
          {[skyfitConfig.city.toUpperCase(), "2.800+ M²", "11+ MODALIDADES"].map((t, i) => (
            <span key={t} className="eyebrow flex items-center gap-3">
              {i > 0 && <span className="h-px w-6 bg-electric/70" />}
              {t}
            </span>
          ))}
        </motion.div>

        <h1 className="text-[15vw] leading-[0.85] sm:text-[12vw] lg:text-[8.6vw]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.55 + i * 0.13, ease }}
              >
                {i === 2 ? (
                  <>
                    AQUI<span className="text-electric">.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease }}
        >
          <p className="text-steel max-w-md text-base leading-relaxed md:text-lg">
            Mais espaço. Mais possibilidades. Mais motivos para treinar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#estrutura" className="btn-ghost group">
              Conhecer a SKYFIT <Arrow />
            </a>
            <a
              href={`https://wa.me/${skyfitConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-electric group"
            >
              Quero ser aluno <Arrow />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#numeros"
        className="eyebrow absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={reduce ? undefined : { opacity: fade }}
      >
        Scroll to explore
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-electric"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
