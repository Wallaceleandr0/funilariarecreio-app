import './Orcamento.css'
import { useLocation } from 'react-router-dom'

function Orcamento() {

  const location = useLocation()

  const isOrcamentoActive = location.pathname === '/orcamento'

  return (
    <div className='Orcamento'>
      {isOrcamentoActive && (
        <>
          <h1>ORÇAMENTO</h1>
          <div className='line'/>
        </>
      )}
      <div className='container-orcamento'>
        <div className='box-1'>
          <h3>Não heiste, entre em contato</h3>
          <h2>O que podemos oferecer para o seu veículo</h2>
          <p>O melhor preço do Brasil!</p>
          <ul>
            <li>Serviços de funilaria</li>
            <li>Serviços de funilaria</li>
            <li>Serviços de funilaria</li>
          </ul>
          <h4 style={{fontSize: '37x'}}>Número de suporte rápido (+99) 68985 8596 95</h4>
        </div>
        <div className='box-2'>
          <h3>Entre em contato conosco</h3>
          <h2>Solicite um orçamento</h2>
          <form>
            <div className='label-input'>
            <label>Nome:</label>
            <input placeholder='Digite o seu nome..'/>
            </div>
            <div className='label-input'>
            <label>E-mail:</label>
            <input placeholder='Digite o seu email..'/>
            </div>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Orcamento