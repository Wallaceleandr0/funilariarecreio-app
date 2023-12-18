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
      <p>Executamos serviços com processos e equipamentos mais modernos do ramo de serviços automotivos. o AUTO SERVICE trabalha com foco em 3 pilares: Cliente, Técnica em Reparação e Qualidade com resultados originais de fábrica.</p>
      <div className='container-servicos'>
        <div className='box-servicos'>
          <img src='/img/logo.jpg'/>
          <h3>Funilaria e Pintua</h3>
          <p>Realizamos serviços de funilaria e pintura aqui na mooca com produtos de alta qualidade e mão de obra especializada com cabine própria para pinturas.
          </p>
        </div>
        <div className='box-servicos'>
          <img src='/img/logo.jpg'/>
          <h3>Funilaria e Pintua</h3>
          <p>Realizamos serviços de funilaria e pintura aqui na mooca com produtos de alta qualidade e mão de obra especializada com cabine própria para pinturas.
          </p>
        </div>
        <div className='box-servicos'>
          <img src='/img/logo.jpg'/>
          <h3>Funilaria e Pintua</h3>
          <p>Realizamos serviços de funilaria e pintura aqui na mooca com produtos de alta qualidade e mão de obra especializada com cabine própria para pinturas.
          </p>
        </div>
      </div>
      <a href='' id='button-black' style={{marginBottom: '40px'}}>MAIS SOBRE A EMPRESA</a>
    </div>
  )
}

export default Servicos