import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-5 relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Experience <br />
          Credit Reimagined.
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Premium payments, rewards, and experiences
          designed for the future generation.
        </p>

        <button className="mt-8 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          Explore Now
        </button>

      </motion.div>

      <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-20 left-10"></div>

      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full bottom-10 right-10"></div>

    </section>
  );
}

export default Hero;