import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className="fixed top-0 left-0 right-0 bg-black sm:bg-black/70 sm:backdrop-blur-md border-b border-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-2xl font-semibold text-white tracking-wide">
                        Aadish Samir <span className="text-green-400">| Dev</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="sm:hidden text-gray-300 hover:text-white transition-colors relative w-6 h-6"
                        onClick={toggleMenu}
                        style={{zIndex: 60}} // Ensure button stays above overlay
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{rotate: 90, opacity: 0}}
                                    animate={{rotate: 0, opacity: 1}}
                                    exit={{rotate: 90, opacity: 0}}
                                    transition={{duration: 0.2}}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <FaTimes size={24}/>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{rotate: -90, opacity: 0}}
                                    animate={{rotate: 0, opacity: 1}}
                                    exit={{rotate: -90, opacity: 0}}
                                    transition={{duration: 0.2}}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <FaBars size={24}/>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex items-center space-x-8">
                        {[
                            {name: 'Home', path: '/'},
                            {name: 'About', path: '/about'},
                            {name: 'Projects', path: '/projects'},
                        ].map((item) => (
                            <div key={item.name} className="relative">
                                <motion.div
                                    whileHover={{y: -2}}
                                    whileTap={{scale: 0.95}}
                                    className="relative"
                                >
                                    <Link
                                        to={item.path}
                                        className={`text-base font-medium transition-colors ${
                                            location.pathname === item.path
                                                ? 'text-green-400'
                                                : 'text-gray-300 hover:text-white'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                    {location.pathname === item.path && (
                                        <motion.div
                                            layoutId="navbar-underline"
                                            className="absolute left-0 right-0 h-0.5 bg-green-400"
                                            initial={false}
                                            animate={{opacity: 1}}
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30
                                            }}
                                        />
                                    )}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.2}}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
                            onClick={toggleMenu}
                        />

                        <motion.div
                            initial={{x: '100%'}}
                            animate={{x: 0}}
                            exit={{x: '100%'}}
                            transition={{type: "spring", damping: 20, stiffness: 100}}
                            className="fixed top-0 right-0 w-full h-screen bg-black/95 z-50 flex flex-col"
                        >
                            <div className="flex flex-col items-center justify-center h-full space-y-12 py-20">
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    className="text-3xl font-bold text-white tracking-wide"
                                >
                                    Aadish Samir <span className="text-green-400">| Dev</span>
                                </motion.div>

                                {[
                                    {name: 'Home', path: '/'},
                                    {name: 'About', path: '/about'},
                                    {name: 'Projects', path: '/projects'},
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{delay: index * 0.1}}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={toggleMenu}
                                            className={`text-2xl font-medium transition-all ${
                                                location.pathname === item.path
                                                    ? 'text-green-400'
                                                    : 'text-gray-300 hover:text-white hover:scale-110'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
