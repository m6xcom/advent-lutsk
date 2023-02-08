import NavigationItem from "./NavigationItem";

function Navigation({parentClass}){
    const navigationList = [
        'Каталог',
        'Оплата й доставка',
        'Відгуки'
    ]
    return (
        <nav className={ parentClass + " navigation" }>
            <ul className="navigation__list">
                {navigationList.map(el=>{
                    return(
                        <li key={el} className="navigation__item">
                            <NavigationItem parentClass='navigation__button' text={el}/>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation;
