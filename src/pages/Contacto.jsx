import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacto() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contacto</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Apellidos</label>
          <input type="text" className="form-control" id="surname" placeholder="Tus apellidos" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="reason" className="form-label">Motivo de la Consulta</label>
          <textarea className="form-control" id="reason" rows="4" placeholder="Escribe el motivo de tu consulta aquí"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Contacto;