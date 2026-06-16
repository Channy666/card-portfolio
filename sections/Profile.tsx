
import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useTransform, useMotionValue, useSpring, useScroll, useMotionTemplate } from 'framer-motion';
import { createPortal } from 'react-dom';
import ExperienceModal from '../components/ExperienceModal';
import Magnetic from '../components/Magnetic';

// ==========================================
// 🟢 CONFIGURATION: GLOBAL ZOOM & LAYOUT
// ==========================================

// 🟢 1. GLOBAL SCALE: Adjusts the zoom level of the entire section
const PROFILE_SCALE = 0.7;

// 🟢 2. CARD DIMENSIONS: Standard dimensions before scaling
const CARD_WIDTH = '550px';
const CARD_HEIGHT = '180px';

// 🟢 3. CARD POSITIONS: Adjust each timeline card's Top, Left, and Rotation
const CARD_POSITIONS = [
    { top: '0%',  left: '55%', rotate: '-2deg' }, // was 5%
    { top: '23%', left: '60%', rotate: '1deg' },  // was 28%
    { top: '46%', left: '56%', rotate: '-1deg' }, // was 51%
    { top: '69%', left: '59%', rotate: '2deg' },  // was 74%
];

// 🟢 4. EDUCATION CARD POSITIONS (Left Side)
const EDU_CARD_POSITIONS = [
    { top: '15%', left: '-15%', rotate: '1.5deg' },
    { top: '42%', left: '-17%', rotate: '-1.5deg' }
];

// --- DATA ---
const educationData = [
  { 
      id: 'edu_1', 
      year: '2021.09 - 2024.03', 
      role: '高级翻译学院英语笔译硕士', 
      company: '上海外国语大学', 
      color: '#4ECDC4', 
      desc: 'GPA 3.79/4.00 (专业前30%) | 夏令营优秀营员、学业奖学金',
      tags: ['英语笔译', '高级翻译', '学业奖学金']
  },
  { 
      id: 'edu_2', 
      year: '2017.09 - 2021.06', 
      role: '外语学院英语本科', 
      company: '东华大学', 
      color: '#845EF7', 
      desc: '校优秀毕业生、优秀本科生国际交流项目、学习优秀奖学金、交换生奖学金、2018年华政模拟联合国大会Best Potential等',
      tags: ['英语本科', '优秀毕业生', '模拟联合国']
  }
];

