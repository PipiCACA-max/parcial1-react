import React, { useState } from 'react'
import yo from './yo.jpg'
import './App.css'

function App() {
  const [vistaActiva, setVistaActiva] = useState('inicio') // Cambiamos a un string para manejar múltiples vistas
  const [modalImagen, setModalImagen] = useState(null) // Estado para la imagen del modal

  // Función para cerrar el modal
  const cerrarModal = () => setModalImagen(null)

  // --- VISTA: CENTRO DE DESCARGAS PARCIAL 1 ---
  if (vistaActiva === 'parcial1') {
    return (
      <div className="App-download-bg">
        <div className="download-card">
          <h2 className="download-title">Centro de Descargas - Parcial 1</h2>
          <p className="download-subtitle">Archivos del primer periodo.</p>

          <a
            href="/COMANDOS.docx"
            download="Comandos_React.docx"
            style={{ textDecoration: 'none' }}
          >
            <button className="btn btn-blue">COMANDOS BÁSICOS DE REACT</button>
          </a>

          <a
            href="/ieee.png"
            download="ISO_ESTANDAR_IEEE.png"
            style={{ textDecoration: 'none' }}
          >
            <button className="btn btn-green">ISO / ESTANDAR IEEE</button>
          </a>

          <a
            href="/requerimientos.docx"
            download="Requerimientos_Alessandro.docx"
            style={{ textDecoration: 'none' }}
          >
            <button className="btn btn-dark">
              REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES
            </button>
          </a>

          <button
            className="btn btn-back"
            onClick={() => setVistaActiva('inicio')}
          >
            REGRESAR AL INICIO
          </button>
        </div>
      </div>
    )
  }

  // --- VISTA: PARCIAL 2 (DISEÑO METODOLOGÍAS) ---
  if (vistaActiva === 'parcial2') {
    return (
      <div className="App-parcial2-bg">
        {/* MODAL / VENTANA EMERGENTE */}
        {modalImagen && (
          <div className="modal-overlay" onClick={cerrarModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-x" onClick={cerrarModal}>
                &times;
              </button>
              <img
                src={modalImagen}
                alt="Metodología Detalle"
                className="modal-img-full"
              />
            </div>
          </div>
        )}

        <div className="metodologias-container">
          <h1>METODOLOGÍAS DE DESARROLLO DE SW</h1>
          <h3>¿Qué es una metodología de desarrollo de software?</h3>
          <p className="intro-text">
            Las metodologías de desarrollo de software son un conjunto de
            técnicas y métodos organizativos...
          </p>

          <hr className="divisor" />
          <h2>TIPOS DE METODOLOGÍAS</h2>

          <div className="grid-botones">
            <button
              className="m-btn m-azul"
              onClick={() => setModalImagen('/1_cascada.png')}
            >
              CASCADA
            </button>
            <button
              className="m-btn m-gris"
              onClick={() => setModalImagen('/2_modelo_v.png')}
            >
              MODELO V
            </button>
            <button
              className="m-btn m-verde"
              onClick={() => setModalImagen('/3_agiles.jpg')}
            >
              ÁGILES
            </button>
            <button
              className="m-btn m-rojo"
              onClick={() => setModalImagen('/4_scrum.jpg')}
            >
              SCRUM
            </button>

            <div className="fila-centrada">
              <button
                className="m-btn m-amarillo"
                onClick={() => setModalImagen('/5_kanvan.png')}
              >
                KANBAN
              </button>
              <button
                className="m-btn m-celeste"
                onClick={() => setModalImagen('/6_xp.png')}
              >
                XP
              </button>
              <button
                className="m-btn m-negro"
                onClick={() => setModalImagen('/7_hibridas_modernas.png')}
              >
                HÍBRIDAS
              </button>
            </div>
          </div>

          <hr className="divisor" />
          <div className="tablero-seccion">
            <h3>LINK A TABLERO DE TRABAJO</h3>
            {/* Aquí está el enlace actualizado con tu URL de VogueVault */}
            <a
              href="https://voguevault.atlassian.net/jira/software/projects/SCRUM/boards/1?jql="
              target="_blank"
              rel="noreferrer"
              className="jira-link"
            >
              ---- JIRA ----
            </a>
          </div>
          <hr className="divisor" />

          <hr className="divisor" />
          <button
            className="btn-fancy-back"
            onClick={() => setVistaActiva('inicio')}
          >
            ---- REGRESAR MENÚ PRINCIPAL ----
          </button>

          <div className="footer-parcial">
            <p>
              Escribe la frase que colocaste en el tablero de metodología ágil:
            </p>
            <p className="frase-destacada">" NO PITES HASTA QUE CHOQUES "</p>
            <p className="nombre-alumno">Alumno: Navarro Silva Alessandro</p>
          </div>
        </div>
      </div>
    )
  }
  // --- VISTA: PANTALLA PRINCIPAL ---
  return (
    <div className="App">
      <header className="App-header">
        <h1>Evaluación parcial 1</h1>
        <img src={yo} className="foto-circular" alt="Mi foto de perfil" />
        <h2>Alumno(a): Alessandro Navarro Silva</h2>

        <div className="links-container">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/alessandro-navarro-8137353a5"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKED IN DE MI PROFILE
          </a>
          <br />

          <button
            className="link-button"
            onClick={() => setVistaActiva('parcial1')}
          >
            DOCUMENTACION PARCIAL 1
          </button>

          <br />

          {/* BOTÓN NUEVO PARA PARCIAL 2 */}
          <button
            className="link-button"
            onClick={() => setVistaActiva('parcial2')}
          >
            DOCUMENTACION PARCIAL 2
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
