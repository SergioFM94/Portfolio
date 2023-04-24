import NavBar from "./components/NavBar"
import Portada from "./components/Portada";
import SobreMi from "./components/SobreMi";
import MisTrabajos from "./components/MisTrabajos";
//import Tecnologias from "./components/Tecnologias";
import Contacto from "./components/Contacto";
import "./App.css"


function App() {
  return (
    <>
      <NavBar />
      <main>
      <Portada />
      <SobreMi />
      <MisTrabajos />
      <Contacto />
      </main>
    </>
  );
}

export default App;
