//import '../index.css'
import Image from 'react-bootstrap/Image'

function Reseña(){ {/* Una sección o página sobre información principal del restaurante */}

    return(
        <div className="reseña">
            <nav>
                <div className="reseña-img">
                    <img src={require("./assets/pizza-1080x671.jpg")}  alt="" className='fluid' />
                </div>
                <div className="reseña-text">
                    <h1 style={{fontSize: "50px"}}>Las mejores pizzas del Cerro</h1>
                    <p style={{fontSize: "20px"}}>Disfruta el inigualable sabor de las centenarias recetas de la <span style={{fontStyle: "italic"}}>famiglia Di Giovanni</span>, 
                    de la campiña siciliana a las alturas de la Comarca Lagunera. Con la mejor vista desde la cumbre del cerro del Cristo de las Noas, al pie del teleférico, 
                    degustar una de nuestras pizzas con nuestra selección de ingredientes, se convertirá en toda una experiencia.</p>
                    <p style={{fontSize: "20px"}}>Since 1953, cuando la famiglia Di Giovanni abre su primer establecimiento en la 5a avenida de Manhattan, Nueva York y abre su 
                    primera sucursal en Torreón, en el 2012.</p>
                </div>
            </nav>
            <div className="reseña-info"> 
                    <div>
                        <p>Nacimiento</p>
                        <h2>2012</h2>
                    </div>
                    <div>
                        <p>Rating</p>
                        <h2 style={{fontSize: "30px", color: "gold"}}>★★★★★</h2>
                    </div>
                    <div>
                        <p>Ubicación</p>
                        <h2>Torreón</h2>
                    </div>
                    <div>
                        <p>Raised</p>
                        <h2>$15M</h2>
                    </div>  
            </div>
        </div>
    )
}

export default Reseña;