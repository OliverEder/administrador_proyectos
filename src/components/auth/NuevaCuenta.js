import React, {useState} from 'react';
import {Link} from "react-router-dom"

const NuevaCuenta = () => {

    const [usuario, guardarUsuario] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmar: ""
    });
    const [error, guardarError] = useState(false);

    const {nombre, email, password, confirmar } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        //validar que no haya campos vacios
        // Password minimo de 6 caracteres
        // los 2 passwords son iguales

        //validar campos
        if(email.trim() === "" || password.trim() === ""){
            guardarError(true);
            return;
        }
        guardarError(false);
    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input 
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input 
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-from">
                        <input 
                            type="submit" 
                            className="btn btn-primario btn-block" 
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link 
                    to={"/"} 
                    className="enlace-cuenta"
                > &laquo; Volver a iniciar sesión</Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;