import React from 'react';
import { motion } from 'framer-motion';

const VinylLogo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
        {/* 1. 黑胶唱片 Visual Only */}
        <motion.div 
            className="relative flex flex-col items-center cursor-pointer group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {/* Vinyl Disc Visuals */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" }
                }}
                className="relative w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-lg border border-gray-800 z-20"
            >
                <div className="absolute inset-1 rounded-full border border-gray-700/50" />
                <div className="absolute inset-2 rounded-full border border-gray-700/50" />
                <div className="absolute inset-3 rounded-full border border-gray-700/50" />
                
                {/* Center Sticker */}
                <div 
                    className="w-4 h-4 rounded-full flex items-center justify-center z-10 bg-[#F97316]"
                >
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
            </motion.div>
        </motion.div>

        {/* 2. Logo Text */}
        <div className="hidden sm:block whitespace-nowrap text-[10px] font-albert-black tracking-widest text-black select-none opacity-80 group-hover:opacity-100 transition-opacity">
            CHANNY'S PORTFOLIO
        </div>
    </div>
  );
};

export default VinylLogo;
