import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Barra from './components/organisms/barra';
import Inicio from './assets/pages/Inicio';
import Acercademi from './assets/pages/Acercademi';
import Proyectos from './assets/pages/Proyectos';
import CMS from './assets/pages/CMS';
import CMStecnologia from './assets/pages/CMStecnologia';
import CMSproyectos from './assets/pages/CMSproyectos';
import CMSexperiencia from './assets/pages/CMSexperiencia';
import Log from './assets/pages/log';
import Login from './lib/slice/auth/login';






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
        <Route path="/CMS/proyectos" element={<CMSproyectos/>} />
        <Route path="/CMS/tecnologias" element={<CMStecnologia/>} />
        <Route path="/CMS/experiencialaboral" element={<CMSexperiencia/>} />
        <Route path="/CMS/log" element={<Login/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App
