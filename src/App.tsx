import { useScrollReveal } from "./hooks/useScrollReveal";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,

} from "react-icons/si";
import {
  ShieldCheck,
  Github,
  Linkedin,
  Mail,
  Quote,
  ZoomIn,
  Star,
  Download,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Code2,
  Layers,
  Smartphone,
  Zap,
  Send,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, useRef, type ReactNode, type FormEvent } from "react";
import { cn } from "./lib/utils";

// --- Types ---
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  problem: string;
  result: string;
  link?: string;
  github?: string;
}
interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  image: string;
  content: string;
  rating: number;
  highlightMetric: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Portfólio Profissional de Saxofonista",
    description: "Site desenvolvido para apresentar o trabalho artístico de forma profissional.",
    image: "assets/sax-site.png",
    category: "Site Institucional",
    problem: "Dificuldade em apresentar o trabalho artístico de forma profissional e centralizar informações como eventos, repertório e contato em um único lugar.",
    result: "Criação de um site moderno e responsivo que fortalece a presença digital, facilita o contato com clientes e valoriza a imagem profissional do artista.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://www.alefesilvasax.com.br/",
    github: "https://github.com/Alef-Henrique/sax-site"
  },
  {
    id: "rj-seguranca",
    title: "RJ Segurança e Informática",
    description: "Site institucional desenvolvido para empresa de segurança eletrônica.",
    image: "assets/rj-seguranca.png", // 👈 usa print do seu site
    category: "site Institucional",
    problem: "Necessidade de comunicar uma proposta de saúde de forma clara, moderna e confiável para atrair e engajar usuários.",
    result: "Criação de uma interface elegante e estratégica que transmite autoridade, melhora a experiência do usuário e aumenta o engajamento com a plataforma.",
    tech: ["React", "Tailwind", "UI/UX Design"],
    link: "https://www.rjsegurancainformatica.com.br/",
    github: "#"
  },
  {
    id: "iron-glow",
    title: "Iron Glow",
    description: "Página de apresentação para Advogados e Escritórios de advocacia.",
    image: "assets/capa-advogado.png",
    category: "Landing Page",
    problem: "Página de apresentação para Advogados.",
    result: "Desenvolvimento de uma interface responsiva com design premium, animações suaves, navegação intuitiva e CTAs estrategicamente posicionados para aumentar a conversão de visitantes em novos clientes.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://gabriela-silveira.vercel.app/",
    github: "#",
  },
  {
    id: "Site para Corretor",
    title: "Rafael Corretor imobiliário",
    description: "Plataforma imobiliária moderna com foco em imóveis de alto padrão.",
    image: "assets/site-corretor.png",
    category: "Plataforma Imobiliária",
    problem: "Necessidade de criar uma presença digital premium capaz de transmitir sofisticação, confiança e facilitar a visualização dos imóveis.",
    result: "Desenvolvimento de uma interface moderna e cinematográfica que melhora a experiência do usuário, valoriza os imóveis e fortalece a percepção da marca.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://www.rafaelnegociosimobiliarios.com/",
    github: ""
  },

  {
    id: "inibgold-saude",
    title: "Inibgold",
    description: "Landing page premium desenvolvida para divulgação e venda de encapsulados.",
    image: "assets/Inibgold-site.png",
    category: "Landing Page de Produto",
    problem: "Necessidade de criar uma presença digital estratégica para apresentar o produto de forma confiável, moderna e persuasiva, aumentando o interesse e as conversões.",
    result: "Desenvolvimento de uma interface elegante e otimizada para vendas, fortalecendo a autoridade da marca e melhorando a experiência do usuário durante a navegação.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://project-inib-gold.vercel.app/",
    github: "#"
  },
  {
    id: "monitoraweb",
    title: "MonitoraWeb",
    description:
      "Landing page desenvolvida para o Lançamento da Plataforma.",
    image: "assets/capa-descomplica.png",
    category: "Landing Page",
    problem:
      "Criar uma presença digital profissional que transmitisse credibilidade, destacasse os serviços oferecidos e proporcionasse uma experiência moderna para potenciais clientes.",
    result:
      "Desenvolvimento de uma interface responsiva, com animações avançadas utilizando GSAP e Framer Motion, navegação intuitiva, otimização para SEO e foco em performance e conversão.",
    tech: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    link: "https://www.descomplicandoaprovacoes.com.br/",
    github: "#",
  }

];

