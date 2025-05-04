import { Link } from "react-router-dom";
import "../models/Garden.css";

const statusColors = {
  "¡Regar!": "#1c9c56", 
  "¡Cosechar!": "#c4a000",
  "": "#888"               
};

const PlantCard = ({ name, image, status }) => {
  const ruta = `/planta/${name.toLowerCase()}`;
  return (
    <div className="plant-card">
    <Link to={ruta}>
        <img src={image} alt={name} className="plant-image" />
      </Link>
      <h3 className="plant-name">{name}</h3>
      {status && <p className="plant-status" style={{ color: statusColors[status] || "#888" }}>{status}</p>}
    </div>
  );
};

export default PlantCard;