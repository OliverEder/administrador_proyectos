import React, {useState} from 'react';
import {Link} from "react-router-dom"

const Login = () => {

    const [usuario, guardarUsuario] = useState({
        email: "",
        password: ""
    });
    const [error, guardarError] = useState(false);

    const {email, password } = usuario;

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

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
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={onSubmit}
                >
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
                    <div className="campo-from">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesión"/>
                    </div>
                </form>
                <Link 
                    to={"/nueva_cuenta"} 
                    className="enlace-cuenta"
                > Obtener cuenta</Link>
            </div>
        </div>
    );
}
 
export default Login;