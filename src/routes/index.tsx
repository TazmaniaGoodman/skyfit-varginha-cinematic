import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/skyfit/Header";
import { Hero } from "@/components/skyfit/Hero";
import {
  Differentials,
  Experience,
  FinalCta,
  Footer,
  FullBleed,
  Gallery,
  Instagram,
  Location,
  Modalities,
  Numbers,
  SocialProof,
  Story,
} from "@/components/skyfit/Sections";

const title = "SKYFIT Varginha — Academia 2.800+ m² em Varginha MG";
const description =
  "Academia SKYFIT Varginha: 2.800+ m², 11+ modalidades, climatização, estacionamento incluso e aberto até 23:00. Av. Princesa do Sul, 393.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-[#050505]">
      <Header />
      <main>
        <Hero />
        <Numbers />
        <FullBleed />
        <Story />
        <Modalities />
        <Gallery />
        <Differentials />
        <Experience />
        <SocialProof />
        <Instagram />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
