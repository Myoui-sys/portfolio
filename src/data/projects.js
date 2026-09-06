import districtBankImage from "../assets/images/District Bank.png";
import namiImage from "../assets/images/Nami.png";
import namiRoundedImage from "../assets/images/NamiRounded.png";
import sinapImage from "../assets/images/SINAP.png";
import guardiaImage from "../assets/images/GuardiaFinanceiraRounded.png";
import toursImage from "../assets/images/ToursRounded.png";
import bancoDigitalImage from "../assets/images/BancoDigitalRounded.png";
import bingoImage from "../assets/images/BingoRounded.png";
import tgbrImage from "../assets/images/TGBR.png";
import marketHardwareImage from "../assets/images/MarketHardware.png";
import undertaleImage from "../assets/images/Undertale.png";
import portfolioTurmaImage from "../assets/images/PortfolioTurma130.png";
import jurassicParkImage from "../assets/images/JurassicPark.png";
import hyphenBotImage from "../assets/images/HyphenDashboardLight.png";
import silverAwardIcon from "../assets/icons/PrêmioCinza.svg";
import goldAwardIcon from "../assets/icons/PrêmioDourado.svg";
import technicalIcon from "../assets/icons/Ferramenta.svg";

export const featuredProjects = [
  {
    title: "NAMI",
    description: "Extensão com Inteligência Artificial para tornar a navegação digital mais acessível a pessoas neurodivergentes.",
    tags: ["IA", "Acessibilidade", "Ideathon", "RFEC 2026"],
    image: namiImage,
    imagePosition: "top",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7489800852703092736/",
    badges: [
      { label: "Destaque", icon: goldAwardIcon, tone: "gold" },
      { label: "2º Lugar · RFEC 2026", icon: silverAwardIcon },
    ],
  },
  {
    title: "TOURS QA Challenge",
    description: "Plataforma gamificada para o ensino de QA, com desafios, ranking e integração com Supabase.",
    tags: ["QA", "Supabase", "JavaScript", "Playwright"],
    image: districtBankImage,
    repoUrl: "https://github.com/Myoui-sys/tours-qa-challenge-ready",
    deployUrl: "https://tours-qa-desafio.vercel.app",
    badges: [{ label: "Técnico", icon: technicalIcon }],
  },
];

export const hackathonProjects = [
  {
    title: "NAMI",
    description: "Acessibilidade cognitiva com IA para uma navegação digital mais inclusiva.",
    tags: ["IA", "Acessibilidade", "Ideathon"],
    image: namiRoundedImage,
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7489800852703092736/",
  },
  {
    title: "SINAP",
    description: "Solução de saúde digital com IA para análise de dados clínicos e classificação de risco.",
    tags: ["IA", "Saúde digital", "Ideathon"],
    image: sinapImage,
    imageFit: "contain",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7471254218805395456/",
  },
  {
    title: "Guardiã Fin",
    description: "IA para identificar movimentações suspeitas e apoiar a proteção financeira.",
    tags: ["IA", "Fintech", "Hackathon"],
    image: guardiaImage,
    imageFit: "contain",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7479951138939768832/",
  },
];

export const developmentProjects = [
  {
    title: "TOURS QA",
    description: "Experiência gamificada para explorar desafios reais de qualidade de software.",
    tags: ["QA", "Supabase", "Playwright"],
    image: toursImage,
    repoUrl: "https://github.com/Myoui-sys/tours-qa-challenge-ready",
    deployUrl: "https://tours-qa-desafio.vercel.app",
  },
  {
    title: "Banco Digital BDD",
    description: "Automação de testes BDD para cenários de uma aplicação bancária.",
    tags: ["BDD", "Cucumber", "TypeScript"],
    image: bancoDigitalImage,
    repoUrl: "https://github.com/Myoui-sys/BancoDigital-_Gherkin_BDD_APONTI",
  },
  {
    title: "Sistema de Bingo",
    description: "Aplicação de bingo desenvolvida com JavaScript e Node.js.",
    tags: ["JavaScript", "Node.js"],
    image: bingoImage,
    repoUrl: "https://github.com/Myoui-sys/Sistema-de-BINGO",
  },
  {
    title: "Training Gaming Brasil",
    description: "Site responsivo de treinamento profissional para jogadores competitivos.",
    tags: ["HTML", "CSS", "Responsivo"],
    image: tgbrImage,
    repoUrl: "https://github.com/Myoui-sys/TGBR_Project",
    deployUrl: "https://myoui-sys.github.io/TGBR_Project/",
  },
  {
    title: "Hardware Market",
    description: "Formulário web para cadastro e venda de computadores, notebooks e componentes.",
    tags: ["HTML", "CSS", "Formulários"],
    image: marketHardwareImage,
    repoUrl: "https://github.com/Myoui-sys/MarketHardware_FormProject",
    deployUrl: "https://myoui-sys.github.io/MarketHardware_FormProject/",
  },
  {
    title: "Undertale Mini Wiki",
    description: "Mini wiki estática inspirada no universo de Undertale, construída com HTML e CSS.",
    tags: ["HTML", "CSS", "Landing page"],
    image: undertaleImage,
    repoUrl: "https://github.com/Myoui-sys/undertale-site",
    deployUrl: "https://myoui-sys.github.io/undertale-site/",
  },
  {
    title: "Portfólio Turma 130",
    description: "Landing page colaborativa da Turma 130 do Programa Transforma-se.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: portfolioTurmaImage,
    repoUrl: "https://github.com/Thamiresvitoria/Portifolio-",
    deployUrl: "https://thamiresvitoria.github.io/Portifolio-/",
  },
  {
    title: "Jurassic Park",
    description: "Landing page temática que apresenta a trilogia e o universo Jurassic Park.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: jurassicParkImage,
    repoUrl: "https://github.com/Myoui-sys/Jurassic-Park-Landing-Page",
    deployUrl: "https://myoui-sys.github.io/Jurassic-Park-Landing-Page/",
  },
  {
    title: "Hyphen Community Bot",
    description: "Bot administrativo para anúncios, lembretes e boas-vindas no Discord.",
    tags: ["Node.js", "Discord.js", "Automação"],
    image: hyphenBotImage,
    repoUrl: "https://github.com/Myoui-sys/hyphen-bot",
  },
];
