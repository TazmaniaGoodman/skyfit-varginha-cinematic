import { useEffect, useState } from "react";
import { skyfitConfig } from "@/lib/skyfit-config";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#050505]/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#inicio" className="display text-sm tracking-[0.2em] md:text-base">
          SKY<span className="text-electric">FIT</span>{" "}
          <span className="text-steel font-normal">VARGINHA</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-steel relative text-[0.72rem] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-electric after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${skyfitConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="hidden text-[0.7rem] font-bold tracking-[0.2em] uppercase text-electric transition-opacity hover:opacity-70 md:block"
          >
            {skyfitConfig.phone}
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-white/15 lg:hidden"
          >
            <span
              className={`block h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display border-b border-white/5 py-4 text-xl"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
