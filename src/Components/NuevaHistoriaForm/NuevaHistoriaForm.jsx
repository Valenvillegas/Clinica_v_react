import React from 'react'
import './NuevaHistoriaForm.css'
import { Link } from 'react-router-dom'
export default function NuevaHistoriaForm() {
    return (
        <section className="history-screen">
            <div className="history-container">
                <header className="history-header">
                    <h1 className="history-title">Registro de Historia Clínica</h1>
                    <p className="history-subtitle">Ingrese los datos personales del paciente para crear un nuevo expediente</p>
                </header>

                <form action="../Funciones/crear_pacientes.php" method="POST" className="history-form" autoComplete="off">
                    <div className="input-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" id="apellido" name="apellido" placeholder="Apellidos" required />
                    </div>

                    <div className="input-group full-width">
                        <label htmlFor="domicilio">Domicilio</label>
                        <input type="text" id="domicilio" name="domicilio" placeholder="Dirección de residencia" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="localidad">Localidad</label>
                        <input type="text" id="localidad" name="localidad" placeholder="Ciudad / Municipio" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
                        <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="dni">Documento (DNI)</label>
                        <input type="text" id="dni" name="dni" placeholder="N° de documento" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="sector_de_trabajo">Sector de Trabajo</label>
                        <input type="text" id="sector_de_trabajo" name="sector_de_trabajo" placeholder="Área o sector" required />
                    </div>

                    <div className="form-actions">
                        <Link to="/home" className="btn-cancel">Cancelar</Link>
                        <button type="submit" className="btn-submit">Guardar Historia</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
