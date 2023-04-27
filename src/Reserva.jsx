import ButtonComponent from "./ButtonComponent";
import Campo from "./Campo";
//import Form from 'react-bootstrap/Form';

import {useRef, useState, useEffect,} from 'react';

import { addData, getData} from './utils/aws-dynamodb';

function Reserva(){ {/* *Opcional* Un componente que permita reservar una mesa en una hora y fecha específica para un usuario*/}

    const nombreRef = useRef(null);  
    const emailRef = useRef(""); 
    const telefonoRef = useRef(null); 
    const mensajeRef = useRef(null); 

    const [vEmail, validarEmail] = useState(false);
    const [email, setEmail] = useState("");

    //Validar correo
    useEffect(() => {
        console.log('state useEfect');
        console.log(email);
        
        if (email.includes("@")){
            validarEmail(true);
            console.log(vEmail);
        } else{
            validarEmail(false);
            console.log(vEmail);
        }
        
    })

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
                    <Campo text={`Nombre`} as={"input"} type={"text"} innerRef={nombreRef} event ={() =>console.log(nombreRef.current.value)}/>
                    <Campo text={`Email`} as={"input"} type={"email"} innerRef={emailRef} event = {() =>setEmail(emailRef.current.value)}/>
                    <Campo text={`Teléfono`} as={"input"} type={"text"} innerRef={telefonoRef} event ={() =>console.log(nombreRef.current.value)}/>
                    <Campo text={`Mensaje y comentarios`} as={"textarea"}  rows={3} innerRef={mensajeRef} event ={() =>console.log(nombreRef.current.value)}/>
                    <ButtonComponent text={'Enviar'} type={"submit"} event = {()=>
                        {setEmail(emailRef.current.value);
                        if(vEmail===true){addData(nombreRef.current.value, emailRef.current.value, telefonoRef.current.value, mensajeRef.current.value)}else{console.log("no")}}}/>
                </form>
            </nav>
        </div>
    )
}

export default Reserva;