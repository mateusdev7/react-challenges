import superman from "../assets/dc/superman.jpg";
import batman from "../assets/dc/batman.png";
import mulhermaravilha from "../assets/dc/mulhermaravilha.jpg";
import flash from "../assets/dc/flash.png";
import supermanlogo from "../assets/dc/superman-logo.jpg";
import batmanlogo from "../assets/dc/batman-logo.jpg";
import mulhermaravilhalogo from "../assets/dc/mulhermaravilha-logo.jpg";
import flashlogo from "../assets/dc/flash-logo.jpg";
import Imagem from "./Imagem.jsx";
import "../App.css";

const Inicio = () => {
  return (
    <div className="animeLeft h-screen">
      <h1 className="container-conteudo text-6xl pt-7 font-semibold">
        DC Comics
      </h1>
      <section className="flex justify-items-stretch items-center container-conteudo flex-wrap gap-4 pt-7">
        <Imagem
          src={superman}
          alt="Superman"
          bg={`${supermanlogo}`}
          production="dchero"
        />
        <Imagem
          src={batman}
          alt="Batman"
          bg={`${batmanlogo}`}
          production="dchero"
        />
        <Imagem
          src={mulhermaravilha}
          alt="Mulher Maravilha"
          bg={`${mulhermaravilhalogo}`}
          production="dchero"
        />
        <Imagem
          src={flash}
          alt="Flash"
          bg={`${flashlogo}`}
          production="dchero"
        />
      </section>
    </div>
  );
};

export default Inicio;
