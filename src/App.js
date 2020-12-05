import "./App.css";
import DisplayAllPosts from "./components/DisplayAllPosts";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div>
      <div className="App">
        <DisplayAllPosts />
        <ParticlesBg color="#1ea1f0" type="lines" bg={true} />
      </div>
    </div>
  );
}

export default App;
