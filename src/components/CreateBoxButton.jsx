import Anchor from "./Anchor";
import cubeIcon from '@icons/cube.svg'

function CreateBoxButton({parentClass}){
    return(
        <>
            <svg className="create-box-button__icon">
                <use xlinkHref={`#${cubeIcon}`}></use>
            </svg>
            Створи свій бокс
        </>
    )
}

export default Anchor(CreateBoxButton, 'create-box-button');