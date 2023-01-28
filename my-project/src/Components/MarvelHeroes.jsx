import Imagem from "./Imagem.jsx";
import homemdeferro from "../assets/marvel/homemdeferro.jpg";
import homemdeferrologo from "../assets/marvel/homemdeferro-logo.jpg";
import capitaoamerica from "../assets/marvel/capitaoamerica.jpg";
import capitaoamericalogo from "../assets/marvel/capitaoamerica-logo.jpg";
import thor from "../assets/marvel/thor.jpg";
import thorlogo from "../assets/marvel/thor-logo.jpg";
import hulk from "../assets/marvel/hulk.jpg";
import hulklogo from "../assets/marvel/hulk-logo.jpg";
import "../App.css";

const MarvelHeroes = () => {
  return (
    <div className="animeLeft h-screen">
      <h1 className="container-conteudo text-6xl pt-7 font-semibold">Marvel</h1>
      <section className="flex container-conteudo flex-wrap gap-4 pt-7">
        <Imagem
          src={homemdeferro}
          alt="Homem de Ferro"
          bg={homemdeferrologo}
          production="marvelhero"
        />
        <Imagem
          src={capitaoamerica}
          alt="Capitao America"
          bg={capitaoamericalogo}
          production="marvelhero"
        />
        <Imagem src={thor} alt="Thor" bg={thorlogo} production="marvelhero" />
        <Imagem src={hulk} alt="Hulk" bg={hulklogo} production="marvelhero" />
      </section>
    </div>
  );
};

export default MarvelHeroes;
