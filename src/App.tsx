import { useScrollReveal } from "./hooks/useScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Layers, 
  Smartphone, 
  Zap, 
  Send,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, type ReactNode, type FormEvent } from "react";
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

// --- Data ---
const PROJECTS: Project[] = [
{
  id: "1",
  title: "Portfólio Profissional de Saxofonista",
  description: "Site desenvolvido para apresentar o trabalho artístico de forma profissional, incluindo eventos, repertório musical, história do artista e canal direto para contato.",
  image: "sax-site.png",
  category: "Site Institucional",
  problem: "Dificuldade em apresentar o trabalho artístico de forma profissional e centralizar informações como eventos, repertório e contato em um único lugar.",
  result: "Criação de um site moderno e responsivo que fortalece a presença digital, facilita o contato com clientes e valoriza a imagem profissional do artista.",
  tech: ["React", "Tailwind", "Framer Motion"],
  link: "https://www.alefesilvasax.com.br/",
  github: "https://github.com/Alef-Henrique/sax-site"
},
{
  id: "vita-nutricao",
  title: "VITA+ Plataforma de Nutrição",
  description: "Landing page moderna para uma plataforma de saúde e bem-estar, com foco em nutrição, movimento e experiência do usuário.",
  image: "saude-site.png", // 👈 usa print do seu site
  category: "Landing Page Premium",
  problem: "Necessidade de comunicar uma proposta de saúde de forma clara, moderna e confiável para atrair e engajar usuários.",
  result: "Criação de uma interface elegante e estratégica que transmite autoridade, melhora a experiência do usuário e aumenta o engajamento com a plataforma.",
  tech: ["React", "Tailwind", "UI/UX Design"],
  link: "https://project-vita-two.vercel.app/",
  github: "#"
},
{
  id: "lumina-advogados",
  title: "Lumina Assessoria Jurídica",
  description: "Site institucional desenvolvido para escritório jurídico, com foco em credibilidade, clareza de serviços e captação de clientes.",
  image: "direito-site.png",
  category: "Site Institucional",
  problem: "Dificuldade em transmitir confiança e apresentar serviços jurídicos de forma clara e profissional no ambiente digital.",
  result: "Criação de um site moderno e estratégico que fortalece a autoridade do escritório, melhora a comunicação dos serviços e aumenta a conversão de novos clientes.",
  tech: ["React", "Tailwind", "UI/UX Design"],
  link: "https://lumina-projeto.vercel.app/",
  github: "#"
}
];

const EXPERIENCES: Experience[] = [
  {
    company: "TechGlobal Solutions",
    role: "Desenvolvedor Front-End",
    period: "2024 - Presente",
    description: "Liderança técnica de squads front-end, definindo arquiteturas baseadas em Micro-frontends e garantindo padrões de acessibilidade WCAG."
  },
  {
    company: "Startup Flow",
    role: "Desenvolvedor Front-End",
    period: "2023 - 2024",
    description: "Desenvolvimento de interfaces modernas e responsivas, focando em performance e melhores práticas de SEO."
  }
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Sobre", id: "sobre" },
    { label: "Skills", id: "skills" },
    { label: "Projetos", id: "projetos" },
    { label: "Trajetória", id: "trajetoria" },
    { label: "Contato", id: "contato" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO SIMPLIFICADO E IMPACTANTE */}
        <a href="#" className="flex items-center group cursor-pointer" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <div className="relative flex items-center">
            <span className="text-2xl font-display font-black tracking-[-0.05em] text-blue-500 group-hover:text-white transition-colors duration-300">
              Alefe
            </span>
            <div className="mx-3 w-[1px] h-6 bg-zinc-800 group-hover:bg-primary hover:bg-blue-600 transition-all duration-300/50 transition-colors duration-500" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-zinc-500 group-hover:text-blue-500 transition-colors duration-300">
              DevFront
            </span>
            {/* Efeito de brilho sutil ao passar o mouse */}
            <div className="absolute -inset-x-4 -inset-y-2 bg-primary hover:bg-blue-600 transition-all duration-300/10 blur-2xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-zinc-400 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a 
            href="#contato" 
            className="bg-white text-black px-5 py-2.5 rounded-full font-semibold text-xs
                      hover:bg-blue-500 hover:text-white
                      transition-all duration-300
                      transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95
                      shadow-lg shadow-black/20"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 mt-4 rounded-2xl border border-white/5 p-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
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

        {/* Study Case Highlight */}
        <div className="space-y-4 p-5 bg-zinc-900/50 rounded-2xl border border-white/5 mb-6 min-h-[180px] flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-blue-500 uppercase block mb-1">Problema</span>
            <p className="text-xs text-zinc-200 font-medium line-clamp-3 italic">"{project.problem}"</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">Resultado</span>
            <p className="text-xs text-zinc-200 font-medium">{project.result}</p>
          </div>
        </div>

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
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

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
       <div className="min-h-screen bg-black text-white">
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
            className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold mb-8 tracking-tighter"
          >
            <span className="text-blue-500 italic drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"> Front-End</span> <br />
            Developer
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

      {/* About Section */}
      <section id="sobre" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Sobre Mim</SectionHeading>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Com mais de 3 anos de experiência no ecossistema web, transformo problemas 
              complexos em soluções elegantes e escaláveis. Minha abordagem une a precisão 
              técnica da engenharia com a sensibilidade estética do design.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Foco em resultados: Não se trata apenas de escrever código, mas de 
              gerar valor para o negócio através de interfaces rápidas, acessíveis 
              e intuitivas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                <span className="text-3xl font-display font-bold text-blue-500 block">30+</span>
                <span className="text-zinc-500 text-sm">Projetos Entregues</span>
              </div>
              <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                <span className="text-3xl font-display font-bold text-blue-500 block">3+</span>
                <span className="text-zinc-500 text-sm">Anos de React</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-zinc-900 rounded-[3rem] overflow-hidden rotate-3 relative z-10">
                <img 
                alt="Profile" 
                className="w-full h-full object-cover" 
                src="/Foto-Perfil.png"
                />
              
            </div>
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-full h-full border-2 border-primary/30 rounded-[3rem] -z-0 -rotate-3" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Stack técnica focada no que há de mais moderno.">
            Habilidades Especialistas
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Code2 className="text-blue-400" />, title: "Core & Frameworks", list: ["JavaScript (ES6+)", "React & Next.js", "TypeScript"] },
              { icon: <Layers className="text-purple-400" />, title: "Styling & UI", list: ["CSS3 (PostCSS)", "Design Systems", "Tailwind CSS"] },
              { icon: <Zap className="text-yellow-400" />, title: "AI & Innovation", list: ["OpenAI", "GeminiAI", "Prompt Engineering"] },
              { icon: <Smartphone className="text-emerald-400" />, title: "Advanced Web", list: ["Web APIs", "Performance Opt.", "Responsive Design"] }
            ].map((skill, i) => (
              <motion.div 
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 flex flex-col flex-1 bg-zinc-900 rounded-3xl border border-white/5 hover:bg-zinc-800/50 transition-colors"
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
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start group cursor-default">
            <div className="flex items-center">
              <span className="text-2xl font-display font-black tracking-tighter text-blue-500">Alefe</span>
              <div className="mx-2 w-[1px] h-4 bg-zinc-800" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">DevFront</span>
            </div>
            <span className="text-[10px] text-zinc-600 mt-2">Especialista Front-End</span>
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
    </div>
  );
}