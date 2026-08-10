import { useState } from 'react';
import { Mail, Calendar, User, AlignLeft, ChevronDown, Users } from 'lucide-react';
import heroBg from '../../assets/gallery-6.webp';
import ambianceImg from '../../assets/gallery-7.webp';

const Events = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    eventType: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/ptljenil360@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          "Preferred Date": formData.date,
          "Event Type": formData.eventType,
          Details: formData.details
        })
      });

      const data = await response.json();
      
      if (response.ok && data.success === "true") {
        alert(`Inquiry Sent! Our events coordinator will contact you shortly.`);
        setFormData({ name: '', email: '', date: '', eventType: '', details: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      alert("Failed to submit inquiry. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col relative w-full pt-16 bg-brand-dark min-h-screen">
      <div className="flex flex-col w-full pb-12">
        
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden min-h-[70vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${heroBg})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent"></div>
          <div className="absolute inset-0 bg-brand-dark/20 backdrop-blur-sm"></div>
          <div className="relative z-10 flex flex-col justify-end h-full px-4 md:px-12 pb-12 pt-32 max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-vibes text-brand-accent mb-4">Host Your Moment</h1>
            <p className="text-lg md:text-xl text-brand-light font-modern max-w-xl">
              From intimate birthdays to exclusive corporate gatherings, RockSoul provides a soulful, tactile backdrop for unforgettable events.
            </p>
          </div>
        </section>

        {/* Ambiance Gallery */}
        <section className="px-4 md:px-12 py-16 bg-brand-dark flex flex-col gap-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-brand-accent uppercase tracking-widest font-modern">The Vibe</span>
            <h2 className="text-4xl md:text-5xl font-vibes text-brand-light">Curated Spaces</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-square md:aspect-auto md:h-[600px]">
              <img 
                src={ambianceImg} 
                alt="RockSoul Private Event Space" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
            <div className="bg-brand-dark/50 border border-brand-accent/20 rounded-2xl p-8 md:p-12 shadow-xl flex flex-col gap-6">
              <h3 className="text-3xl font-bold text-brand-light font-modern">The Main Floor</h3>
              <p className="text-brand-light/80 text-lg leading-relaxed">
                Our primary dining area, featuring warm wood textures, ambient lighting, and flexible seating arrangements. Perfect for large gatherings up to 50 guests.
              </p>
              <ul className="flex flex-col gap-4 mt-4">
                <li className="flex items-center gap-4 border-b border-brand-accent/10 pb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                    <Users size={24} />
                  </div>
                  <span className="text-brand-light text-lg">Capacity: 50 Seated / 75 Standing</span>
                </li>
                <li className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                    <User size={24} />
                  </div>
                  <span className="text-brand-light text-lg">Custom Audio Setup & Concierge</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="px-4 md:px-12 py-20 bg-brand-dark/80 rounded-t-[3rem] border-t border-brand-accent/20 relative z-20 shadow-2xl mt-8">
          <div className="max-w-3xl mx-auto w-full">
            <div className="flex flex-col gap-2 mb-12 text-center">
              <span className="text-sm font-bold text-brand-accent uppercase tracking-widest font-modern">Plan with us</span>
              <h2 className="text-4xl md:text-5xl font-vibes text-brand-light">Event Inquiry</h2>
              <p className="text-lg text-brand-light/80 mt-2 font-modern">
                Let us know what you're dreaming up. Our event coordinator will get back to you within 24 hours.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-brand-dark p-8 md:p-10 rounded-2xl border border-brand-accent/30 shadow-xl">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="text-xs text-brand-accent uppercase tracking-widest font-bold mb-2 block">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-0 bottom-2 text-brand-light/60" size={20} />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-8 text-brand-light focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-light/20"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-xs text-brand-accent uppercase tracking-widest font-bold mb-2 block">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-0 bottom-2 text-brand-light/60" size={20} />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-8 text-brand-light focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-light/20"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="text-xs text-brand-accent uppercase tracking-widest font-bold mb-2 block">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-0 bottom-2 text-brand-light/60" size={20} />
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-8 text-brand-light focus:outline-none focus:border-brand-accent transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-xs text-brand-accent uppercase tracking-widest font-bold mb-2 block">Event Type</label>
                  <div className="relative">
                    <ChevronDown className="absolute right-0 bottom-2 text-brand-light/60 pointer-events-none" size={20} />
                    <select 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-0 text-brand-light focus:outline-none focus:border-brand-accent transition-colors appearance-none [&>option]:bg-brand-dark"
                    >
                      <option value="" disabled>Select Event Type</option>
                      <option value="birthday">Birthday Celebration</option>
                      <option value="corporate">Corporate Gathering</option>
                      <option value="wedding">Wedding Anniversary / Birthday Bash</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <label className="text-xs text-brand-accent uppercase tracking-widest font-bold mb-2 block">Tell us about your event</label>
                <div className="relative">
                  <AlignLeft className="absolute left-0 top-1 text-brand-light/60" size={20} />
                  <textarea 
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Number of guests, special requests, timeline..."
                    required
                    rows="3"
                    className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-8 pt-1 text-brand-light focus:outline-none focus:border-brand-accent transition-colors resize-none placeholder:text-brand-light/20"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full bg-brand-accent text-brand-dark font-bold py-4 rounded-full flex items-center justify-center hover:bg-brand-light transition-colors disabled:opacity-70 gap-2"
              >
                <span>{isSubmitting ? 'Sending Request...' : 'Request Proposal'}</span>
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Events;
