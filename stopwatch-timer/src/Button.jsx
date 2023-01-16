const Button = ({ nameButton, bg, onClick }) => {
  return (
    <button
      className={`py-2 px-6 rounded text-2xl font-bold text-white`}
      onClick={onClick}
      style={{ backgroundColor: `${bg}` }}
    >
      {nameButton}
    </button>
  );
};

export default Button;
