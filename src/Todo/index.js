function Todo(props){
    let arr=[1,2,3,4,5,6]

    let list = arr.map( (el, key) => {
        return <li key={key} id={key} > { el } </li>
    } )

    console.log(props.name)
    return(
        <ul>
            {list}
        </ul>
    )
}

export default Todo;