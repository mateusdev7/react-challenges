import { useParams } from "react-router-dom";
import "../App.css";
import superman from "../assets/hero/superman.png";
import batman from "../assets/hero/batman.png";
import mulhermaravilha from "../assets/hero/mulhermaravilha.png";
import flash from "../assets/hero/flash.png";

const DCHero = () => {
  const { nome } = useParams();

  const objectHeroesDc = [
    {
      nameHero: "Superman",
      text: "Superman ou Super-Homem é um super-herói de histórias em quadrinhos publicadas pela DC Comics. O personagem, entretanto, desde os anos 1930, já foi adaptado para diversos outros meios, como cinema, rádio, televisão, literatura e video game. Superman foi criado pela dupla de autores de quadrinhos Joe Shuster e Jerry Siegel.",
      id: 1,
      urlImg: superman,
    },
    {
      nameHero: "Batman",
      text: "A identidade secreta do Batman é Bruce Wayne, um bilionário americano, playboy, magnata de negócios, filantropo e dono da corporação Wayne Enterprises. Depois de testemunhar o assassinato dos seus pais enquanto criança, Wayne jurou vingança contra os criminosos — um juramento moderado por um ideal justiça. Wayne, então, treina física e intelectualmente e cria uma persona inspirada no morcego para combater o crime.",
      id: 2,
      urlImg: batman,
    },
    {
      nameHero: "Mulher Maravilha",
      text: "Mulher-Maravilha (em inglês, Wonder Woman) é uma personagem fictícia de histórias em quadrinhos publicadas pela editora estadunidense DC Comics, originalmente é uma super-heroína guerreira de origem greco-romana, alter ego da Princesa Diana de Themyscira, ilha oculta, também conhecida como Ilha Paraíso, local da civilização de amazonas (como as figuras da lenda grega-romana).",
      id: 3,
      urlImg: mulhermaravilha,
    },
    {
      nameHero: "Flash",
      text: "Também chamado de Velocista Escarlate, o Flash possui velocidade e reflexos sobre-humanos e viola certas leis da física, podendo ultrapassar a velocidade da luz. Até então, quatro personagens ganharam a supervelocidade de modos diferentes e assumiram a identidade de Flash: Jay Garrick (1940-1956), Barry Allen (1956-1986, 2008-presente), Wally West (1986-2006, 2007-presente) e Bart Allen (2006-2007).",
      id: 4,
      urlImg: flash,
    },
  ];

  return (
    <div className="container-conteudo animeLeft pt-7">
      {objectHeroesDc.map((item) => {
        if (item.nameHero.replace(" ", "").toLowerCase() === nome)
          return (
            <div key={item.id} className="grid grid-cols-2">
              <div>
                <h1 className="font-bold text-5xl mb-3">{item.nameHero}</h1>
                <p className="text-base max-w-[60ch]">{item.text}</p>
              </div>
              <img src={item.urlImg} alt={item.nameHero} />
            </div>
          );
      })}
    </div>
  );
};

export default DCHero;
