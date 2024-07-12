// import { link } from "fs"
// import Link from "next/link"
// import { FaArrowRight } from "react-icons/fa6";

// const navlinks = [
//   {
//     name: "Home",
//     href: "/"
//   },
//   {
//     name: "products",
//     href: '/'
//   },
//   {
//     name: "pricing",
//     href: '/'
//   },
//   {
//     name: "contact",
//     href: '/'
//   }
// ]

// function Navbar() {
//   return (
//     <div>
//       <div className="w-screen h-[91px] flex justify-between items-center px-52 bg-secondary mx-auto">
//         <div>
//           <Link href="/" className="text-3xl font-bold">Quovr</Link>
//         </div>

//         <ul className="flex gap-8 pr-20">
//           {navlinks.map((link, idx) => (
//             <li key={idx}>{link.name}</li>
//           ))}
//         </ul>

//         <div className="flex gap-x-8 items-center justify-center pr-16">
//           <button className="btn bg-transparent border-none shadow-none text-primary">Login</button>
//           <button className="btn bg-primary text-white py-[15px] px-[25px]   flex items-center gap-x-4">Join us <FaArrowRight /></button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Navbar

'use client'
import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Contact", href: "/" }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative ">
      <div className="w-full h-[91px] lg:sticky flex justify-between items-center px-4 sm:px-8 lg:px-52  bg-secondary mx-auto">
        <div>
          <Link href="/" className="text-3xl font-bold">
            Quovr
          </Link>
        </div>

        <div className="hidden cursor-pointer md:flex gap-8">
          {navlinks.map((link, idx) => (
            <Link href={link.href} className="" key={idx}>{link.name}</Link>
          ))}
        </div>

        <div className="hidden md:flex gap-x-8 items-center justify-center">
          <button className="btn bg-transparent border-none shadow-none text-primary">
            Login
          </button>
          <button className="btn bg-primary text-white py-[15px] px-[25px] flex items-center gap-x-4">
            Join us <FaArrowRight />
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile View DIV */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[91px] left-0 w-full bg-secondary py-4 px-4 z-50">
          <div className="flex flex-col gap-4">
            {navlinks.map((link, idx) => (
              <Link href={link.href} key={idx}>{link.name}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <button className="btn bg-transparent border-none shadow-none text-primary">
              Login
            </button>
            <button className="btn bg-primary text-white py-[15px] px-[25px] flex items-center justify-center gap-x-4">
              Join us <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;