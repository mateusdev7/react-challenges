import { Link } from "react-router-dom";

const Imagem = ({ src, alt, bg, production }) => {
  return (
    <div className={`relative w-1/5 rounded-lg overflow-hidden cursor-pointer`}>
      <Link to={`/${production}/${alt}`.replaceAll(" ", "").toLowerCase()}>
        <img className="h-full w-full" src={src} alt={alt} />
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            transition: ".3s",
          }}
          className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 hover:opacity-100`}
        />
      </Link>
    </div>
  );
};

export default Imagem;
