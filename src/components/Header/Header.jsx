import logo from '../../images/logo.svg'
export default function Header() {
  return (
        <header className="header">
        <img
          src={logo}
          alt="Around the USA"
          className="header__logo"
        />
        <hr className="header__line" />
      </header>
  )
}
