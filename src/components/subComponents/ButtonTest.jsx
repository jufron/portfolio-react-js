
const ButtonTest = () => {
  return (
    <div className="group relative w-48 h-12 rounded-full bg-blue-500 overflow-hidden transition-all duration-300 hover:w-24 hover:h-24 hover:rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">Hover Me</span>
            <span className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">Hidden Text</span>
        </div>
    </div>
  );
};

export default ButtonTest;
