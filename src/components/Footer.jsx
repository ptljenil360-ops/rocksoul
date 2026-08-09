import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.svg'


const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-accent/20 pt-12 pb-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Division 1: Information */}
        <div>
          <h4 className="text-brand-accent font-bold mb-6 uppercase tracking-wider">Information</h4>
          <ul className="space-y-3 text-brand-light/80">
            <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-accent transition-colors">Gallery</Link></li>
            <li><Link to="/events" className="hover:text-brand-accent transition-colors">Events</Link></li>
            <li><Link to="/book-a-table" className="hover:text-brand-accent transition-colors">Reservation</Link></li>
          </ul>
        </div>

        {/* Division 2: Location */}
        <div>
          <h4 className="text-brand-accent font-bold mb-6 uppercase tracking-wider">Location</h4>
          <a 
            href="https://maps.google.com?q=124,Maruti%20Solaris,%20Anand%20-%20Sojitra%20Rd,%20Anand,%20Gujarat%20388120&ftid=0x395e4d4e8d06d187:0x18df7379cb6ec6d5&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813469,94286869,100820247,100813014,100822499&g_st=ic" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-start justify-center md:justify-start space-x-3 text-brand-light/80 hover:text-brand-accent transition-colors"
          >
            <MapPin className="shrink-0 mt-1" size={20} />
            <span>125, Maruti Solaris, Sojitra Road, Near Madhuvan Resort, Vallabh Vidyanagar,<br/> Anand, Gujarat 388120.</span>
          </a>
        </div>

        {/* Division 3: Contact Us */}
        <div>
          <h4 className="text-brand-accent font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4 text-brand-light/80">
            <li>
              <a href="tel:+919662001448" className="flex items-center justify-center md:justify-start space-x-3 hover:text-brand-accent transition-colors">
                <Phone size={20} />
                <span>Cafe: +91 96620 01448</span>
              </a>
            </li>
            <li>
              <a href="tel:+918160800430" className="flex items-center justify-center md:justify-start space-x-3 hover:text-brand-accent transition-colors">
                <Phone size={20} />
                <span>Owner: +91 8160800430</span>
              </a>
            </li>
            <li>
              <a href="mailto:rocksoulcafebistro@gmail.com" className="flex items-center justify-center md:justify-start space-x-3 hover:text-brand-accent transition-colors">
                <Mail size={20} />
                <span>rocksoulcafebistro@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Division 4: Social Media */}
        <div>
          <h4 className="text-brand-accent font-bold mb-6 uppercase tracking-wider">Social Media</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://wa.me/919662001448" target="_blank" rel="noreferrer" className="bg-brand-light/10 p-3 rounded-full text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all">
              <MessageCircle size={24} />
            </a>
            <a href="https://www.instagram.com/rocksoul_cafe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="bg-brand-light/10 p-3 rounded-full text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/rocksoulcafe/" target="_blank" rel="noreferrer" className="bg-brand-light/10 p-3 rounded-full text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all">
              <Facebook size={24} />
            </a>
          </div>
        </div>

      </div>

      <div className='flex justify-center items-center'>
        <img src={logo} alt="logo" className='w-16 h-auto hover:opacity-80 transition-opacity' />
      </div>

      {/* Copyright */}
      <div className="text-center text-brand-light/50 mt-12 pt-4 border-t border-brand-accent/10">
        &copy; {new Date().getFullYear()} Rocksoul. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
