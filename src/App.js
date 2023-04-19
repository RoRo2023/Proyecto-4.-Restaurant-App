import logo from './logo.svg';
import './App.css';
//import NavigationRoute from './NavigationRoute';


import './index.css'

//Componentes
import Articulo from './Articulo';
import Formulario from './Formulario';
import Header from './Header';
import Info from './Info';
import Menu from './Menu';
import Reseña from './Reseña';
import Reserva from './Reserva';
import Footer from './Footer';

//Utilidades
import Hooks from './Hooks';

function App() {
  return (
    <div className="App">
        <Header/> {/*  */}
        
        <Reseña/> {/* Una sección o página sobre información principal del restaurante */}
        <Menu/> {/* *Opcional* Un componente que incluya el menú completo del restaurante */}
        {/*<Formulario/> {/* Una sección de formulario de contacto */}
        {/*<Articulo/> {/* *Opcional* Un blog que incluya un artículo */}
        <Reserva/> {/* *Opcional* Un componente que permita reservar una mesa en una hora y fecha específica para un usuario*/}
        {/*<Info/> {/* Una sección de datos de ubicación y correo electrónico */}
        
        <Footer/> {/*  */}
    </div>
  );
}

export default App;
