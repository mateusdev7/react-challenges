import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import DCHeroes from "./Components/DCHeroes.jsx";
import MarvelHeroes from "./Components/MarvelHeroes.jsx";
import Contato from "./Components/Contato.jsx";
import DCHero from "./Components/DCHero.jsx";
import MarvelHero from "./Components/MarvelHero.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<DCHeroes />} path="/" />
          <Route element={<MarvelHeroes />} path="/marvel" />
          <Route element={<Contato />} path="/contato" />
          <Route element={<DCHero />} path="/dchero/:nome" />
          <Route element={<MarvelHero />} path="/marvelhero/:nome" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
