import {motion} from 'framer-motion';
import {FaArrowLeft, FaGlobe} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const ShopSync = () => {
    const navigate = useNavigate();

    const screenshots = [
        '/assets/screenshots/shopsync/screen1.png',
        '/assets/screenshots/shopsync/screen2.png',
        '/assets/screenshots/shopsync/screen3.png',
        '/assets/screenshots/shopsync/screen4.png',
        '/assets/screenshots/shopsync/screen5.png',
        '/assets/screenshots/shopsync/screen6.png',
        '/assets/screenshots/shopsync/screen7.png',
        '/assets/screenshots/shopsync/screen8.png',
    ];

    return (
        <div className="min-h-screen p-8 pt-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <motion.button
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                onClick={() => navigate('/projects')}
                className="flex items-center gap-2 text-white mb-8 hover:text-gray-300 transition-colors"
            >
                <FaArrowLeft/> Back to Projects
            </motion.button>

            <motion.div
                layoutId="card-container-shopsync"
                transition={{delay: 0.01, duration: 0.3}}
                className="flex flex-col md:flex-row items-start gap-8 mb-12 bg-gray-800 p-6 rounded-xl shadow-lg"
            >
                <motion.img
                    layoutId="card-image-shopsync"
                    transition={{delay: 0.01, duration: 0.3}}
                    src="/assets/appicons/shopsync.png"
                    alt="shopsync"
                    className="w-32 h-32 rounded-2xl shadow-lg"
                />

                <div>
                    <motion.h1
                        layoutId="card-title-shopsync"
                        transition={{delay: 0.01, duration: 0.3}}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        ShopSync
                    </motion.h1>

                    <motion.button
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.4}}
                        className="h-10 flex items-center gap-2 px-4 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all text-sm sm:text-base shadow-md"
                        onClick={() => window.open('https://app.shopsync.aadish.dev', '_blank')}
                    >
                        <FaGlobe className="flex-shrink-0"/>
                        <span className="whitespace-nowrap">View Website</span>
                    </motion.button>

                    <br />

                    <motion.img
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.4}}
                        src="/assets/google-play-badge.png"
                        alt="Get it on Google Play"
                        className="h-[40px] cursor-pointer hover:opacity-80 transition-opacity shadow-md"
                        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync', '_blank')}
                    />

                    <motion.div
                        layoutId="card-description-shopsync"
                        transition={{delay: 0.01, duration: 0.3}}
                        className="text-gray-300 text-lg mb-6 max-w-4xl space-y-6 leading-relaxed"
                    >
                        <div className="space-y-4">
                            <p className="text-xl font-semibold text-white">
                                ShopSync - Share shopping lists with family and friends
                            </p>
                            
                            <p>
                                Transform your shopping experience with ShopSync, the ultimate collaborative shopping list app designed for families and friends. Create, share, and manage shopping lists effortlessly while keeping everyone synchronized and organized.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">🛒 Smart Shopping Lists</h3>
                                <p className="text-gray-300">
                                    Create unlimited shopping lists with custom icons, categories, and detailed descriptions. Add items with counters, deadlines, and store locations. Our intuitive interface makes grocery shopping planning a breeze.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">👨‍👩‍👧‍👦 Family Collaboration</h3>
                                <p className="text-gray-300">
                                    Share lists instantly with family members and friends via email. Set different permission levels - owners, editors, or viewers. Real-time synchronization ensures everyone stays updated on shopping progress.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">📍 Location & Store Management</h3>
                                <p className="text-gray-300">
                                    Save frequently used store locations and organize items by shopping destinations. Set specific stores for different items to optimize your shopping routes.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">⏰ Smart Organization</h3>
                                <p className="text-gray-300">
                                    Set deadlines for urgent items, mark priorities, and track completion status. Clear completed items with one tap or restore them from the recycle bin when needed.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">✨ Key Features:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                    <li>Real-time collaborative shopping lists</li>
                                    <li>Family sharing with role-based permissions</li>
                                    <li>Custom icons and categories</li>
                                    <li>Store location mapping</li>
                                    <li>Task templates and saved locations</li>
                                    <li>Deadline management</li>
                                </ul>
                                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                                    <li>Recycle bin for deleted items</li>
                                    <li>Dark/light theme modes</li>
                                    <li>Export functionality</li>
                                    <li>Offline support</li>
                                    <li>Cross-platform synchronization</li>
                                    <li>Privacy & security focused</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-white mb-2">Perfect For:</h3>
                            <p className="text-gray-300">
                                Families managing household shopping, roommates coordinating grocery runs, couples planning meals together, group events and party planning, and small business inventory tracking.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.1, duration: 0.5}}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-fit">
                    {screenshots.map((screenshot, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.5,
                                duration: 0.5
                            }}
                            className="flex items-center justify-start bg-gray-700 p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={screenshot}
                                alt={`ShopSync Screenshot ${index + 1}`}
                                className="max-h-[500px] w-auto object-contain rounded-lg"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ShopSync;
