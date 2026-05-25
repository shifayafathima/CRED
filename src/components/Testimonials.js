import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";

function Testimonials() {
  const users = [
    {
      name: "Arjun",
      review: "The smoothest payment experience I’ve ever used.",
      rating: 5,
    },
    {
      name: "Rahul",
      review: "Premium UI, rewards, and instant transactions. Love it.",
      rating: 4,
    },
    {
      name: "Aisha",
      review: "Finally a fintech platform that actually feels modern.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-black text-white py-28 px-6">

      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold">
          What Members Say
        </h2>
        <p className="text-gray-400 mt-4">
          Trusted by millions of premium users.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {users.map((user, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
          >

            {/* Stars */}
            <div className="flex mb-6">
              {Array.from({ length: 5 }).map((_, i) =>
                i < user.rating ? (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ) : (
                  <FaRegStar key={i} className="text-gray-600 text-xl" />
                )
              )}
            </div>

            <p className="text-gray-300 leading-8 mb-8">
              "{user.review}"
            </p>

            <h3 className="text-xl font-semibold text-purple-400">
              {user.name}
            </h3>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Testimonials;