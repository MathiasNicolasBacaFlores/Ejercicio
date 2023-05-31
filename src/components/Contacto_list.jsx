import React from 'react';
import PropTypes from 'react';
import { contacto } from '../model/contacto.class';


const ContactoList = ({contacto}) => {
    return (
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h3>Apellido: {contacto.apellido}</h3>
            <h4>Email: {contacto.Email}</h4>
            <h5>Conectado: {contacto.Conectado ? 'Contacto en linea':'Contacto no disponible'}</h5>
        </div>
    );
};


ContactoList.propTypes = {
Contacto: PropTypes.Component(contacto)
};


export default ContactoList;
