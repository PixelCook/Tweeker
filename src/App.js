import "./App.css";
import DisplayAllPosts from "./components/DisplayAllPosts";
import Login from "./components/auth/Login";
import ParticlesBg from "particles-bg";
import MyNavbar from "./components/NavBar";
import "firebase/auth";
import { AuthProvider } from "./components/auth/Auth";

function App() {
  return (
    <div>
      <div className="App">
        <AuthProvider>
          <Login />
          <DisplayAllPosts />
        </AuthProvider>
        <ParticlesBg color="#050401" type="lines" bg={true} />
      </div>
    </div>
  );
}

export default App;
