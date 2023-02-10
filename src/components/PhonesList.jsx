function PhonesList({parentClass}){
    const phones = [
        {
            'phone' : '+38 099 307 74 19',
            'link'  : '+380993077419'
        }
    ]
    return (
        <ul className={ parentClass + ' phones-list' }>
            { phones.map((el, index) =>{
                return (
                    <li key={index} className="phones-list__item">
                        <a className="phones-list__link" href={"tel:" + el.link}>
                            { el.phone }
                        </a>
                    </li>
                )
            }) }
        </ul>
    )
}

export default PhonesList;