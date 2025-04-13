# Nuestra ruta de autorizacion
from flask import Blueprint, request, jsonify #  sirve para modularizar la app. Es como separar el backend por "temas" (en este caso: auth).
# usamos esto para obtener los datos que manda el cliente (como usuario y contraseña).
# convierte la respuesta en JSON para mandarla al frontend.
from models.user import User # es el modelo de usuarios que definimos en models/user.py.
from database.db import db # es la instancia de SQLAlchemy que usamos para hacer operaciones con la base de datos.
from werkzeug.security import generate_password_hash, check_password_hash 
# convierte la contraseña a una forma encriptada (así no se guarda en texto plano).
# compara la contraseña encriptada con la que manda el usuario cuando hace login.

auth_bp = Blueprint("auth", __name__, url_prefix="/auth")

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()  # Obtenemos los datos que manda el cliente
    username = data.get("username")
    password = data.get("password")

    # Validar que los campos estén completos
    if not username or not password:
        return jsonify({"error": "Faltan datos"}), 400

    # Verificar si el usuario ya existe
    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({"error": "Usuario ya existe"}), 409

    # Crear el nuevo usuario
    hashed_password = generate_password_hash(password)  # Encriptamos la contraseña
    new_user = User(username=username, password=hashed_password)

    db.session.add(new_user)  # Agregamos el usuario a la base de datos
    db.session.commit()

    return jsonify({"message": "Usuario creado"}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(username=username).first()
    
    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Credenciales inválidas"}), 401

    return jsonify({
        "message": "Login exitoso",
        "user_id": user.id
    }), 200

