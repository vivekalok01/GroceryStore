import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { IoIosMenu } from "react-icons/io";
import Services from "./Services";
import About from "./About";
import { RxCross2 } from "react-icons/rx";
import Contact from "./Contact";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/" },
    { name: "Contact", path: "/" },
    { name: "About", path: "/" },
  ];

  const ref = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(ref.current.scrollTop > 10);
    };
    ref.current.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="h-[99vh] md:h-[99vh] overflow-y-scroll">
      <p className="w-10 h-[80px]">hello</p>
      <nav
        className={`fixed top-0 left-0 bg-[#3161A3] w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-white/80 shadow-md text-[#eeeeee] backdrop-blur-lg py-3 md:py-4"
            : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <p
          className={`font-extrabold cursor-pointer text-[27px]  ${
            isScrolled ? "   text-black " : "text-white"
          }`}
        >
          AB
        </p>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-[#b7b78a]" : "bg-[#b7b78a]"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </a>
          ))}
          <button
            className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            } transition-all`}
          >
            Hi
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
              <IoIosMenu   onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 text-white font-semibold cursor-pointer ${isScrolled ? "invert" : ""}`}
           />
         
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
        <RxCross2 className="h-6 w-6 cursor-pointer" />
            
          </button>

          {navLinks.map((link, i) => (
            <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}

          <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
            New Launch
          </button>
        </div>
      </nav>
      <div className="flex items-center justify-center flex-col gap-3 p-1 md:p-2">
        <Hero></Hero>
        <Gallery></Gallery>
        <Services></Services>
        <About></About>
        {/* <Promotion></Promotion>  */}
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Navbar;
