import React from 'react';
import { useState } from 'react';

function CommonHOC(WrappedHOC){
    const Logic = () => {
    const[like, setLike] = useState(0);

    const handleLike = () =>{
        setLike((prevLike) => prevLike + 1)
    };

    return(
        <WrappedHOC likeHandle = {handleLike} likeCount = {like} />
    )
    }

    return Logic;
}

export default CommonHOC