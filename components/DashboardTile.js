export default function DashboardTile({ dashboard }) {
  return (
    <div className="dashboard-tile">
      <div className="dashboard-tile-head">
        <h3>{dashboard.nombre}</h3>
        <p>{dashboard.descripcion}</p>
      </div>

      {dashboard.embedUrl ? (
        <iframe
          className="dashboard-frame"
          title={dashboard.nombre}
          src={dashboard.embedUrl}
          allowFullScreen
        />
      ) : dashboard.screenshots && dashboard.screenshots.length > 0 ? (
        <div className={`dashboard-gallery ${dashboard.screenshots.length === 1 ? "single" : ""}`}>
          {dashboard.screenshots.map((src, i) => (
            <a href={src} target="_blank" rel="noreferrer" key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Captura ${i + 1} del dashboard ${dashboard.nombre}`} />
            </a>
          ))}
        </div>
      ) : (
        <div className="dashboard-placeholder">
          <p>
            Pegá acá el link de "Publicar en la Web" de Power BI (data/dashboards.js) o subí
            capturas a /public/screenshots y referencialas en el campo screenshots.
          </p>
        </div>
      )}
    </div>
  );
}