const experienceData = [
  { 
      id: '1', 
      year: '2024.04 - 2026.05', 
      role: 'AI内容运营', 
      company: '万兴科技', 
      color: '#FF7F27', 
      desc: '深度参与两款AI产品的运营——SelfyzAI（AI图像视频类编辑类APP）以及TruMate（AI陪伴类APP）从利用大模型（ChatGPT/Gemini等）标准化制作AI图片视频模板或AI人设，到从0到1搭建海外社媒矩阵与Discord社群，我擅长通过内容与用户建立深度连接，并利用数据反推产品优化。',
      tags: ['Prompt Engineering', 'AIGC', '社媒社群'],
      details: {
          department: 'GX事业部-裂变增长部',
          lines: [
              {
                  title: 'TruMate（AI陪伴类APP）业务线',
                  bg: 'rgba(255, 127, 39, 0.03)',
                  border: 'rgba(255, 127, 39, 0.1)',
                  tagColor: 'text-[#FF7F27] bg-[#FF7F27]/10',
                  items: [
                      {
                          label: 'AI人设制作',
                          desc: '结合社群需求和社媒热点，确定所需制作的人设。应用ChatGPT、DeepSeek、Midjourney、Stable Diffusion各类模型，标准化输出人设的聊天Prompt、生图Prompt、多语言文案（简介/开聊语）和视觉素材（封面/背景/头像）。累计上线246个人设，214个人设产生付费，付费转化率达86.9%。',
                          stats: [{ val: '246+', label: '上线人设' }, { val: '214', label: '付费人设' }, { val: '86.9%', label: '付费转化率' }]
                      },
                      {
                          label: '社媒矩阵运营',
                          desc: '0-1搭建X、Instagram、Reddit社媒矩阵，发布内容180+篇。在Reddit5篇帖子获229Karma值，单帖最高浏览14k；在X平台总浏览达245k, 6篇获大号转发，助力产品冷启动。',
                          stats: [{ val: '180+', label: '发布内容' }, { val: '245k', label: 'X总浏览' }, { val: '14k', label: 'Reddit最高单帖' }]
                      },
                      {
                          label: 'Discord社群运营',
                          desc: '0-1搭建Discord社群，建立公告/规则/互动/人设需求反馈/APP使用反馈等频道，设置身份组，配置Automod，举办人设图片与聊天分享活动等，成员数达4012，周新成员留存率23.5%。同时解决多项重大客诉，有效控制产品风险，减少损失。',
                          stats: [{ val: '4012', label: '社群成员' }, { val: '23.5%', label: '周留存率' }]
                      },
                      {
                          label: 'Discord私域推广',
                          desc: '与动漫/游戏/社交类社群合作推广TruMate应用，利用Adjust生成社群专属链接，精准复盘转化效果。结合数据，逐步完善合作筛选标准，优化合作模式。累计合作41个社群，单次安装成本仅为$0.2，ROI达3.6。',
                          stats: [{ val: '41个', label: '合作社群' }, { val: '$0.2', label: '单次安装成本' }, { val: '3.6', label: 'ROI' }]
                      }
                  ]
              },
              {
                  title: 'SelfyzAI（AI图像视频类编辑APP）业务线',
                  bg: 'rgba(0, 92, 75, 0.03)',
                  border: 'rgba(0, 92, 75, 0.1)',
                  tagColor: 'text-[#005C4B] bg-[#005C4B]/10',
                  items: [
                      {
                          label: '广告素材供给',
                          desc: '深度监测TikTok及抖音平台AI类视频热点、热门话题及行业趋势，结合AppGrowing平台竞品投放动态，向投放侧供给200+素材方向，测出30+优质方向，优质素材率为运营组内第一（单个素材投放消耗金额达$500视为优质），支撑SelfyzAI在26年Q1新单收入环比25年Q4提升9.78%。',
                          stats: [{ val: '200+', label: '供给方向' }, { val: '30+', label: '优质方向' }, { val: '9.78%', label: 'Q1收入环比提升' }]
                      },
                      {
                          label: '广告数据复盘',
                          desc: '分析素材的ROI、CTR、CVR等核心指标，优化低转化高潜力素材，并裂变优质方向；结合数据反馈，反推优质投放素材在原社媒平台上的共性表现（点赞、评论、博主画像等），预判优质方向，2个月内优质素材产出效率提升70%。',
                          stats: [{ val: '70%', label: '效率提升' }]
                      },
                      {
                          label: '端内效果策划',
                          desc: '联动算法、设计与产品，承接Nano Banana Pro/Kling V3/Seedance 2.0等模型能力，在端内上线AIGC模板，构建“洞察-策划-测试”闭环，实现日均10+素材模板的高效交付。除热点洞察外，深度识别舞蹈类-动态形式、告别类-情感氛围、黑白类-视觉质感等非热点类高频需求，构建了高频迭代的内容矩阵。',
                          stats: [{ val: '10+', label: '日均模板交付' }]
                      }
                  ]
              }
          ]
      }
  },
  { 
      id: '2', 
      year: '2023.06 - 2023.08', 
      role: '海外达人营销实习', 
      company: '北京全速在线', 
      color: '#005C4B', 
      desc: '在运动服饰出海品牌Halara实习期间，我负责精准挖掘海外TikTok达人资源，全流程跟进内容产出。通过分析视频数据与用户反馈，我学会了如何在不同文化语境下，通过KOL合作实现品牌声量的有效转化。',
      tags: ['达人营销', '市场洞察', '协作谈判'] 
  },
  { 
      id: '3', 
      year: '2023.03 - 2023.06', 
      role: '内容运营实习', 
      company: '上海触宝信息', 
      color: '#FFCC00',
      desc: '负责Readict（女频小说APP）的“雇佣写作”项目，我成功筛选作者、匹配大纲并孵化了多本精品女频网文。这段经历锻炼了我对女频内容的感知，对内容质量的敏锐判断力，以及在项目管理中协调作者与平台需求的能力。',
      tags: ['内容孵化', '项目管理', '内容感知'] 
  },
  { 
      id: '4', 
      year: '2022.07 - 2022.09', 
      role: '知识产权实习生', 
      company: '汉坤律师事务所', 
      color: '#55FF55',
      desc: '在律所的实习经历让我接触到了严谨的法律文书工作。负责英文邮件起草及商标检索报告撰写，这段经历极大地提升了我的逻辑思维严谨性以及在高压下处理细节的能力。',
      tags: ['逻辑严谨', '法律英语', '细节把控']
  },
];

