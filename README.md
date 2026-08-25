# Skyfit Elevation

Crie uma landing page premium e cinematográfica para:

SKYFIT VARGINHA
Varginha — Minas Gerais

OBJETIVO
Criar uma experiência digital que pareça feita por uma agência premium especializada em marcas fitness.
O site deve:
ATRAIR → IMPRESSIONAR → GERAR DESEJO → CONVERTER.

NÃO criar aparência de template de academia, SaaS, dashboard, WordPress ou site genérico de IA.
Não usar excesso de cards, ícones genéricos, emojis ou gradientes aleatórios.

==================================================
DIREÇÃO VISUAL
==================================================

A identidade DEVE ser predominantemente:

DARK / PREMIUM / SPORT / TECH / BOLD / CINEMATIC

IMPORTANTE:
O FUNDO PRETO É PARTE ESSENCIAL DA IDENTIDADE.
NÃO usar fundo branco ou claro como base do site.

Usar:
- preto profundo #050505
- carvão #0A0A0A / #111111
- branco
- cinza metálico
- azul elétrico/Skyfit como destaque

O azul deve aparecer apenas estrategicamente:
CTAs, números, linhas, indicadores, hover e pequenos detalhes.

Visual inspirado em:
- luxury fitness clubs
- premium sports brands
- tecnologia premium
- editorial design
- campanhas publicitárias cinematográficas

Não copiar nenhum site existente.

==================================================
DADOS
==================================================

Criar um objeto central chamado skyfitConfig:

const skyfitConfig = {
  name: "SKYFIT Varginha",
  city: "Varginha — MG",
  address: "Av. Princesa do Sul, 393, Jardim Andere, Varginha — MG, CEP 37026-085",
  phone: "(35) 99974-0109",
  instagram: "@skyfitvarginha",
  rating: "4,8/5",
  reviews: 158,
  area: "2.800+ m²",
  modalitiesCount: "11+",
  hours: "até 23:00",
  parking: "Estacionamento incluso",
  modalities: [],
  differentials: [
    "Estrutura ampla",
    "Climatização",
    "Estacionamento",
    "Equipamentos",
    "Aulas coletivas",
    "Ambiente premium"
  ],
  images: []
}

Não espalhar informações fixas pelo código.

==================================================
FOTOS FORNECIDAS
==================================================

Utilizar as 4 fotos fornecidas no projeto.

PHOTO 01:
Fachada/exterior da SKYFIT.
→ usar como imagem principal do HERO.

PHOTO 02:
Pessoas treinando.
→ usar em storytelling/experiência/performance.

PHOTO 03:
Área interna da academia.
→ usar como imagem principal da seção de estrutura.

PHOTO 04:
Recepção.
→ usar na galeria e/ou seção de localização/experiência.

IMPORTANTE:
- não distorcer as imagens
- manter proporções
- usar object-fit: cover quando necessário
- não aplicar filtros exagerados
- usar overlay escuro sutil somente para melhorar legibilidade
- não inventar características que não aparecem nas fotos
- imagens devem ser protagonistas do design

Criar uma estrutura configurável:

skyfitConfig.images = [
  { src: "...", label: "THE SPACE" },
  { src: "...", label: "TRAINING FLOOR" },
  { src: "...", label: "INTERIOR" },
  { src: "...", label: "RECEPTION" }
];

==================================================
LAYOUT
==================================================

Não fazer:

HEADER → HERO → CARDS → CARDS → FOOTER.

Usar ritmo editorial:

HERO
↓
NUMBERS
↓
FULL-BLEED IMAGE
↓
EDITORIAL STORY
↓
MODALIDADES
↓
ESTRUTURA / GALERIA
↓
DIFERENCIAIS
↓
EXPERIÊNCIA
↓
PROVA SOCIAL
↓
INSTAGRAM
↓
LOCALIZAÇÃO
↓
CTA
↓
FOOTER

==================================================
HEADER
==================================================

Header minimalista e elegante.

Logo/nome:
SKYFIT VARGINHA

Menu:
Início
Estrutura
Modalidades
Diferenciais
Contato

Header transparente sobre o hero e muda sutilmente ao scroll.

==================================================
HERO
==================================================

Hero fullscreen e cinematográfico.

Usar PHOTO 01 como protagonista.

Não simplesmente colocar uma foto como background.

Criar composição editorial com:
- imagem fullscreen
- dark overlay
- profundidade
- contraste
- pequenos elementos de interface
- indicadores
- tipografia gigante

Mostrar:

VARGINHA — MG
2.800+ M²
11+ MODALIDADES

Headline:

"SEU PRÓXIMO
NÍVEL COMEÇA
AQUI."

Subheadline:

"Mais espaço. Mais possibilidades. Mais motivos para treinar."

CTAs:

"CONHECER A SKYFIT"
"QUERO SER ALUNO"

Adicionar:
SCROLL TO EXPLORE ↓

Ao carregar:
- imagem entra com scale suave
- título aparece progressivamente
- textos surgem em sequência
- CTA aparece depois
- blur → sharp

No scroll:
- parallax leve
- imagem reduz/expande suavemente
- elementos entram progressivamente

==================================================
SKYFIT EM NÚMEROS
==================================================

Seção predominantemente preta.

Números gigantes:

2.800+
M²

11+
MODALIDADES

4,8
GOOGLE

23:00
HORÁRIO

Usar animação de contador/reveal.

Muito espaço e tipografia editorial.

==================================================
FULL-BLEED IMAGE
==================================================

Usar PHOTO 02 ou PHOTO 03 em uma seção visual gigante.

Imagem ocupando praticamente toda a largura.

Sobreposição de texto minimalista:

"MAIS ESPAÇO.
MAIS PERFORMANCE."

Criar sensação de campanha publicitária.

