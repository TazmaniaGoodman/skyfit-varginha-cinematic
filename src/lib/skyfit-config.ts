import photo01 from "@/assets/image.png.asset.json";
import photo02 from "@/assets/image-2.png.asset.json";
import photo03 from "@/assets/image-3.png.asset.json";
import photo04 from "@/assets/image-4.png.asset.json";

export const skyfitConfig = {
  name: "SKYFIT Varginha",
  city: "Varginha — MG",
  address:
    "Av. Princesa do Sul, 393, Jardim Andere, Varginha — MG, CEP 37026-085",
  phone: "(35) 99974-0109",
  whatsapp: "5535999740109",
  instagram: "@skyfitvarginha",
  instagramUrl: "https://instagram.com/skyfitvarginha",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Princesa+do+Sul,+393,+Jardim+Andere,+Varginha+MG",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Princesa+do+Sul,+393,+Jardim+Andere,+Varginha+MG&output=embed",
  rating: "4,8/5",
  reviews: 158,
  area: "2.800+ m²",
  modalitiesCount: "11+",
  hours: "até 23:00",
  parking: "Estacionamento incluso",
  modalities: [
    { name: "Musculação", desc: "Sala ampla com equipamentos de força e máquinas guiadas." },
    { name: "Cardio", desc: "Esteiras, bikes e elípticos para condicionamento." },
    { name: "Treino Funcional", desc: "Área livre para trabalho de mobilidade e potência." },
    { name: "Aulas Coletivas", desc: "Sala dedicada com programação ao longo do dia." },
    { name: "Alongamento", desc: "Trabalho de amplitude e recuperação muscular." },
    { name: "Dança", desc: "Aulas coreografadas em ritmo alto." },
    { name: "Ritmos", desc: "Coletivas de alta energia com foco em gasto calórico." },
    { name: "Spinning", desc: "Ciclismo indoor com condução guiada." },
    { name: "Abdominal", desc: "Sessões curtas e intensas de core." },
    { name: "Treino de Força", desc: "Cargas livres, racks e plataformas." },
    { name: "Acompanhamento", desc: "Time técnico presente na sala de treino." },
  ],
  differentials: [
    { title: "ESTRUTURA", desc: "2.800+ m² distribuídos em dois pavimentos.", photo: photo03.url },
    { title: "PERFORMANCE", desc: "Equipamentos e áreas dedicadas a cada tipo de treino.", photo: photo02.url },
    { title: "CONFORTO", desc: "Ambiente climatizado e estacionamento incluso.", photo: photo04.url },
    { title: "EXPERIÊNCIA", desc: "Iluminação, som e atendimento de clube premium.", photo: photo01.url },
  ],
  images: [
    { src: photo01.url, label: "THE SPACE", alt: "Fachada iluminada da SKYFIT Varginha à noite" },
    { src: photo02.url, label: "TRAINING FLOOR", alt: "Alunas treinando em aula coletiva na SKYFIT" },
    { src: photo03.url, label: "INTERIOR", alt: "Área interna da academia com máquinas e iluminação" },
    { src: photo04.url, label: "RECEPTION", alt: "Recepção da SKYFIT Varginha com catracas" },
  ],
};

export type SkyfitConfig = typeof skyfitConfig;
