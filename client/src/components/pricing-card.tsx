import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  isBestValue?: boolean;
  delay?: number;
}

export function PricingCard({ 
  title, 
  price, 
  duration, 
  features, 
  isPopular, 
  isBestValue,
  delay = 0 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative flex flex-col p-8 rounded-2xl border ${
        isPopular 
          ? "bg-zinc-900 border-primary shadow-2xl shadow-primary/10 scale-105 z-10" 
          : "bg-zinc-950 border-white/10 hover:border-white/20"
      } transition-all duration-300`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
          Most Popular
        </div>
      )}
      
      {isBestValue && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
          Best Value
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">{title}</h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">₹{price}</span>
          <span className="text-sm text-gray-500">/{duration}</span>
        </div>
      </div>

      <div className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`p-1 rounded-full ${isPopular ? "bg-primary/20 text-primary" : "bg-white/5 text-gray-400"}`}>
              <Check className="w-3 h-3" />
            </div>
            <span className="text-sm text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/7061688050"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 w-full py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 ${
          isPopular
            ? "bg-primary text-white hover:bg-red-600 shadow-lg shadow-primary/25"
            : "bg-white text-black hover:bg-gray-200"
        }`}
      >
        <FaWhatsapp className="w-5 h-5" />
        Join Now
      </a>
    </motion.div>
  );
}
