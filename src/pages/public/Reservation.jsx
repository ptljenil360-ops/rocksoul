import { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, Users, User, Phone, MessageSquare, ChevronDown, Plus, Minus } from 'lucide-react';
import heroBg from '../../assets/gallery-5.webp'; // Using our local WebP image

const Wheel = ({ options, value, onChange }) => {
  const ITEM_HEIGHT = 48; // px
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const index = options.indexOf(value);
      if (index !== -1) {
        containerRef.current.scrollTop = index * ITEM_HEIGHT;
      }
    }
  }, [options, value]);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollTop = container.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    if (options[index] && options[index] !== value) {
      onChange(options[index]);
    }
  };

  return (
    <div 
      className="h-full overflow-y-auto snap-y snap-mandatory flex-1 relative z-10"
      onScroll={handleScroll}
      ref={containerRef}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div style={{ height: `${ITEM_HEIGHT}px` }}></div>
      {options.map((opt, i) => (
        <div 
          key={opt} 
          className={`h-[48px] flex-shrink-0 flex items-center justify-center snap-center cursor-pointer transition-all duration-300 ${value === opt ? 'text-brand-accent font-bold text-xl scale-110' : 'text-brand-light text-lg scale-95 opacity-70'}`}
          onClick={() => {
            containerRef.current.scrollTo({ top: i * ITEM_HEIGHT, behavior: 'smooth' });
          }}
        >
          {opt}
        </div>
      ))}
      <div style={{ height: `${ITEM_HEIGHT}px` }}></div>
      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
};

const TimeWheel = ({ value, onChange }) => {
  const [h, m] = (value || "19:00").split(':');
  let hour24 = parseInt(h, 10);
  
  const ampm = hour24 >= 12 ? 'PM' : 'AM';
  let hour12 = hour24 % 12 || 12;
  const minute = m || "00";

  const validAmHours = ['10', '11', '12'];
  const validPmHours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const hours = ampm === 'AM' ? validAmHours : validPmHours;
  const minutes = ['00', '15', '30', '45'];
  const periods = ['AM', 'PM'];

  const handleHourChange = (newH) => {
    let newH24 = parseInt(newH, 10);
    if (ampm === 'PM' && newH24 !== 12) newH24 += 12;
    if (ampm === 'AM' && newH24 === 12) newH24 = 0;
    onChange(`${newH24.toString().padStart(2, '0')}:${minute}`);
  };

  const handleMinuteChange = (newM) => {
    onChange(`${hour24.toString().padStart(2, '0')}:${newM}`);
  };

  const handleAmPmChange = (newP) => {
    if (newP === ampm) return;
    let newH24 = hour12;
    if (newP === 'PM' && newH24 !== 12) newH24 += 12;
    if (newP === 'AM' && newH24 === 12) newH24 = 0;
    
    if (newP === 'AM' && newH24 < 9) newH24 = 9;
    if (newP === 'PM' && newH24 > 22) newH24 = 22;

    onChange(`${newH24.toString().padStart(2, '0')}:${minute}`);
  };

  return (
    <div className="relative h-[144px] w-full overflow-hidden border border-brand-accent/20 rounded-lg bg-brand-dark/80"
         style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)' }}>
      <div className="absolute top-1/2 left-0 w-full h-[48px] -translate-y-1/2 border-y border-brand-accent/20 pointer-events-none bg-brand-accent/5 z-0"></div>
      
      <div className="flex w-full h-full relative z-10 px-4">
        <Wheel options={hours} value={hour12.toString()} onChange={handleHourChange} />
        <div className="h-full flex items-center justify-center font-bold text-brand-accent z-10 w-4 pb-1">:</div>
        <Wheel options={minutes} value={minute} onChange={handleMinuteChange} />
        <Wheel options={periods} value={ampm} onChange={handleAmPmChange} />
      </div>
    </div>
  );
};

