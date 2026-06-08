import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Hapus AnimatePresence dari import

const greetings = [
    "HELLO", "HALO", "HOLA", "BONJOUR", "CIAO", "NAMASTE", "KONNICHIWA", "STEFANUS"
];

function SplashScreen({ onFinish }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < greetings.length - 1) {
            const timer = setTimeout(() => setIndex(index + 1), 200);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(onFinish, 800);
            return () => clearTimeout(timer);
        }
    }, [index, onFinish]);

    return (
        <motion.div
            key="splash"
            initial={{ y: 0 }}
            // Animasi exit sekarang dijamin berjalan 100% lancar
            exit={{ 
                y: "-100%", 
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-tertiary"
        >
            <div className="flex items-center gap-4">
                <div className="w-4 h-4 rounded-full bg-[#FFD43B] animate-pulse"></div>
                <h1 className="text-5xl md:text-7xl font-black text-[#FFD43B] font-heading tracking-widest uppercase">
                    {greetings[index]}
                </h1>
            </div>
        </motion.div>
    );
}

export default SplashScreen;