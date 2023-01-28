const Input = ({ label, id, value, setValue, ...props }) => {
  return (
    <div>
      <label className="block mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full box-border py-1 px-3 outline-none border-2 rounded-lg transition-all hover:border-[#6c757d] focus:border-[#6c757d]"
        name={id}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
