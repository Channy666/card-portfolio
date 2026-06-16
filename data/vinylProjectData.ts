








// 🔒 LOCKED DATA: USER CONFIGURATION
// Please do not overwrite this file with placeholder data in future updates.

// 自定义长图链接 (Updated to generic placeholders)
export const MY_CUSTOM_LONG_IMAGE = 'https://picsum.photos/seed/long/1920/1080';

// 资源链接 (Updated to generic placeholders)
export const ASSETS = {
    P1_IMG_1: 'https://picsum.photos/seed/p1_1/1920/1080',
    P1_IMG_2: 'https://picsum.photos/seed/p1_2/1920/1080',
    P1_IMG_3: 'https://picsum.photos/seed/p1_3/1920/1080',
    P1_VID_1: "https://www.w3schools.com/html/mov_bbb.mp4",
    P1_VID_2: "https://www.w3schools.com/html/movie.mp4",
    PROJECT_2_LONG: 'https://picsum.photos/seed/p2_long/1920/1080',
    PROJECT_2_VIDEO: "https://www.w3schools.com/html/mov_bbb.mp4" 
};

export interface WaveItemConfig {
    url: string;
    x: number;
    y: number;
    width: number;
    rotate?: number;
    zIndex?: number;
    delay?: number;
}

// 自由布局配置 (Fox and Rabbit)
// 🔒 DATA LOCKED: User specified values
export const CUSTOM_FOX_RABBIT_CONFIG: WaveItemConfig[] = [
    {
        url: MY_CUSTOM_LONG_IMAGE,
        x: 375,
        y: 8710,
        width: 750,
        rotate: 0,
        zIndex: 30
    }
];

// 自由布局配置 (Wave Images)
// 🔒 DATA LOCKED: User specified values
export const WAVE_IMAGES_CONFIG: WaveItemConfig[] = [
    { url: 'https://picsum.photos/seed/wave1/750/300', x: -390, y: 9000, width: 750, rotate: 0, zIndex: 3, delay: 0.1 },
    { url: 'https://picsum.photos/seed/wave2/750/300', x: -390, y: 8840, width: 750, rotate: 0, zIndex: 2, delay: 0.2 },
    { url: 'https://picsum.photos/seed/wave3/750/300', x: -390, y: 8740, width: 750, rotate: 0, zIndex: 1, delay: 0.3 }
];

// Group 1 Cards Data
export const GROUP_1_CARDS_DATA = [
    { id: 1, xOffset: -400, yOffset: 8320, width: 188.52, height: 109.18, rotate: 0, borderRadius: '32px', img: 'https://picsum.photos/seed/card1/400/300' },
    { id: 2, xOffset: -201.5, yOffset: 8320, width: 188.52, height: 68.61, rotate: 0, borderRadius: '32px', img: 'https://picsum.photos/seed/card2/400/300' },
    { id: 3, xOffset: -3, yOffset: 8320, width: 188.52, height: 90.28, rotate: 0, borderRadius: '32px', img: 'https://picsum.photos/seed/card3/400/300' },
    { id: 4, xOffset: 195.52, yOffset: 8320, width: 188.52, height: 109.18, rotate: 0, borderRadius: '32px', img: 'https://picsum.photos/seed/card4/400/300' }
];

// New Scattered Images
export const CUSTOM_NEW_IMAGES = [
    { 
        id: 'd1', 
        img: 'https://picsum.photos/seed/d1/400/600', 
        x: 350,      
        y: 9900,    
        w: 220.8,      
        h: 307.2,      
        r: -7.76      
    },
    { 
        id: 'd2', 
        img: 'https://picsum.photos/seed/d2/400/600', 
        x: 515, 
        y: 10120, 
        w: 220.8, 
        h: 307.2, 
        r: 10.12 
    },
    { 
        id: 'd3', 
        img: 'https://picsum.photos/seed/d3/400/600', 
        x: 635, 
        y:9750, 
        w: 220.8, 
        h: 307.2,  
        r: 2.15 
    },
    { 
        id: 'd4', 
        img: 'https://picsum.photos/seed/d4/400/600', 
        x: 920, 
        y: 9980, 
        w: 220.8, 
        h: 307.2,  
        r: -5.54 
    }
];

// 🇨🇳 CHINA OPTIMIZATION: Replaced standard CDNs with jsDelivr mirror for speed
export const TOOL_ICONS: Record<string, string> = {
    'AI': 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
    'AE': 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
    'C4D': 'https://jsd.cdn.zzko.cn/gh/jayneysil520-dev/jayneysil@main/1197px-C4D_Logo.png',
    'React': 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/react/react-original.svg',
    'ThreeJS': 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/threejs/threejs-original.svg', 
    'Pinterest': 'https://jsd.cdn.zzko.cn/gh/devicons/devicon/icons/pinterest/pinterest-original.svg'
};

