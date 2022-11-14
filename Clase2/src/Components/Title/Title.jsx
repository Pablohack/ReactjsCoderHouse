

export default function Title({title,list}){
    console.log(list)
    return(
        <div>
        <p>{title}</p>
        {list.map((nameGame,index)=>{
            const uniqueKey = nameGame+index
            return(
                <p id={index} key={index} >{nameGame}</p>
            )
        })}
        </div>
    )
}

