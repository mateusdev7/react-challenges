import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import homemdeferro from "../assets/heromarvel/homemdeferro.png";
import capitaoamerica from "../assets/heromarvel/capitaoamerica.png";
import hulk from "../assets/heromarvel/hulk.png";
import thor from "../assets/heromarvel/thor.png";

const MarvelHero = () => {
  const { nome } = useParams();

  React.useEffect(() => {
    console.log(nome);
  }, [nome]);

  const objectHeroesMarvel = [
    {
      nameHero: "Homem de Ferro",
      text: "O Homem de Ferro (Iron Man) foi um personagem dos quadrinhos publicados pela Marvel Comics. Sua verdadeira identidade é o empresário e bilionário Tony Stark, que usou armaduras de alta tecnologia no combate ao crime. Foi criado em 1963 pelo escritor Stan Lee, o roteirista Larry Lieber e os desenhistas Jack Kirby e Don Heck. Stan Lee aceitou o desafio de fazer um personagem ser odiado e depois amado pelo público, criando um dos super-heróis mais marcantes de todos os tempos.",
      id: 1,
      urlImg: homemdeferro,
    },
    {
      nameHero: "Capitao America",
      text: "Capitão América é um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics. Criado por Joe Simon e Jack Kirby, o primeiro personagem apareceu em Captain America Comics # 1 (março de 1941) da Timely Comics, antecessora da Marvel Comics. Capitão América foi concebido como um super-herói patriótico que lutou contra as potências do Eixo na Segunda Guerra Mundial e foi personagem mais popular da Timely Comics durante o período da guerra.",
      id: 2,
      urlImg: capitaoamerica,
    },
    {
      nameHero: "Hulk",
      text: "Hulk, por vezes referido como O Incrível Hulk (The Incredible Hulk, no original em inglês), é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicadas desde sua criação, na década de 1960. Concebido pelo roteirista Stan Lee (1922–2018) e pelo desenhista Jack Kirby (1917–1994), o Hulk teve sua primeira aparição junto ao público original dos Estados Unidos na revista The Incredible Hulk n°1, lançada no mercado americano pela Marvel Comics em maio de 1962, um título solo do queijo, garantindo-lhe o acesso ao que mais tarde seria popularmente conhecido como Universo Marvel dos quadrinhos/banda desenhada.",
      id: 3,
      urlImg: hulk,
    },
    {
      nameHero: "Thor",
      text: "Thor (nórdico antigo: Þórr) é o deus nórdico, dos trovões e das batalhas. Pertence ao clã dos deuses Æsir, e é filho do deus Odin. Thor usa como arma o martelo Mjolnir, e tem o cinto Megingjord, que lhe dobra a força. Está associado aos trovões, relâmpagos, tempestades, árvores de carvalho, força, proteção da humanidade e também a santificação, cura e fertilidade e a guerra.",
      id: 4,
      urlImg: thor,
    },
  ];

  return (
    <div className="container-conteudo animeLeft pt-7">
      {objectHeroesMarvel.map((item) => {
        if (item.nameHero.replaceAll(" ", "").toLowerCase() === nome) {
          return (
            <div key={item.id} className="grid grid-cols-2">
              <div>
                <h1 className="font-bold text-5xl mb-3">{item.nameHero}</h1>
                <p className="text-base max-w-[60ch]">{item.text}</p>
              </div>
              <img src={item.urlImg} alt={item.nameHero} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default MarvelHero;
