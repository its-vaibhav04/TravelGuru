function Button({ text }) {
  return (
    <button className="rounded-full block mx-auto bg-teal-200 font-semibold p-2 px-32 mb-4 hover:bg-teal-300 transition-all duration-400 hover:scale-102">
      {text}
    </button>
  );
}

export default Button;
