import "./Portada.css"

export const Portada = () => {
  return (
    <section className="portada">
        <div className="portada-contenido">
            <h1 className="portada-titulo">Sergio Fernández Muyor</h1>
            <span className="portada-slogan">Disciplina, Trabajo y pasión por la tecnología.</span>
            <a href="#" className="portada-contacto">Contacto</a>
            <div className="portada-social-media">
                <a href="#">Linkedin</a>
                <a href="#">Github</a>
                <a className="portada-boton-cv" 
                   download 
                   href="Resume-Sergio-Fernández-Muyor.pdf"
                > 
                  Mi CV
                </a>
            </div>
        </div>
        <img src="principal.png" alt="imagen portada"/>
    </section>
  )
}

export default Portada;