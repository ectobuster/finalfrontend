import * as React from 'react';

import ProyectoG from '../../components/organisms/ProyectoG';
import ListaProyectos from '../../components/organisms/ListaProyectos';
import ExperienciaL from '../../components/organisms/ExperienciaL';
import Piepagina from '../../components/organisms/Piepagina';

function Proyectos() {

    return (
      <div>
          <ProyectoG/>
          <ListaProyectos/>
          <ExperienciaL/>
          <Piepagina/>
      </div>
    )
  }
  
  export default Proyectos