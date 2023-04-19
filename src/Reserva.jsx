import Campo from "./Campo";

function Reserva(){ {/* *Opcional* Un componente que permita reservar una mesa en una hora y fecha específica para un usuario*/}

    return(
        <div className="reserva">
            <div>
                <h3>Reserva una mesa</h3>
                <p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p>
                <div>
                    <p>Blvd. Paseo del Cristo de las Noas s/n, Local 1</p>
                </div>
                
                <p><i class="bi bi-telephone"></i>+52 (871) 555-5555</p>
                <p><i class="bi bi-envelope"></i>contacto@pizzadice.com</p>
            </div>
            <form action="post">
                <Campo text={`Nombre`}/>
                <Campo text={`Email`}/>
                <Campo text={`Teléfono`}/>
                <Campo text={`Mensaje y comentarios`}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Reserva;