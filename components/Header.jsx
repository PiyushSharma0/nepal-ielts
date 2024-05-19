import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-[#E6F0FF] px-4 flex items-center justify-evenly">
      <div className="flex items-center space-x-4">
        <img src="OIN.png" alt="logo" className="w-32" />
        <img src="OPN.png" alt="logo" className="w-48" />
      </div>
      <nav className="flex space-x-8 text-gray-600">
        <Link href="#home" className="hover:text-black">
          Home
        </Link>
        <Link href="#about" className="hover:text-black">
          About Us
        </Link>
        <Link href="#message" className="hover:text-black">
          Message From The CEO
        </Link>
        <Link href="#testimonials" className="hover:text-black">
          Testimonials
        </Link>
        <Link href="#contact" className="hover:text-black">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
