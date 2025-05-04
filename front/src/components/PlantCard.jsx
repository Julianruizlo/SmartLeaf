import { Link } from "react-router-dom";

function PlantCard({ nombre, estado, imagen }) {
  const ruta = `/planta/${nombre.toLowerCase()}`;

  return (
    <div className="planta-card">
      <Link to={ruta}>
        <img src={imagen} alt={nombre} className="planta-img" />
      </Link>

      <h3>{nombre}</h3>
      <span className={`estado ${estado === "¡Regar!" ? "regar" : estado === "¡Cosechar!" ? "cosechar" : "ok"}`}>
        {estado}
      </span>
    </div>
  );
}

export default PlantCard;
