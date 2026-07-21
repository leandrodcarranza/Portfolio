// Para cada dashboard: en Power BI Desktop/Service anda a
// Archivo > Publicar en la Web, copia el link que te da ahi
// (formato https://app.powerbi.com/view?r=...) y pegalo en embedUrl.
// OJO: esa opcion hace publico el reporte. Si tiene datos sensibles,
// dejá embedUrl vacio y usa el campo screenshot con una imagen exportada.

export const dashboards = [
  {
    id: "d001",
    nombre: "Reserva de Hoteles",
    descripcion: "Análisis de reservas hoteleras — ocupación, ingresos y tendencias por período.",
    embedUrl: "",
    screenshots: [
        "/screenshots/RH-Portada.png",
        "/screenshots/RH-Reserva.png",
        "/screenshots/RH-Ventas.png",
        "/screenshots/RH-Clientes.png",
    ],
  },
  {
    id: "d002",
    nombre: "Homicidios Dolosos",
    descripcion: "Análisis Homicidios -  muestra la evolución de los homicidios dolosos en el país, con foco en la distribución por provincias, el perfil de víctimas e imputados y las principales tendencias detectadas.",
    embedUrl: "",
    screenshots: [
      "/screenshots/H-Portada.png",
      "/screenshots/H-Panorama.png",
      "/screenshots/H-Victimas.png",
    ],
  },
  {
    id: "d003",
    nombre: "Bancor - Intervenciones de Casos",
    descripcion: "Analisis de intervenciones de incidentes gestionados en el Contact Center de Bancor",
    embedUrl: "",
    screenshots: [
      "/screenshots/B-Casos.png",
    ],
  },
];
