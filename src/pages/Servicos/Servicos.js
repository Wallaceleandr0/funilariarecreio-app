import './Servicos.css'
import { useLocation } from 'react-router-dom'

function Servicos() {

  const location = useLocation()

  const isServicoActive = location.pathname === '/servicos'

  return (
    <div className='Servicos'>
      {isServicoActive && (
        <>
        <h1>SERVIÇOS</h1>
        <div className='line'/>
        </>
      )}
      <h2>Cuidamos de seu veículo como se fosse nosso!</h2>
      <p>Realizamos serviços com tecnologia de ponta e equipamentos modernos no segmento automotivo. A RECREIO AUTO SERVICE opera centrada em 3 princípios: Satisfação do Cliente, Excelência Técnica em Reparação e Garantia de Qualidade, obtendo resultados equiparáveis aos originais de fábrica.</p>
      <div className='container-servicos'>
        <div className='box-servicos'>
          <img src='/img/car-front-fill.svg'/>
          <h3>Lanternagem</h3>
          <p>Restauramos a estrutura do seu veículo com habilidade artesanal, eliminando amassados e imperfeições para uma aparência impecável.
          </p>
        </div>
        <div className='box-servicos'>
          <img src='/img/car-front.svg'/>
          <h3>Pintura</h3>
          <p>Renovamos e protegemos seu veículo com técnicas avançadas de pintura, proporcionando um revestimento refinado e duradouro.
          </p>
        </div>
        <div className='box-servicos'>
          <img src='/img/ev-front-fill.svg'/>
          <h3>Polimento</h3>
          <p>Dê o toque final ao seu carro. Removemos imperfeições, revelando o brilho original e garantindo um acabamento reluzente e protegido.
          </p>
        </div>
      </div>
      <a href='https://wa.me/5521964680921?text=Gostaria%20de%20solicitar%20um%20orçamento!' target='_blank' id='button-black' style={{marginBottom: '40px'}}>ENTRAR EM CONTATO</a>
    </div>
  )
}

export default Servicos