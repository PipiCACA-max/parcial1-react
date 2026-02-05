import React, { useState } from 'react';
import yo from './yo.jpg';
import './App.css';

function App() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  // --- VISTA 1: CENTRO DE DESCARGAS ---
  if (mostrarMenu) {
    return (
      <div className="App-download-bg">
        <div className="download-card">
          <h2 className="download-title">Centro de Descargas</h2>
          <p className="download-subtitle">Haz clic en los botones para obtener tus archivos.</p>
          
          {/* Botón 1: Comandos */}
          <a href="/COMANDOS.docx" download="Comandos_React.docx" style={{ textDecoration: 'none' }}>
            <button className="btn btn-blue">COMANDOS BÁSICOS DE REACT</button>
          </a>

          {/* Botón 2: ISO / IEEE */}
          <a href="/ieee.png" download="ISO_ESTANDAR_IEEE.png" style={{ textDecoration: 'none' }}>
            <button className="btn btn-green">ISO / ESTANDAR IEEE</button>
          </a>

          {/* Botón 3: Requerimientos */}
          <a href="/requerimientos.docx" download="Requerimientos_Alessandro.docx" style={{ textDecoration: 'none' }}>
            <button className="btn btn-dark">REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES</button>
          </a>

          {/* Botón 4: Código Python (NUEVO) */}
          <a href="/codigoCURP.py" download="codigoCURP.py" style={{ textDecoration: 'none' }}>
            <button className="btn btn-dark">CÓDIGO PYTHON ALGORITMO SHA-256</button>
          </a>
          
          <button 
            className="btn btn-back" 
            onClick={() => setMostrarMenu(false)}
          >
            REGRESAR AL PROYECTO PRINCIPAL
          </button>
        </div>
      </div>
    );
  }

  // --- VISTA 2: PANTALLA PRINCIPAL ---
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
            onClick={() => setMostrarMenu(true)}
          >
            DOCUMENTACION PARCIAL 1
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
