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
                <h2 className="register-title">Crear Cuenta</h2>
                <form onSubmit={handleSubmit} className="register-form" autoComplete='off'>
                    <div className="input-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" name="apellido" id="nombre" placeholder="Tu apellido" value={formData.apellido} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@email.com" value={formData.email} onChange={handleChange} required />
                    </div>
                     <div className="input-group">
                        <label htmlFor="numero">Numero</label>
                        <input type="numero" name="numero" id="numero" placeholder="Tu Numero" value={formData.numero} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="Tu contraseña" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirma tu contraseña" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn-primary">Registrarse</button>
                </form>
                <div className="register-options">
                    <Link to="/" className="btn-secondary">Ya tengo una cuenta</Link>
                </div>
            </div>
        </section>
  )
}
