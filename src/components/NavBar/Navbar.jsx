import Img from "../../assets/icons8-crown-50.png";
import ShopBag from "../../assets/shop-bag.png";
import NavMenu from "../../assets/hamburger-menu-50.png";
import CloseIcon from "../../assets/close-icon.png";
import { useState } from "react";

const linkData = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "Men Wear",
  },
  {
    id: 3,
    link: "Women Wear",
  },
  {
    id: 4,
    link: "Accessories",
  },
  {
    id: 5,
    link: "Contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-10 py-5">
        <div className="hover:cursor-pointer">
          <a href="/">
            <img src={Img} alt="logo" />
          </a>
        </div>
        <nav className="hidden justify-between items-center lg:flex gap-10">
          <ul className="flex justify-center items-center gap-5 text-lg">
            {linkData.map((item) => {
              return (
                <li
                  key={item.id}
                  className="p-2 rounded-sm transition ease-in-out duration-500 hover:bg-black hover:text-white"
                >
                  <a href="#">{item.link}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center gap-7">
            <a
              href="#"
              className="border-2 border-black hover:bg-white hover:text-black bg-black text-white px-5 py-2 rounded-md"
            >
              Sign In
            </a>
            <div className="flex justify-center items-center relative">
              <span className="absolute bg-black p-3 flex justify-center items-center w-2 h-2 rounded-full text-white text-[12px] top-1 left-5">
                0
              </span>
              <img
                src={ShopBag}
                alt="shop-bag-logo"
                className="w-10 h-10 hover:cursor-pointer"
              />
            </div>
          </div>
        </nav>
        <div
          className="flex justify-center items-center cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={isOpen ? CloseIcon : NavMenu}
            alt="Nav-menu-icon"
            className="w-[30px] h-[30px] transition-all ease-in-out duration-700"
          />
        </div>
      </div>
      {/* MOBILE NAVBAR */}
      <div
        className={`flex flex-col lg:hidden ${
          isOpen ? "left-0" : "left-[-100%]"
        } absolute z-50 bg-white pl-10 transition-all ease-in-out duration-700 list-none gap-5 text-lg py-6 justify-between items-start border w-full h-96`}
      >
        {linkData.map((item) => {
          return (
            <li key={item.id}>
              <a href="#">{item.link}</a>
            </li>
          );
        })}
        <div className="flex justify-center items-center gap-7">
          <a
            href="#"
            className="border-2 border-black hover:bg-white hover:text-black bg-black text-white px-5 py-2 rounded-md"
          >
            Sign In
          </a>
          <div className="flex justify-center items-center relative">
            <span className="absolute bg-black p-3 flex justify-center items-center w-2 h-2 rounded-full text-white text-[12px] top-1 left-5">
              0
            </span>
            <img
              src={ShopBag}
              alt="shop-bag-logo"
              className="w-10 h-10 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
