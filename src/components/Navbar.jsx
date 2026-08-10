import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-dark border-b border-brand-accent/20 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Rocksoul Logo" className="h-16 w-auto hover:opacity-80 transition-opacity" />
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-brand-light py-2 hover:text-brand-accent transition-colors">Home</Link>
          <Link to="/gallery" className="text-brand-light py-2 hover:text-brand-accent transition-colors">Gallery</Link>
          <Link to="/events" className="text-brand-light py-2 hover:text-brand-accent transition-colors">Events</Link>
          <Link to="Footer" className="text-brand-light py-2 hover:text-brand-accent transition-colors">Contact Us</Link>
          <Link to="/book-a-table" className="border border-brand-accent text-brand-accent px-4 py-2 hover:bg-brand-accent hover:text-brand-dark transition-colors">Reservation</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-brand-accent" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-brand-light hover:text-brand-accent">Home</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-brand-light hover:text-brand-accent">Gallery</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="text-brand-light hover:text-brand-accent">Events</Link>
          <Link to="/book-a-table" onClick={() => setIsOpen(false)} className="text-brand-accent font-bold">Book a Table</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