const EXPERIENCES: Experience[] = [
  {
    company: "Autônomo (PJ)",
    role: "Desenvolvedor Front-End",
    period: "2026 - Presente",
    description: "Atuação como desenvolvedor front-end em projetos para empresas e clientes individuais, desenvolvendo aplicações web modernas, responsivas e focadas na experiência do usuário."
  },
  {
    company: "Testes manuais e automatizados",
    role: "Curso técnico - E2E Treinamentos",
    period: "Novembro 2025",
    description: "Domínio do ciclo de vida de testes (STLC), com foco em garantir a qualidade da experiência do usuário. Desenvolvi habilidades em testes funcionais manuais e avancei para a automação de processos, utilizando ferramentas que otimizam o tempo de entrega e elevam o padrão técnico dos projetos web."
  },
  {
    company: "Autônomo (PJ)",
    role: "Desenvolvedor Front-End",
    period: "janeiro 2025",
    description: "Iniciei minha trajetória em 2024 com projetos para redes próximas, evoluindo rapidamente de contratos familiares para o desenvolvimento de soluções web modernas no mercado corporativo."
  },
  {
    company: "Dev Club",
    role: "Curso Dev Club - Front-End Avançado",
    period: "Outubro 2024",
    description: "Concluí a formação de Front-end Avançado na Dev Club, onde dominei o ecossistema do React para criar aplicações dinâmicas e profissionais. Minha atuação foca em entregar código limpo em TypeScript, interfaces fluidas e soluções prontas para produção, unindo design moderno e eficiência técnica."
  },
  {
    company: "Estudos na plataforma Udemy",
    role: "Curso Web Front-end Fundamentos HTML CSS JS",
    period: "Junho 2023",
    description: "Evoluí minhas habilidades em HTML, CSS e JavaScript através de cursos especializados na Udemy. Essa trajetória foi marcada pela criação de projetos reais e pessoais, onde transformei conceitos técnicos em soluções visuais modernas e interativas."
  }

];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Fernanda",
    role: "CEO da RJ Segurança e Informática",
    avatar: "/assets/foto-fernanda.jpeg",
    image: "/assets/performance-Rj.jpeg",
    content: "Álefe, quero agradecer e expressar minha gratidão pelo excelente trabalho realizado na criação do nosso site. ficou simplesmente perfeito e superou nossas expectativas.",
    rating: 5,
    highlightMetric: "+45% de Conversão"
  },
  {
    id: "2",
    name: "Gustavo Farias",
    role: "Gestor de Projetos e Inovação",
    avatar: "/assets/foto-gustavo.jpeg",
    image: "/assets/performance-descomp.png",
    content: "Cara, ficou muito bom! Era exatamente o que a gente precisava. A página ficou profissional, rápida e conseguiu explicar nossa proposta de uma forma muito mais clara. Gostei bastante principalmente de como ficou no celular. Com certeza vai ajudar bastante na divulgação do Descomplicando Aprovações.",
    rating: 5,
    highlightMetric: "60 FPS em Tempo Real"
  },
  {
    id: "3",
    name: "Rafael Corretor",
    role: "Corretor de Imóveis",
    avatar: "/assets/foto-rafa.jpeg",
    image: "/assets/performance-imoveis.png",
    content: "O Álefe entendeu exatamente o que eu precisava e conseguiu transformar minha ideia em um site moderno, organizado e profissional. Agora tenho uma ferramenta muito melhor para apresentar meus imóveis, transmitir confiança e facilitar o contato com novos clientes pelo WhatsApp.",
    rating: 5,
    highlightMetric: "UI/UX & Streaming IA"
  }
];
// --- Helpers ---
const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Decelerate easing: cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};


