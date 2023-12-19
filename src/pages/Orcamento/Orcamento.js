import './Orcamento.css';
import { Link ,useLocation } from 'react-router-dom';

function Orcamento() {

  const location = useLocation();
  const isOrcamentoActive = location.pathname === '/orcamento';

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
            <li>Restauramos a estrutura do seu veículo</li>
            <li>Renovamos e protegemos seu veículo</li>
            <li>Removemos imperfeições</li>
          </ul>
          <h4 style={{fontSize: '37px'}}>Número de suporte rápido (+21) 96468-0921</h4>
        </div>
        <div className='box-2'>
          <h3>Entre em contato conosco</h3>
          <h2>Solicite um orçamento</h2>
          <form action='https://formsubmit.co/carlosconforte26@gmail.com' method='POST' data-button>
            <input type="hidden" name="_captcha" value="false"/>
            <div className='label-input'>
              <label>Nome:</label>
              <input placeholder='Digite o seu nome..' name='name' required/>
            </div>
            <div className='label-input'>
              <label>E-mail:</label>
              <input placeholder='Digite o seu email..' name='email' required/>
            </div>
            <div className='label-input'>
              <label>Mensagem:</label>
              <textarea placeholder='Preciso fazer uma mudança...' name='message' required />
            </div>
            <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
              <button type="submit" data-button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Orcamento;
