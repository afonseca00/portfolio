import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const translations = {
  en: {
    home: {
      title: "Hi, I'm Alexandre Rodrigues",
      subtitle: "Full-Stack Developer passionate about creating innovative solutions",
      cta: "Let's Talk",
      downloadCV: "Download CV"
    },
    about: {
      title: "About Me",
      paragraph1: "I am a passionate Full-Stack Developer with experience in backend and frontend development, eager to build scalable and efficient applications. My background includes a Bachelor’s degree in Computer Science, complemented by hands-on projects in Node.js, Express.js, MySQL, and Azure.",
      paragraph2: "My academic final project, Quiz Game Rugby, is a web-based application that features authentication, secure user management, a ranking system, and multilingual support. The project not only allowed me to apply my technical skills, but also to create a user-friendly and engaging platform that enhances the overall experience of rugby fans worldwide.",
      paragraph3: "I successfully completed the 42Lisboa Piscine, an intensive 26-day bootcamp focused on problem-solving and programming in C, which granted me admission to 42Lisboa, where I later worked on challenging projects.",
      paragraph4: "To further enhance my expertise, I have completed the IBM Full Stack Software Developer Professional Certificate, covering technologies such as React, Node.js, Django, Python, Docker, Kubernetes, Microservices, and AI applications.",
      paragraph5: "I thrive in collaborative environments where I can continuously learn, solve complex problems, and contribute to impactful projects. Excited to take on new challenges in software development!"
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Project Management System",
          description: "Full-stack application with authentication, task management, and real-time reporting",
          tech: ["React", "Node.js", "MySQL", "Docker"]
        },
        {
          title: "E-learning Platform",
          description: "Online course system with videos, quizzes, and certificates",
          tech: ["Django", "Python", "React", "PostgreSQL"]
        },
        {
          title: "E-commerce Microservices",
          description: "Distributed architecture for order processing",
          tech: ["Node.js", "Kubernetes", "RabbitMQ", "MongoDB"]
        }
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"] },
        { category: "Backend", items: ["Node.js", "Express.js", "Python", "Django"] },
        { category: "Database", items: ["MySQL", "MongoDB", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "Kubernetes", "Git", "CI/CD"] }
      ]
    },
    contact: {
      title: "Contact",
      description: "Interested in working together? Get in touch via the form or my social networks.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message"
      }
    },
    footer: "© 2025 Alexandre Rodrigues. All rights reserved."
  },
  pt: {
    home: {
      title: "Olá, sou o Alexandre Rodrigues",
      subtitle: "Full-Stack Developer apaixonado por criar soluções inovadoras",
      cta: "Vamos Conversar",
      downloadCV: "Download CV"
    },
    about: {
      title: "Sobre Mim",
      paragraph1: "Sou um Full-Stack Developer apaixonado por criar aplicações escaláveis e eficientes, com experiência tanto em backend quanto em frontend. A minha formação inclui uma Licenciatura em Informática, complementada por projetos práticos em Node.js, Express.js, MySQL e Azure.",
      paragraph2: "O meu projeto final académico, Quiz Game Rugby, é uma aplicação web que inclui autenticação, gestão de utilizadores segura, sistema de rankings e suporte multilíngue. Este projeto permitiu-me aplicar as minhas competências técnicas, além de criar uma plataforma intuitiva e envolvente que melhora a experiência dos fãs de rugby em todo o mundo.",
      paragraph3: "Concluí com sucesso a Piscine da 42Lisboa, um bootcamp intensivo de 26 dias focado em resolução de problemas e programação em C, o que me permitiu ser admitido na 42Lisboa, onde trabalhei em projetos desafiadores.",
      paragraph4: "Para aprimorar ainda mais as minhas competências, completei o IBM Full Stack Software Developer Professional Certificate, cobrindo tecnologias como React, Node.js, Django, Python, Docker, Kubernetes, Microserviços e aplicações de IA.",
      paragraph5: "Gosto de trabalhar em ambientes colaborativos onde posso continuar a aprender, resolver problemas complexos e contribuir para projetos impactantes. Estou entusiasmado para enfrentar novos desafios em desenvolvimento de software!"
    },
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contacto"
    },
    projects: {
      title: "Projetos",
      items: [
        {
          title: "Sistema de Gestão de Projetos",
          description: "Aplicação full-stack com autenticação, gestão de tarefas e relatórios em tempo real",
          tech: ["React", "Node.js", "MySQL", "Docker"]
        },
        {
          title: "Plataforma E-learning",
          description: "Sistema de cursos online com vídeos, quizzes e certificados",
          tech: ["Django", "Python", "React", "PostgreSQL"]
        },
        {
          title: "Microserviços de E-commerce",
          description: "Arquitetura distribuída para processamento de pedidos",
          tech: ["Node.js", "Kubernetes", "RabbitMQ", "MongoDB"]
        }
      ]
    },
    skills: {
      title: "Habilidades",
      categories: [
        { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"] },
        { category: "Backend", items: ["Node.js", "Express.js", "Python", "Django"] },
        { category: "Base de Dados", items: ["MySQL", "MongoDB", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "Kubernetes", "Git", "CI/CD"] }
      ]
    },
    contact: {
      title: "Contacto",
      description: "Interessado em trabalhar juntos? Entre em contacto através do formulário ou das minhas redes sociais.",
      form: {
        name: "Nome",
        email: "Email",
        message: "Mensagem",
        submit: "Enviar Mensagem"
      }
    },
    footer: "© 2025 Alexandre Rodrigues. Todos os direitos reservados."
  }
};


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const t = translations[language];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
      />
      <main className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Home t={t} />
          <About t={t} />
          <Projects darkMode={darkMode} t={t} />
          <Skills darkMode={darkMode} t={t} />
          <Contact darkMode={darkMode} t={t} />
        </motion.div>
      </main>
      <Footer darkMode={darkMode} t={t} />
    </div>
  );
};

export default App;
