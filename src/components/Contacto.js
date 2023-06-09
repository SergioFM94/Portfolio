import "./Contacto.css"


function Contacto(){
    return(
        <section className="contacto" id="contacto">
            <h1 className="contacto-titulo">Contacto</h1>
            <div className="contacto-form-caja">
                <form 
                    action="https://formsubmit.co/sergiofernandezmuyor@gmail.com"
                    method="POST"
                    className="contacto-form"
                >
                    
                    <label for='nombre'>Nombre</label>
                    <input type='text' name='nombre' className="contacto-form-input"/>

                    <label for='email'>Correo Electrónico</label>
                    <input type='email' name='email' className="contacto-form-input"/>

                    <label for='subject'>Asunto</label>
                    <input type='text' name='subject' className="contacto-form-input"/>

                    <label for='comentarios'>Descripción</label>
                    <textarea name='comentarios' className="contacto-comentarios"></textarea>

                    <input id="submit" type='submit' value='CONTACTAR' className="contacto-submit" />
                </form>
            </div>
        </section>
        
    )
}

export default Contacto
