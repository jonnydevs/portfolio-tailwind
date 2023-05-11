import moon from "./assets/moon.png";
import man from "./assets/man.png";
import dots from "./assets/dots.png";
import logo from "./assets/logo.png";
import portrait from "./assets/portrait.png";
import icon from "./assets/icon.png";
import item from "./assets/item.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";
import { FaBars } from "react-icons/fa";

function App() {
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
                <a href="#about">About me</a>
              </li>
              <li className=" hover:text-gray-500">
                <a href="#services">services</a>
              </li>
              <li className=" hover:text-gray-500">
                <a href="#works">works</a>
              </li>
              <li className=" hover:text-gray-500">
                <a href="#contact">contact</a>
              </li>
            </ul>
            <img src={moon} alt="" className="hidden md:block w-10 cursor-pointer" />
            <div>
              <FaBars className=" cursor-pointer md:hidden z-20" />
            </div>
            <ul className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
              <li className=" ">
                <a href="#">Home</a>
              </li>
              <li className=" ">
                <a href="#about">About me</a>
              </li>
              <li className=" ">
                <a href="#services">services</a>
              </li>
              <li className=" ">
                <a href="#works">works</a>
              </li>
              <li className=" ">
                <a href="#contact">contact</a>
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
      <div className=" px-10" id="about">
        <div className=" container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          <div className=" relative">
            <img
              src={dots}
              alt=""
              className=" w-1/4 h-1/4 absolute top-0 left-0 -z-10"
            />
            <div className=" h-full rounded-full overflow-hidden">
              <img src={portrait} alt="" />
            </div>
          </div>
          <div className=" my-auto flex flex-col gap-3">
            <h1 className=" text-indigo-600 font-bold">About me</h1>
            <p className=" text-3xl font-medium">Better Design</p>
            <p className=" text-3xl font-medium">Better Experience</p>
            <p className=" text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium accusantium neque sequi vel, ab magni commodi maxime
              debitis deleniti? Suscipit?
            </p>
            <h2 className=" text-gray-400 font-medium">HTML</h2>
            <div className=" w-full bg-gray-200 h-1.5 rounded-md">
              <div className=" w-full bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 className=" text-gray-400 font-medium">React</h2>
            <div className=" w-full bg-gray-200 h-1.5 rounded-md">
              <div className=" w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 className=" text-gray-400 font-medium">Javascript</h2>
            <div className=" w-full bg-gray-200 h-1.5 rounded-md">
              <div className=" w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="services">
        <div className=" container mx-auto">
          <div className=" flex flex-col gap-3 items-center">
            <h1 className=" text-indigo-600 font-bold">Services</h1>
            <h1 className=" text-3xl">What do I offer?</h1>
            <p className=" text-gray-400 w-1/2 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" p-5 flex flex-wrap">
            <div className=" w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 my-3 md:my-10">
              <img src={icon} alt="" className=" w-10" />
              <h1 className=" font-medium text-lg">UX / UI Design</h1>
              <p className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                ad minima. Alias sint cumque quibusdam quis perferendis ea
                dolores sequi?
              </p>
              <a href="#" className=" text-indigo-600 font-semibold text-sm">
                Read more
              </a>
            </div>
            <div className=" w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 my-3 md:my-10">
              <img src={icon} alt="" className=" w-10" />
              <h1 className=" font-medium text-lg">UX / UI Design</h1>
              <p className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                ad minima. Alias sint cumque quibusdam quis perferendis ea
                dolores sequi?
              </p>
              <a href="#" className=" text-indigo-600 font-semibold text-sm">
                Read more
              </a>
            </div>
            <div className=" w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 my-3 md:my-10">
              <img src={icon} alt="" className=" w-10" />
              <h1 className=" font-medium text-lg">UX / UI Design</h1>
              <p className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                ad minima. Alias sint cumque quibusdam quis perferendis ea
                dolores sequi?
              </p>
              <a href="#" className=" text-indigo-600 font-semibold text-sm">
                Read more
              </a>
            </div>
            <div className=" w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 my-3 md:my-10">
              <img src={icon} alt="" className=" w-10" />
              <h1 className=" font-medium text-lg">UX / UI Design</h1>
              <p className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                ad minima. Alias sint cumque quibusdam quis perferendis ea
                dolores sequi?
              </p>
              <a href="#" className=" text-indigo-600 font-semibold text-sm">
                Read more
              </a>
            </div>
            <div className=" w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 my-3 md:my-10">
              <img src={icon} alt="" className=" w-10" />
              <h1 className=" font-medium text-lg">UX / UI Design</h1>
              <p className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                ad minima. Alias sint cumque quibusdam quis perferendis ea
                dolores sequi?
              </p>
              <a href="#" className=" text-indigo-600 font-semibold text-sm">
                Read more
              </a>
            </div>
            <div className=" w-full md:w-4/12 shadow-xl rounded-lg p-5 flex flex-col gap-3 my-3 md:my-10">
              <img src={icon} alt="" className=" w-10" />
              <h1 className=" font-medium text-lg">UX / UI Design</h1>
              <p className=" text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                ad minima. Alias sint cumque quibusdam quis perferendis ea
                dolores sequi?
              </p>
              <a href="#" className=" text-indigo-600 font-semibold text-sm">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-40 mx-auto" id="works">
        <div className=" container mx-auto">
          <div className=" flex flex-col gap-3 items-center">
            <h1 className=" text-indigo-600 font-bold">Portfolio</h1>
            <h1 className=" text-3xl">Works I have done</h1>
            <p className=" text-gray-400 w-1/2 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" p-5 flex flex-wrap">
            <div className=" w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10">
              <img src={item} alt="" />
            </div>
            <div className=" w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
              <img src={item} alt="" />
            </div>
            <div className=" w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
              <img src={item} alt="" />
            </div>
            <div className=" w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
              <img src={item} alt="" />
            </div>
            <div className=" w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
              <img src={item} alt="" />
            </div>
            <div className=" w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
              <img src={item} alt="" />
            </div>
            <div className=" w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
              <img src={item} alt="" />
            </div>
            <div className=" w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg p-5 my-3 md:my-10 m-1">
              <img src={item} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <div className=" container mx-auto">
          <div className=" flex flex-col gap-3 items-center">
            <h1 className=" text-indigo-600 font-bold">Contact</h1>
            <h1 className=" text-3xl">Have a question?</h1>
            <p className=" text-gray-400 w-1/2 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <form className=" flex flex-col gap-5 items-center mt-5 p-8">
            <input
              type="text"
              placeholder=" John Doe"
              className=" p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm"
            />
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className=" p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm"
            />
            <textarea
              cols="30"
              rows="10"
              placeholder=" I would like...."
              className=" p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm"
            ></textarea>
            <button className=" w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 cursor-pointer rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className=" w-full bg-gray-800">
        <div className=" container mx-auto py-5 flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <img src={logo} alt="" className=" w-8" />
            <span className=" text-2xl font-bold text-white">Jonnydevs</span>
          </div>
          <span className=" hidden md:block font-medium text-white">
            &copy; 2023 Developed by Jonnydevs
          </span>
          <div className=" flex gap-2">
            <img className=" w-4 cursor-pointer" src={facebook} alt="" />
            <img className=" w-4 cursor-pointer" src={instagram} alt="" />
            <img className=" w-4 cursor-pointer" src={twitter} alt="" />
            <img className=" w-4 cursor-pointer" src={linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
