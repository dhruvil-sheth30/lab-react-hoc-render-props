import React from "react";
import CommonProps from './CommonProps'

export default function LikeImageProps(){

  return(
    <CommonProps>
      {
        ({like,handleLike}) => (
          <button onClick={handleLike}> Like Image {like}</button>
        )
      }
    </CommonProps>
  )
}