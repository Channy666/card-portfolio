
import React, { useRef, useState, useMemo } from 'react';
import { motion, useTransform, useMotionValue, useSpring, useScroll, useMotionTemplate, AnimatePresence } from 'framer-motion';
import Magnetic from '../components/Magnetic';

// ==========================================
// 🟢 CONFIGURATION: GLOBAL ZOOM & LAYOUT
// ==========================================

// 🟢 1. GLOBAL SCALE: Adjusts the zoom level of the entire section
const SKILLS_SCALE = 0.8;

// 🟢 2. CARD DIMENSIONS: Standard dimensions before scaling
const SKILL_CARD_WIDTH = '490px';
const SKILL_CARD_HEIGHT = '200px';
const SOFTWARE_ICON_CLASS = 'w-20 h-20';

// 🟢 3. CARD POSITIONS: Adjust each skill card's Top, Left, and Rotation
// Cascading left-to-right staggered layout to completely eliminate overlapping and give maximum space
const SKILL_CARD_POSITIONS = [
    { top: '2%',   left: '10%', rotate: -3 },   
    { top: '25%',  left: '52%', rotate: 2 },    
    { top: '48%',  left: '8%',  rotate: -2 },   
    { top: '71%',  left: '50%', rotate: 3 },  
];

// --- DATA ---
const skills = [
    { 
        id: 's1',
        title: "1. AIGC 全栈内容生产", 
        percent: 95, 
        color: "#F59E0B", 
        desc: "精通多模态生成式AI工具链，擅长将AI能力转化为标准化的内容产品"
    },
    { 
        id: 's2',
        title: "2. 数据驱动的增长运营", 
        percent: 90, 
        color: "#3B82F6", 
        desc: "具备极强的商业结果导向，擅长通过数据复盘与精细化运营实现产品冷启动与高ROI变现。"
    },
    { 
        id: 's3',
        title: "3. 从0到1的社媒社群构建", 
        percent: 88, 
        color: "#EA580C", 
        desc: "具备独立操盘高活跃社媒社群（Discord/Reddit/X）的全流程经验，擅长通过生态合作与私域运营建立品牌护城河。"
    },
    { 
        id: 's4',
        title: "4. 英语精通与全球视野", 
        percent: 92, 
        color: "#8B5CF6", 
        desc: "依托英语笔译硕士的专业优势，具备无障碍阅读前沿科技资讯与深度竞品研报的能力，保持对全球市场动态的敏锐洞察。"
    },
];

// --- DEPTH CONFIG ---
const DEPTHS = {
    FLOOR: -300,
    PROPS: -290,
    MAIN: -50,
};

// --- COMPONENTS ---

