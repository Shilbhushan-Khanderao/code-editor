import { useContext } from "react";
import { FaPlay, FaSave } from "react-icons/fa";
import { MyContext, ThemeContext } from "../lib/MyContext";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdLightMode, MdNightlight, MdHelp } from "react-icons/md";
function Navbar() {
  const { setText } = useContext(MyContext);
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="flex bg-gray-800 p-2">
      <div className="flex-shrink-0 text-white mr-6">Logo</div>
      <div className="flex text-sm lg:flex-grow items-center justify-center">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow me-2 mb-1"
          onClick={() => setText("Save Button Clicked")}
        >
          <FaSave />
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow me-2 mb-1"
          onClick={() => setText("Run Button Clicked")}
        >
          <FaPlay />
        </button>
        <button
          className="bg-green-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow me-2 mb-1"
          onClick={() => setText("Submit Button Clicked")}
        >
          <FaCloudUploadAlt />
        </button>
      </div>
      <div className="flex justify-end me-1">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full shadow ms-5 me-3"
          onClick={() => setTheme(!theme)}
        >
          {theme ? <MdLightMode /> : <MdNightlight />}
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-1 rounded-full shadow me-2">
          <MdHelp />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
