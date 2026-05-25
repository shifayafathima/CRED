import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-12 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h1 className="text-3xl font-bold mb-4">
            FuturePay
          </h1>

          <p className="text-gray-400 leading-7">
            Premium fintech experiences crafted for the modern generation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>About</li>
            <li>Security</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Follow Us
          </h2>

          <div className="flex gap-5 text-2xl text-gray-400">
            <FaInstagram className="hover:text-white cursor-pointer transition-all" />
            <FaTwitter className="hover:text-white cursor-pointer transition-all" />
            <FaLinkedin className="hover:text-white cursor-pointer transition-all" />
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-12">
        © 2026 FuturePay. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;