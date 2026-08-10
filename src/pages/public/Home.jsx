import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../assets/hero-bg.webp';
import FadeIn from '../../components/FadeIn';


const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-brand-dark overflow-x-hidden">

            {/* 1. Hero Section */}
            <section className="relative h-[95vh] flex items-center text-left overflow-hidden">
                <div
                    className="absolute inset-0 z-0 transform scale-110"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                    }}
                ></div>

                <div className="absolute inset-0 bg-black/60 z-0"></div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start">
                    <FadeIn delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-vibes text-brand-accent mb-6 tracking-widest">
                            Soul In
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <h1 className="text-5xl md:text-7xl font-vibes text-brand-accent mb-6 tracking-widest">
                            &emsp;Every Sip
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <p className="text-xl md:text-2xl text-brand-light mb-10 font-modern max-w-xl">
                            Experience the finest warm modernism dining.
                        </p>
                    </FadeIn>
                    
                    <FadeIn delay={0.8} direction="none">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/book-a-table"
                                className="bg-brand-accent text-brand-dark px-8 py-3 rounded font-bold hover:bg-brand-light hover:scale-105 transition-all duration-300"
                            >
                                Book a Table
                            </Link>
                            <Link
                                to="/gallery"
                                className="border border-brand-accent text-brand-accent px-8 py-3 rounded font-bold hover:bg-brand-accent hover:text-brand-dark hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                View Gallery 
                                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 2. Our Story Section */}
            <section className="py-24 px-4 max-w-5xl mx-auto text-left">
                <FadeIn>
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

                    <Link to="/gallery" className="inline-flex items-center gap-2 mt-8 text-brand-light font-bold hover:text-brand-accent transition-colors group">
                        Read the Full Story <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </FadeIn>
            </section>

            {/* 3. Featured Highlights Section */}
            <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-vibes text-brand-accent tracking-widest mb-4">Our Specialities</h2>
                        <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
                    </div>
                </FadeIn>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Highlight Card 1 */}
                    <div className="bg-black border border-brand-accent/10 p-8 rounded-lg text-center hover:border-brand-accent/50 transition-colors">
                        <h3 className="text-2xl font-vibes text-brand-accent mb-4">Sandwiches</h3>
                        <p className="text-brand-light/80">Warm, buttery, and packed with flavor, our sandwiches are the perfect accompaniment to your coffee break.</p>
                    </div>

                    {/* Highlight Card 2 */}
                    <div className="bg-black border border-brand-accent/10 p-8 rounded-lg text-center hover:border-brand-accent/50 transition-colors">
                        <h3 className="text-2xl font-vibes text-brand-accent mb-4">Coffee</h3>
                        <p className="text-brand-light/80">Expertly roasted beans, brewed with precision. From rich espressos to velvety lattes, every cup is a testament to our craft.</p>
                    </div>

                    {/* Highlight Card 3 */}
                    <div className="bg-black border border-brand-accent/10 p-8 rounded-lg text-center hover:border-brand-accent/50 transition-colors">
                        <h3 className="text-2xl font-vibes text-brand-accent mb-4">Pastas</h3>
                        <p className="text-brand-light/80">Handmade pasta tossed in rich, flavorful sauces.</p>
                    </div>
                    <div className="bg-black border border-brand-accent/10 p-8 rounded-lg text-center hover:border-brand-accent/50 transition-colors">
                        <h3 className="text-2xl font-vibes text-brand-accent mb-4">Pastries & Cakes</h3>
                        <p className="text-brand-light/80">Baked fresh daily, our pastries are the perfect indulgence to accompany your coffee break.</p>
                    </div>

                    <div className="bg-black border border-brand-accent/10 p-8 rounded-lg text-center hover:border-brand-accent/50 transition-colors">
                        <h3 className="text-2xl font-vibes text-brand-accent mb-4">Pizzas</h3>
                        <p className="text-brand-light/80">Handmade with the freshest ingredients, our pizzas are baked to perfection in our stone oven.</p>
                    </div>

                    <div className="bg-black border border-brand-accent/10 p-8 rounded-lg text-center hover:border-brand-accent/50 transition-colors">
                        <h3 className="text-2xl font-vibes text-brand-accent mb-4">Shakes</h3>
                        <p className="text-brand-light/80">Shakes are made with the freshest.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
