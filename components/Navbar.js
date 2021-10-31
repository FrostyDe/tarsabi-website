import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div
      className={`bg-[#F6147A] py-4 px-6 md:px-10 lg:px-20 lg:py-8 items-center fixed w-full z-50 transform duration-300 ease-in-out ${
        isNavbarOpen
          ? "h-full items-baseline transform duration-300 ease-in-out"
          : "flex flex-row justify-between"
      }`}
    >
      <h1 className="font-bold text-white text-[18px]">TARSABI</h1>
      {isNavbarOpen ? (
        <XIcon
          className="w-8 text-white cursor-pointer absolute right-10 lg:hidden"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        />
      ) : (
        <MenuIcon
          className="w-8 text-white cursor-pointer lg:hidden"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        />
      )}
      <ul
        className={`lg:flex flex-row gap-8 items-center text-white ${
          isNavbarOpen ? "flex flex-col gap-8 text-white pt-24" : "hidden"
        }`}
      >
        <li>
          <a
            href="#home"
            className="hover:font-bold"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:font-bold"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            Tentang
          </a>
        </li>
        <li>
          <a
            href="#feature"
            className="hover:font-bold"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            Kenapa Kami
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:font-bold"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            Layanan
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="hover:font-bold"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#testimonial"
            className="hover:font-bold"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            Testimoni
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:font-bold"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
