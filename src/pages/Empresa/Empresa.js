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
      <p>
Desde 2012, a Recreio Auto Service destaca-se como referência em serviços automotivos, com mais de 10 anos de excelência em mecânica, manutenção, lanternagem, pintura e atendimento especializado. Localizada no Recreio dos Bandeirantes, atendemos clientes não só do bairro, mas também de áreas vizinhas. Especializados em veículos nacionais e importados, oferecemos uma gama completa de serviços, desde reparos mecânicos até soluções em encaixe, lanternagem e pintura.</p>
      <div className='container-servicos'>
        {/* <img src='/img/img-funilaria.jpg' /> */}
        <div className='funilaria-bg'/>
        <div className='box-servicos'>
          <h3>O melhor orçamento em serviços de funilaria e pintura</h3>
          <p id='p-box-servicos'>Na execução dos serviços para reparo de sinistros, todas as partes e peças danificadas são removidas e substituídas por produtos novos e originais de fábrica.</p>
          <p id='p-box-servicos'>Reparos mecânicos precisos e eficientes, garantindo o pleno funcionamento do seu veículo.</p>
          <p id='p-box-servicos'>Restauração estética com habilidade artesanal e tecnologia avançada.</p>
          <p id='p-box-servicos'>Revestimento refinado e durável para um visual renovado e protegido.</p>
          <a href='https://wa.me/5521964680921?text=Gostaria%20de%20solicitar%20um%20orçamento!' target='_blank' id='button-black' style={{marginBottom: '40px'}}>ENTRAR EM CONTATO</a>
        </div>
      </div>
    </div>
  )
}

export default Empresa