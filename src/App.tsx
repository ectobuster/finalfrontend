import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Barra from './components/organisms/barra';
import Inicio from './assets/pages/Inicio';
import InicioB from './assets/pages/InicioB';
import Acercademi from './assets/pages/Acercademi';
import Proyectos from './assets/pages/Proyectos';
import CMS from './assets/pages/CMS';
import B5 from './components/organisms/ExperienciaL';
import B6 from './components/organisms/Piepagina';



function App() {

  return (
    <Router>
      <div>
        <Barra />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/proyectos" element={<Proyectos/>} />
        <Route path="/acerca de mi" element={<Acercademi/>} />
        <Route path="/CMS" element={<CMS/>} />
        <Route path="/CMS/usuarios" element={<CMS/>} />
        <Route path="/CMS/proyectos" element={<CMS/>} />
        <Route path="/CMS/tecnologias" element={<CMS/>} />
        <Route path="/CMS/experiencialaboral" element={<CMS/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App
