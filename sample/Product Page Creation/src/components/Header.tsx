import { Menu, X, Code2 } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-none px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Code2 className="h-5 w-5 text-black" />
            </div>
            <span className="text-2xl tracking-tight text-white uppercase">TechCorp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 uppercase tracking-wide text-sm">
              Home
            </a>
            <a href="#products" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 uppercase tracking-wide text-sm">
              Products
            </a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 uppercase tracking-wide text-sm">
              About
            </a>
            <a href="#contact" className="bg-cyan-400 text-black px-6 py-3 hover:bg-cyan-300 transition-colors duration-200 uppercase tracking-wide text-sm">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-300 hover:text-cyan-400 uppercase tracking-wide text-sm">
                Home
              </a>
              <a href="#products" className="block text-gray-300 hover:text-cyan-400 uppercase tracking-wide text-sm">
                Products
              </a>
              <a href="#about" className="block text-gray-300 hover:text-cyan-400 uppercase tracking-wide text-sm">
                About
              </a>
              <a href="#contact" className="block bg-cyan-400 text-black px-6 py-3 hover:bg-cyan-300 transition-colors duration-200 uppercase tracking-wide text-sm w-fit">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}