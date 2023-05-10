import {
  FaBars,
  FaBluetooth,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaMoon,
  FaTwitter,
} from "react-icons/fa";
function App() {
  return (
    <div className=" font-sans">
      <div className=" h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200">
        <nav className=" w-full fixed top-0 bg-white">
          <div className=" container mx-auto py-5 flex justify-between items-center">
            <div className=" flex items-center gap-2">
              <FaBluetooth className=" w-8" />
              <span className=" text-2xl font-bold text-indigo-900">
                Jonnydevs
              </span>
            </div>
            <ul className=" hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
              <li className=" hover:text-gray-500">
                <a href="#">Home</a>
              </li>
              <li className=" hover:text-gray-500">
                <a href="#">About me</a>
              </li>
              <li className=" hover:text-gray-500">
                <a href="#">services</a>
              </li>
              <li className=" hover:text-gray-500">
                <a href="#">works</a>
              </li>
            </ul>
            <FaMoon className=" hidden md:block w-5 cursor-pointer text-orange-400" />
            <div>
              <FaBars className=" cursor-pointer md:hidden" />
            </div>
            <ul className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
              <li className=" ">
                <a href="#">Home</a>
              </li>
              <li className=" ">
                <a href="#">About me</a>
              </li>
              <li className=" ">
                <a href="#">services</a>
              </li>
              <li className=" ">
                <a href="#">works</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
