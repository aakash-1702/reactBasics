import { useEffect, useState } from "react";
const Card = ( {title}) => {
    const [hasLiked , sethasLiked] = useState(false);
    const [count , setCount] = useState(0);
    useEffect(() => {
        setCount((prevCnt) => prevCnt+1 )
    },[hasLiked]);  
    return (
        <> 
           <div>
            <h1 >
                {title} <br/> {count || null}
            </h1>
            <button onClick={() => sethasLiked(!hasLiked)}>{hasLiked ? "dislike" : "like"}</button>
           </div>
        </>
    );
}

export default Card;