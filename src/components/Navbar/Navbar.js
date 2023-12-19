import './Navbar.css'
import NavMedia from './NavMedia.js'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

  const [isListVisible, setListVisible] = useState(false)
  const [isButtonVisible, setButtonVisible] = useState(false)


  useEffect(()=> {
    const checkWidth = () => {
      if(window.innerWidth > 785) {
        setListVisible(true)
      } else {
        setListVisible(false)
      }
    }

    const checkWidthButton = () => {
      if(window.innerWidth > 785) {
        setButtonVisible(true)
      } else {
        setButtonVisible(false)
      }
    }

    checkWidthButton()

    checkWidth()

    return () => {
      window.addEventListener('resize', checkWidth)
      window.addEventListener('resize', checkWidthButton)
  }

  }, [])

  const toggleListVisibility = () => {
    setListVisible(!isListVisible)
  } 

  const hiddenUl = () => {
    if(window.innerWidth > 785) {
    } else {
    setListVisible(!isListVisible)
    }
  }

  const location = useLocation()

  const isHomeActive = location.pathname === '/'
  const isEmpresaActive = location.pathname === '/empresa'
  const isServicosActive = location.pathname === '/servicos'
  const isOrcamentoActive = location.pathname === '/orcamento'

  return (
    <>
      <header className="Navbar">
        <NavMedia />
        <nav className="Navbar-nav">
            <div className='flex-logo-btn'>
            <a href="/"><img src="/img/logo.jpg"></img></a>
            <div className="icon-burguer" onClick={toggleListVisibility} style={{display: isButtonVisible ? "none" : "block"}}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            </div>
            <ul className={isListVisible ? 'visible' : ''}>
              <li><Link to='/' onClick={hiddenUl} style={{backgroundColor: isHomeActive ? '#DAC92E' : ''}}>HOME</Link></li>
              <li><Link to='/empresa' onClick={hiddenUl} style={{backgroundColor: isEmpresaActive ? '#DAC92E' : ''}}>EMPRESA</Link></li>
              <li><Link to='/servicos' onClick={hiddenUl} style={{backgroundColor: isServicosActive ? '#DAC92E' : ''}}>SERVIÇOS</Link></li>
              <li><Link to='/orcamento' onClick={hiddenUl} style={{backgroundColor: isOrcamentoActive ? '#DAC92E' : ''}}>ORÇAMENTO</Link></li>
            </ul>
        </nav>
    </header>
      {/* <div id='box-padding' /> */}
    </>
  )
}

export default Navbar