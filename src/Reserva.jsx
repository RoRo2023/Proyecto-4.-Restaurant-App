import ButtonComponent from "./ButtonComponent";
import Campo from "./Campo";
//import Form from 'react-bootstrap/Form';

import {useRef, useState} from 'react';

import { addData, getData, updateData, handleEnviar} from './utils/aws-dynamodb';

function Reserva(){ {/* *Opcional* Un componente que permita reservar una mesa en una hora y fecha específica para un usuario*/}

    const nombreRef = useRef(null);  
    const emailRef = useRef(null); 
    const telefonoRef = useRef(null); 
    const mensajeRef = useRef(null); 

    /*
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');
*/

    return(
        <div className="reserva">
            <nav>
                <div className="reserva-text">
                    <div>
                        <h3>Reserva una mesa</h3>
                        <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>
                    </div>
                    <div>
                        <p>Blvd. Paseo del Cristo de las Noas s/n, Local 1</p>
                    </div>
                    <div>
                        <p><i class="bi bi-telephone"></i>+52 (871) 555-5555</p>
                        <p><i class="bi bi-envelope"></i>contacto@pizzadice.com</p>
                    </div>
                </div>
                <form>
                    <Campo text={`Nombre`} as={"input"} type={"text"} innerRef={nombreRef}/>
                    <Campo text={`Email`} as={"input"} type={"email"} innerRef={emailRef}/>
                    <Campo text={`Teléfono`} as={"input"} type={"text"} innerRef={telefonoRef}/>
                    <Campo text={`Mensaje y comentarios`} as={"textarea"}  rows={3} innerRef={mensajeRef}/>
                    <ButtonComponent text={'Enviar'} type={"submit"} event = {()=>addData(nombreRef.current.value, emailRef.current.value, telefonoRef.current.value, mensajeRef.current.value)}/>
                </form>
                {/* 
                <form action="post">
                    <Campo text={`Nombre`}/>
                    <Campo text={`Email`}/>
                    <Campo text={`Teléfono`}/>
                    <Campo text={`Mensaje y comentarios`}/>
                    <button>Enviar</button>
                </form>



                addData(nombreRef, emailRef, telefonoRef, mensajeRef)
                */}
            </nav>
        </div>
    )
}

export default Reserva;