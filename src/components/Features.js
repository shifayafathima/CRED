import { motion } from "framer-motion";
import {
  FaCreditCard,
  FaGift,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaCreditCard />,
      title: "Bill Payments",
      desc: "Pay all your credit card bills instantly with rewards.",
    },

    {
      icon: <FaGift />,
      title: "Rewards",
      desc: "Unlock premium cashback and exclusive experiences.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Security",
      desc: "Industry-level encryption and trusted payments.",
    },

    {
      icon: <FaMobileAlt />,
      title: "UPI Payments",
      desc: "Fast and secure UPI transactions anytime.",
    },
  ];

  return (
    <section  id="features" className="bg-black text-white py-24 px-6">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Why Choose Us
        </h2>

        <p className="text-gray-400 mt-4">
          Premium experiences designed for modern users.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all"
          >

            <div className="text-4xl mb-5 text-purple-400">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Features;