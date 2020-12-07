import "./App.css";
import DisplayAllPosts from "./components/DisplayAllPosts";
import ParticlesBg from "particles-bg";
import MyNavbar from "./components/NavBar";

function App() {
  return (
    <div>
      <div className="App">
        <DisplayAllPosts />
        <ParticlesBg color="#050401" type="lines" bg={true} />
      </div>
    </div>
  );
}

export default App;
