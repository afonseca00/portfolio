import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import image1L from './assets/Screenshots_F/1-inicial.png';
import image2L from './assets/Screenshots_F/2-registo.png';
import image3L from './assets/Screenshots_F/3-Email_de_verificacao.png';
import image4L from './assets/Screenshots_F/4-login.png';
import image5L from './assets/Screenshots_F/5-recuperacao_de_password.png';
import image6L from './assets/Screenshots_F/6-email_de_recuperacao.png';
import image7L from './assets/Screenshots_F/7-Redefinir_password.png';
import image8L from './assets/Screenshots_F/8-Dashboard.png';
import image9L from './assets/Screenshots_F/9-Quiz.png';
import image10L from './assets/Screenshots_F/10-Resumo_quiz.png';
import image11L from './assets/Screenshots_F/11-Rankings.png';
import image12L from './assets/Screenshots_F/12-MySQL.png';
import image1D from './assets/Screenshots_D/deployed_loggedin.png';
import image2D from './assets/Screenshots_D/about_us.png';
import image3D from './assets/Screenshots_D/contact_us.png';
import image4D from './assets/Screenshots_D/sign-up.png';
import image5D from './assets/Screenshots_D/login1.png';
import image6D from './assets/Screenshots_D/car_models.png';
import image7D from './assets/Screenshots_D/sentiment_analyzer.png';
import image8D from './assets/Screenshots_D/dealersbystate.png';
import image9D from './assets/Screenshots_D/dealership_review_submission.png';
import image10D from './assets/Screenshots_D/deployed_add_review.png';
import IBMLogo from './assets/IBM_logo.png';
import Logo42 from './assets/42_Logo.png';
import Logo_ISTEC from './assets/Logo_ISTEC.png';


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
      paragraph2: "My capstone project, Dealerships Review Portal, is a web application for a national car dealership that allows users to view dealership information, leave reviews, and see sentiment analysis of those reviews. It includes features such as user roles (anonymous, authorized, and admin), review management, and sentiment analysis using IBM Cloud-based services.",
      paragraph3: "I successfully completed the 42Lisboa Piscine, an intensive 26-day bootcamp focused on problem-solving and programming in C, which granted me admission to 42Lisboa, where I later worked on challenging projects.",
      paragraph4: "To further enhance my expertise, I have completed the IBM Full Stack Software Developer Professional Certificate, covering technologies such as React, Node.js, Django, Python, Docker, Kubernetes, Microservices, and AI applications.",
      paragraph5: "I thrive in collaborative environments where I can continuously learn, solve complex problems, and contribute to impactful projects. Excited to take on new challenges in software development!"
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      certificates: "Certificates", 
      contact: "Contact"
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Tackle Trivia - Quiz Game Rugby",
          description: "Interactive platform with Rugby-themed quizzes, rankings, and multilingual support.",
          tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt", "Azure"],
          github: "https://github.com/afonseca00/quiz-game-rugby",
          screenshots: [
            image1L,
            image2L,
            image3L,
            image4L,
            image5L,
            image6L,
            image7L,
            image8L,
            image9L,
            image10L,
            image11L,
            image12L
          ]
        },
        {
          title: "Dealerships Review Portal",
          description: "Web application to view and leave reviews for car dealerships with sentiment analysis.",
          tech: ["Django", "React", "Node.js", "MongoDB", "IBM Cloud", "Docker", "CI/CD"],
          github: "https://github.com/afonseca00/IBM_Full_Stack_Application_Development_Capstone_Project",
          screenshots: [
            image1D,
            image2D,
            image3D,
            image4D,
            image5D,
            image6D,
            image7D,
            image8D,
            image9D,
            image10D
          ]
        }
      ]
    },
    certificates: {
      title: "Certificates",
      viewAll: "View All Certificates",
      viewAllLink: "https://www.credly.com/users/alexandre-rodrigues.3abb7572",
      verify: "Verify",
      items: [
        {
          title: "IBM Full Stack Software Developer",
          issuer: "IBM",
          logo: IBMLogo,
          description: "Professional certification covering full-stack development with React, Node.js, and cloud technologies.",
          date: "2025",
          link: "https://www.credly.com/badges/32b18202-141c-49aa-9128-fd67cdbf8e2e/public_url"
        },
        {
          title: "42Lisboa Piscine",
          issuer: "42Lisboa",
          logo: Logo42,
          description: "Intensive programming bootcamp focused on C programming and problem-solving.",
          date: "2024",
          link: "https://www.linkedin.com/posts/alexandref-rodrigues_42lisboa-42network-school42-activity-6986844537436418049-7W5M?utm_source=share&utm_medium=member_desktop"
        },
        {
          title: "Computer Science",
          issuer: "Bachelor's degree",
          logo: Logo_ISTEC,
          date: "2024",
        }
        // Add more certificates as needed
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"] },
        { category: "Backend", items: ["Node.js", "Express.js", "Python", "Django", "Java"] },
        { category: "Base de Dados", items: ["MySQL", "MongoDB", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "Kubernetes", "Git", "CI/CD", "IBM Clound", "Azure"] }
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
      paragraph1: "Sou um Full-Stack Developer apaixonado por criar aplicações escaláveis e eficientes, com experiência tanto em backend como em frontend. A minha formação inclui uma Licenciatura em Informática, complementada por projetos práticos em Node.js, Express.js, MySQL e Azure.",
      paragraph2: "O meu projeto final de capstone, Dealerships Review Portal, é uma aplicação web para uma rede nacional de concessionárias, permitindo que os utilizadores visualizem informações sobre as concessionárias, deixem avaliações e consultem a análise de sentimentos dessas avaliações. Inclui funcionalidades como diferentes perfis de utilizador (anónimos, autorizados e administradores), gestão de avaliações e análise de sentimentos através de serviços baseados na IBM Cloud.",
      paragraph3: "Concluí com sucesso a Piscine da 42Lisboa, um bootcamp intensivo de 26 dias focado na resolução de problemas e programação em C, o que me permitiu ser admitido na 42Lisboa, onde trabalhei em projetos desafiantes.",
      paragraph4: "Para aprimorar ainda mais as minhas competências, completei o IBM Full Stack Software Developer Professional Certificate, cobrindo tecnologias como React, Node.js, Django, Python, Docker, Kubernetes, microserviços e aplicações de IA.",
      paragraph5: "Gosto de trabalhar em ambientes colaborativos onde posso continuar a aprender, resolver problemas complexos e contribuir para projetos impactantes. Estou entusiasmado para enfrentar novos desafios no desenvolvimento de software!"
    },
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      certificates: "Certificados",
      contact: "Contacto"
    },
    projects: {
      title: "Projetos",
      items: [
        {
          title: "Tackle Trivia - Quiz Game Rugby",
          description: "Plataforma interativa com quizzes sobre Rugby, rankings e suporte multilíngue.",
          tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt", "Azure"],
          github: "https://github.com/afonseca00/quiz-game-rugby",
          screenshots: [
            image1L,
            image2L,
            image3L,
            image4L,
            image5L,
            image6L,
            image7L,
            image8L,
            image9L,
            image10L,
            image11L,
            image12L
          ]
        },
        {
          title: "Dealerships Review Portal",
          description: "Aplicação web para visualizar e deixar avaliações sobre concessionárias de carros com análise de sentimentos.",
          tech: ["Django", "React", "Node.js", "MongoDB", "IBM Cloud", "Docker", "CI/CD"],
          github: "https://github.com/afonseca00/IBM_Full_Stack_Application_Development_Capstone_Project",
          screenshots: [
            image1D,
            image2D,
            image3D,
            image4D,
            image5D,
            image6D,
            image7D,
            image8D,
            image9D,
            image10D
          ]
        }
      ]
    },
    skills: {
      title: "Habilidades",
      categories: [
        { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"] },
        { category: "Backend", items: ["Node.js", "Express.js", "Python", "Django", "Java"] },
        { category: "Base de Dados", items: ["MySQL", "MongoDB", "PostgreSQL"] },
        { category: "DevOps", items: ["Docker", "Kubernetes", "Git", "CI/CD", "IBM Clound", "Azure"] }
      ]
    },certificates: {
      title: "Certificados",
      viewAll: "Ver Todos os Certificados",
      viewAllLink: "https://www.credly.com/users/alexandre-rodrigues.3abb7572",
      verify: "Verificar",
      items: [
        {
          title: "IBM Full Stack Software Developer",
          issuer: "IBM",
          logo: IBMLogo,
          description: "Certificação profissional abrangendo desenvolvimento full-stack com React, Node.js e tecnologias cloud.",
          date: "2024",
          link: "https://www.credly.com/badges/32b18202-141c-49aa-9128-fd67cdbf8e2e/public_url"
        },
        {
          title: "42Lisboa Piscine",
          issuer: "42Lisboa",
          logo: Logo42,
          description: "Bootcamp intensivo de programação focado em programação em C e resolução de problemas.",
          date: "2023",
          link: "https://www.linkedin.com/posts/alexandref-rodrigues_42lisboa-42network-school42-activity-6986844537436418049-7W5M?utm_source=share&utm_medium=member_desktop"
        },
        {
          title: "Informática",
          issuer: "Licenciatura",
          logo: Logo_ISTEC,
          date: "2024",
        }
        // Add more certificates as needed
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
          <Certificates darkMode={darkMode} t={t} />
          <Contact darkMode={darkMode} t={t} />
        </motion.div>
      </main>
      <Footer darkMode={darkMode} t={t} />
    </div>
  );
};

export default App;