// Traducciones
export const translations = {
  en: {
    site: {
      title: "Christian Portfolio",
      description: "Full Stack Developer Portfolio",
      subtitle:
        "This is a more complex string to translate, mixed with html elements, such as a cool link!",
    },
    navbar: {
      about: "About",
      skills: "Skills",
      work: "Work",
      contact: "Contact",
    },
    header: {
      firstName: "Christian",
      lastName: "Rodrigo",
      role1: "Software",
      role2: "Web Developer",
      subtitle: "Crafting modern, fast, and user-centered web experiences",
      getInTouch: "Get in touch",
      downloadCV: "Download CV",
    },
    about: {
      title: "About",
      intro:
        "Hi! I'm Christian, a web developer passionate about building unique and high-performance interfaces. My curiosity drives me to learn every day — from web frameworks to mobile development.",
      teamwork:
        "When working in a team, I quickly adapt to methodologies and workflows, while keeping my code clean and faithful to the design.",
      hobbies:
        "Outside of work, I enjoy role-playing and fantasy video games, spending time with my partner, and practicing sports like climbing and hiking.",
      cards: {
        cleanCodeTitle: "Clean Code",
        cleanCodeDesc:
          "Developing clear, maintainable, and scalable code that aligns with best practices and industry standards.",
        highPerfTitle: "High-Performance Interfaces",
        highPerfDesc:
          "Creating high-performance apps focused on speed, accessibility, and delivering a smooth user experience.",
        frameworksTitle: "Frameworks & Mobile Development",
        frameworksDesc:
          "Proficient in modern web frameworks and mobile technologies to build versatile solutions and expand project impact.",
      },
    },
    skills: {
      title: "Skills",
      frontend: "Frontend Technologies",
      frameworks: "Frameworks",
      backend: "Backend & Database",
      additional: "Additional Technologies",
    },
    work: {
      title: "Work",
      otherJobs: "Other Jobs",
      personalProjects: "Personal Projects",
      projectRole: "My role in this project",
      challenges: "Challenges",
      achievements: "Achievements",
      unannounced: {
        title: "Unannounced Project",
        description:
          "Developed a frontend mobile application similar to an Airbnb, integrating maps, reviews, in-app payments and live chat.",
        role: "I led the development of the project's first phase using Expo, starting from the initial architecture design and applying Atomic Design principles and SOLID guidelines. I implemented the routing system with React Router, built the registration flow, and developed several key pages including profile and reviews. I was also responsible for testing this first phase to ensure routing stability and maintainability.",
        challenge:
          "A major challenge was adapting to working with SOLID principles in a clean and structured way, as well as transitioning from Expo Router (used in my thesis project) to React Router. I also had to learn the fundamentals of testing with Jest, which shaped the way I approached quality assurance in the project.",
        achieve:
          "The greatest achievement was successfully delivering the entire project skeleton with strong architectural foundations and receiving excellent feedback from the team for the clarity and robustness of the implementation.",
      },
      verdatis: {
        title: "Verdatis",
        description:
          "Worked on a mobile application enabling anonymous messaging between users and businesses via internal credits, focusing on bug fixes and testing.",
        role: "I used this project as a playground to improve my skills in reading and extending an already completed codebase. I worked on debugging and implementing new features, such as fixing search functionality with special characters and creating a modal for selecting Verdatis delivery dates. Once familiar with the codebase, I took on a more collaborative role, working on integrating Drupal data flows and holding meetings with the backend team to align with their requirements.",
        challenge:
          "The main challenges included understanding where to start within a large existing codebase, moving confidently without breaking functionality, and adapting to a new workflow.",
        achieve:
          "My biggest success was being able to deliver exactly what the backend team needed, integrating seamlessly with their requirements without forcing changes, which earned me trust and credibility within the team.",
      },
      coven: {
        title: "Coven",
        description:
          "Full development of my final project, a small social platform with integrated expense sharing, handling from initial concept to fullstack implementation.",
        role: "I developed a mobile application using Expo and React Native with TypeScript, supported by Supabase as the backend (BaaS) and a PostgreSQL relational database. The architecture was designed to enable direct communication between the frontend and Supabase services in the cloud, handling authentication, secure storage, and database access policies.",
        challenge:
          "Throughout the project, I overcame significant challenges such as configuring Google login and image uploads (limited by Expo Go and native build requirements), managing frequent data fetching that conflicted with React state updates, and addressing issues with Nativewind setup.",
        achieve:
          "A key achievement was the successful integration of multiple libraries to enhance functionality and user experience, including React Hook Form with Yup, React Native Reanimated, Nativewind, and Zustand. I also configured and optimized Postgres row-level security policies in Supabase, requiring a deep understanding of permissions and database logic. This project strengthened my problem-solving skills and adaptability, proving my ability to learn and implement new technologies quickly.",
      },
      moviebillboard: {
        title: "Movie Billboard",
        description:
          "Developed a single-page cinema listings application, handling both a NoSQL backend and a fully custom frontend built with vanilla React.",
        role: "This personal project was focused on building a movie listing CRUD application with React and Express. I created a backend using Mongoose and Express, while on the frontend I concentrated on deepening my understanding of React. I experimented with advanced concepts such as custom hooks, global state management, and reducers to gain full control over React's internal logic.",
        challenge:
          "The most rewarding achievement was being the only one in my class to fully embrace React's advanced capabilities, demonstrating initiative and a strong drive to push beyond the standard use cases.",
        achieve:
          "The main challenges were mastering reducers and learning when to refactor code into custom hooks in order to maintain a clean and scalable architecture.",
      },
    },
    contact: {
      title: "Get In Touch",
      intro:
        "I am always open to new opportunities where I can contribute and add value. If you think my profile matches what you're looking for, please don't hesitate to get in touch. I'd be glad to connect with you!",
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
        sent: "Message Sent!",
      },
    },
    footer: {
      builtWith:
        "© 2025 Christian Rodrigo. Built with Astro.js and Tailwind CSS.",
    },
  },
  es: {
    site: {
      title: "Portfolio Christian",
      description: "Portfolio Desarrollador Full Stack",
      subtitle:
        "Subtitulo de prueba para comprobar que las traducciones funcionan.",
    },
    navbar: {
      about: "Sobre mí",
      skills: "Habilidades",
      work: "Proyectos",
      contact: "Contacto",
    },
    header: {
      firstName: "Christian",
      lastName: "Rodrigo",
      role1: "Desarrollador",
      role2: " Web",
      subtitle: "Creando webs modernas, rápidas y centradas en el usuario",
      getInTouch: "Contactar",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre mí",
      intro:
        "¡Hola! Soy Christian, un desarrollador web apasionado por crear interfaces únicas y de alto rendimiento. Mi curiosidad me impulsa a aprender cada día — desde frameworks web hasta desarrollo móvil.",
      teamwork:
        "Al trabajar en equipo, me adapto rápidamente a metodologías y flujos de trabajo, manteniendo mi código limpio y fiel al diseño.",
      hobbies:
        "Fuera del trabajo, disfruto de los videojuegos de rol y fantasía, paso tiempo con mi pareja y practicar deportes como la escalada y el senderismo.",
      cards: {
        cleanCodeTitle: "Código Limpio",
        cleanCodeDesc:
          "Desarrollando código claro, mantenible y escalable que sigue las mejores prácticas y estándares de la industria.",
        highPerfTitle: "Interfaces de Alto Rendimiento",
        highPerfDesc:
          "Creando aplicaciones rápidas, accesibles y centradas en ofrecer una experiencia fluida al usuario.",
        frameworksTitle: "Frameworks y Desarrollo Móvil",
        frameworksDesc:
          "Experiencia en frameworks modernos y tecnologías móviles para construir soluciones versátiles y ampliar el impacto de los proyectos.",
      },
    },
    skills: {
      title: "Habilidades",
      frontend: "Tecnologías Frontend",
      frameworks: "Frameworks",
      backend: "Backend y Bases de Datos",
      additional: "Otras Tecnologías",
    },
    work: {
      title: "Proyectos",
      otherJobs: "Otros puestos de trabajo",
      personalProjects: "Proyectos Personales",
      projectRole: "Mi rol en este proyecto",
      challenges: "Retos",
      achievements: "Logros",
      unannounced: {
        title: "Proyecto sin anunciar",
        description:
          "Desarrollo en el frontend de una aplicación móvil similar a Airbnb, integrando mapas, reseñas, pagos dentro de la aplicación y chat en vivo.",
        role: "Lideré el desarrollo de la primera fase del proyecto utilizando Expo, comenzando desde el diseño inicial de la arquitectura y aplicando principios de Atomic Design y guías SOLID. Implementé el sistema de enrutamiento con React Router, construí el flujo de registro y desarrollé varias páginas clave, incluyendo perfil y reseñas. También fui responsable de las pruebas en esta primera fase para garantizar la estabilidad y mantenibilidad del enrutamiento.",
        challenge:
          "Un reto importante fue adaptarme a trabajar con los principios SOLID de una manera limpia y estructurada, así como la transición de Expo Router (utilizado en mi proyecto de tesis) a React Router. Además, tuve que aprender los fundamentos de testing con Jest, lo que influyó en mi forma de abordar la calidad del proyecto.",
        achieve:
          "El mayor logro fue entregar con éxito todo el esqueleto del proyecto con unas bases arquitectónicas sólidas, recibiendo una excelente retroalimentación del equipo por la claridad y robustez de la implementación.",
      },
      verdatis: {
        title: "Verdatis",
        description:
          "Aplicación móvil que permite la mensajería anónima entre usuarios y negocios a través de créditos internos, centrándome en la corrección de errores y pruebas.",
        role: "Utilicé este proyecto como un espacio de práctica para mejorar mis habilidades en la lectura y extensión de una base de código ya completada. Trabajé en depuración e implementación de nuevas funcionalidades, como arreglar la búsqueda con caracteres especiales y crear un modal para seleccionar fechas de entrega de Verdatis. Una vez me familiaricé con el código, asumí un rol más colaborativo, integrando flujos de datos de Drupal y manteniendo reuniones con el equipo de backend para alinearme con sus requisitos.",
        challenge:
          "Los principales retos fueron entender por dónde empezar en una base de código grande, avanzar con confianza sin romper funcionalidades y adaptarme a un nuevo flujo de trabajo.",
        achieve:
          "Mi mayor logro fue entregar exactamente lo que el equipo de backend necesitaba, integrándome perfectamente con sus requisitos sin imponer cambios, lo que me dio confianza y credibilidad dentro del equipo.",
      },
      coven: {
        title: "Coven",
        description:
          "Desarrollo completo de mi proyecto de fin de grado, una pequeña plataforma social con reparto de gastos integrado, abarcando desde el concepto inicial hasta la implementación fullstack.",
        role: "Desarrollé una aplicación móvil utilizando Expo y React Native con TypeScript, respaldada por Supabase como backend (BaaS) y una base de datos relacional PostgreSQL. La arquitectura fue diseñada para permitir la comunicación directa entre el frontend y los servicios de Supabase en la nube, gestionando autenticación, almacenamiento seguro y políticas de acceso a la base de datos.",
        challenge:
          "Durante el proyecto superé retos importantes como configurar el inicio de sesión con Google y la subida de imágenes (limitados por Expo Go y los requisitos de compilación nativa), gestionar frecuentes peticiones de datos que entraban en conflicto con los estados de React, y resolver problemas con la configuración de Nativewind.",
        achieve:
          "Un logro clave fue la integración exitosa de múltiples librerías para mejorar la funcionalidad y la experiencia de usuario, incluyendo React Hook Form con Yup, React Native Reanimated, Nativewind y Zustand. También configuré y optimicé las políticas de seguridad a nivel de fila de Postgres en Supabase, lo que exigió un entendimiento profundo de permisos y lógica de bases de datos. Este proyecto reforzó mis habilidades de resolución de problemas y adaptabilidad, demostrando mi capacidad de aprender e implementar nuevas tecnologías rápidamente.",
      },
      moviebillboard: {
        title: "Cartelera de películas",
        description:
          "Desarrollo de una aplicación de cartelera de cine de una sola página, gestionando tanto un backend NoSQL como un frontend completamente personalizado construido con React puro.",
        role: "Este proyecto personal se centró en construir una aplicación CRUD de cartelera de películas con React y Express. Creé un backend usando Mongoose y Express, mientras que en el frontend me concentré en profundizar mi entendimiento de React. Experimenté con conceptos avanzados como custom hooks, gestión global de estado y reducers para tener un control completo de la lógica interna de React.",
        challenge:
          "El logro más gratificante fue ser el único en mi clase que aprovechó por completo las capacidades avanzadas de React, demostrando iniciativa y una fuerte motivación por ir más allá de los casos de uso estándar.",
        achieve:
          "Los principales retos fueron dominar los reducers y aprender cuándo refactorizar el código en custom hooks para mantener una arquitectura limpia y escalable.",
      },
    },
    contact: {
      title: "Contacto",
      intro:
        "Siempre estoy abierto a nuevas oportunidades donde pueda contribuir y aportar valor. Si crees que mi perfil encaja con lo que buscas, no dudes en ponerte en contacto. ¡Estaré encantado de conectar contigo!",
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
        sent: "¡Mensaje enviado!",
      },
    },
    footer: {
      builtWith:
        "© 2025 Christian Rodrigo. Construido con Astro.js y Tailwind CSS.",
    },
  },
};

// Función para obtener traducciones
export function useTranslations(locale = "en") {
  return function t(key) {
    const keys = key.split(".");
    let value = translations[locale];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };
}
