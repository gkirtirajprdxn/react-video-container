import './App.css';
import video from './dummy_video.mp4';
import video1 from './dummy_video1.mp4';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className="card-container">
        <video controls loop muted autoPlay>
          <source src={video} />Your browser does not support the video tag.
        </video>
      </div>

      <div className="card-container-1">
        <video controls loop muted autoPlay>
          <source src={video1} />Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;
