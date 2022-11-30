import './title.css';

export default function Title({title,list,primary}){
    console.log(list)
    return(
        <div>
        <p >{title}</p>
        {list.map((nameGame,index)=>{
            const uniqueKey = nameGame+index
            return(
                <p id={index} key={index} className='title'>{nameGame}</p>
            )
        })}
        </div>
    )
}