const Reservation = () => {
  // 1. One state object to hold all our form inputs!
  const [formData, setFormData] = useState({
    date: '',
    time: '19:00',
    guests: 2,
    name: '',
    phone: '',
    requests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  const formatDisplayTime = (t) => {
    if (!t) return 'Select time';
    const [h, m] = t.split(':');
    const h24 = parseInt(h, 10);
    const ampm = h24 >= 12 ? 'PM' : 'AM';
    const h12 = h24 % 12 || 12;
    return `${h12}:${m} ${ampm}`;
  };

  const handleGuestChange = (delta) => {
    setFormData(prev => ({
      ...prev,
      guests: Math.max(1, Math.min(12, prev.guests + delta))
    }));
  };

  // 2. This function fires every time a user types a key or selects an option
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. This function posts data to FormSubmit and handles response
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
          Phone: formData.phone,
          Date: formData.date,
          Time: formatDisplayTime(formData.time),
          Guests: formData.guests,
          "Special Requests": formData.requests
        })
      });

      const data = await response.json();
      
      if (response.ok && data.success === "true") {
        alert(`Reservation Request Sent! We will contact you shortly.`);
        // Reset the form values
        setFormData({ date: '', time: '19:00', guests: 2, name: '', phone: '', requests: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      alert("Failed to submit reservation. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        
        {/* Hero Section */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${heroBg})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2">
            <h1 className="text-5xl md:text-6xl font-vibes text-brand-accent">Reserve Your Table</h1>
            <p className="text-brand-light font-modern text-lg">Experience the warmth of our bistro. Book your spot below.</p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-brand-dark/50 p-6 md:p-10 rounded-xl border border-brand-accent/20 shadow-xl">
          <div className="mb-8 border-b border-brand-accent/20 pb-6">
            <h2 className="text-2xl font-bold text-brand-light mb-2 font-modern">Reservation Details</h2>
            <p className="text-brand-light/60 text-sm">We hold tables for 15 minutes past your booking time.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Row 1: Date, Time, Guests */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs text-brand-accent uppercase tracking-widest font-bold">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-0 bottom-2 text-brand-light/60" size={20} />
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-8 text-brand-light focus:outline-none focus:border-brand-accent transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-xs text-brand-accent uppercase tracking-widest font-bold">Time</label>
                <div className="relative">
                  <Clock className="absolute left-0 bottom-2 text-brand-light/60" size={20} />
                  <button
                    type="button"
                    onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                    className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-8 text-brand-light focus:outline-none focus:border-brand-accent transition-colors text-left flex justify-between items-center"
                  >
                    <span>{formatDisplayTime(formData.time)}</span>
                    <ChevronDown className={`text-brand-accent transition-transform duration-300 ${isTimePickerOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  
                  {isTimePickerOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setIsTimePickerOpen(false)}
                      ></div>
                      <div className="absolute top-full left-0 mt-2 w-full bg-brand-dark/95 backdrop-blur-md rounded-xl shadow-xl border border-brand-accent/20 z-50 p-4">
                        <TimeWheel 
                          value={formData.time} 
                          onChange={(newTime) => setFormData(prev => ({ ...prev, time: newTime }))} 
                        />
                        <button 
                          type="button" 
                          onClick={() => setIsTimePickerOpen(false)}
                          className="w-full mt-4 py-2 bg-brand-accent text-brand-dark font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-brand-light transition-colors"
                        >
                          Done
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-brand-accent uppercase tracking-widest font-bold">Guests</label>
                <div className="relative">
                  <Users className="absolute left-0 bottom-2 text-brand-light/60" size={20} />
                  <div className="flex items-center justify-between border-b border-brand-light/20 pb-1 pl-8 hover:border-brand-accent/60 transition-colors focus-within:border-brand-accent">
                    <button type="button" onClick={() => handleGuestChange(-1)} className="w-8 h-8 flex items-center justify-center text-brand-accent hover:bg-brand-light/10 rounded-full transition-colors">
                      <Minus size={18} />
                    </button>
                    <input 
                      type="number" 
                      readOnly 
                      value={formData.guests} 
                      className="w-12 text-center bg-transparent text-brand-light font-bold focus:outline-none appearance-none" 
                      style={{ MozAppearance: 'textfield' }} 
                    />
                    <button type="button" onClick={() => handleGuestChange(1)} className="w-8 h-8 flex items-center justify-center text-brand-accent hover:bg-brand-light/10 rounded-full transition-colors">
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Row 2: Contact Info */}
            <div className="pt-2">
              <h3 className="text-xl font-bold text-brand-light mb-6 font-modern">Contact Info</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-brand-accent uppercase tracking-widest font-bold">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-0 bottom-2 text-brand-light/60" size={20} />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Rahul Patel"
                      required
                      className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-8 text-brand-light focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-light/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-brand-accent uppercase tracking-widest font-bold">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-0 bottom-2 text-brand-light/60" size={20} />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-8 text-brand-light focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-light/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-brand-accent uppercase tracking-widest font-bold">Special Requests</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-0 top-1 text-brand-light/60" size={20} />
                    <textarea 
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      placeholder="Anniversary, dietary restrictions..."
                      rows="2"
                      className="w-full bg-transparent border-b border-brand-light/20 pb-2 pl-8 text-brand-light focus:outline-none focus:border-brand-accent transition-colors resize-none placeholder:text-brand-light/30"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full bg-brand-accent text-brand-dark font-bold py-4 rounded-lg flex items-center justify-center hover:bg-brand-light transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Reservation;

