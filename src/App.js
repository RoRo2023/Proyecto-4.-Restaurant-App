import logo from './logo.svg';
import './App.css';
//import NavigationRoute from './NavigationRoute';


import './index.css'

//Componentes
import Header from './Header';
import Menu from './Menu';
import Reseña from './Reseña';
import Reserva from './Reserva';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Header/> {/*  */}
        
        <Reseña/> {/* Una sección o página sobre información principal del restaurante */}
        <Menu/> {/* *Opcional* Un componente que incluya el menú completo del restaurante */}
        <Reserva/> {/* *Opcional* Un componente que permita reservar una mesa en una hora y fecha específica para un usuario*/}
      
        <Footer/> {/*  */}
    </div>
  );
}

export default App;
