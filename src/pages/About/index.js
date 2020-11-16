import React from 'react';

import { Mission, Values, Team, Purpose } from './style';

export default function About() {

  return (
    <div>    
      <Mission>
        <h2>Missão</h2> <br/> <p>Suprir a necessidade dos nossos clientes com eficácia, oferecendo a melhor forma de solucionar os problemas.</p>
      </Mission>
      
      <Values>
        <h2>Valores</h2> <br/> 
        Qualidade <br/> Competência, Ética, Segurança <br/> Comprometimento, Responsabilidade, Credibilidade 
      </Values>
    
      <Team>
        <div class="background">
          <div class="transbox">
          <p> <h2>Equipe</h2> <br/> Composta de colaboradores com sólidos fundamentos técnicos, teóricos, práticos e profissionais,
            a Madaz propõe uma equipe consolidada e solícita no comprometimento de satisfação dos nossos clientes.</p>
          </div>
        </div>
      </Team>

      <Purpose>
        <h2>Propósito</h2> <br/> Ser uma empresa que produza impacto positivo sobre a sociedade, uma fábrica de
        software sob medida pode cumprir esse objetivo com maestria.
      </Purpose>
    </div>
  );
}
  

