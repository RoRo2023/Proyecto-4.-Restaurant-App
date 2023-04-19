//import '../index.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function HeaderComponent(){

    return(
        <header>
            <div className="header-logo">
                <h1>PIZZA DICE</h1>
                <p><i class="bi bi-dice-1"></i><i class="bi bi-dice-2-fill"></i><i class="bi bi-dice-3"></i><i class="bi bi-dice-4-fill"></i><i class="bi bi-dice-5"></i><i class="bi bi-dice-6-fill"></i></p>
            </div>
            <div className="header-text">
                <li><a href="#">Menu</a></li>
                <li><a href="#">¿Quiénes somos?</a></li>
                <li><a href="#">Reservaciones</a></li>
            </div>

        </header>
    )
}

export default HeaderComponent;