import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-zinc-900 p-8 rounded-2xl border border-white/5"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-white">
          Chat with us on WhatsApp
        </h3>

        <p className="text-zinc-400">
          Get instant response from our team. Click the button below to start chatting with BOB GYM.
        </p>

        <a
          href="https://wa.me/917061688050"
          target="_blank"
          rel="noopener noreferrer"
         className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg"

          Chat on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