// Project Data
export const PROJECTS_DATA = [
  { 
      id: 1, 
      title: 'TruMate AI剧本封面制作', 
      label: 'IP IMAGE DESIGN', 
      year: '2025.04', 
      client: 'CLIENT', 
      color: '#FF7F27', 
      img: 'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(1).jpg', 
      previewBgImg: 'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(1).jpg', 
      desc: '为支撑“AI人设转化为AI剧本”的核心业务需求，我深度挖掘高故事感人设，运用 Midjourney 生成唯美且契合剧情的专属封面，以高质量视觉呈现驱动内容转化。',
      tools: ['Midjourney'],
      previewTextColor: {
        year: '#111827',
        yearBg: 'rgba(0,0,0,0.06)',
        yearBorder: 'rgba(0,0,0,0.12)',
        label: '#4B5563',
        title: '#000000',
        description: '#1F2937',
        tools: '#111827',
        arrow: '#000000',
        arrowBorder: 'rgba(0,0,0,0.2)',
        cardBorder: 'rgba(0,0,0,0.15)'
      },
      layout: 'gallery', 
      detailImages: [
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(1).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(4).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(2).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(6).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(13).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(14).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(12).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(7).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(8).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(9).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(11).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(15).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(5).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(3).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Midjourney-AI%E4%BA%BA%E8%AE%BE%E5%B0%81%E9%9D%A2(10).jpg'
      ],
  },
  { 
      id: 2, 
      title: 'TruMate AI人设动态封面制作', 
      label: 'AIGC VIDEO DESIGN', 
      year: '2025.04', 
      color: '#FFA500', 
      img: 'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(7).jpg', 
      previewBgImg: 'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(7).jpg', 
      desc: '针对AI人设封面进行视觉升维，利用AIGC视频生成技术，将高质量静态图转化为动态短视频，以更具冲击力的视觉效果驱动内容曝光与转化。',
      tools: ['Vidu', 'Kling', '即梦', 'Hailuo', 'Pixverse'],
      previewTextColor: {
        year: '#111827',
        yearBg: 'rgba(0,0,0,0.06)',
        yearBorder: 'rgba(0,0,0,0.12)',
        label: '#4B5563',
        title: '#000000',
        description: '#1F2937',
        tools: '#111827',
        arrow: '#000000',
        arrowBorder: 'rgba(0,0,0,0.2)',
        cardBorder: 'rgba(0,0,0,0.15)'
      },
      layout: 'gallery',
      detailVideos: [
          'https://github.com/Channy666/portfolio/releases/download/v1.0/AI.video-jimeng-character.1.mp4',
          'https://github.com/Channy666/portfolio/releases/download/v1.0/AI.video-jimeng-character.3.mp4',
          'https://github.com/Channy666/portfolio/releases/download/v1.0/AI.video-jimeng-character.4.mp4',
          'https://github.com/Channy666/portfolio/releases/download/v1.0/AI.video-jimeng-character.5.mp4',
          'https://github.com/Channy666/portfolio/releases/download/v1.0/AI.video-jimeng-character.6.mp4',
          'https://github.com/Channy666/portfolio/releases/download/v1.0/AI.video-jimeng-character.7.mp4',
          'https://github.com/Channy666/portfolio/releases/download/v1.0/AI.video-jimeng-character.8.mp4'
      ],
      detailImages: [], 
  },
  { 
      id: 3, 
      title: 'TruMate 人设付费套装策划', 
      label: 'AIGC DESIGN', 
      year: '2025.04-09', 
      color: '#4DA6FF', 
      shadowColor: '#4DA6FF',
      img: 'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(1).jpg', 
      previewBgImg: 'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(1).jpg', 
      desc: '基于 Stable Diffusion 构建高质量套装 Prompt 库，用于付费套装生成和亲密度解锁套装生成，驱动了用户消费，有效拓宽了产品的变现深度。',
      tools: ['Stable Diffusion'],
      previewTextColor: {
        year: '#111827',
        yearBg: 'rgba(0,0,0,0.06)',
        yearBorder: 'rgba(0,0,0,0.12)',
        label: '#4B5563',
        title: '#000000',
        description: '#1F2937',
        tools: '#111827',
        arrow: '#000000',
        arrowBorder: 'rgba(0,0,0,0.2)',
        cardBorder: 'rgba(0,0,0,0.15)'
      },
      layout: 'gallery',
      detailImages: [
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(1).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(2).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(3).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(4).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(5).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(6).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(7).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(8).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(9).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(10).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(12).jpg',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Stable%20Diffusion-AI%E4%BA%BA%E8%AE%BE%E5%8F%98%E8%A3%85%E5%9B%BE(11).jpg'
      ],
      detailText: { main: 'Project', sub: 'AIGC DESIGN', signature: 'Stable Diffusion' }
  },
  { 
      id: 4, 
      title: 'AI视频角色一致性测试', 
      label: 'AIGC VIDEO', 
      year: '2025', 
      color: '#EA2F2F', 
      img: 'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Gemini-%E6%95%85%E4%BA%8B%E6%9D%BF%E5%B7%A5%E4%BD%9C%E6%B5%81-%E5%9C%BA%E6%99%AF%E5%9B%BE.png', 
      previewBgImg: 'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Gemini-%E6%95%85%E4%BA%8B%E6%9D%BF%E5%B7%A5%E4%BD%9C%E6%B5%81-%E5%9C%BA%E6%99%AF%E5%9B%BE.png', 
      desc: '引入“角色板+故事板”双参考图机制，优化AI视频生成流程。通过前置参考图精准控制画面走向，成功解决视频抽卡随机性问题，并完成个人视频制作实战。',
      tools: ['Seedance 2.0', 'Gemini'],
      previewTextColor: {
        year: '#111827',
        yearBg: 'rgba(0,0,0,0.06)',
        yearBorder: 'rgba(0,0,0,0.12)',
        label: '#4B5563',
        title: '#000000',
        description: '#1F2937',
        tools: '#111827',
        arrow: '#000000',
        arrowBorder: 'rgba(0,0,0,0.2)',
        cardBorder: 'rgba(0,0,0,0.15)'
      },
      layout: 'gallery',
      detailImages: [
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Gemini-%E6%95%85%E4%BA%8B%E6%9D%BF%E5%B7%A5%E4%BD%9C%E6%B5%81-%E5%9C%BA%E6%99%AF%E5%9B%BE.png',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Gemini-%E6%95%85%E4%BA%8B%E6%9D%BF%E5%B7%A5%E4%BD%9C%E6%B5%81-%E8%A7%92%E8%89%B2%E6%9D%BF.png',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/AI%E5%9B%BE%E7%89%87-Gemimi-%E6%95%85%E4%BA%8B%E6%9D%BF%E5%B7%A5%E4%BD%9C%E6%B5%81-%E6%95%85%E4%BA%8B%E6%9D%BF.png'
      ],
      detailVideos: [
          'https://github.com/Channy666/portfolio/releases/download/v1.0/AI.video-seedance.mp4'
      ]
  },
  { 
      id: 5, 
      title: 'AI驱动的英语学习素材自动化生产', 
      label: 'AIGC PRODUCTIVITY', 
      year: '2025', 
      color: '#10B981', 
      img: 'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/%E8%8B%B1%E8%AF%AD%E4%BA%A7%E5%93%81%EF%BC%888%EF%BC%89.jpg', 
      desc: '我探索并落地了一条高效的英语学习内容生产线。通过整合通义听悟的语音识别能力与 Qwen 的自然语言生成能力，我成功将原本繁琐的人工听写翻译过程转化为标准化的“一键生成”。该系统不仅能快速产出高质量的英语学习笔记，还通过 Gemini 生成了高吸引力的营销素材，证明了AI在个人知识付费领域的巨大潜力。',
      tools: ['通义听悟', 'Qwen', 'Gemini'],
      previewTextColor: {
        year: '#111827',
        yearBg: 'rgba(0,0,0,0.06)',
        yearBorder: 'rgba(0,0,0,0.12)',
        label: '#4B5563',
        title: '#000000',
        description: '#1F2937',
        tools: '#000000',
        arrow: '#000000',
        arrowBorder: 'rgba(0,0,0,0.2)',
        cardBorder: 'rgba(0,0,0,0.15)'
      },
      layout: 'gallery',
      detailImages: [
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/%E8%8B%B1%E8%AF%AD%E4%BA%A7%E5%93%81%EF%BC%888%EF%BC%89.jpg',
          'http://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/%E8%8B%B1%E8%AF%AD%E4%BA%A7%E5%93%81(1).png',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/%E8%8B%B1%E8%AF%AD%E4%BA%A7%E5%93%81%20(2).png',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/%E8%8B%B1%E8%AF%AD%E4%BA%A7%E5%93%81%20(3).png',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/%E8%8B%B1%E8%AF%AD%E4%BA%A7%E5%93%81%20(4).png',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/%E8%8B%B1%E8%AF%AD%E4%BA%A7%E5%93%81%20(5).png',
          'https://raw.githubusercontent.com/Channy666/portfolio/refs/heads/main/%E8%8B%B1%E8%AF%AD%E4%BA%A7%E5%93%81%20(6).png'
      ]
  }
];
