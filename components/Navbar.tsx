import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-cream/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-emerald">
            Zicatela Luxury
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald transition-colors">
              Inicio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald transition-colors">
              Nosotros
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald transition-colors">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-emerald transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cream shadow-lg">
            <div className="container-custom py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-emerald transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-emerald transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-emerald transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 