import ButtonComponent from "./ButtonComponent";
import Campo from "./Campo";
import Form from 'react-bootstrap/Form';

import {useState} from 'react';

function Reserva(){ {/* *Opcional* Un componente que permita reservar una mesa en una hora y fecha específica para un usuario*/}

    const [number, setNumber] = useState(1);

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
                <Form>
                    <Campo text={`Nombre`} as={"input"} type={"text"} />
                    <Campo text={`Email`} as={"input"} type={"email"}/>
                    <Campo text={`Teléfono`} as={"input"} type={"text"}/>
                    <Campo text={`Mensaje y comentarios`} as={"textarea"}  rows={3}/>
                    <ButtonComponent text={'Enviar'} event = {()=>setNumber(number+1) }/>
                </Form>
                {/* 
                <form action="post">
                    <Campo text={`Nombre`}/>
                    <Campo text={`Email`}/>
                    <Campo text={`Teléfono`}/>
                    <Campo text={`Mensaje y comentarios`}/>
                    <button>Enviar</button>
                </form>
                */}
            </nav>
        </div>
    )
}

export default Reserva;