// --- DEPTH CONFIG ---
const DEPTHS = {
    FLOOR: -300,
    PROPS: -290,
    MAIN: -50,
};

// --- COMPONENTS ---

const FloorMarquee: React.FC<{ direction: 'left' | 'right', text: string, className?: string, rotate?: number, style?: React.CSSProperties }> = React.memo(({ direction, text, className, rotate = 0, style }) => {
    return (
        <div 
            className="absolute left-[-20%] w-[140%] pointer-events-auto overflow-visible flex will-change-transform"
            style={{ 
                transform: `translateZ(${DEPTHS.PROPS - 10}px) rotate(${rotate}deg)`, 
                zIndex: 0,
                ...style,
            }}
        >
            <motion.div
                className={`flex whitespace-nowrap ${className}`}
                initial={{ x: direction === 'left' ? '0%' : '-50%' }}
                animate={{ x: direction === 'left' ? '-50%' : '0%' }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="mx-4 transition-colors duration-300">
                        {text} <span className="mx-4 opacity-30">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
});

const ProfileTimelineCard: React.FC<{ 
    item: any, 
    onClick: () => void, 
    index: number, 
    style: React.CSSProperties,
    side?: 'left' | 'right'
}> = React.memo(({ item, onClick, index, style, side = 'right' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    const randomDuration = useMemo(() => 4 + Math.random() * 2, []);
    const randomDelay = useMemo(() => Math.random() * 2, []);

    const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // 🟢 UPDATED: Spring physics adjusted for overshoot/recoil
            initial={{ opacity: 0, x: side === 'left' ? -400 : 400, scale: 0.9 }} 
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ margin: "-10%" }} // Removed once: true to allow replay
            transition={{ 
                delay: index * 0.15, 
                type: "spring", 
                stiffness: 50,    
                damping: 9,       
                mass: 1,          
                
                // Specific overrides for the continuous floating/hover animations
                y: {
                    duration: isHovered ? 0.3 : randomDuration,
                    repeat: isHovered ? 0 : Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: isHovered ? 0 : randomDelay
                },
                rotateZ: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror"
                }
            }}
            className="absolute rounded-[2rem] cursor-pointer group perspective-1000 transform-gpu will-change-transform"
            style={{ 
                ...style, 
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                transformStyle: "preserve-3d" 
            }}
            animate={{
                y: isHovered ? -10 : [0, -10, 0], 
                rotateZ: isHovered ? 0 : [0, 0.5, -0.5, 0]
            }}
        >
            <div 
                className={`absolute ${side === 'left' ? '-right-16' : '-left-16'} top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center pointer-events-none`}
                style={{ transform: 'translateZ(10px)' }}
            >
                <div className={`absolute ${side === 'left' ? 'right-full' : 'left-full'} top-1/2 w-8 h-[1px] bg-white/20 group-hover:w-12 transition-all duration-300`} />
                <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-white transition-colors duration-300 z-10" />
                <div 
                    className="absolute inset-0 rounded-full border border-gray-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" 
                    style={{ borderColor: item.color }}
                />
                 <div 
                    className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-500" 
                    style={{ backgroundColor: item.color }}
                />
            </div>

            <motion.div 
                className="absolute inset-0 rounded-[2rem] shadow-sm" 
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ z: 20, scale: 1.02 }} 
            >
                <motion.div
                    className="absolute -inset-[1px] rounded-[2rem] z-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: item.color,
                        maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                        WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    }}
                />
                
                <div className="absolute inset-0 bg-white/60 backdrop-blur-md border border-white/60 rounded-[2rem] overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60 pointer-events-none" />

                    {/* Reverted Content Sizes */}
                    <div className="relative p-6 flex flex-col justify-center h-full z-20">
                        <div className="flex justify-between items-start mb-2">
                             <div className="flex items-center gap-3">
                                 <span className="font-albert-black text-3xl text-black/90 group-hover:text-black transition-colors">
                                    {item.company}
                                 </span>
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                 </svg>
                             </div>

                             <span 
                                className="px-4 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md"
                                style={{ 
                                    backgroundColor: 'rgba(255,255,255,0.4)', 
                                    borderColor: 'rgba(255,255,255,0.6)',
                                    color: '#555' 
                                }}
                             >
                                {item.year}
                             </span>
                        </div>
                        
                        <div className="text-gray-600 font-albert-light text-lg flex items-center gap-2 mb-2">
                             {side === 'left' ? (
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                                  </svg>
                             ) : (
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                                     <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                  </svg>
                             )}
                             {item.role}
                        </div>

                        <p className="text-sm text-gray-500 font-albert-light leading-snug line-clamp-2 whitespace-pre-line">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
});

