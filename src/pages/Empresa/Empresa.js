import './Empresa.css'
import { useLocation } from 'react-router-dom'

function Empresa() {

  const location = useLocation()

  const isEmpresaActive = location.pathname === '/empresa'

  return (
    <div className='Empresa'>
      {isEmpresaActive && (
        <>
          <h1>EMPRESA</h1>
          <span className='line'></span>
        </>
      )}
      <h2>FUNILARIA E PINTURA RECREIO AUTO SERVICE</h2>
      <p>Desde 2015, a oficina Recreio Auto Service tem se destacado no ramo de serviços automotivos de mecânica e manutenção, localizada no bairro do Recreio dos Bandeirantes. Atendemos com primazia clientes não apenas do Recreio, mas também de bairros vizinhos como Barra da Tijuca, Guaratiba, Jacarepaguá, entre outras regiões. Especializados em veículos nacionais e importados, oferecemos serviços que vão desde reparos mecânicos até soluções avançadas em tecnologia automotiva.</p>
      <div className='container-servicos'>
        {/* <img src='/img/img-funilaria.jpg' /> */}
        <div className='funilaria-bg'/>
        <div className='box-servicos'>
          <h3>O melhor orçamento em serviços de funilaria e pintura</h3>
          <p id='p-box-servicos'>Nos serviços realizados para solução de sinistros, são removidas todas as partes e peças danificadas e substituídas por produtos novos originais de fábrica:</p>
          <p id='p-box-servicos'>Peças e partes dos melhores fabricantes nas substituições</p>
          <p id='p-box-servicos'>Peças e partes dos melhores fabricantes nas substituições</p>
          <p id='p-box-servicos'>Peças e partes dos melhores fabricantes nas substituições</p>
          <a href='' id='button-black' style={{marginBottom: '40px'}}>MAIS SOBRE A EMPRESA</a>
        </div>
      </div>
    </div>
  )
}

export default Empresa