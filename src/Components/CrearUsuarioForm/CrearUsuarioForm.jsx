import React from 'react'
import { Link } from 'react-router-dom'

import './CrearUsuarioForm.css'

export default function CrearUsuarioForm() {
    const [formData, setFormData] = React.useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <section className="register-screen">
            <div className="register-container">
                <div className="register-header">
                    <h2 className="register-title">Crear Cuenta</h2>
                    <p className="register-subtitle">Completa los datos para el nuevo usuario</p>
                </div>

                <form onSubmit={handleSubmit} className="register-form" autoComplete='off'>
                    <div className="input-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" name="apellido" id="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
                    </div>
                    <div className="input-group full-width">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" name="email" id="email" placeholder="ejemplo@correo.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="input-group full-width">
                        <label htmlFor="numero">Número de Teléfono</label>
                        <input type="tel" name="numero" id="numero" placeholder="+1 234 567 890" value={formData.numero} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirmar</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn-primary">Registrar Usuario</button>
                </form>

                <div className="register-footer">
                    <Link to="/" className="btn-secondary">¿Ya tienes una cuenta? Inicia sesión</Link>
                </div>
            </div>
        </section>
    )
}
