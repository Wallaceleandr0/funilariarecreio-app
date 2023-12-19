import Empresa from '../Empresa/Empresa.js'
import Servicos from '../Servicos/Servicos.js'
import Carousel from '../../components/Carousel.js'
import Orcamento  from '../Orcamento/Orcamento.js'

function Home() {


  return (
    <div className='Home'>
      <Carousel />
      <Empresa style={{padding: '0'}} />
      <Servicos />
      <Orcamento />
    </div>
  )
}

export default Home