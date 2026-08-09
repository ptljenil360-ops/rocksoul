import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// Make sure this path matches your renamed image!
import heroBg from '../../assets/hero-bg.webp';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      
      {/* 1. Hero Section */}
      <section className="relative h-[95vh] flex items-center text-left overflow-hidden">
        {/* Background Image with Zoom and Position */}
        <div 
          className="absolute inset-0 z-0 transform scale-110"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        ></div>
        
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start">
          <h1 className="text-5xl md:text-7xl font-vibes text-brand-accent mb-6 tracking-widest">
            Soul In
          </h1>
          <h1 className="text-2xl md:text-7xl font-vibes text-brand-accent mb-6 tracking-widest">
            &emsp;&emsp;Every Sip
          </h1>
          <p className="text-xl md:text-2xl text-brand-light mb-10 font-modern max-w-xl">
            Experience the finest warm modernism dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/book-a-table" 
              className="bg-brand-accent text-brand-dark px-8 py-3 rounded font-bold hover:bg-brand-light transition-colors"
            >
              Book a Table
            </Link>
            <Link 
              to="/gallery" 
              className="border border-brand-accent text-brand-accent px-8 py-3 rounded font-bold hover:bg-brand-accent hover:text-brand-dark transition-colors flex items-center justify-center gap-2"
            >
              View Gallery <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-left">
        <h4 className="text-brand-accent font-bold uppercase tracking-wider mb-2">Our Story</h4>
        <h2 className="text-5xl md:text-6xl font-vibes text-brand-light mb-8">Crafted with Intention.</h2>
        
        <div className="space-y-6 text-brand-light/80 text-lg">
          <p>
            RockSoul isn't just a bistro; it's a carefully curated experience. Born from a love of exceptional coffee and the warmth of shared meals, we set out to create a space that feels both sophisticated and entirely unpretentious.
          </p>
          <p>
            Every detail, from the acoustics of the room to the origin of our beans, is designed to cultivate moments of genuine connection. We believe that a truly great cafe is one that feels like an extension of your own living room.
          </p>
        </div>

        <Link to="/gallery" className="inline-flex items-center gap-2 mt-8 text-brand-light font-bold hover:text-brand-accent transition-colors">
          Read the Full Story <ArrowRight size={20} />
        </Link>
      </section>

      {/* 3. Featured Highlights Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-vibes text-brand-accent tracking-widest mb-4">Our Specialities</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Highlight Card 1 */}
          <div className="bg-black border border-brand-accent/10 p-8 rounded-lg text-center hover:border-brand-accent/50 transition-colors">
            <h3 className="text-xl font-bold text-brand-accent mb-4">Artisan Coffee</h3>
            <p className="text-brand-light/80">Expertly roasted beans brewed to perfection for your morning delight.</p>
          </div>
          
          {/* Highlight Card 2 */}
          <div className="bg-black border border-brand-accent/10 p-8 rounded-lg text-center hover:border-brand-accent/50 transition-colors">
            <h3 className="text-xl font-bold text-brand-accent mb-4">Wood-Fired Pizza</h3>
            <p className="text-brand-light/80">Authentic recipes made with fresh, locally sourced ingredients.</p>
          </div>
          
          {/* Highlight Card 3 */}
          <div className="bg-black border border-brand-accent/10 p-8 rounded-lg text-center hover:border-brand-accent/50 transition-colors">
            <h3 className="text-xl font-bold text-brand-accent mb-4">Exquisite Pastas</h3>
            <p className="text-brand-light/80">Handmade pasta tossed in rich, flavorful sauces.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
