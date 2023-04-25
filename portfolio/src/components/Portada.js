import "./Portada.css"


export const Portada = () => {
  return (
    <section className="portada">
        <div className="portada-contenido">
            <h1 className="portada-titulo">Sergio Fernández Muyor</h1>
            <span className="portada-slogan">Disciplina, Trabajo y crecimiento constante.</span>
            <a href="#" className="portada-contacto boton-hover">Contacto</a>
            <div className="portada-social-media">
                <a href="https://www.linkedin.com/in/sergio-fern%C3%A1ndez-muyor-front-end/" className="link-hover">Linkedin</a>
                <a href="https://github.com/SergioFM94/" className="link-hover">Github</a>
                <a className="portada-boton-cv boton-hover" 
                   download 
                   href="Resume-Sergio-Fernández-Muyor.pdf"
                > 
                  Mi CV
                </a>
            </div>
        </div>
        <img src="principal.png" alt="imagen portada" className="portada-imagen"/>
    </section>
  )
}

export default Portada;