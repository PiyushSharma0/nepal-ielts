import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-[#E6F0FF] px-4 flex items-center justify-evenly">
      <div className="flex items-center space-x-4">
        <img src="OIN.png" alt="logo" className="w-32 m-0 p-0" />
        <img src="OPN.png" alt="logo" className="w-48 m-0 p-0" />
      </div>
      <nav className="flex space-x-8 text-gray-600 text-lg font-semibold">
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
        <Link href="#contact" className="bg-[#1273EB] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 self-center">
  Contact Us
</Link>
      </nav>
    </header>
  );
};

export default Header;
