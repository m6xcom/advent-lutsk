import Modal from "./Modal";
import CreateBoxButton from "./CreateBoxButton";
import Navigation from "./Navigation";
import SocialsList from "./SocialsList";
import PhonesList from "./PhonesList";

function BurgerMenu({parentClass, isOpen, toggleModal}){
    return(
    <div className={parentClass + " burger-menu" + `${isOpen ? ' active' : ''}`}>
        <button className="burger-menu__button" onClick={toggleModal} type="button">
            <span className="burger-menu__button-line"></span>
        </button>
        <div className="burger-menu__modal burger-modal">
            <CreateBoxButton parentClass="burger-modal__button"/>
            <Navigation parentClass="burger-modal__navigation"/>
            <SocialsList parentClass="burger-modal__socials"/>
            <PhonesList parentClass="burger-modal__phones"/>
        </div>
        <div className="burger-menu__overlay" onClick={toggleModal}></div>
    </div>
    )
}
export default Modal(BurgerMenu);