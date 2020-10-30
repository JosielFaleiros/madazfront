import React from 'react';

import { Local } from './style';
import logo from '../../assets/images/logo.png';

export default function Footer() {
    
  return (
    <>
      <Local> 
        <div className="footer">
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-4">
                  <div class="widget">
                    <div class="foot-logo">
                      <div class="logo">
                      </div>	

                      <div class="logo">
                        <a href="/"><img   alt="" src={logo} height="45" width="150"/></a>
                      </div>
                      <p>
                        Rua Cabo Airton Braga, 190 - Jardim Vitória <br/>
                        Belo Horizonte - Minas Gerais <br/>
                        CEP 31.970-621 <br/>
                      </p>
                      <p>
                        Telefone: &nbsp;
                        <span ><a title="Ligar para a Forlogic" href="tel:+5531984722959">+55 31 98472-2959</a></span><br/>
                      </p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </footer>
          <div class="bottombar">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <span class="copyright">© Madaz 2020. All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Local>



      </>
  );
}
  