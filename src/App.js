import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
