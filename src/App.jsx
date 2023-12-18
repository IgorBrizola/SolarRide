// 1) Composta de import's

// 2) Criação de função ou classe

// 3) Exportar a função 

import React from 'react';
import './App.css';

function App() {
 return (
      <>

      <nav className='navbar'>
        <a href="#"><img src="../img/r6logo.AVIF" alt="" className='LogoR6' /></a>
     
        <ul>
          <li>
            <a href="">NEWS</a>
          </li>
          <li>
            <a href="">OPERATOR</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">GAME INFO</a>
          </li>
        </ul>
      </nav>


    <header>
      <img src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6YOBUP5JMskklFx9nDJQ49/d9d4b0968f581597feaa0ef4ec0891f3/r6s-operators-badge-solis.png" alt="" className='IconSolid' />

      <h2><img src="../img/solarR.png" alt="" /></h2>  
      </header>
    
<section className='Sobre'>
  
      <p>Rainbow Six Siege proudly presents the fourth season of Year 7 by initiating Operation Solar Raid! Hailing from warm and colorful Colombia, the latest to integrate with team Rainbow is Operator Solis. A technological specialist, Solis brings advanced computer knowledge, and uses her SPEC-IO Electro-Sensor's augmented reality to relay precise battlefield information to her team with a flick of her fingers. Read the Patch Notes below for full details.</p>  
      <a href="https://www.ubisoft.com/en-us/game/rainbow-six/siege/game-info/seasons/solarraid" target='blank' className='Saiba'>Saiba mais</a>

      
</section>
      
      
      
      
      </>
     
 );
}

export default App;