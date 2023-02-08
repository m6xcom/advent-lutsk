function Anchor(Component, parentClass){
    return (props) =>{

        return(
            <button type="button" className={`${props.parentClass ? props.parentClass : ""} ${parentClass ? parentClass : ''}`}>
                <Component {...props}/>
            </button>
        )
    }
}

export default Anchor;