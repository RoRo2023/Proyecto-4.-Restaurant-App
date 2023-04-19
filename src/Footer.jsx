//import '../index.css'

function Footer(){

    return(
       <footer>
        <nav>
          <div>
            <d1>
              <dt>NOSOTROS</dt>
              <dd><a href="#">Acerca de</a></dd>
              <dd><a href="#">Blog</a></dd>
              <dd><a href="#">Trabajos</a></dd>
              <dd><a href="#">Prensa</a></dd>
              <dd><a href="#">Asociados</a></dd>
            </d1>
            <d1>
              <dt>LEGAL</dt>
              <dd><a href="#">Privacidad</a></dd>
              <dd><a href="#">Términos</a></dd>
            </d1>
          </div>
          <div style={{gap: "25px"}}>
                <p style={{fontSize: "30px"}}><a><i class="bi bi-instagram"></i></a></p>
                <p style={{fontSize: "30px"}}><a><i class="bi bi-facebook"></i></a></p>
                <p style={{fontSize: "30px"}}><a><i class="bi bi-messenger"></i></a></p>
                <p style={{fontSize: "30px"}}><a><i class="bi bi-twitter"></i></a></p>
                <p style={{fontSize: "30px"}}><a><i class="bi bi-github"></i></a></p>
          </div>
        </nav>
        <br />
        <p>2023. UCamp. Todos los derechos reservados. Esta es una aplicación ficticia para fines académicos.</p>
       </footer> 
    )
}

export default Footer;