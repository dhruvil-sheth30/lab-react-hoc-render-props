import './App.css';
import LikeImageHOC from './components/HOC/LikeImageHOC'
import LikePostHOC from './components/HOC/LikePostHOC'
import LikeImageProps from './components/RENDER PROPS/LikeImageProps'
import LikePostProps from './components/RENDER PROPS/LikePostProps'
// import LikeImage from './components/LikeImage';
// import LikePost from './components/LikePost';

function App() {
  return (
    <div>
      {/* <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div> */}

      {/* Part 1 - HOC Logic */}
      <h1>Blog Using HOC</h1>
      <div className='buttons'>
        <LikeImageHOC/>
        <LikePostHOC/>
      </div>

      {/* part-2 - Props Logic */}

      <h1>Blog using props</h1>
      <div className='buttons'>
        <LikeImageProps/>
        <LikePostProps/>
      </div>
    </div>
  );
}

export default App;
