import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { PricingCard } from "@/components/pricing-card";
import { ContactForm } from "@/components/contact-form";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Dumbbell, 
  Zap, 
  Heart, 
  Users, 
  BadgeDollarSign 
} from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Home() {
  const facilities = [
    { icon: <Dumbbell className="w-8 h-8" />, title: "Strength Training", desc: "Premium weights & machines" },
    { icon: <Zap className="w-8 h-8" />, title: "Cardio Zone", desc: "Treadmills, bikes & ellipticals" },
    { icon: <Heart className="w-8 h-8" />, title: "Clean Environment", desc: "Hygienic & sanitized daily" },
    { icon: <Users className="w-8 h-8" />, title: "Beginner Friendly", desc: "Supportive community" },
    { icon: <BadgeDollarSign className="w-8 h-8" />, title: "Affordable", desc: "Best prices in town" },
  ];

  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Atmosphere" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-lg md:text-xl">
              Welcome to Nokha's Finest
            </h2>
            <h1 className="text-7xl md:text-9xl font-display font-bold text-white mb-6 tracking-tighter leading-none">
              BOB <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">GYM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Train Hard. Stay Strong. Build Discipline.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:7061688050"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Call Now
              </a>
              <a 
                href="https://wa.me/7061688050"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider rounded hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 group"
              >
                <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                WhatsApp Chat
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-lg transform -rotate-3" />
              {/* bodybuilder workout weights */}
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                alt="About Bob Gym" 
                className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                WE BUILD <span className="text-primary">DISCIPLINE</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                BOB GYM is more than just a place to workout. It's a local trusted sanctuary focused on raw discipline and tangible results. We offer affordable pricing suitable for both complete beginners and serious trainees. No gimmicks, just iron and sweat.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">500+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Happy Members</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">100%</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Dedication</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMINGS SECTION */}
      <section id="timings" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">GYM <span className="text-primary">TIMINGS</span></h2>
            <p className="text-gray-400">Consistency is the key to progress</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-zinc-900 p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">MORNING SHIFT</h3>
              <p className="text-4xl font-display font-bold text-white">5:00 <span className="text-lg text-gray-500 font-sans">AM</span> - 10:00 <span className="text-lg text-gray-500 font-sans">AM</span></p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-zinc-900 p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">EVENING SHIFT</h3>
              <p className="text-4xl font-display font-bold text-white">3:00 <span className="text-lg text-gray-500 font-sans">PM</span> - 9:00 <span className="text-lg text-gray-500 font-sans">PM</span></p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section id="facilities" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">OUR <span className="text-primary">FACILITIES</span></h2>
            <p className="text-gray-400">Everything you need to reach your goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group text-center"
              >
                <div className="mx-auto w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-white group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {facility.icon}
                </div>
                <h3 className="font-bold mb-2">{facility.title}</h3>
                <p className="text-xs text-gray-500">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">MEMBERSHIP <span className="text-primary">PLANS</span></h2>
            <p className="text-gray-400">Simple, affordable pricing with no hidden fees</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PricingCard
              title="Monthly"
              price="400"
              duration="mo"
              features={["Gym Access", "Basic Guidance", "Cardio Access"]}
            />
            <PricingCard
              title="Quarterly"
              price="1000"
              duration="3 mos"
              features={["Save ₹200", "Gym Access", "Diet Tips", "Cardio Access"]}
              delay={0.1}
            />
            <PricingCard
              title="Half Yearly"
              price="1900"
              duration="6 mos"
              features={["Save ₹500", "Gym Access", "Diet Plan", "Personal Assessment"]}
              isPopular={true}
              delay={0.2}
            />
            <PricingCard
              title="Yearly"
              price="3600"
              duration="year"
              features={["Save ₹1200", "Full Access", "Priority Support", "Diet & Routine"]}
              isBestValue={true}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">GET IN <span className="text-primary">TOUCH</span></h2>
              <p className="text-gray-400 mb-10 text-lg">
                Ready to transform your life? Contact us directly or fill out the form and we'll get back to you.
              </p>

              <div className="space-y-8">
                <a href="tel:7061688050" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Call Us</h4>
                    <p className="text-xl font-bold group-hover:text-primary transition-colors">7061688050</p>
                  </div>
                </a>

                <a href="https://wa.me/7061688050" target="_blank" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-green-500 transition-colors">
                    <FaWhatsapp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">WhatsApp</h4>
                    <p className="text-xl font-bold group-hover:text-green-500 transition-colors">Chat on WhatsApp</p>
                  </div>
                </a>

                <a href="https://instagram.com/bob_gym_nokha" target="_blank" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-pink-500 transition-colors">
                    <FaInstagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Follow Us</h4>
                    <p className="text-xl font-bold group-hover:text-pink-500 transition-colors">@bob_gym_nokha</p>
                  </div>
                </a>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-xl font-bold">Nokha, Bihar</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-primary p-2 rounded-lg">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              BOB <span className="text-primary">GYM</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BOB GYM. All rights reserved.
            <br />
            Designed for strength. Built for results.
          </p>
        </div>
      </footer>
    </div>
  );
}
