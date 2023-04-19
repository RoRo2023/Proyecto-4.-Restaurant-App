//import '../index.css'

function Reseña(){ {/* Una sección o página sobre información principal del restaurante */}

    return(
        <div className="reseña">
            <h1>Las mejores pizzas del Cerro</h1>
            <p style={{fontSize: "30px"}}>Disfruta el inigualable sabor de las centenarias recetas de la famiglia <span></span> Di Giovanni, de la campiña siciliana a las alturas de la Comarca Lagunera. Con la mejor vista desde la cumbre del cerro del Cristo de las Noas, al pie del teleférico, degustar una de nuestras pizzas con nuestra selección de ingredientes, se convertirá en toda una experiencia.</p>
            <p style={{fontSize: "30px"}}>Since 1953, cuando la famiglia Di Giovanni abre su primer establecimiento en la 5a avenida de Manhattan, Nueva York y abre su primera sucursal en Torreón, en el 2012.</p>
            <div>
                <h2>Nacimiento</h2>
                <p>2012</p>
            </div>
            <div>
                <h2>Rating</h2>
                <p>★★★★★</p>
            </div>
            <div>
                <h2>Ubicación</h2>
                <p>Torreón</p>
            </div>
            <div>
                <h2>Raised</h2>
                <p>$15M</p>
            </div>  
        </div>
    )
}

export default Reseña;