const ExperienceModalCard: React.FC<{ selectedExp: any, onClose: () => void }> = ({ selectedExp, onClose }) => {
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
            layoutId={`card-${selectedExp.id}`}
            ref={ref}
            onMouseMove={handleMouseMove}
            initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ rotateY: -90, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={`relative w-full ${selectedExp.details ? 'max-w-4xl' : 'max-w-2xl'} transform-gpu overflow-hidden group`}
            style={{ 
                transformStyle: "preserve-3d",
                borderRadius: '2.5rem',
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <div 
                className="absolute inset-4 rounded-[2.5rem] transition-opacity duration-300 pointer-events-none"
                style={{ 
                    boxShadow: `0 0 100px -10px ${selectedExp.color}`,
                    opacity: 0.04,
                    zIndex: -1
                }}
            />
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none rounded-[2.5rem]"
                style={{
                    border: '1.5px solid transparent',
                    background: selectedExp.color,
                    opacity: 0.15,
                    maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    maskComposite: 'exclude', 
                    WebkitMaskComposite: 'xor',
                    padding: '1.5px', 
                    backgroundClip: 'content-box',
                }}
            >
                 <div className="absolute inset-0 bg-transparent" /> 
            </motion.div>
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/50 pointer-events-none z-20 mix-blend-overlay" />
             <div 
                className="absolute inset-0 rounded-[2.5rem] blur-md mix-blend-multiply transition-all duration-500"
                style={{ 
                    backgroundColor: selectedExp.color, 
                    transform: 'translate(4px, 4px) scale(0.99)', 
                    opacity: 0.015, 
                    zIndex: -1 
                }} 
            />
            <div 
                className="absolute inset-0 rounded-[2.5rem] blur-md mix-blend-screen transition-all duration-500"
                style={{ 
                    backgroundColor: '#ffffff', 
                    transform: 'translate(-4px, -4px) scale(0.99)', 
                    opacity: 0.01,
                    zIndex: -2 
                }} 
            />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[60px] saturate-150 rounded-[2.5rem] shadow-2xl" />
            <div className="relative z-20 p-8 md:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar flex flex-col">
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors border border-black/5 backdrop-blur-sm text-black/60 z-30"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg border border-white/20 shrink-0" style={{ backgroundColor: selectedExp.color }}>
                        {selectedExp.company.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-3xl font-albert-black text-black tracking-tight leading-none mb-1">{selectedExp.company}</h2>
                        <span className="text-gray-500 font-mono text-sm">{selectedExp.year}</span>
                    </div>
                </div>
                
                {selectedExp.details ? (
                    <div className="mt-4 space-y-8 text-left">
                        {/* Subtitle / Department */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF7F27]/10 text-[#FF7F27] border border-[#FF7F27]/20 uppercase tracking-wider">
                                {selectedExp.details.department}
                            </span>
                            <span className="text-gray-300 font-mono text-sm">|</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#005C4B]/10 text-[#005C4B] border border-[#005C4B]/20 uppercase tracking-wider">
                                {selectedExp.role}
                            </span>
                        </div>

                        {/* Loops over lines */}
                        <div className="space-y-10">
                            {selectedExp.details.lines.map((line: any, idx: number) => (
                                <div 
                                    key={idx}
                                    className="p-6 md:p-8 rounded-3xl border transition-all duration-300 relative group/line bg-white/40 hover:bg-white/60"
                                    style={{ 
                                        borderColor: line.border,
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.01)'
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: selectedExp.color }} />
                                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight font-albert-bold">
                                            {line.title}
                                        </h4>
                                    </div>

                                    <div className="space-y-8">
                                        {line.items.map((item: any, itemIdx: number) => (
                                            <div key={itemIdx} className="space-y-4">
                                                <div className="flex gap-4 items-start">
                                                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 font-mono shadow-sm ${line.tagColor}`}>
                                                        {itemIdx + 1}
                                                    </span>
                                                    <div className="space-y-2 flex-1">
                                                        <span className="font-bold text-gray-900 text-base md:text-lg block">
                                                            {item.label}
                                                        </span>
                                                        <p className="text-gray-600 font-albert-light text-sm md:text-base leading-relaxed">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Metric Grid inside each item if available */}
                                                {item.stats && (
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pl-12">
                                                        {item.stats.map((stat: any, sIdx: number) => (
                                                            <div 
                                                                key={sIdx} 
                                                                className="bg-white/50 backdrop-blur-sm border border-white/80 p-3 rounded-2xl flex flex-col justify-center text-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]"
                                                            >
                                                                <span className="text-base md:text-lg font-albert-black bg-gradient-to-tr from-gray-950 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                                                                    {stat.val}
                                                                </span>
                                                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mt-0.5">
                                                                    {stat.label}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="mb-6 mt-4">
                            <h3 className="text-xl font-bold text-black mb-2">{selectedExp.role}</h3>
                            <p className="text-base md:text-lg text-gray-800 leading-relaxed font-albert-regular whitespace-pre-line">
                                {selectedExp.desc}
                            </p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {selectedExp.tags && selectedExp.tags.map((tag: string, i: number) => (
                                 <span key={i} className="px-3 py-1 bg-white/60 border border-white/60 rounded-lg text-xs text-gray-600 font-bold uppercase backdrop-blur-md shadow-sm">
                                    {tag}
                                 </span>
                            ))}
                        </div>
                    </>
                )}
                
                <div 
                    className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[80px] pointer-events-none"
                    style={{ backgroundColor: selectedExp.color, opacity: 0.02 }} 
                />
            </div>
        </motion.div>
    );
};

const StablePhoto: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className="absolute w-[320px] h-[440px] md:w-[400px] md:h-[550px]"
            style={{
                top: '-6%',
                left: '15%',
                zIndex: 20,
                transformStyle: "preserve-3d",
                z: DEPTHS.MAIN,
            }}
            initial={{ x: -1000, rotate: -45, opacity: 0 }}
            whileInView={{ 
                x: 0, 
                rotate: 2, 
                opacity: 1,
                y: [0, -10, 0]
            }}
            viewport={{ once: false }}
            transition={{ 
                x: { duration: 1.2, type: "spring", stiffness: 50, damping: 12 },
                y: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="w-full h-full rounded-[2rem] bg-white p-3 shadow-2xl group cursor-pointer"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="w-full h-full relative overflow-hidden rounded-[1.5rem] bg-gray-100 transform-style-3d">
                    <img 
                        src="https://picsum.photos/seed/profile/800/1100" 
                        alt="Profile" 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out will-change-filter"
                        decoding="async"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] rounded-[1.5rem] pointer-events-none" />
                </div>
            </motion.div>
        </motion.div>
    );
};

const NameTilt: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 10 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 10 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d" 
            }}
            className="inline-block"
        >
            <h2 className="text-7xl font-albert-black text-black leading-none mb-4 mix-blend-multiply tracking-tighter transform -skew-x-6 hover:text-black/70 transition-colors duration-300 pointer-events-none">
                陈安妮
            </h2>
        </motion.div>
    );
};


const Profile: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
  });
  const floorY = useTransform(scrollYProgress, [0, 1], ["-10%", "-30%"]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 30, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 30, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const w = window.innerWidth;
      const h = window.innerHeight;
      x.set(clientX / w - 0.5);
      y.set(clientY / h - 0.5);
  };

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["35deg", "25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-1%", "1%"]);

  return (
    <section 
        ref={containerRef}
        className="relative w-full bg-white overflow-hidden" 
        onMouseMove={handleMouseMove}
        style={{ height: '140vh' }}
    >
      <motion.div 
         className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center will-change-transform"
      >
        <div className="absolute inset-0 flex items-center justify-center perspective-2000">
            <motion.div
                className="relative w-full max-w-[1600px] will-change-transform transform-gpu"
                style={{
                    scale: PROFILE_SCALE, // 🟢 APPLIED GLOBAL SCALE
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: floorY,
                    aspectRatio: '16/9',
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="absolute inset-[-50%] bg-white transform-preserve-3d" style={{ transform: `translateZ(${DEPTHS.FLOOR}px)` }} />
                
                {/* Scaled Text (Reverted) */}
                <FloorMarquee 
                    direction="right" 
                    text="About Me" 
                    rotate={-5} 
                    className="text-[160px] font-albert-black text-gray-100 leading-none" 
                    style={{ top: '15%', zIndex: 1 }}
                />

                <div 
                    className="absolute pointer-events-none text-center w-[400px]"
                    style={{
                         top: '5%',
                         left: '15%',
                         transform: `translateZ(${DEPTHS.PROPS}px) rotateX(-5deg)`,
                         zIndex: 5
                    }}
                >
                    {/* Reverted Text */}
                    <h2 className="text-6xl font-albert-black text-gray-200 tracking-tighter">About Me</h2>
                </div>

                <StablePhoto />

                <motion.div 
                    className="absolute text-left pointer-events-auto"
                    style={{ 
                        top: '70%', 
                        left: '22%', 
                        transform: `translateZ(${DEPTHS.MAIN}px) rotateX(-10deg) rotateZ(-5deg)`,
                        width: '450px',
                        zIndex: 25
                    }}
                    initial={{ opacity: 0, y: 50, rotate: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 1, type: "spring" }}
                >
                    <Magnetic strength={40}>
                        <motion.div
                            className="cursor-pointer"
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <NameTilt />
                            <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500 pl-4 border-l-2 border-gray-300 pointer-events-none">
                                <span>EST. 1999</span>
                                <span>·</span>
                                <span>Hangzhou</span>
                                <span>·</span>
                                <span>Versatile Professional</span>
                            </div>
                        </motion.div>
                    </Magnetic>
                </motion.div>

                {/* Timeline Cards */}
                <div 
                    className="absolute w-full h-full pointer-events-auto"
                    style={{
                        zIndex: 30,
                        transformStyle: "preserve-3d",
                        transform: `translateZ(${DEPTHS.MAIN}px) rotateX(-5deg)`,
                    }}
                >
                    {educationData.map((item, idx) => (
                        <ProfileTimelineCard 
                            key={item.id} 
                            item={item} 
                            index={idx}
                            side="left"
                            style={EDU_CARD_POSITIONS[idx] as React.CSSProperties}
                            onClick={() => setSelectedExp(item)}
                        />
                    ))}

                    {experienceData.map((item, idx) => (
                        <ProfileTimelineCard 
                            key={item.id} 
                            item={item} 
                            index={idx}
                            side="right"
                            style={CARD_POSITIONS[idx] as React.CSSProperties}
                            onClick={() => setSelectedExp(item)}
                        />
                    ))}
                </div>

            </motion.div>
        </div>
      </motion.div>

      {/* FLIP MODAL OVERLAY */}
      {createPortal(
        <AnimatePresence>
            {selectedExp && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center perspective-2000 px-4">
                     <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        className="absolute inset-0 bg-white/40 backdrop-blur-md"
                        onClick={() => setSelectedExp(null)}
                     />
                     
                     <ExperienceModalCard 
                        selectedExp={selectedExp} 
                        onClose={() => setSelectedExp(null)} 
                     />
                </div>
            )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Profile;
