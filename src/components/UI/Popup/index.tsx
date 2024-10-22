import { LuCheckCircle2, LuX } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';

export const exitAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const Popup = ({
  text,
  setVisible,
}: {
  text: string;
  setVisible: () => void;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        exit={{
          opacity: 0,
          scale: 0.0,
          transition: { duration: 0.5 },
        }}
        className="flex flex-col justify-center items-center absolute inset-0 m-auto"
      >
        <div className="bg-slate-800 rounded-3xl">
          <div className="px-14 py-10 flex flex-col items-center gap-4 relative">
            <LuX
              color="white"
              size={24}
              className="absolute right-5 top-3 cursor-pointer"
              onClick={setVisible}
            />
            <LuCheckCircle2 size={100} color="white" />
            <h1 className="text-white font-medium text-xl">
              {text}
            </h1>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Popup;
