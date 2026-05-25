import { motion } from "framer-motion";

function About() {
  return (
    <section  id="about" className="bg-black text-white py-28 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="text-purple-400 uppercase tracking-[5px] mb-4">
            Members Only
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Built for people
            who expect more.
          </h2>

          <p className="text-gray-400 mt-8 leading-8 text-lg">
            Join an exclusive ecosystem designed around trust,
            rewards, premium experiences, and seamless payments.
            We redefine how modern finance should feel.
          </p>

          <button className="mt-10 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Learn More
          </button>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          <div className="w-[320px] h-[420px] rounded-[40px] bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.3)] p-8 backdrop-blur-xl">

            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold tracking-widest">
                BLACK
              </h3>

              <div className="w-14 h-10 rounded-lg bg-yellow-400"></div>
            </div>

            <div className="mt-24">
              <p className="text-gray-400">
                Exclusive Member Card
              </p>

              <h1 className="text-4xl font-bold mt-3">
                FuturePay
              </h1>
            </div>

            <div className="absolute bottom-8 left-8">
              <p className="text-gray-500 text-sm">
                Premium Access
              </p>

              <h2 className="text-xl tracking-widest mt-1">
                **** 2048
              </h2>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;