import React from "react";
import CommonProps from './CommonProps'

export default function LikePostProps(){

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