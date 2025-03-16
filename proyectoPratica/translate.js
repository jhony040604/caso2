const translations = {
    "Inicio": "home",
    "Funciones": "features",
    "Precios": "prices",
    "Nosotros": "about us",
    "Descargar": "download",
    "Descargar ahora": "download now",
    "Con nuestras soluciones avanzadas, mejora la eficiencia de tus reuniones virtuales y la seguridad de tus datos.": "With our advanced solutions, improve the efficiency of your virtual meetings and the security of your data.",
    "Calidad de audio y video optimizada": "Optimized audio and video quality",
    "Seguridad avanzada en tus reuniones": "Advanced security in your meetings",
    "Integración con múltiples plataformas": "Integration with multiple platforms",
    "Colaboración": "Collaboration",
    "Maximiza la comunicación con herramientas de trabajo en equipo.": "Maximize communication with teamwork tools.",
    "Trabajo en equipo": "Teamwork",
    "Impulsa la productividad con estrategias efectivas de colaboración.": "Boost productivity with effective collaboration strategies",
    "Conéctate en cualquier lugar, en cualquier momento": "Connect anywhere, anytime",
    "Explora nuevas formas de comunicación con las soluciones de Affon": "Explore new ways of communication with Affon solutions",
    "Descubre todas las funciones": "Discover all the features",
    "Explora nuestras tecnologías inteligentes y personalizables": "Explore our smart and customizable technologies",
    "Videollamadas en HD": "HD Video Calls",
    "Compartición de pantalla": "Screen Sharing",
    "Mensajería inteligente": "Smart Messaging",
    "Optimiza tu comunicación": "Optimize your communication",
    "Calidad de audio y video optimizada": "Optimized audio and video quality",
    "Seguridad avanzada en tus reuniones": "Advanced security in your meetings",
    "La integracion con múltiples plataformas": "Integration with multiple platforms",
    "Lo que dicen nuestros usuarios": "What our users say",
    "Preguntas Frecuentes": "Frequently Asked Questions",
    "Contáctanos": "Contact Us",
    "Enviar Mensaje": "Send Message",
    "Nuestro equipo": "Our Team",
    "Últimas del blog": "Latest from the Blog",
    "Nuestros clientes": "Our Clients",
    "Affon en números": "Affon in Numbers",
    "Usuarios activos": "Active Users",
    "Países": "Countries",
    "Mensajes diarios": "Daily Messages",
    "Soporte disponible": "Support Available"
};

function translateToEnglish() {
    const elements = document.querySelectorAll('h1, h2, h3, h5, p, button, a, li');
    elements.forEach(element => {
        const text = element.textContent.trim();
        if (translations[text]) {
            element.textContent = translations[text]; // Cambia solo el texto
        }
    });
}

document.getElementById('translate-button').addEventListener('click', translateToEnglish);