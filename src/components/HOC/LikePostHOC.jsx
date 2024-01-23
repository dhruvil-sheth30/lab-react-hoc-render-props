import CommonHOC from './CommonHOC'
const LikePostHOC = ({likeHandle, likeCount}) => {

  return(
    <div>
      <button onClick={likeHandle}>
        Like Post  {likeCount}
      </button>
    </div>
  )
}

export default CommonHOC(LikePostHOC) 