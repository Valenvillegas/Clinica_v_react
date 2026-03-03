import React from 'react'
import './HomeAdmin.css'
import { Link } from 'react-router-dom'

export default function HomeAdmin() {
    return (
        <section className="home-admin">
            <header className="home-header">
                <h1 className="home-title">Panel de Administración</h1>
                <p className="home-subtitle">Bienvenido al sistema de gestión clínica</p>
            </header>

            <div className="container">
                <div className="card fade-in">
                    <h2>Nueva Historia Clínica</h2>
                    <p>Registra de forma segura todos los datos clínicos de un nuevo paciente en el sistema.</p>
                    <Link to="/crear" className="btn btn-primary-action">Comenzar Registro</Link>
                </div>

                <div className="card fade-in" style={{ animationDelay: '0.1s' }}>
                    <h2>Historias Existentes</h2>
                    <p>Busca, consulta y gestiona el historial médico completo de tus pacientes registrados.</p>
                    <Link to="/home" className="btn btn-primary-action">Ver Expedientes</Link>
                </div>

                <div className="card fade-in" style={{ animationDelay: '0.2s' }}>
                    <h2>Gestión de Usuarios</h2>
                    <p>Administra las cuentas de acceso, permisos y seguridad de los profesionales del centro.</p>
                    <Link to="/home" className="btn btn-primary-action">Configurar Cuentas</Link>
                </div>
            </div>
        </section>
    )
}
