import {motion} from 'framer-motion';
import {FaArrowLeft} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const Todoey = () => {
    const navigate = useNavigate();

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
                layoutId="card-container-Todoey"
                transition={{delay: 0.01, duration: 0.3}}
                className="flex flex-col md:flex-row items-start gap-8 mb-12"
            >
                <motion.img
                    layoutId="card-image-Todoey"
                    transition={{delay: 0.01, duration: 0.3}}
                    src="/assets/appicons/todoey.png"
                    alt="Todoey"
                    className="w-32 h-32 rounded-2xl shadow-lg"
                />

                <div>
                    <motion.h1
                        layoutId="card-title-Todoey"
                        transition={{delay: 0.01, duration: 0.3}}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        Todoey
                    </motion.h1>
                    <motion.p
                        layoutId="card-description-Todoey"
                        transition={{delay: 0.01, duration: 0.3}}
                        className="text-gray-300 text-lg mb-6 max-w-2xl space-y-4"
                    >
      <span className="block">
        Todoey is a discontinued app. Please visit ShopSync to get similar functionality.
      </span>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    )
        ;
};

export default Todoey;