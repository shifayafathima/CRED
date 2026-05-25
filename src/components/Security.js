import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaFingerprint } from "react-icons/fa";

function Security() {
  const securityData = [
    {
      icon: <FaShieldAlt />,
      title: "Bank-Level Security",
      desc: "Advanced encryption keeps your transactions protected.",
    },

    {
      icon: <FaLock />,
      title: "Safe Payments",
      desc: "Your data stays private with secure payment systems.",
    },

    {
      icon: <FaFingerprint />,
      title: "Biometric Access",
      desc: "Multi-layer authentication for maximum protection.",
    },
  ];

  return (
    <section
      id="security"
      className="bg-black text-white py-28 px-6"
    >

      <div className="text-center mb-16">

        <p className="text-purple-400 tracking-[4px] uppercase mb-4">
          Security
        </p>

        <h2 className="text-5xl md:text-6xl font-bold">
          Designed with
          trust first.
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {securityData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all"
          >

            <div className="text-5xl text-purple-400 mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-7">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Security;