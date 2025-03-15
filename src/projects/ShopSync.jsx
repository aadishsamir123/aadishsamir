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
    ];

    return (
        <div className="min-h-screen p-8 pt-24">
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
                className="flex flex-col md:flex-row items-start gap-8 mb-12"
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
                        className="h-10 flex items-center gap-2 px-3 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors text-sm sm:text-base"
                        onClick={() => window.open('https://as-shopsync.pages.dev', '_blank')}
                    >
                        <FaGlobe className="flex-shrink-0"/>
                        <span className="whitespace-nowrap">View Website</span>
                    </motion.button>

                    {/*<motion.img*/}
                    {/*    initial={{opacity: 0}}*/}
                    {/*    animate={{opacity: 1}}*/}
                    {/*    transition={{delay: 0.4}}*/}
                    {/*    src="/assets/google-play-badge.png"*/}
                    {/*    alt="Get it on Google Play"*/}
                    {/*    className="h-[40px] cursor-pointer hover:opacity-80 transition-opacity"*/}
                    {/*    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.aadishsamir.shopsync', '_blank')}*/}
                    {/*/>*/}
                    <motion.p
                        layoutId="card-description-shopsync"
                        transition={{delay: 0.01, duration: 0.3}}
                        className="text-gray-300 text-lg mb-6 max-w-2xl space-y-4"
                    >
      <span className="block">
        ShopSync is a simple app which lets you share shopping, grocery, or todo-lists with family and friends.
      </span>

                        <span className="block font-medium">Features include:</span>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Stored on the cloud</li>
                            <li>Offline access</li>
                            <li>Recycle bin for easy restoration of deleted tasks.</li>
                        </ul>
                    </motion.p>
                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.1}}  // Increased delay for screenshots section
            >
                {/* Screenshots section content */}
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.1, duration: 0.5}}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-fit">
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
                            className="flex items-center justify-start"
                        >
                            <img
                                src={screenshot}
                                alt={`ShopSync Screenshot ${index + 1}`}
                                className="max-h-[500px] w-auto object-contain rounded-xl"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
        ;
};

export default ShopSync;