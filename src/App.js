import React, { useState } from 'react';
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
      cta: "Let's Talk"
    },
    about: {
      title: "About Me",
      paragraph1: "Recently graduated in Computer Science, with practical experience gained at 42Lisboa and IBM Full Stack Software Developer Professional Certificate. Passionate about software development and always seeking new challenges.",
      paragraph2: "Specialized in full-stack web development, focusing on modern technologies like React, Node.js, and microservices architectures."
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
      cta: "Vamos Conversar"
    },
    about: {
      title: "Sobre Mim",
      paragraph1: "Recém-formado em Informática, com experiência prática adquirida na 42Lisboa e certificação IBM Full Stack Software Developer. Apaixonado por desenvolvimento de software e sempre em busca de novos desafios.",
      paragraph2: "Especializado em desenvolvimento web full-stack, com foco em tecnologias modernas como React, Node.js e arquiteturas de microserviços."
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

  const t = translations[language];

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
        <Home t={t} />
        <About t={t} />
        <Projects darkMode={darkMode} t={t} />
        <Skills darkMode={darkMode} t={t} />
        <Contact darkMode={darkMode} t={t} />
      </main>
      <Footer darkMode={darkMode} t={t} />
    </div>
  );
};

export default App;
