import React from "react";
import Input from "../Components/Input.jsx";
import wolverine from "../assets/wolverine.png";
const Contato = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div className="animeLeft">
      <h1 className="container-conteudo text-6xl pt-7 font-semibold">
        Contato
      </h1>
      <section className="container-conteudo pt-2 grid grid-cols-2 gap-5">
        <img src={wolverine} alt="Marvel x Dc" />
        <form>
          <Input
            type="text"
            id="nome"
            label="Nome"
            value={nome}
            setValue={setNome}
            required
          />
          <Input
            type="email"
            id="email"
            label="Email"
            value={email}
            setValue={setEmail}
            required
          />
          <button className="bg-[#212529] text-white py-2 px-8 rounded-lg box-border mt-4 text-lg">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contato;
