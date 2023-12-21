import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home.js'
import Servicos from '../../pages/Servicos/Servicos.js'
import Navbar from './Navbar.js'
import Orcamento from '../../pages/Orcamento/Orcamento.js'
import Empresa from '../../pages/Empresa/Empresa.js'
import Obrigado from '../../pages/Obrigado/Obrigado.js'

function RoutesNavbar() {
  return (
    <>
        <Navbar />
        <div id='box-padding'></div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/servicos' element={<Servicos />} />
            <Route path='/orcamento' element={<Orcamento />} />
            <Route path='/empresa' element={<Empresa />} />
            <Route path='/obrigado' element={<Obrigado />} />
        </Routes>
    </>
  )
}

export default RoutesNavbar