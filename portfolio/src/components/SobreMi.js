import "./SobreMi.css"
import LineaColor from "./LineaColor"

export const SobreMi = () => {
  return (
    <section className="sobre-mi">
        <h2 className="sobre-mi-titulo">Sobre mí</h2>
        <LineaColor color='#33FFA9'/>
        <p className="sobre-mi-descripcion">
            Hola, vivo en Almería, tengo más de 7 años de experiencia trabajando
            en una empresa de Telecomunicaciones desempeñando el rol de soporte TI,
            eventualmente gestionaba bases de datos. De forma paralela, he continuado estudioando
            desarrollo de aplicaciones web. 
            <br/> <br/>
            Me encanta trastear hardware y software retro y ver
            como se apañaban los desarrolladores en la época para superar las limitaciones de
            hardware.
        </p>
        <a 
          href="https://www.linkedin.com/in/sergio-fern%C3%A1ndez-muyor-front-end/"
          className="sobre-mi-boton"
        >
          Perfíl de Linkedin {["/>"]}
        </a>
    </section>
  )
}


export default SobreMi