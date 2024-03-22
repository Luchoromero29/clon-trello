
type Props = {
    id: string,
    children: React.ReactNode;
}

//Funcion para agregar las opciones de los tableros cuando se le realiza hover
const handleMouseEnter = (id : string) => {
    const target = document.getElementById(id)
    const options = target?.getElementsByClassName("board-options")
    
    if (!options) return
    
    for (const option of options) {
        option.classList.remove('invisible')
    }
}
//Funcion para quitar las opciones de los tableros cuando se sale del hover
const handleMouseLeave = (id : string) => {
    const target = document.getElementById(id)
    
    
    const options = target?.getElementsByClassName('board-options')
    
    if (!options) return
    
    for (const option of options) {
        option.classList.add('invisible')
    }
}

const BoardWrapper = ({id,children} : Props) => {
    return(
        <div 
            id={id} 
            className="board-wrapper justify-between flex items-center w-full cursor-pointer hover:font-medium"
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}
        >
            {children}
        </div>
    )
}

export default BoardWrapper