==================================================
STORYTELLING
==================================================

Título gigante:

"UM ESPAÇO
PENSADO PARA
EVOLUIR."

Usar PHOTO 03.

Texto curto:

"Uma estrutura ampla, climatizada e pensada para transformar cada treino em uma experiência completa."

Destacar discretamente:
2.800+ m²
Climatização
Estacionamento
Aulas coletivas

Não transformar em vários cards.

==================================================
MODALIDADES
==================================================

Criar seção editorial/interativa.

Não inventar nomes.

Usar:

skyfitConfig.modalities

Apresentação:

01
MODALIDADE

02
MODALIDADE

03
MODALIDADE

...

Ao passar o mouse/tocar:
- item destaca
- detalhe azul aparece
- descrição surge
- imagem muda suavemente
- transição elegante

==================================================
ESTRUTURA / GALERIA
==================================================

Criar uma galeria editorial premium usando as 4 fotos.

NÃO fazer uma grade 2x2 comum.

Criar composição assimétrica:

- uma imagem enorme
- uma imagem menor
- uma imagem vertical
- uma imagem panorâmica

Usar labels:

01 — THE SPACE
02 — TRAINING FLOOR
03 — INTERIOR
04 — RECEPTION

PHOTO 01 → fachada
PHOTO 02 → pessoas treinando
PHOTO 03 → interior
PHOTO 04 → recepção

Hover:
- zoom 1.03–1.06
- overlay sutil
- label aparece
- indicador numérico

==================================================
DIFERENCIAIS
==================================================

Não usar cards tradicionais.

Criar lista editorial:

01 — ESTRUTURA
02 — PERFORMANCE
03 — CONFORTO
04 — EXPERIÊNCIA

Ao passar o mouse:
- item cresce
- detalhe azul aparece
- descrição surge
- imagem correspondente muda

==================================================
EXPERIÊNCIA
==================================================

Título:

"FEITO PARA QUEM
LEVA TREINO A SÉRIO."

Criar 3 grandes conceitos:

PERFORMANCE
DISCIPLINA
RESULTADO

Usar PHOTO 02 como elemento visual.

Cada conceito deve ter grande tipografia e composição visual forte.

==================================================
PROVA SOCIAL
==================================================

Mostrar:

4,8 / 5
158 avaliações

Texto:

"4,8 estrelas no Google"

Não inventar depoimentos.

==================================================
INSTAGRAM
==================================================

Título:

@skyfitvarginha

Criar galeria visual elegante.

Se não houver integração real, usar placeholders configuráveis.

Botão:

"VER NO INSTAGRAM"

==================================================
LOCALIZAÇÃO
==================================================

Seção dividida.

Esquerda:

SKYFIT VARGINHA

Av. Princesa do Sul, 393
Jardim Andere
Varginha — MG

(35) 99974-0109

ESTACIONAMENTO INCLUSO

Direita:
mapa.

Botão:
"ABRIR NO MAPS"

==================================================
CTA FINAL
==================================================

Criar uma seção extremamente impactante.

Headline:

"PRONTO PARA
COMEÇAR?"

Texto:

"Conheça a SKYFIT Varginha e encontre o ambiente certo para o seu próximo nível."

CTA:

"FALE COM A SKYFIT"

Usar o telefone/WhatsApp configurado.

==================================================
FOOTER
==================================================

Footer preto premium.

SKYFIT VARGINHA

Início
Estrutura
Modalidades
Diferenciais
Contato

Instagram
Telefone
Endereço

Final:

SKYFIT VARGINHA
VARGINHA — MG

==================================================
ANIMAÇÕES
==================================================

Usar Framer Motion.

Implementar somente animações que agreguem qualidade:

- scroll reveal
- text reveal
- parallax leve
- image zoom
- scale transitions
- hover interactions
- contador de números
- microinterações nos botões
- entrada cinematográfica do hero

Botões:
hover com pequeno scale + brilho discreto + movimento da seta.

Imagens:
zoom suave 1.03–1.06.

Respeitar:
prefers-reduced-motion.

Não usar animações exageradas.

==================================================
3D
==================================================

Se utilizar 3D, usar apenas como detalhe premium.

Pode utilizar:
- números 3D
- lettering SKYFIT
- linhas metálicas
- partículas discretas
- formas abstratas

Estética:
metal, vidro, aço, concreto, iluminação cinematográfica.

NÃO transformar o site inteiro em uma cena WebGL pesada.

==================================================
RESPONSIVIDADE
==================================================

Desktop:
experiência cinematográfica completa.

Tablet:
reduzir complexidade.

Mobile:
- hero ainda impactante
- botões grandes
- textos legíveis
- galeria vertical
- animações reduzidas
- navegação simples

==================================================
PERFORMANCE / ACESSIBILIDADE
==================================================

- semantic HTML
- alt text
- keyboard navigation
- contraste adequado
- lazy loading
- imagens sem distorção
- evitar WebGL pesado
- evitar vídeos pesados
- manter FPS alto

==================================================
REGRA FINAL
==================================================

Depois de implementar tudo, faça uma segunda revisão visual.

Procure e corrija:
- aparência genérica
- excesso de cards
- espaços vazios
- desalinhamentos
- tipografia fraca
- CTAs pouco destacados
- animações exageradas
- problemas mobile
- inconsistência de espaçamento
- hero pouco impactante

Refine o resultado até parecer uma experiência digital criada por uma agência premium de uma marca fitness internacional.

NÃO explique o que pretende fazer.

CONSTRUA O SITE FUNCIONANDO.

Nao faça o site generico

o Faça animado em 3d com tudo lindo

O SITE DEVE SER A COISA MAIS LINDA DO MUBDO

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ea1b1a54-4398-439c-a2cc-ced1874b34ab).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
