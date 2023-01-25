// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navigation-bar">
        <NavLink to='/' id='logo'><img src="/logo192.png" alt="logo" /></NavLink>
        <NavLink to='/burgers'>Burger Shop</NavLink>
      </nav>
    </>
  )
}

export default Nav