
import './App.css';

function App() {
  const title="Welcome to the new blog";
  const likes=50;
  const link="https://google.com"


  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes}</p>

        <p>{10}</p>

        <p>{"Helo , ninjas"}</p>
        <p>{[1,2,3,4,56]}</p>
        <p>{Math.random()*10}</p>

        <a href={link}>Google site</a>
      </div>
      
    </div>
  );
}

export default App;
