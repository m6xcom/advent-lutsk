import tiktok from "@icons/tiktok.svg";
import instagram from "@icons/instagram.svg";

function SocialsList({parentClass}){
    const socials = [
        {
            icon: instagram,
            link: 'https://instagram.com/advent_lutsk?igshid=YmMyMTA2M2Y=',
        },
        {
            icon: tiktok,
            link: 'https://www.tiktok.com/@advent_lutsk?_t=8Zje9A4gi9t&_r=1',
        }
    ]
    return (
        <ul className={ parentClass + ' socials-list' }>
            { socials.map((el, index) =>{
                return (
                    <li key={index} className="socials-list__item">
                        <a className="socials-list__link" href={el.link}>
                            <svg className="socials-list__icon">
                                <use xlinkHref={`#${el.icon}`}></use>
                            </svg>
                        </a>
                    </li>
                )
            }) }
        </ul>
    )
}

export default SocialsList;