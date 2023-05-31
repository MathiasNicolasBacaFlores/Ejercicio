import React from 'react';
import { contacto } from '../../model/contacto.class'
import ContactoList from '../Contacto_list';

const Contacto = () => {
    
    const defaultContact = new contacto('Jony', 'ronaldo', 'loco@gmail.com', true);
    
    return (
        <div>
            <div>
                tu perfil:
            </div>

            <ContactoList contacto={defaultContact}/>
        </div>
    );
};


export default Contacto;
