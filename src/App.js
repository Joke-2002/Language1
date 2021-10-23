import i18n from 'i18next'
import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
export default function App() {
  const [count, setCount] = useState(0)
  const changeLanguage = (lg) => {
    i18n.changeLanguage(lg)
  }
  const {t} = useTranslation();
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link>{t('n')}</Nav.Link>
      <Nav.Link>{t('p')}</Nav.Link>
      <Nav.Link>{t('h')}</Nav.Link>
      <Nav.Link>{t('o', ({count}))}</Nav.Link>
      <Nav.Link>{t('i')}</Nav.Link>
      <Nav.Link>{t('AAAAAAA')}<strong>({count})</strong>
      </Nav.Link>
      <NavDropdown title="Language" id="collasible-nav-dropdown">
        <NavDropdown.Item onClick={() => changeLanguage('en')}>EN</NavDropdown.Item>
        <NavDropdown.Item onClick={() => changeLanguage('ru')}>RU</NavDropdown.Item>
        <NavDropdown.Item onClick={() => changeLanguage('kg')}>KG</NavDropdown.Item>
        <NavDropdown.Item onClick={() => changeLanguage('kz')}>KZ</NavDropdown.Item>
        <NavDropdown.Item onClick={() => changeLanguage('tj')}>TJ</NavDropdown.Item>
        <NavDropdown.Item onClick={() => changeLanguage('gr')}>GR</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link  onClick={() => changeLanguage('en')}>English</Nav.Link>
      <Nav.Link onClick={() => changeLanguage('ru')}>Russian</Nav.Link>
      <Nav.Link onClick={() => changeLanguage('kg')}>Kyrgyz</Nav.Link>
      <Nav.Link onClick={() => setCount(count + 1) }>+</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    <h2>{t('')}</h2>
     {/* <h2>{t('Welcome to React')}</h2>
     <button onClick={() => changeLanguage('en')}>en</button>
     <button onClick={() => changeLanguage('ru')}>ru</button>  */}
    </>
  )
}





