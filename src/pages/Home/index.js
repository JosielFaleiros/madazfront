import React from 'react';

import { Carousel, Help, Work, Products } from './style';

import solution from '../../assets/images/slt.png';
import adaptability from '../../assets/images/adp.png';
import improvement from '../../assets/images/imp.png';

export default function Home() {

	return (
		<>		
			<Carousel>
				<div id="items-wrapper">
					<div id="items">
						<div className="item"><img alt="" src="https://unsplash.it/1600/400?image=950"/></div>
					</div>
				</div>
			</Carousel>

			<Help>	
				<br/><br/>
				<div className="box-1">	
						<h1>Como ajudamos nossos clientes? </h1>
						<h4>&emsp;&emsp;Ajudar não é o nosso diferencial e sim o nosso <b>foco</b>, a diferença está em cumprir expectativas. 
						A MADAZ dispõe das seguintes áreas da engenharia de software para construir seu sistema:</h4> <br/>
						
						<div className="box-2">	
							<div>
								<ul>
									<li>Engenharia de Requisitos </li>
									<li>Processo e Produção de Software</li>
									<li>Análise e Projeto </li>
									<li>Gerência de Projeto de Software </li>
									<li>Teste de Software </li>
								</ul>
							</div>
							&emsp; 
							<div >
								<ul>
									<li>Estimativa e Métrica de Software </li>
									<li>Manutenção de Software </li>
									<li>Qualidade de Software </li>
									<li>Arquitetura de Software </li>
									<li>Documentação de Software </li>
								</ul>
							</div>	
						</div>	
						<a href="/about">Saiba mais</a>
				</div>
			</Help>
			
			<Work>
				
					<br/><br/>
					<h2>Como Trabalhamos</h2> 
					
					<h3>Pode ser um pouco senso comum, mas desse senso não queremos fugir, porque se é comum, é o que todos esperam.</h3> <br/><br/>

					<div>
						<img   alt="" src={solution} height="75" width="110"/> <br/><br/>
						Solução em Código: <br/> Proposta que é a melhor forma de resolver o problema <br/>
					</div>
					<div>
						<img   alt="" src={adaptability} height="80" width="110"/> <br/> <br/>
						Adaptabilidade: <br/> Entende-se por resiliência ao seu negócio e necessidades imediatas <br/>
					</div>
					<div>
						<img   alt="" src={improvement} height="80" width="90"/> <br/><br/> 
						Melhoria: <br/> Ação iterativa de otimizar nossos processos para agregar 
					</div>
			</Work>

			<Products>
				
				<h1>Produtos</h1> 
				<div>					
					Existem dois modelos de produtos de software, software de prateleira, que é um pacote fechado de funcionalidades 
					compostas em um sistema e o software sob encomenda, que é um software feito sob medida para o seu negócio, e esse 
					último tipo é o produto que você adquire com a MADAZ.
					<a href="/contact">fale com a gente</a>
				</div>
				

			</Products>
		</>
	);
}