const TECHNOLOGIES = [
  {
    name: "HTML5",
    icon: SiHtml5,
  },
  {
    name: "CSS3",
    icon: SiCss,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    name: "Vite",
    icon: SiVite,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "Figma",
    icon: SiFigma,
  },
  {
    name: "Vercel",
    icon: SiVercel,
  },
];
// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 text-lg max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-primary hover:bg-blue-600 transition-all duration-300 mt-6 rounded-full"
    />
  </div>
);
const GlobalVideoBackground = () => {

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-100"
      >
        <source src="./assets/video-programin.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%)]" />
    </div>
  )
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Sobre", id: "sobre" },
    { label: "Skills", id: "skills" },
    { label: "Projetos", id: "projetos" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Trajetória", id: "trajetoria" },
    { label: "Contato", id: "contato" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-6 transition-[background-color,backdrop-filter,padding] duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#"
          className="group flex items-center cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative flex items-center gap-3">
            {/* Logo */}
            <img
              src="./assets/logositecode.png"
              alt="DevFront Logo"
              className="h-9 w-auto object-contain shrink-0"
            />

            {/* Texto */}
            <div className="flex flex-col justify-center leading-none">
              <span className="text-sm font-black tracking-[0.25em] uppercase text-zinc-100 transition-colors duration-300 group-hover:text-blue-500">
                Alefecode
              </span>

              <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-500">
                DEV-FRONT
              </span>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute -inset-x-4 -inset-y-2 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-30" />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-zinc-400 transition-colors duration-300 hover:text-white group"
            >
              {item.label}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contato"
            className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white active:translate-y-0 active:scale-95"
          >
            VAMOS CONVERSAR
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full bg-zinc-900 z-50 p-6"
          >
            <div className="flex flex-col space-y-6 mt-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()

                    const section = document.getElementById(item.id)

                    if (section) {
                      const yOffset = -80
                      const y =
                        section.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset

                      window.scrollTo({ top: y, behavior: "smooth" })
                    }

                    setIsMobileMenuOpen(false)
                  }}
                  className="text-lg font-medium text-zinc-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-500 h-full flex flex-col"
    >
      <div className="relative h-[260px] overflow-hidden group">

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain bg-black transition-transform duration-500 group-hover:scale-105"
        />

        {/* OVERLAY SUAVE */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* TAG (SÓ NO HOVER) */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition duration-500">
          <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>

      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
        <p className="text-zinc-400 mb-6 line-clamp-2 leading-relaxedtext-zinc-400 mb-6 leading-relaxed min-h-[56px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] bg-white/5 text-zinc-400 px-2 py-1 rounded border border-white/5">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 mt-auto">
          <a href={project.link} className="flex-1 flex items-center justify-center space-x-2 bg-white text-black py-3 rounded-xl font-bold hover:bg-primary hover:bg-blue-600 transition-all duration-300 hover:text-white transition-all text-sm">
            <span>Ver Demo</span>
            <ExternalLink size={16} />
          </a>
          <a href={project.github} className="p-3 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {

  useScrollReveal();

  const skillsRef = useRef<HTMLDivElement>(null)
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const scrollLeft = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      })
    }
  }

  const [formState, setFormState] = useState<
    'idle' | 'loading' | 'success'>('idle');

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SUBMIT DISPARADO");
    setFormState('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("dados enviados:", data);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("status:", res.status);

      if (res.ok) {
        setFormState('success');
        alert("Mensagem enviada 🚀"); // opcional
      } else {
        console.error("Erro no servidor");
        setFormState('idle');
      }

    } catch (err) {
      console.error("erro:", err);
      setFormState('idle');
    }
  };

  return (

    <>
      <GlobalVideoBackground />

      <div className="relative z-10 min-h-screen bg-transparent text-white">
        <Navbar />


        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/18 blur-[140px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />
          <div className="max-w-7xl mx-auto w-full text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="px-4 py-2 bg-zinc-900/50 backdrop-blur rounded-full border border-white/5 text-blue-500 text-xs font-bold uppercase tracking-widest flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary hover:bg-blue-600 transition-all duration-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary hover:bg-blue-600 transition-all duration-300"></span>
                </span>
                <span>Disponível para projetos</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold mb-4 tracking-tight text-center leading-none px-4 w-full"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl text-blue-500 italic drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Transformo ideias
                em
              </span>

              <br />

              experiências digitais
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Construindo experiências digitais excepcionais através de código limpo,
              performance extrema e design centrado no usuário.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a href="#projetos" className="w-full sm:w-auto bg-primary hover:bg-blue-600 transition-all duration-300 text-white py-4 px-10 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center justify-center space-x-2 group">
                <span>Ver Projetos</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contato" className="w-full sm:w-auto border border-white/10 py-4 px-10 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
                Entrar em contato
              </a>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
          >
            <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-primary hover:bg-blue-600 transition-all duration-300 rounded-full" />
            </div>
          </motion.div>

        </section>
        <section className="py-24 px-6 bg-transparent">
          {/* Carrossel infinito de tecnologias */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full overflow-hidden relative py-4 mb-12 select-none"
            id="carrossel-tech"
          >
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 35,
                repeat: Infinity,
              }}
            >
            {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => {
              const Icon = tech.icon;

              return (
                <div
                  key={i}
                  className="flex items-center space-x-2.5 px-5 py-3 bg-zinc-950/90 border border-white/5 rounded-2xl hover:border-primary/40 hover:scale-105 transition-all duration-300 group shadow-[0_0_15px_rgba(59,130,246,0.01)] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] cursor-pointer"
                >
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>

                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              );
            })}
            </motion.div>
          </motion.div>
        </section>

      {/* Seção de Estatísticas / Resultados */}
      <section id="resultados" className="relative py-24 px-6 overflow-hidden bg-transparent">
        {/* Decorative background grid elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-16"
          >
            {/* Título */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-[1.15] text-white mb-4">
              Números que representam meu trabalho
            </h2>

            {/* Subtítulo */}
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              Cada projeto entregue representa meu compromisso com qualidade, performance e resultados.
            </p>
          </motion.div>

          {/* Cards Flex Container */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-6 lg:gap-8 w-full max-w-5xl mx-auto items-stretch justify-center"
          >
            {[
              {
                value: 15,
                suffix: "+",
                title: "Projetos Entregues"
              },
              {
                value: 3,
                suffix: "+",
                title: "Anos de Experiência"
              },
              {
                value: 100,
                suffix: "%",
                title: "Qualidade"
              },
              {
                value: 24,
                suffix: "h",
                title: "Suporte"
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="glass bg-[#0D1117]/80 backdrop-blur-md border border-white/[0.06] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-[#131922] hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] group flex flex-col justify-center items-center w-full sm:w-[calc(50%-12px)] lg:w-auto lg:flex-1 py-8 cursor-default gap-3"
              >
                {/* Número com Contador Animado */}
                <span className="text-3xl sm:text-4xl font-display font-black text-primary group-hover:text-white transition-colors duration-300 block text-center">
                  <AnimatedCounter value={card.value} />{card.suffix}
                </span>
                <h4 className="text-white text-sm font-semibold transition-colors group-hover:text-primary duration-300 text-center w-auto">
                  {card.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <SectionHeading subtitle="Stack técnica focada no que há de mais moderno.">
              Habilidades Especialistas
            </SectionHeading>

            <div className="relative">

              {/* BOTÃO ESQUERDA */}
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20
            bg-black/70 backdrop-blur-xl border border-white/10
            shadow-[0_0_30px_rgba(0,0,0,0.5)]
            p-3 rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                <ChevronLeft />
              </button>

              {/* BOTÃO DIREITA */}
              <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                      bg-black/70 backdrop-blur-xl border border-white/10
                      p-3 rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                <ChevronRight />
              </button>

              {/* CARROSSEL */}
              <div
                ref={skillsRef}
                className="flex gap-6 overflow-hidden scroll-smooth px-16"
              >
                {[
                  { icon: <Code2 className="text-blue-400" />, title: "Fundamentos & Frameworks", list: ["JavaScript (ES6+)", "React & Next.js", "TypeScript"] },
                  { icon: <Layers className="text-purple-400" />, title: "Estilização & Interface", list: ["CSS3 (PostCSS)", "Design Systems", "Tailwind CSS"] },
                  { icon: <Zap className="text-yellow-400" />, title: "IA & Inovação", list: ["OpenAI", "GeminiAI", "Prompt Engineering"] },
                  { icon: <Smartphone className="text-emerald-400" />, title: "Web Avançada", list: ["Web APIs", "Performance Opt.", "Responsive Design"] },
                  { icon: <ShieldCheck className="text-cyan-400" />, title: "Garantia de Qualidade", list: ["Testes Manuais", "Testes Automatizados", "Cypress & Selenium", "Validação E2E"] }

                ].map((skill, i) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="min-w-[280px] max-w-[280px] p-8 flex flex-col bg-zinc-900 rounded-3xl border border-white/5 hover:bg-zinc-800/50 transition-all duration-500"
                  >
                    <div className="mb-6">{skill.icon}</div>
                    <h4 className="text-xl font-bold mb-4">{skill.title}</h4>
                    <ul className="space-y-2 text-zinc-500 text-sm">
                      {skill.list.map(item => <li key={item} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary hover:bg-blue-600 transition-all duration-300 rounded-full" />
                        <span>{item}</span>
                      </li>)}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionHeading subtitle="Confira alguns dos principais projetos que lidero atualmente.">
            Projetos em Destaque
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {PROJECTS.map((project, i) => (
              <div key={project.id}>
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>
        </section>
       {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 px-6 relative overflow-hidden border-t border-b border-white/[0.03]">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-primary/5 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-4 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              <Quote size={12} className="text-primary fill-primary/30" />
              <span>Depoimentos Reais</span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-[1.15] text-white mb-4"
            >
              O que dizem sobre meus projetos
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl font-light"
            >
              A satisfação de fundadores, líderes técnicos e clientes com soluções focadas em alta performance, UX refinada e entrega ágil.
            </motion.p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onClick={() => setSelectedTestimonial(item)}
                 className="glass bg-[#0D1117]/80 backdrop-blur-md border border-white/[0.06] rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-[#131922] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] group relative overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Screenshot / Project Image */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-white/[0.08] bg-zinc-950">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Gratitude / Feedback Text */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-5 font-light group-hover:text-white transition-colors duration-300">
                    "{item.content}"
                  </p>
                </div>

                {/* Client Photo & Information */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center space-x-3">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/60 transition-all duration-300"
                  />
                  <div>
                    <h4 className="text-white text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-zinc-400 text-xs font-light">
                      {item.role} <span className="text-zinc-600">·</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


        {/* Trajectory */}
        <section id="trajetoria" className="py-24 px-6 max-w-5xl mx-auto">
          <SectionHeading>Minha Trajetória</SectionHeading>

          <div className="space-y-0 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-blue-500 before:to-transparent">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center mb-16",
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="absolute left-0 md:left-1/2 -ml-3 w-6 h-6 bg-black border-4 border-primary rounded-full z-10" />
                <div className="w-full md:w-1/2 px-12">
                  <div className="p-8 bg-zinc-900 rounded-3xl border border-white/5 hover:border-primary/20 transition-all">
                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">{exp.period}</span>
                    <h4 className="text-2xl font-bold mt-2 mb-1">{exp.role}</h4>
                    <span className="text-zinc-500 font-medium block mb-4">{exp.company}</span>
                    <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-400/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-display font-extrabold mb-6"
              >
                Vamos <span className="text-blue-500 italic">criar</span> algo <br /> extraordinário?
              </motion.h2>
              <p className="text-zinc-400 text-lg">
                Estou aberto a novas oportunidades e parcerias.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-3xl border border-white/5 p-8 md:p-12 shadow-2xl"
            >
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 flex items-center justify-center rounded-full mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Mensagem Enviada!</h3>
                  <p className="text-zinc-400 max-w-sm mx-auto">
                    Entrarei em contato com você o mais breve possível.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-blue-500 font-bold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase px-1">Nome</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase px-1">E-mail</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase px-1">Mensagem</label>
                    <textarea
                      required
                      name="message"
                      placeholder="Como posso ajudar seu projeto?"
                      rows={6}
                      className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors text-white resize-none"
                    />
                  </div>
                  <button
                    disabled={formState === 'loading'}
                    className="w-full bg-primary hover:bg-blue-600 transition-all duration-300 text-white py-5 rounded-2xl font-bold text-xl cursor-pointer hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center space-x-3 disabled:opacity-70"
                  >
                    {formState === 'loading' ? (
                      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Enviar Mensagem</span>
                        <Send size={24} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start group cursor-default">
              <div className="flex items-center">
                <img
                  src="./assets/logositecode.png"
                  alt="DevFront Logo"
                  className="h-9 w-auto object-contain shrink-0"
                />
                <div className="mx-2 h-[1px] h-4 bg-zinc-800" />

                <div className="flex flex-col justify-center leading-none">
                  <span className="text-sm font-black tracking-[0.25em] uppercase text-zinc-100 transition-colors duration-300 group-hover:text-blue-500">
                    Alefecode
                  </span>

                  <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-500">
                    DEV-FRONT
                  </span>
                </div>
              </div>
            </div>

            <div className="text-zinc-600 text-sm">
              © 2026 Alefe | Desenvolvedor Front-End. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-6">
              <a href="https://github.com/Alef-Henrique">
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/alefe-henrique"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:alefereal123@gmail.com" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-primary hover:bg-blue-600 transition-all duration-300 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
         <AnimatePresence>
        {selectedTestimonial && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0D1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-end px-4 py-3 border-b border-white/10 bg-zinc-950/70">
                <button 
                  onClick={() => setSelectedTestimonial(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Large Image Preview */}
              <div className="relative w-full max-h-[75vh] bg-black flex items-center justify-center overflow-hidden p-2">
                <img 
                  src={selectedTestimonial.image} 
                  alt="Visualização da imagem" 
                  className="w-full h-full max-h-[75vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        
      </div>
    </>
  );
}