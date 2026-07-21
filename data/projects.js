export const projects = [
  {
    id: "001",
    nombre: "Picas y Famas",
    subtitulo: "Juego full-stack de adivinanza de números (Bulls and Cows)",
    descripcion:
      "Backend REST protegido con JWT para gestionar partidas e intentos, con frontend en Next.js generado con V0. Incluye historial de intentos con feedback de picas y famas.",
    stack: ["C#/.NET 10", "ASP.NET Web API", "JWT", "Entity Framework Core", "PostgreSQL", "Next.js"],
    estado: "en mejora",
    repo: "https://github.com/leandrodcarranza/JuegoPica_Fama",
    demo: "",
  },
  {
    id: "002",
    nombre: "SmartInventory",
    subtitulo: "Sistema de gestión de inventario",
    descripcion:
      "API en .NET 9 con autenticación JWT para administrar productos, ventas y compras, con dashboard de métricas usando Chart.js. Frontend oscuro con estética glassmorphism y navegación por pestañas.",
    stack: [".NET 9 Web API", "PostgreSQL", "Entity Framework Core", "JWT", "Chart.js", "HTML/CSS/JS"],
    estado: "completo",
    repo: "https://github.com/leandrodcarranza/Inventario-Inteligente.git",
    demo: "",
  },
];
