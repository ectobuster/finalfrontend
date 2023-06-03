import * as React from 'react';


import TPresentacion from '../../components/organisms/TPresentacion';
import Diferenciadores from '../../components/organisms/Diferenciadores';
import Ejemplopagina from '../../components/organisms/Ejemplopagina';
import Sobremi from '../../components/organisms/Sobremi';
import ExperienciaL from '../../components/organisms/ExperienciaL';
import Piepagina from '../../components/organisms/Piepagina';

function Inicio() {

    return (
      <div>
  
          <TPresentacion/>
          <Diferenciadores/>
          <Ejemplopagina/>
          <Sobremi/>
          <ExperienciaL/>
          <Piepagina/>
  
      </div>
    )
  }
  
  export default Inicio