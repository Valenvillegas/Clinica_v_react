import React from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'

export default function LoginForm() {
  return (
    <section className="login-screen">
            <div className="login-container">
                <h2 className="login-title">Iniciar Sesión</h2>
                <form action="" method="post" className="login-form" autoComplete='off'>
                    <div className="input-group">
                        <label htmlFor="usuario">Email</label>
                        <input type="email" name="usuario" id="usuario" placeholder="example@email.com" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Tu contraseña" />
                    </div>
                    <Link to="/home" style={{ textAlign: 'center' }}><button type="submit" className="btn-primary">Iniciar Sesión</button></Link>
                </form>
                <div className="login-options">
                    <Link to="/register" className="btn-secondary" style={{ textDecoration: 'none' }}>Registrarse</Link>
                    <button type="button" className="btn-secondary">Recuperar Contraseña</button>
                </div>
            </div>
        </section>
  )
}
