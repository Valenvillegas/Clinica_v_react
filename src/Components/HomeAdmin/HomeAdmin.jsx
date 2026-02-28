import React from 'react'
import './HomeAdmin.css'

export default function HomeAdmin() {
    return (
        <section>
            <div class="container">
                <div class="card">
                    <h2>Crear Historia Clínica</h2>
                    <p>Registra una nueva historia clínica para un paciente.</p>
                    <button onclick="window.location.href='../assets/formulario.php'">Crear</button>
                    <script src=""></script>
                </div>
                <div class="card">
                    <h2>Acceder a Historias Clínicas</h2>
                    <p>Consulta y gestiona historias clínicas existentes.</p>
                    <button onclick="window.location.href='../acceder/acceder.html'">Acceder</button>
                </div>
                <div class="card">
                    <h2>Gestionar Usuarios</h2>
                    <p>Gestión de usuarios y contraseñas.</p>
                    <button onclick="window.location.href='../Gestion_de_usuarios/admin_users.php'">Acceder</button>
                </div>
            </div>
        </section>
    )
}
