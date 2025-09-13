// Traducciones
export const translations = {
  en: {
    site: {
      title: "Christian Portfolio",
      description: "Full Stack Developer Portfolio",
      subtitle: "This is a more complex string to translate, mixed with html elements, such as a cool link!"
    },
    navbar: {
      about: "About",
      skills: "Skills",
      work: "Work",
      contact: "Contact"
    },
    header: {
      firstName: "Christian",
      lastName: "Rodrigo",
      role1: "Software",
      role2: "Web Developer",
      subtitle: "Crafting modern, fast, and user-centered web experiences",
      getInTouch: "Get in touch",
      downloadCV: "Download CV"
    },
    about: {
      title: "About",
      intro: "Hi! I'm Christian, a web developer passionate about building unique and high-performance interfaces. My curiosity drives me to learn every day — from web frameworks to mobile development.",
      teamwork: "When working in a team, I quickly adapt to methodologies and workflows, while keeping my code clean and faithful to the design.",
      hobbies: "Outside of work, I enjoy role-playing and fantasy video games, spending time with my partner, and practicing sports like climbing and hiking.",
      cards: {
        cleanCodeTitle: "Clean Code",
        cleanCodeDesc: "Developing clear, maintainable, and scalable code that aligns with best practices and industry standards.",
        highPerfTitle: "High-Performance Interfaces",
        highPerfDesc: "Creating high-performance apps focused on speed, accessibility, and delivering a smooth user experience.",
        frameworksTitle: "Frameworks & Mobile Development",
        frameworksDesc: "Proficient in modern web frameworks and mobile technologies to build versatile solutions and expand project impact."
      }
    },
    skills: {
      title: "Skills",
      frontend: "Frontend Technologies",
      frameworks: "Frameworks",
      backend: "Backend & Database",
      additional: "Additional Technologies"
    },
    work: {
      title: "Work",
      otherJobs: "Other Jobs",
      personalProjects: "Personal Projects"
    },
    contact: {
      title: "Get In Touch",
      intro: "I am always open to new opportunities where I can contribute and add value. If you think my profile matches what you're looking for, please don't hesitate to get in touch. I'd be glad to connect with you!",
      email: "Email",
      phone: "Phone",
      whatsapp: "Whatsapp",
      openChat: "Open Chat",
      location: "Location",
      form: {
        sendMessage: "Send a Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        button: "Send Message",
        sent: "Message Sent!"
      }
    },
    footer: {
      builtWith: "© 2025 Christian Rodrigo. Built with Astro.js and Tailwind CSS."
    }
  },
  es: {
    site: {
      title: "Portfolio Christian",
      description: "Portfolio Desarrollador Full Stack",
      subtitle: "Subtitulo de prueba para comprobar que las traducciones funcionan."
    },
    navbar: {
      about: "Sobre mí",
      skills: "Habilidades", 
      work: "Proyectos",
      contact: "Contacto"
    },
    header: {
      firstName: "Christian",
      lastName: "Rodrigo",
      role1: "Desarrollador",
      role2: "Web",
      subtitle: "Creando experiencias web modernas, rápidas y centradas en el usuario",
      getInTouch: "Contactar",
      downloadCV: "Descargar CV"
    },
    about: {
      title: "Sobre mí",
      intro: "¡Hola! Soy Christian, un desarrollador web apasionado por crear interfaces únicas y de alto rendimiento. Mi curiosidad me impulsa a aprender cada día — desde frameworks web hasta desarrollo móvil.",
      teamwork: "Al trabajar en equipo, me adapto rápidamente a metodologías y flujos de trabajo, manteniendo mi código limpio y fiel al diseño.",
      hobbies: "Fuera del trabajo, disfruto de los videojuegos de rol y fantasía, pasar tiempo con mi pareja y practicar deportes como la escalada y el senderismo.",
      cards: {
        cleanCodeTitle: "Código Limpio",
        cleanCodeDesc: "Desarrollando código claro, mantenible y escalable que sigue las mejores prácticas y estándares de la industria.",
        highPerfTitle: "Interfaces de Alto Rendimiento", 
        highPerfDesc: "Creando aplicaciones rápidas, accesibles y centradas en ofrecer una experiencia fluida al usuario.",
        frameworksTitle: "Frameworks y Desarrollo Móvil",
        frameworksDesc: "Experiencia en frameworks modernos y tecnologías móviles para construir soluciones versátiles y ampliar el impacto de los proyectos."
      }
    },
    skills: {
      title: "Habilidades",
      frontend: "Tecnologías Frontend",
      frameworks: "Frameworks",
      backend: "Backend y Bases de Datos",
      additional: "Otras Tecnologías"
    },
    work: {
      title: "Proyectos",
      otherJobs: "Otros Trabajos",
      personalProjects: "Proyectos Personales"
    },
    contact: {
      title: "Contacto",
      intro: "Siempre estoy abierto a nuevas oportunidades donde pueda contribuir y aportar valor. Si crees que mi perfil encaja con lo que buscas, no dudes en ponerte en contacto. ¡Estaré encantado de conectar contigo!",
      email: "Correo",
      phone: "Teléfono",
      whatsapp: "Whatsapp",
      openChat: "Abrir Chat",
      location: "Ubicación",
      form: {
        sendMessage: "Enviar un Mensaje",
        namePlaceholder: "Tu Nombre",
        emailPlaceholder: "Tu Correo",
        messagePlaceholder: "Tu Mensaje",
        button: "Enviar Mensaje",
        sent: "¡Mensaje enviado!"
      }
    },
    footer: {
      builtWith: "© 2025 Christian Rodrigo. Construido con Astro.js y Tailwind CSS."
    }
  }
};

// Función para obtener traducciones
export function useTranslations(locale = 'en') {
  return function t(key) {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}