import {motion} from 'framer-motion';
import {FaArrowLeft} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const WeatherFast = () => {
    const navigate = useNavigate();

    const screenshots = [
        '/assets/screenshots/weatherfast/screen1.png',
        '/assets/screenshots/weatherfast/screen2.png',
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
                layoutId="card-container-weatherfast"
                transition={{delay: 0.01, duration: 0.3}}
                className="flex flex-col md:flex-row items-start gap-8 mb-12 bg-gray-800 p-6 rounded-xl shadow-lg"
            >
                <motion.img
                    layoutId="card-image-weatherfast"
                    transition={{delay: 0.01, duration: 0.3}}
                    src="/assets/appicons/weatherfast.png"
                    alt="WeatherFast"
                    className="w-32 h-32 rounded-2xl shadow-lg"
                />

                <div>
                    <motion.h1
                        layoutId="card-title-weatherfast"
                        transition={{delay: 0.01, duration: 0.3}}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        WeatherFast
                    </motion.h1>

                    <motion.img
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.4}}
                        src="/assets/google-play-badge.png"
                        alt="Get it on Google Play"
                        className="h-[40px] cursor-pointer hover:opacity-80 transition-opacity shadow-md"
                        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.aadishsamir.weatherfast', '_blank')}
                    />
                    <motion.p
                        layoutId="card-description-weatherfast"
                        transition={{delay: 0.01, duration: 0.3}}
                        className="text-gray-300 text-lg mb-6 max-w-2xl space-y-4 leading-relaxed"
                    >
                        <span className="block">
                            WeatherFast is a fast and easy-to-use weather app with a beautiful and familiar design.
                        </span>

                        <span className="block font-medium">Features include:</span>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Live weather details</li>
                            <li>Forecasts</li>
                            <li>Recommended advice for staying safe and dry in the weather</li>
                        </ul>

                        <span className="block mt-4">
                            There are no subscriptions or ads, so you can check the weather without unnecessary distractions.
                        </span>
                    </motion.p>
                </div>
            </motion.div>

            <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.1, duration: 0.5}}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit">
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
                                alt={`WeatherFast Screenshot ${index + 1}`}
                                className="max-h-[500px] w-auto object-contain rounded-lg"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default WeatherFast;
