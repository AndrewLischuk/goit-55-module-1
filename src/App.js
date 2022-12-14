import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Posts } from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
