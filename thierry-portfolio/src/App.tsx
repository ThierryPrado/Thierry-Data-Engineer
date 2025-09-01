import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Estado para controlar o idioma atual
  const [currentLanguage, setCurrentLanguage] = useState('pt');

  // Traduções
  const translations = {
    pt: {
      nav: {
        inicio: 'Início',
        sobre: 'Sobre',
        experiencia: 'Experiência',
        habilidades: 'Habilidades',
        idiomas: 'Idiomas',
        certificacoes: 'Certificações',
        projetos: 'Projetos',
        contato: 'Contato'
      },
      hero: {
        greeting: 'Olá! Eu sou',
        role: 'Engenheiro de Dados',
        description: 'Profissional em transformar dados em insights valiosos através de tecnologias Azure e Power BI. Especialista em pipelines de dados, ETL e análise avançada para tomada de decisões estratégicas.',
        cta: 'Ver Meus Projetos'
      },
      stats: {
        experience: 'Anos de Experiência',
        projects: 'Projetos Concluídos',
        technologies: 'Tecnologias',
        dedication: 'Dedicação'
      },
      about: {
        title: 'Sobre Mim',
        subtitle: 'Conheça mais sobre minha trajetória e paixão por dados',
        description: 'Sou um engenheiro de dados apaixonado por transformar informações complexas em soluções práticas e insights acionáveis.',
        paragraph1: 'Formando em <strong>Engenheiro de Software</strong> pela <strong>PUCPR</strong>, sou apaixonado por manipular dados brutos e transformá-los em dados que trazem insights valiosos que impulsionam decisões de negócio. Me identifiquei com a <strong>Engenharia de Dados</strong> desde o inicio da minha carreira profissional, possuo experiência sólida em tecnologias Azure e forte expertise em Power BI, desenvolvendo soluções de dados escaláveis e eficientes.',
        paragraph2: 'Com foco em criar pipelines robustos, implementar arquiteturas de dados modernas e desenvolver dashboards interativos que facilitam a compreensão de informações complexas. Sempre busco aprender sobre tecnologias modernas para me manter atualizado e oferecer as melhores soluções.',
        highlights: {
          title: 'Principais Conquistas',
          experience: 'Experiência Profissional',
          experienceDesc: 'Anos desenvolvendo soluções em engenharia de dados',
          education: 'Formação Acadêmica',
          educationDesc: 'Graduação em Engenharia de Software pela PUCPR',
          innovation: 'Inovação',
          innovationDesc: 'Projetos utilizando tecnologias de ponta em análise de dados',
          results: {
            title: 'Foco em Resultados',
            description: 'Transformo dados em insights acionáveis para impulsionar o crescimento dos negócios'
          },
          tech: {
            title: 'Tecnologias Modernas',
            description: 'Especialista em Azure Data Factory, Databricks e Power BI para soluções escaláveis'
          },
          constant_innovation: {
            title: 'Inovação Constante',
            description: 'Sempre buscando novas formas de otimizar processos e melhorar a qualidade dos dados'
          }
        },
        mission: {
          title: 'Minha Missão',
          description: 'Democratizar o acesso aos dados através de soluções intuitivas e eficientes, capacitando equipes a tomar decisões baseadas em evidências e impulsionar o sucesso organizacional.'
        }
      },
      experience: {
        title: 'Experiência Profissional',
        subtitle: 'Minha trajetória no mundo dos dados',
        jobs: {
          v4: {
            title: 'Analista de Dados',
            company: 'V4 Company',
            period: 'Jul 2025 - Presente',
            achievements: [
              'Desenvolvimento e manutenção de dashboards em Power BI para análise de KPIs empresariais',
              'Análise de dados para suporte à tomada de decisões estratégicas',
              'Criação de relatórios automatizados e visualizações de dados interativas',
              'Colaboração com equipes multidisciplinares para implementação de soluções data-driven',
              'Otimização de processos de análise e reporting, aumentando eficiência operacional'
            ]
          },
          brf: {
            title: 'Estagiário de Engenharia de Dados',
            company: 'BRF S.A.',
            period: 'Ago 2023 - Jul 2025',
            achievements: [
              'Apoio no desenvolvimento de pipelines de dados para processamento de informações empresariais',
              'Participação em projetos de ETL utilizando ferramentas Azure',
              'Criação e manutenção de relatórios e dashboards em Power BI',
              'Análise e tratamento de dados para suporte a diferentes áreas de negócio',
              'Colaboração em projetos de migração e modernização de sistemas de dados'
            ]
          }
        }
      },
      skills: {
        title: 'Habilidades Técnicas',
        subtitle: 'Tecnologias e ferramentas que domino',
        categories: {
          programming: 'Linguagens de Programação',
          azure: 'Azure & Business Intelligence'
        }
      },
      languages: {
        title: 'Idiomas',
        subtitle: 'Competências linguísticas para comunicação global',
        english: 'Inglês',
        spanish: 'Espanhol',
        fluent: 'Fluente',
        intermediate: 'Intermediário',
        reading: 'Leitura',
        writing: 'Escrita',
        speaking: 'Conversação'
      },
      certifications: {
        title: 'Certificações',
        subtitle: 'Cursos e eventos que contribuíram para minha formação profissional',
        items: {
          gamejam: {
            title: 'Global Game Jam Curitiba 2023',
            institution: 'PUCPR - Escola Politécnica',
            period: '03/02/2023 - 05/02/2023',
            description: 'Participação no evento Global Game Jam, desenvolvendo jogos digitais de forma colaborativa e aplicando conceitos de programação e design.'
          },
          cc50: {
            title: 'CC50: Introdução à Ciência da Computação',
            institution: 'Fundação Estudar',
            period: '2024',
            description: 'Curso introdutório abrangente sobre ciência da computação, cobrindo algoritmos, estruturas de dados, programação e fundamentos teóricos.'
          },
          ethicalhacking: {
            title: 'Ethical Hacking',
            institution: 'PUCPR - Escola Politécnica',
            period: '2024',
            description: 'Curso sobre segurança cibernética e técnicas de hacking ético, incluindo testes de penetração, análise de vulnerabilidades e práticas de segurança.'
          }
        },
        tags: {
          gameDevelopment: 'Game Development',
          teamWork: 'Trabalho em Equipe',
          programming: 'Programação',
          scratch: 'Scratch',
          c: 'C',
          arrays: 'Arrays',
          algorithms: 'Algoritmos',
          dataStructures: 'Estruturas de Dados',
          python: 'Python',
          sql: 'SQL',
          htmlCssJs: 'HTML/CSS/JS',
          flask: 'Flask',
          codeSecurity: 'Segurança de Código',
          penetrationTesting: 'Penetration Testing',
          networkSecurity: 'Segurança de Redes',
          ethicalHacking: 'Ethical Hacking'
        }
      },
      projects: {
        title: 'Projetos em Destaque',
        subtitle: 'Alguns dos meus principais trabalhos e realizações',
        ndaNote: '* Por conta de NDAs assinados com as empresas com as quais trabalhei, não posso providenciar códigos fonte nem fotos dos projetos.',
        items: {
          dashboard: {
            title: 'Dashboard de Vendas Executivo',
            type: 'Power BI & Azure',
            description: 'Dashboard interativo desenvolvido em Power BI para análise de vendas executiva, integrando dados de múltiplas fontes via Azure Data Factory. Reduziu tempo e melhorou a tomada de decisões estratégicas.'
          },
          pipeline: {
            title: 'Pipeline de ETL Automatizado',
            type: 'Azure Data Engineering',
            description: 'Implementação de pipeline completo de ETL usando Azure Data Factory e Databricks para processamento de dados de vendas em tempo real. Processamento de 1M+ registros diários com 99.9% de confiabilidade.'
          },
          datawarehouse: {
            title: 'Data Warehouse Corporativo',
            type: 'Arquitetura de Dados',
            description: 'Arquitetura e implementação de Data Warehouse na Azure Cloud para centralização de dados corporativos. Integração de 15+ fontes de dados com modelagem dimensional otimizada para análises.'
          }
        }
      },
      contact: {
        title: 'Entre em Contato',
        subtitle: 'Vamos conversar sobre oportunidades e projetos',
        whatsapp: 'Whatsapp',
        emailLabel: 'Email',
        form: {
          title: 'Envie uma Mensagem',
          name: 'Seu Nome',
          email: 'Seu Email',
          subject: 'Assunto',
          message: 'Sua Mensagem',
          send: 'Enviar Mensagem'
        },
        social: {
          title: 'Conecte-se Comigo',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          email: 'Email'
        }
      },
      footer: {
        role: 'Engenheiro de Dados Azure',
        copyright: 'Todos os direitos reservados.',
        developed: 'Desenvolvido com React e muito Monster :)'
      }
    },
    en: {
      nav: {
        inicio: 'Home',
        sobre: 'About',
        experiencia: 'Experience',
        habilidades: 'Skills',
        idiomas: 'Languages',
        certificacoes: 'Certifications',
        projetos: 'Projects',
        contato: 'Contact'
      },
      hero: {
        greeting: 'Hello! I am',
        role: 'Data Engineer',
        description: 'Professional in transforming data into valuable insights through Azure and Power BI technologies. Specialist in data pipelines, ETL and advanced analysis for strategic decision making.',
        cta: 'View My Projects'
      },
      stats: {
        experience: 'Years of Experience',
        projects: 'Completed Projects',
        technologies: 'Technologies',
        dedication: 'Dedication'
      },
      about: {
        title: 'About Me',
        subtitle: 'Learn more about my journey and passion for data',
        description: 'I am a data engineer passionate about transforming complex information into practical solutions and actionable insights.',
        paragraph1: 'Graduating in <strong>Software Engineering</strong> from <strong>PUCPR</strong>, I am passionate about manipulating raw data and transforming it into data that brings valuable insights that drive business decisions. I identified with <strong>Data Engineering</strong> since the beginning of my professional career, I have solid experience in Azure technologies and strong expertise in Power BI, developing scalable and efficient data solutions.',
        paragraph2: 'With focus on creating robust pipelines, implementing modern data architectures and developing interactive dashboards that facilitate the understanding of complex information. I always seek to learn about modern technologies to stay updated and offer the best solutions.',
        highlights: {
          title: 'Key Achievements',
          experience: 'Professional Experience',
          experienceDesc: 'Years developing data engineering solutions',
          education: 'Academic Background',
          educationDesc: 'Software Engineering degree from PUCPR',
          innovation: 'Innovation',
          innovationDesc: 'Projects using cutting-edge data analysis technologies',
          results: {
            title: 'Results Focused',
            description: 'I transform data into actionable insights to drive business growth'
          },
          tech: {
            title: 'Modern Technologies',
            description: 'Expert in Azure Data Factory, Databricks and Power BI for scalable solutions'
          },
          constant_innovation: {
            title: 'Constant Innovation',
            description: 'Always seeking new ways to optimize processes and improve data quality'
          }
        },
        mission: {
          title: 'My Mission',
          description: 'Democratize data access through intuitive and efficient solutions, empowering teams to make evidence-based decisions and drive organizational success.'
        }
      },
      experience: {
        title: 'Professional Experience',
        subtitle: 'My journey in the world of data',
        jobs: {
          v4: {
            title: 'Data Analyst',
            company: 'V4 Company',
            period: 'Jul 2025 - Present',
            achievements: [
              'Development and maintenance of Power BI dashboards for business KPI analysis',
              'Data analysis to support strategic decision making',
              'Creation of automated reports and interactive data visualizations',
              'Collaboration with multidisciplinary teams to implement data-driven solutions',
              'Optimization of analysis and reporting processes, increasing operational efficiency'
            ]
          },
          brf: {
            title: 'Data Engineering Intern',
            company: 'BRF S.A.',
            period: 'Aug 2023 - Jul 2025',
            achievements: [
              'Support in developing data pipelines for business information processing',
              'Participation in ETL projects using Azure tools',
              'Creation and maintenance of reports and dashboards in Power BI',
              'Data analysis and treatment to support different business areas',
              'Collaboration on data systems migration and modernization projects'
            ]
          }
        }
      },
      skills: {
        title: 'Technical Skills',
        subtitle: 'Technologies and tools I master',
        categories: {
          programming: 'Programming Languages',
          azure: 'Azure & Business Intelligence'
        }
      },
      languages: {
        title: 'Languages',
        subtitle: 'Language skills for global communication',
        english: 'English',
        spanish: 'Spanish',
        fluent: 'Fluent',
        intermediate: 'Intermediate',
        reading: 'Reading',
        writing: 'Writing',
        speaking: 'Speaking'
      },
      certifications: {
        title: 'Certifications',
        subtitle: 'Courses and events that contributed to my professional development',
        items: {
          gamejam: {
            title: 'Global Game Jam Curitiba 2023',
            institution: 'PUCPR - Polytechnic School',
            period: '03/02/2023 - 05/02/2023',
            description: 'Participation in the Global Game Jam event, developing digital games collaboratively and applying programming and design concepts.'
          },
          cc50: {
            title: 'CC50: Introduction to Computer Science',
            institution: 'Fundação Estudar',
            period: '2024',
            description: 'Comprehensive introductory course on computer science, covering algorithms, data structures, programming and theoretical foundations.'
          },
          ethicalhacking: {
            title: 'Ethical Hacking',
            institution: 'PUCPR - Polytechnic School',
            period: '2024',
            description: 'Course on cybersecurity and ethical hacking techniques, including penetration testing, vulnerability analysis and security practices.'
          }
        },
        tags: {
          gameDevelopment: 'Game Development',
          teamWork: 'Team Work',
          programming: 'Programming',
          scratch: 'Scratch',
          c: 'C',
          arrays: 'Arrays',
          algorithms: 'Algorithms',
          dataStructures: 'Data Structures',
          python: 'Python',
          sql: 'SQL',
          htmlCssJs: 'HTML/CSS/JS',
          flask: 'Flask',
          codeSecurity: 'Code Security',
          penetrationTesting: 'Penetration Testing',
          networkSecurity: 'Network Security',
          ethicalHacking: 'Ethical Hacking'
        }
      },
      projects: {
        title: 'Featured Projects',
        subtitle: 'Some of my main works and achievements',
        ndaNote: '* Due to NDAs signed with the companies I worked with, I cannot provide source codes or project photos.',
        items: {
          dashboard: {
            title: 'Executive Sales Dashboard',
            type: 'Power BI & Azure',
            description: 'Interactive dashboard developed in Power BI for executive sales analysis, integrating data from multiple sources via Azure Data Factory. Reduced time and improved strategic decision making.'
          },
          pipeline: {
            title: 'Automated ETL Pipeline',
            type: 'Azure Data Engineering',
            description: 'Implementation of complete ETL pipeline using Azure Data Factory and Databricks for real-time sales data processing. Processing 1M+ daily records with 99.9% reliability.'
          },
          datawarehouse: {
            title: 'Corporate Data Warehouse',
            type: 'Data Architecture',
            description: 'Architecture and implementation of Data Warehouse in Azure Cloud for corporate data centralization. Integration of 15+ data sources with dimensional modeling optimized for analytics.'
          }
        }
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Let\'s talk about opportunities and projects',
        whatsapp: 'Whatsapp',
        emailLabel: 'Email',
        form: {
          title: 'Send a Message',
          name: 'Your Name',
          email: 'Your Email',
          subject: 'Subject',
          message: 'Your Message',
          send: 'Send Message'
        },
        social: {
          title: 'Connect with Me',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          email: 'Email'
        }
      },
      footer: {
        role: 'Azure Data Engineer',
        copyright: 'All rights reserved.',
        developed: 'Developed with React and lots of Monster :)'
      }
    },
    es: {
      nav: {
        inicio: 'Inicio',
        sobre: 'Acerca',
        experiencia: 'Experiencia',
        habilidades: 'Habilidades',
        idiomas: 'Idiomas',
        certificacoes: 'Certificaciones',
        projetos: 'Proyectos',
        contato: 'Contacto'
      },
      hero: {
        greeting: '¡Hola! Soy',
        role: 'Ingeniero de Datos',
        description: 'Profesional en transformar datos en insights valiosos a través de tecnologías Azure y Power BI. Especialista en pipelines de datos, ETL y análisis avanzado para toma de decisiones estratégicas.',
        cta: 'Ver Mis Proyectos'
      },
      stats: {
        experience: 'Años de Experiencia',
        projects: 'Proyectos Completados',
        technologies: 'Tecnologías',
        dedication: 'Dedicación'
      },
      about: {
        title: 'Acerca de Mí',
        subtitle: 'Conoce más sobre mi trayectoria y pasión por los datos',
        description: 'Soy un ingeniero de datos apasionado por transformar información compleja en soluciones prácticas e insights accionables.',
        paragraph1: 'Graduándome en <strong>Ingeniería de Software</strong> en <strong>PUCPR</strong>, soy apasionado por manipular datos brutos y transformarlos en datos que traen insights valiosos que impulsan las decisiones de negocio. Me identifiqué con la <strong>Ingeniería de Datos</strong> desde el inicio de mi carrera profesional, poseo experiencia sólida en tecnologías Azure y fuerte expertise en Power BI, desarrollando soluciones de datos escalables y eficientes.',
        paragraph2: 'Con enfoque en crear pipelines robustos, implementar arquitecturas de datos modernas y desarrollar dashboards interactivos que facilitan la comprensión de informaciones complejas. Siempre busco aprender sobre tecnologías modernas para mantenerme actualizado y ofrecer las mejores soluciones.',
        highlights: {
          title: 'Principales Logros',
          experience: 'Experiencia Profesional',
          experienceDesc: 'Años desarrollando soluciones en ingeniería de datos',
          education: 'Formación Académica',
          educationDesc: 'Graduación en Ingeniería de Software por PUCPR',
          innovation: 'Innovación',
          innovationDesc: 'Proyectos utilizando tecnologías de vanguardia en análisis de datos',
          results: {
            title: 'Enfocado en Resultados',
            description: 'Transformo datos en insights accionables para impulsar el crecimiento del negocio'
          },
          tech: {
            title: 'Tecnologías Modernas',
            description: 'Experto en Azure Data Factory, Databricks y Power BI para soluciones escalables'
          },
          constant_innovation: {
            title: 'Innovación Constante',
            description: 'Siempre buscando nuevas formas de optimizar procesos y mejorar la calidad de los datos'
          }
        },
        mission: {
          title: 'Mi Misión',
          description: 'Democratizar el acceso a los datos a través de soluciones intuitivas y eficientes, capacitando equipos para tomar decisiones basadas en evidencias e impulsar el éxito organizacional.'
        }
      },
      experience: {
        title: 'Experiencia Profesional',
        subtitle: 'Mi trayectoria en el mundo de los datos',
        jobs: {
          v4: {
            title: 'Analista de Datos',
            company: 'V4 Company',
            period: 'Jul 2025 - Presente',
            achievements: [
              'Desarrollo y mantenimiento de dashboards en Power BI para análisis de KPIs empresariales',
              'Análisis de datos para apoyo en la toma de decisiones estratégicas',
              'Creación de reportes automatizados y visualizaciones de datos interactivas',
              'Colaboración con equipos multidisciplinarios para implementación de soluciones data-driven',
              'Optimización de procesos de análisis y reporting, aumentando eficiencia operacional'
            ]
          },
          brf: {
            title: 'Pasante de Ingeniería de Datos',
            company: 'BRF S.A.',
            period: 'Ago 2023 - Jul 2025',
            achievements: [
              'Apoyo en el desarrollo de pipelines de datos para procesamiento de información empresarial',
              'Participación en proyectos de ETL utilizando herramientas Azure',
              'Creación y mantenimiento de reportes y dashboards en Power BI',
              'Análisis y tratamiento de datos para apoyo a diferentes áreas de negocio',
              'Colaboración en proyectos de migración y modernización de sistemas de datos'
            ]
          }
        }
      },
      skills: {
        title: 'Habilidades Técnicas',
        subtitle: 'Tecnologías y herramientas que domino',
        categories: {
          programming: 'Lenguajes de Programación',
          azure: 'Azure & Business Intelligence'
        }
      },
      languages: {
        title: 'Idiomas',
        subtitle: 'Competencias lingüísticas para comunicación global',
        english: 'Inglés',
        spanish: 'Español',
        fluent: 'Fluido',
        intermediate: 'Intermedio',
        reading: 'Lectura',
        writing: 'Escritura',
        speaking: 'Conversación'
      },
      certifications: {
        title: 'Certificaciones',
        subtitle: 'Cursos y eventos que contribuyeron a mi formación profesional',
        items: {
          gamejam: {
            title: 'Global Game Jam Curitiba 2023',
            institution: 'PUCPR - Escuela Politécnica',
            period: '03/02/2023 - 05/02/2023',
            description: 'Participación en el evento Global Game Jam, desarrollando juegos digitales de forma colaborativa y aplicando conceptos de programación y diseño.'
          },
          cc50: {
            title: 'CC50: Introducción a las Ciencias de la Computación',
            institution: 'Fundação Estudar',
            period: '2024',
            description: 'Curso introductorio integral sobre ciencias de la computación, cubriendo algoritmos, estructuras de datos, programación y fundamentos teóricos.'
          },
          ethicalhacking: {
            title: 'Ethical Hacking',
            institution: 'PUCPR - Escuela Politécnica',
            period: '2024',
            description: 'Curso sobre ciberseguridad y técnicas de hacking ético, incluyendo pruebas de penetración, análisis de vulnerabilidades y prácticas de seguridad.'
          }
        },
        tags: {
          gameDevelopment: 'Desarrollo de Juegos',
          teamWork: 'Trabajo en Equipo',
          programming: 'Programación',
          scratch: 'Scratch',
          c: 'C',
          arrays: 'Arrays',
          algorithms: 'Algoritmos',
          dataStructures: 'Estructuras de Datos',
          python: 'Python',
          sql: 'SQL',
          htmlCssJs: 'HTML/CSS/JS',
          flask: 'Flask',
          codeSecurity: 'Seguridad de Código',
          penetrationTesting: 'Pruebas de Penetración',
          networkSecurity: 'Seguridad de Redes',
          ethicalHacking: 'Ethical Hacking'
        }
      },
      projects: {
        title: 'Proyectos Destacados',
        subtitle: 'Algunos de mis principales trabajos y logros',
        ndaNote: '* Debido a NDAs firmados con las empresas con las que trabajé, no puedo proporcionar códigos fuente ni fotos de los proyectos.',
        items: {
          dashboard: {
            title: 'Dashboard de Ventas Ejecutivo',
            type: 'Power BI & Azure',
            description: 'Dashboard interactivo desarrollado en Power BI para análisis de ventas ejecutivas, integrando datos de múltiples fuentes vía Azure Data Factory. Redujo tiempo y mejoró la toma de decisiones estratégicas.'
          },
          pipeline: {
            title: 'Pipeline de ETL Automatizado',
            type: 'Azure Data Engineering',
            description: 'Implementación de pipeline completo de ETL usando Azure Data Factory y Databricks para procesamiento de datos de ventas en tiempo real. Procesamiento de 1M+ registros diarios con 99.9% de confiabilidad.'
          },
          datawarehouse: {
            title: 'Data Warehouse Corporativo',
            type: 'Arquitectura de Datos',
            description: 'Arquitectura e implementación de Data Warehouse en Azure Cloud para centralización de datos corporativos. Integración de 15+ fuentes de datos con modelado dimensional optimizado para análisis.'
          }
        }
      },
      contact: {
        title: 'Ponte en Contacto',
        subtitle: 'Hablemos sobre oportunidades y proyectos',
        whatsapp: 'Whatsapp',
        emailLabel: 'Email',
        form: {
          title: 'Envía un Mensaje',
          name: 'Tu Nombre',
          email: 'Tu Email',
          subject: 'Asunto',
          message: 'Tu Mensaje',
          send: 'Enviar Mensaje'
        },
        social: {
          title: 'Conéctate Conmigo',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          email: 'Email'
        }
      },
      footer: {
        role: 'Ingeniero de Datos Azure',
        copyright: 'Todos los derechos reservados.',
        developed: 'Desarrollado con React y mucho Monster :)'
      }
    }
  };

  // Função para trocar idioma
  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  // Função para obter tradução
  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[currentLanguage as keyof typeof translations];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };
  // Função para scroll suave com offset personalizado
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60; // Altura do header fixo
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          
          // Animações específicas para diferentes elementos
          if (entry.target.classList.contains('item-estatistica')) {
            const delay = Array.from(entry.target.parentNode!.children).indexOf(entry.target) * 100;
            (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
          }
          
          if (entry.target.classList.contains('item-habilidade')) {
            const delay = Array.from(entry.target.parentNode!.children).indexOf(entry.target) * 150;
            (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
          }
          
          if (entry.target.classList.contains('cartao-projeto')) {
            const delay = Array.from(entry.target.parentNode!.children).indexOf(entry.target) * 200;
            (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
          }
        }
      });
    }, observerOptions);

    // Observar elementos que devem ser animados
    const animatedElements = document.querySelectorAll('.item-estatistica, .item-habilidade, .cartao-projeto, .item-linha-tempo, .conteudo-sobre');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Header/Navigation */}
      <header className="cabecalho">
        <div className="container">
          <div className="marca-navegacao">
            <h2>Thierry Prado Guimarães</h2>
            <span>Data Engineer</span>
          </div>
          <div className="navegacao-wrapper">
            <nav className="navegacao">
              <button onClick={() => scrollToSection('inicio')} className="link-navegacao">{t('nav.inicio')}</button>
              <button onClick={() => scrollToSection('sobre')} className="link-navegacao">{t('nav.sobre')}</button>
              <button onClick={() => scrollToSection('experiencia')} className="link-navegacao">{t('nav.experiencia')}</button>
              <button onClick={() => scrollToSection('habilidades')} className="link-navegacao">{t('nav.habilidades')}</button>
              <button onClick={() => scrollToSection('idiomas')} className="link-navegacao">{t('nav.idiomas')}</button>
              <button onClick={() => scrollToSection('certificacoes')} className="link-navegacao">{t('nav.certificacoes')}</button>
              <button onClick={() => scrollToSection('projetos')} className="link-navegacao">{t('nav.projetos')}</button>
              <button onClick={() => scrollToSection('contato')} className="link-navegacao">{t('nav.contato')}</button>
            </nav>
            <div className="seletor-idioma">
              <button 
                onClick={() => changeLanguage('pt')} 
                className={`botao-idioma ${currentLanguage === 'pt' ? 'ativo' : ''}`}
              >
                PT
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`botao-idioma ${currentLanguage === 'en' ? 'ativo' : ''}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('es')} 
                className={`botao-idioma ${currentLanguage === 'es' ? 'ativo' : ''}`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section id="inicio" className="heroi">
          <div className="container">
            <div className="conteudo-heroi">
              <div className="texto-heroi">
                <h1>
                  {t('hero.greeting')} <span className="destaque">Thierry Prado Guimarães</span>
                </h1>
                <h2>{t('hero.role')}</h2>
                <p className="descricao-heroi">
                  {t('hero.description')}
                </p>
                <button 
                  onClick={() => scrollToSection('projetos')} 
                  className="botao-cta"
                >
                  {t('hero.cta')}
                </button>
              </div>
              <div className="imagem-heroi">
                <div className="placeholder-perfil">
                  <div className="icones-tecnologia">
                    <div className="icone-tech icone-1">📊</div>
                    <div className="icone-tech icone-2">⚡</div>
                    <div className="icone-tech icone-3">🔗</div>
                    <div className="icone-tech icone-4">📈</div>
                    <div className="icone-central">💾</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="indicador-scroll" onClick={() => scrollToSection('sobre')}>
              <div className="seta-scroll">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Role para conhecer mais</p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="estatisticas">
          <div className="container">
            <div className="grade-estatisticas">
              <div className="item-estatistica">
                <h3>2+</h3>
                <p>{t('stats.experience')}</p>
              </div>
              <div className="item-estatistica">
                <h3>15+</h3>
                <p>{t('stats.projects')}</p>
              </div>
              <div className="item-estatistica">
                <h3>8+</h3>
                <p>{t('stats.technologies')}</p>
              </div>
              <div className="item-estatistica">
                <h3>100%</h3>
                <p>{t('stats.dedication')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="sobre">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>{t('about.title')}</h2>
              <p>{t('about.subtitle')}</p>
            </div>
            <div className="conteudo-sobre">
              <div className="texto-sobre">
                 <p dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }}></p>
                 <p dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }}></p>
                
                <div className="destaques">
                  <div className="item-destaque">
                    <span className="icone-destaque">🎯</span>
                    <div>
                      <h4>{t('about.highlights.results.title')}</h4>
                      <p>{t('about.highlights.results.description')}</p>
                    </div>
                  </div>
                  <div className="item-destaque">
                    <span className="icone-destaque">⚡</span>
                    <div>
                      <h4>{t('about.highlights.tech.title')}</h4>
                      <p>{t('about.highlights.tech.description')}</p>
                    </div>
                  </div>
                  <div className="item-destaque">
                    <span className="icone-destaque">🚀</span>
                    <div>
                      <h4>{t('about.highlights.constant_innovation.title')}</h4>
                      <p>{t('about.highlights.constant_innovation.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cartao-sobre">
                <h3>{t('about.mission.title')}</h3>
                <p>{t('about.mission.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="experiencia">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>{t('experience.title')}</h2>
              <p>{t('experience.subtitle')}</p>
            </div>
            
            <div className="linha-tempo">
              <div className="item-linha-tempo">
                <div className="marcador-linha-tempo"></div>
                <div className="conteudo-linha-tempo">
                  <div className="cabecalho-linha-tempo">
                    <h3>{t('experience.jobs.v4.title')}</h3>
                    <span className="empresa">{t('experience.jobs.v4.company')}</span>
                    <span className="periodo">{t('experience.jobs.v4.period')}</span>
                  </div>
                  <ul className="conquistas">
                    {(translations as any)[currentLanguage].experience.jobs.v4.achievements.map((achievement: string, index: number) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="tags-tecnologia">
                    <span>Power BI</span>
                    <span>SQL</span>
                    <span>Python</span>
                    <span>Excel</span>
                    <span>DAX</span>
                  </div>
                </div>
              </div>
              
              <div className="item-linha-tempo">
                <div className="marcador-linha-tempo"></div>
                <div className="conteudo-linha-tempo">
                  <div className="cabecalho-linha-tempo">
                    <h3>{t('experience.jobs.brf.title')}</h3>
                    <span className="empresa">{t('experience.jobs.brf.company')}</span>
                    <span className="periodo">{t('experience.jobs.brf.period')}</span>
                  </div>
                  <ul className="conquistas">
                    {(translations as any)[currentLanguage].experience.jobs.brf.achievements.map((achievement: string, index: number) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="tags-tecnologia">
                    <span>Power BI</span>
                    <span>Azure Data Factory</span>
                    <span>SQL Server</span>
                    <span>Python</span>
                    <span>Excel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="habilidades">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>{t('skills.title')}</h2>
              <p>{t('skills.subtitle')}</p>
            </div>
            <div className="conteudo-habilidades">
              <div className="categoria-habilidades">
                <h3>{t('skills.categories.programming')}</h3>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>Python</span>
                    <span>90%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>SQL</span>
                    <span>85%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>R</span>
                    <span>60%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>

              <div className="categoria-habilidades">
                <h3>{t('skills.categories.azure')}</h3>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>Power BI</span>
                    <span>90%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>Azure Data Factory</span>
                    <span>80%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>Azure Databricks</span>
                    <span>75%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="idiomas" className="idiomas">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>{t('languages.title')}</h2>
              <p>{t('languages.subtitle')}</p>
            </div>
            
            <div className="grade-idiomas">
              <div className="cartao-idioma">
                <div className="cabecalho-idioma">
                  <span className="bandeira">US</span>
                  <h3>{t('languages.english')}</h3>
                </div>
                <div className="nivel-idioma">
                  <span className="nivel-texto">{t('languages.fluent')}</span>
                  <div className="barra-progresso">
                    <div className="progresso" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="habilidades-idioma">
                  <div className="habilidade">
                    <span>{t('languages.reading')}</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                    </div>
                  </div>
                  <div className="habilidade">
                    <span>{t('languages.writing')}</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                    </div>
                  </div>
                  <div className="habilidade">
                    <span>{t('languages.speaking')}</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cartao-idioma">
                <div className="cabecalho-idioma">
                  <span className="bandeira">ES</span>
                  <h3>{t('languages.spanish')}</h3>
                </div>
                <div className="nivel-idioma">
                  <span className="nivel-texto">{t('languages.intermediate')}</span>
                  <div className="barra-progresso">
                    <div className="progresso" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="habilidades-idioma">
                  <div className="habilidade">
                    <span>{t('languages.reading')}</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto"></div>
                    </div>
                  </div>
                  <div className="habilidade">
                    <span>{t('languages.writing')}</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto"></div>
                      <div className="ponto"></div>
                    </div>
                  </div>
                  <div className="habilidade">
                    <span>{t('languages.speaking')}</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto"></div>
                      <div className="ponto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certificacoes" className="certificacoes">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>{t('certifications.title')}</h2>
              <p>{t('certifications.subtitle')}</p>
            </div>
            
            <div className="grade-certificacoes">
              <div className="cartao-certificacao">
                <div className="icone-certificacao">
                  🏆
                </div>
                <div className="conteudo-certificacao">
                  <h3>{t('certifications.items.gamejam.title')}</h3>
                  <p className="instituicao">{t('certifications.items.gamejam.institution')}</p>
                  <p className="periodo">{t('certifications.items.gamejam.period')}</p>
                  <p className="descricao">
                    {t('certifications.items.gamejam.description')}
                  </p>
                  <div className="habilidades-certificacao">
                    <span className="tag-habilidade">{t('certifications.tags.gameDevelopment')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.teamWork')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.programming')}</span>
                  </div>
                </div>
              </div>

              <div className="cartao-certificacao">
                <div className="icone-certificacao">
                  📚
                </div>
                <div className="conteudo-certificacao">
                  <h3>{t('certifications.items.cc50.title')}</h3>
                  <p className="instituicao">{t('certifications.items.cc50.institution')}</p>
                  <p className="periodo">{t('certifications.items.cc50.period')}</p>
                  <p className="descricao">
                    {t('certifications.items.cc50.description')}
                  </p>
                  <div className="habilidades-certificacao">
                    <span className="tag-habilidade">{t('certifications.tags.scratch')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.c')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.arrays')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.algorithms')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.dataStructures')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.python')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.sql')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.htmlCssJs')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.flask')}</span>
                  </div>
                </div>
              </div>

              <div className="cartao-certificacao">
                <div className="icone-certificacao">
                  🔒
                </div>
                <div className="conteudo-certificacao">
                  <h3>{t('certifications.items.ethicalhacking.title')}</h3>
                  <p className="instituicao">{t('certifications.items.ethicalhacking.institution')}</p>
                  <p className="periodo">{t('certifications.items.ethicalhacking.period')}</p>
                  <p className="descricao">
                    {t('certifications.items.ethicalhacking.description')}
                  </p>
                  <div className="habilidades-certificacao">
                    <span className="tag-habilidade">{t('certifications.tags.codeSecurity')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.penetrationTesting')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.networkSecurity')}</span>
                    <span className="tag-habilidade">{t('certifications.tags.ethicalHacking')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="projetos">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>{t('projects.title')}</h2>
              <p>{t('projects.subtitle')}</p>
            </div>
            
            <div className="aviso-nda">
              <p>
                <em>{t('projects.ndaNote')}</em>
              </p>
            </div>
            
            <div className="grade-projetos">
              <div className="cartao-projeto">
                <div className="cabecalho-projeto">
                  <h3>{t('projects.items.dashboard.title')}</h3>
                  <span className="tipo-projeto">{t('projects.items.dashboard.type')}</span>
                </div>
                <p>
                  {t('projects.items.dashboard.description')}
                </p>
                <div className="pilha-tecnologias">
                  <span>Power BI</span>
                  <span>Azure Data Factory</span>
                  <span>SQL Server</span>
                  <span>DAX</span>
                </div>
              </div>

              <div className="cartao-projeto">
                <div className="cabecalho-projeto">
                  <h3>{t('projects.items.pipeline.title')}</h3>
                  <span className="tipo-projeto">{t('projects.items.pipeline.type')}</span>
                </div>
                <p>
                  {t('projects.items.pipeline.description')}
                </p>
                <div className="pilha-tecnologias">
                  <span>Azure Data Factory</span>
                  <span>Azure Databricks</span>
                  <span>Python</span>
                  <span>Apache Spark</span>
                </div>
              </div>

              <div className="cartao-projeto">
                <div className="cabecalho-projeto">
                  <h3>{t('projects.items.datawarehouse.title')}</h3>
                  <span className="tipo-projeto">{t('projects.items.datawarehouse.type')}</span>
                </div>
                <p>
                  {t('projects.items.datawarehouse.description')}
                </p>
                <div className="pilha-tecnologias">
                  <span>Azure Synapse</span>
                  <span>SQL Server</span>
                  <span>Azure Data Factory</span>
                  <span>Power BI</span>
                </div>
              </div>

              <div className="cartao-projeto">
                <div className="cabecalho-projeto">
                  <h3>Automação de Relatórios Financeiros</h3>
                  <span className="tipo-projeto">Business Intelligence</span>
                </div>
                <p>
                  Automação completa de relatórios financeiros mensais utilizando Power BI e Azure. 
                  Redução de ~45% no tempo de preparação de relatórios e eliminação de erros manuais 
                  através de validações automatizadas.
                </p>
                <div className="pilha-tecnologias">
                  <span>Power BI</span>
                  <span>Azure Data Factory</span>
                  <span>Python</span>
                  <span>Excel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="contato">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>{t('contact.title')}</h2>
              <p>{t('contact.subtitle')}</p>
            </div>
            
            <div className="conteudo-contato">
              <div className="info-contato">
                <div className="item-contato">
                  <div className="icone-contato">
                    <span>💬</span>
                  </div>
                  <div className="detalhes-contato">
                    <h3>{t('contact.whatsapp')}</h3>
                    <a href="tel:+5541992253300">(41) 99225-3300</a>
                  </div>
                </div>
                
                <div className="item-contato">
                  <div className="icone-contato">
                    <span>✉️</span>
                  </div>
                  <div className="detalhes-contato">
                    <h3>{t('contact.emailLabel')}</h3>
                    <a href="mailto:thierrypguimaraes@gmail.com">thierrypguimaraes@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="formulario-contato">
                <h3>{t('contact.form.title')}</h3>
                <form className="formulario">
                  <div className="grupo-formulario">
                    <input type="text" placeholder={t('contact.form.name')} required />
                  </div>
                  <div className="grupo-formulario">
                    <input type="email" placeholder={t('contact.form.email')} required />
                  </div>
                  <div className="grupo-formulario">
                    <input type="text" placeholder={t('contact.form.subject')} required />
                  </div>
                  <div className="grupo-formulario">
                    <textarea placeholder={t('contact.form.message')} rows={5} required></textarea>
                  </div>
                  <button type="submit" className="botao botao-primario">
                    {t('contact.form.send')}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="links-sociais">
              <h3>{t('contact.social.title')}</h3>
              <div className="icones-sociais">
                <a href="https://www.linkedin.com/in/thierry-guimaraes/" className="icone-social linkedin" target="_blank" rel="noopener noreferrer">
                  <span>💼</span>
                  <span>{t('contact.social.linkedin')}</span>
                </a>
                <a href="https://github.com/ThierryPrado" className="icone-social github" target="_blank" rel="noopener noreferrer">
                  <span>⚡</span>
                  <span>{t('contact.social.github')}</span>
                </a>
                <a href="mailto:thierrypguimaraes@gmail.com" className="icone-social email">
                  <span>📧</span>
                  <span>{t('contact.social.email')}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="rodape">
        <div className="container">
          <div className="conteudo-rodape">
            <div className="rodape-esquerda">
              <h3>Thierry Prado</h3>
              <p>{t('footer.role')}</p>
            </div>
            <div className="rodape-direita">
              <p>&copy; 2025 Thierry Prado. {t('footer.copyright')}</p>
              <p>{t('footer.developed')}</p>  
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
