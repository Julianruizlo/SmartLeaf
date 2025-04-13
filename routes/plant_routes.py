# Nuestra ruta de plantas
from flask import Blueprint, request, jsonify
from models.plant import Plant
from database.db import db

# Creamos el blueprint
plant_bp = Blueprint("plants", __name__, url_prefix="/plants")

# GET /plants -> obtener todas las plantas
@plant_bp.route("/", methods=["GET"])
def get_plants():
    plants = Plant.query.all()
    result = [plant.to_dict() for plant in plants]
    return jsonify(result)

# POST /plants -> crear nueva planta
@plant_bp.route("/", methods=["POST"])
def add_plant():
    data = request.get_json()
    new_plant = Plant(
        name=data.get("name"),
        species=data.get("species"),
        user_id=data.get("user_id")
    )
    db.session.add(new_plant)
    db.session.commit()
    return jsonify(new_plant.to_dict()), 201
