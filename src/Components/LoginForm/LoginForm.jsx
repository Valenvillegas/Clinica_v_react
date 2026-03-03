import React from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'

export default function LoginForm() {
    return (
        <section className="login-screen">
            <div className="login-container">
                <div className="login-header">
                    <h2 className="login-title">Bienvenido</h2>
                    <p className="login-subtitle">Ingresa a tu cuenta para continuar</p>
                </div>

                <form action="" method="post" className="login-form" autoComplete='off'>
                    <div className="input-group">
                        <label htmlFor="usuario">Correo Electrónico</label>
                        <input type="email" name="usuario" id="usuario" placeholder="ejemplo@correo.com" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" required />
                    </div>
                    <Link to="/home"><button type="submit" className="btn-primary" style={{ width: '100%' }}>Iniciar Sesión</button></Link>
                </form>

                <div className="login-footer">
                    <div className="login-options">
                        <button type="button" className="btn-link">¿Olvidaste tu contraseña?</button>
                    </div>
                    <p className="register-prompt">
                        ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
