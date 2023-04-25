import LineaColor from "./LineaColor"
import "./MisTrabajos.css"


export const MisTrabajos = () => {
  return (
    <section className="mis-trabajos" id="mis-trabajos">
        <div className="mis-trabajos-titulo-principal">
            <h1>Mis Trabajos</h1>
            <LineaColor color='#33FFA9' />
        </div>
        
        <div className="mis-trabajos-contenido">
            <div className="mis-trabajos-descripcion">
                <h2 className="trabajo-titulo">Pokedex</h2>
                <p>
                    Proyecto que nos permite buscar diferentes pokemon's y mostrar sus estadísticas, 
                    valiéndonos de consultas a la API <a href="https://pokeapi.co/"  className="link-hover">pokeapi.co</a>. 
                    El sitio ha sido desarrollado usando React, Vite y subido a Netlify.
                </p>
                <div className="mis-trabajos-botones">
                    <a href="https://sfm94-pokedex.netlify.app/" className="boton-hover">Ver demo</a>
                    <a href="https://github.com/SergioFM94/Pokedex"  className="boton-hover">Ver repositiorio</a>
                </div>
            </div>
            <img src="pokedex.PNG" alt="imagen pokemon" className="mis-trabajos-img"/>
        </div>

        <div className="mis-trabajos-contenido">
            <div className="mis-trabajos-descripcion">
                <h2 className="mis-trabajos-titulo">Movie Finder</h2>
                <p>
                    Pequeño buscador, que nos permite visualizar posters de películas, series, anime, etc.
                    Consume datos de la API <a href="https://www.omdbapi.com/">OMDb API</a> El proyecto está realizado en react,
                    usando WaterCSS para el estilo con pequeñas modificaciones.
                </p>
                <div className="mis-trabajos-botones">
                    <a href="https://smf94-movie-finder.netlify.app/" className="boton-hover">Ver demo</a>
                    <a href="https://github.com/SergioFM94/movie-finder" className="boton-hover">Ver repositiorio</a>
                </div>
            </div>

            <img src="movie.PNG" alt="imagen app buscador de películas" className="mis-trabajos-img"/>
        </div>

        <div className="mis-trabajos-contenido">
            <div className="mis-trabajos-descripcion">
                <h2 className="mis-trabajos-titulo">The Floor is Lava</h2>
                <p>
                    Videojuego realizado en 48 horas para la gameJam 
                    <a href="https://itch.io/jam/mini-jam-128-health" className="link-hover"> Mini Jam 128: Health.</a> El juego está 
                    desarrollado en Unity usando el lenguaje C# y para los sprites usé el editor Aseprite.
                </p>
                <div className="mis-trabajos-botones"> 
                    <a href="https://neku1994.itch.io/the-floor-is-lava" className="boton-hover">Jugar</a>
                    <a href="https://github.com/SergioFM94/Mini-Jam-128-Health" className="boton-hover">Ver repositiorio</a>
                </div>
            </div>
            
            <img src="floor-is-lava.png" alt="imagen videojuego floor is lava" className="mis-trabajos-img"/>
        </div>
        <div className="mis-trabajos-contenido">
            <div className="mis-trabajos-descripcion">
                <h2 className="mis-trabajos-titulo">FutGo!</h2>
                <p>
                    Aplicación que permitía el registro a usuarios, los cuales podían indicar mediante un mapa, ubicaciones
                    donde hay pistas de futbol, de esta forma promover que más gente vaya y practique deporte.
                    Web desarrollada en PHP y usando MySQL para gestionar la base de datos, para la creación del mapa
                    usé la librería Leaflet.js. Fué mi proyecto final de curso.
                </p>
                <div className="mis-trabajos-botones">
                    <a href="https://github.com/SergioFM94/Fut-Go" className="boton-hover">Ver repositiorio</a>
                </div>
            </div>
            <img src="futgo.png" alt="Web mapa con ubicaciones de pistas de futbol" className="mis-trabajos-img"/>
            
        </div>
        <div className="mis-trabajos-mas-trabajos">
            <a href="https://github.com/SergioFM94?tab=repositories" className="mis-trabajos-mas">Mas trabajos</a>
        </div>
    </section>
  )
}


export default MisTrabajos