// Glass Card with Colored Spotlight Border & TRANSPARENT THICKNESS & Floating
const GlassSkillCard: React.FC<{ 
    skill: any, 
    index: number, 
    style: any 
}> = ({ skill, index, style }) => {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, x: -500, rotateZ: Math.random() * 20 - 10 }}
            whileInView={{ opacity: 1, x: 0, rotateZ: style.rotate as number || 0 }}
            transition={{ delay: index * 0.1, duration: 0.8, type: "spring", stiffness: 50 }}
            whileHover={{ scale: 1.05, x: 20, rotateZ: 0, zIndex: 100 }}
            className="absolute rounded-[2rem] group cursor-pointer perspective-1000 will-change-transform"
            style={{ 
                ...style, 
                width: SKILL_CARD_WIDTH,
                height: SKILL_CARD_HEIGHT,
                transformStyle: "preserve-3d" 
            }}
        >
            {/* --- 3D THICKNESS LAYER (Transparent Glass) --- */}
            <div 
                className="absolute inset-0 rounded-[2rem] bg-white/10 border border-white/20 pointer-events-none"
                style={{ 
                    transform: 'translateZ(-15px)',
                    boxShadow: '20px 20px 50px rgba(0,0,0,0.1)' 
                }}
            />
            <div 
                className="absolute inset-[-1px] rounded-[2rem] border border-white/20 pointer-events-none"
                style={{ transform: 'translateZ(-8px)' }}
            />

            {/* --- MAIN GLASS FACE --- */}
            <div className="absolute inset-0 rounded-[2rem] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)]" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Spotlight Border */}
                <motion.div
                    className="absolute -inset-[2px] rounded-[2rem] z-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: skill.color,
                        maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                        WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    }}
                />
                
                {/* Glass Background */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] z-10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-40 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-20 p-6 flex flex-col justify-between h-full font-sans">
                        <div className="flex justify-between items-start">
                            {/* Title with wrap support */}
                            <h3 className="text-xl font-bold text-gray-950 tracking-tight leading-snug">{skill.title}</h3>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden shadow-inner relative">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percent}%` }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                className="h-full rounded-full shadow-lg relative overflow-hidden"
                                style={{ backgroundColor: skill.color }}
                            >
                                <motion.div 
                                    className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>
                        </div>

                        {/* Description wraps nicely */}
                        <div className="text-xs text-gray-700 leading-relaxed whitespace-normal mt-1">
                            {skill.desc}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const FloorMarquee: React.FC<{ direction: 'left' | 'right', text: string, className?: string, rotate?: number, style?: React.CSSProperties }> = ({ direction, text, className, rotate = 0, style }) => {
    return (
        <div 
            className="absolute left-[-20%] w-[140%] pointer-events-auto overflow-visible flex group"
            style={{ 
                transform: `translateZ(${DEPTHS.PROPS - 10}px) rotate(${rotate}deg)`, 
                zIndex: 0,
                ...style,
                willChange: "transform" 
            }}
        >
            <motion.div
                className={`flex whitespace-nowrap ${className}`}
                initial={{ x: direction === 'left' ? '0%' : '-50%' }}
                animate={{ x: direction === 'left' ? '-50%' : '0%' }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="mx-4 transition-colors duration-300">
                        {text} <span className="mx-4 opacity-30">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
  });
  const floorY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 40, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const w = window.innerWidth;
      const h = window.innerHeight;
      x.set(clientX / w - 0.5);
      y.set(clientY / h - 0.5);
  };

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["35deg", "25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-2%", "2%"]);

  return (
    <section 
        ref={containerRef}
        className="relative w-full bg-white overflow-hidden" 
        onMouseMove={handleMouseMove}
        style={{ height: '150vh' }}
    >
      <motion.div 
         className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center will-change-transform"
         onViewportEnter={() => setHasEntered(true)}
      >
        <div className="absolute inset-0 flex items-center justify-center perspective-2000">
            <motion.div
                className="relative w-full max-w-[1600px] will-change-transform"
                style={{
                    scale: SKILLS_SCALE, // 🟢 APPLIED GLOBAL SCALE
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: floorY,
                    aspectRatio: '16/9',
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Floor */}
                <div className="absolute inset-[-50%] bg-white transform-preserve-3d" style={{ transform: `translateZ(${DEPTHS.FLOOR}px)` }} />
                
                {/* 1. Floor Title - Original Size */}
                <FloorMarquee 
                    direction="right" 
                    text="CAPABILITIES" 
                    rotate={5} 
                    className="text-[140px] font-albert-black text-gray-100 leading-none" 
                    style={{ top: '0%' }}
                />

                {/* 2. Skills Stack */}
                <div 
                    className="absolute w-full h-full pointer-events-none"
                    style={{
                        zIndex: 20,
                        transformStyle: "preserve-3d",
                        transform: `translateZ(${DEPTHS.MAIN}px) rotateX(-5deg)`,
                    }}
                >
                    {skills.map((skill, idx) => (
                        <div key={idx} className="pointer-events-auto">
                            <GlassSkillCard 
                                skill={skill} 
                                index={idx}
                                style={SKILL_CARD_POSITIONS[idx]}
                            />
                        </div>
                    ))}
                </div>

                {/* 4. Mouse Image - Updated CDN */}
                <motion.div
                    className="absolute w-[200px] pointer-events-none will-change-transform"
                    style={{
                        top: '-8%',
                        right: '5%',
                        zIndex: 50,
                        transform: `translateZ(${DEPTHS.PROPS + 100}px) rotateY(-15deg)`,
                    }}
                    initial={{ opacity: 0, y: -100 }}
                    animate={hasEntered ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, type: "spring" }}
                >
                     <img 
                        src="https://jsd.cdn.zzko.cn/gh/jayneysil520-dev/jayneysil@main/mouse-render.png" 
                        onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/9684/9684876.png" }}
                        alt="Mouse" 
                        className="w-full drop-shadow-xl"
                        decoding="async" 
                    />
                </motion.div>

            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
