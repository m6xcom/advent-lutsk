import BurgerMenu from './BurgerMenu'
import logo from '@img/logo.png'

function Header(){
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo logo">
                    <img className='logo__image' src={logo} alt="advent_lutsk logo" />
                    <span className='logo__text'>advent_lutsk</span>
                </div>
                <BurgerMenu parentClass="header__burger-menu"/>
            </div>
        </header>
    )
}

export default Header