import moon from "./assets/moon.png";
import man from "./assets/man.png";
import logo from "./assets/logo.png";
import { FaBars } from "react-icons/fa";
// import { useEffect } from "react";
// import { init } from "ityped";

function App() {
  // useEffect(() => {
  //   const myElement = document.querySelector("#text");
  //   init(myElement, {
  //     showCursor: false,
  //     strings: ["Developer", "Designer"],
  //   });
  // },[]);
  return (
    <div className=" font-sans">
      <div className=" h-96 lg:h-screen bg-gradient-to-t from-indigo-200 overflow-hidden relative">
        <nav className=" w-full fixed top-0 bg-white z-10">
          <div className=" container mx-auto py-5 flex justify-between items-center">
            <div className=" flex items-center gap-2">
              <img src={logo} alt="" className=" w-8" />
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
            <img src={moon} alt="" className="hidden md:block" />
            <div>
              <FaBars className=" cursor-pointer md:hidden z-20" />
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
        <img
          src={man}
          alt=""
          className=" absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
        />
        <div className=" hidden lg:block absolute -bottom-1/4 left-0 right-0 mx-auto bg-indigo-900 rounded-full w-big h-big -z-10"></div>
      </div>
      <div className=" absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold">
        <span className=" text-gray-600">Freelance</span>
        <p className=" text-red-500" id="text">
          Developer
        </p>
      </div>
      <div className=" hidden lg:flex flex-col gap-5 p-3 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white h-fit w-1/3">
        <h1 className=" text-4xl text-indigo-900 ">Hi, I'm John</h1>
        <p className=" text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci
          repellendus aperiam vero assumenda accusamus officiis exercitationem
          vel sit nemo temporibus non sequi rem, libero inventore aliquam
          deserunt deleniti aliquid!
        </p>
        <a
          href="#contact"
          className=" bg-indigo-600 text-xl text-white px-3 py-2 rounded-md font-semibold w-fit "
        >
          Hire me
        </a>
      </div>
    </div>
  );
}

export default App;
