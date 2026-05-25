function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-5 bg-black/30 backdrop-blur-md fixed w-full z-50">

            <h1 className="text-2xl font-bold tracking-widest">
                CRED
            </h1>

            <ul className="hidden md:flex gap-8 text-gray-300">
                <li>
                    <a href="#features"
                    className="hover:text-white cursor-pointer transition-all"
                    >
                    Features
                    </a>
                </li>

                <li> 
                    <a 
                    href="#security"
                    className="hover:text-white cursor-pointer transition-all">
                    Security
                    </a>
                </li>

                <li>
                    <a 
                    href="#testimonials"
                    className="hover:text-white cursor-pointer transition-all">
                    Rewards
                    </a>
                </li>

                <li>
                    <a
                        href="#about"
                        className="hover:text-white cursor-pointer transition-all"
                    >
                        About
                    </a>
                </li>
                
            </ul>

            <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition-all">
                Download App
            </button>

        </nav >
    );
}

export default Navbar;