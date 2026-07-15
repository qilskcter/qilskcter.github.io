export const navigationLinks = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/about.html', label: 'About' },
  { href: '/projects.html', label: 'Projects' },
  { href: '/awards.html', label: 'Awards' },
  { href: '/jailbreak/', label: 'Repository' },
  { href: '/skills.html', label: 'Skills' },
  { href: '/device.html', label: 'Device' },
  { href: '/contact.html', label: 'Contact' },
];

export const skills = [
  { name: 'JavaScript', icon: '/assets/js.svg', invert: true },
  { name: 'HTML', icon: '/assets/html.svg' },
  { name: 'CSS', icon: '/assets/css.svg' },
  { name: 'C++', icon: '/assets/cpp.svg' },
  { name: 'Python', icon: '/assets/python.svg', invert: true },
  { name: 'Java', icon: '/assets/java.svg' },
];

export const awards = [
  {
    title: 'Second Prize - Soc Trang Provincial Youth Innovation Contest 2023',
    description: 'Developed an innovative Smart Door Unlocking System integrating IoT hardware and advanced security solutions.',
    tags: ['IoT', 'Arduino', 'Hardware Integration'],
  },
  {
    title: 'Second Prize - Soc Trang Provincial Youth Innovation Contest 2024',
    description: 'Designed and implemented a real-time computer vision system to analyze user behaviors and optimize retail experiences.',
    note: 'User Behavior Analytics driven by AI and Computer Vision',
    tags: ['Computer Vision', 'Machine Learning', 'Python'],
  },
  {
    title: 'Third Prize - Expanded HCM-UTE Hackathon 2025',
    description: 'Co-developed "ByteEdu", a decentralized Learn-to-Earn and education governance platform powered by Blockchain (Web3). The system utilizes Smart Contracts, Learn Tokens, and Soulbound NFTs to create a self-sustaining and transparent educational ecosystem.',
    tags: ['Web3', 'Smart Contract', 'Soulbound NFT', 'DAO', 'Teamwork'],
  }
];

export const aboutProfile = {
  summary:
    'I am Nguyen Dinh Khanh, an Information Technology (IT) student at Ho Chi Minh City University of Technology and Engineering (HCM-UTE). Driven by a passion for algorithmic optimization, low-level hardware customisation, and product thinking, I strive to build intelligent solutions that seamlessly bridge the gap between complex engineering and refined user experiences.',
  details: [
    'Academic Foundation: Currently pursuing a Engineer of Information Technology with a specialized focus on Artificial Intelligence. My core academic research centers on core AI search methods (Uninformed, Informed, and Local Search) and data structure optimization using Python.',
    'Algorithm Visualization & Projects: Experienced in developing interactive software simulations, such as a Vacuum Cleaner Pathfinding Visualizer, designed to demonstrate and optimize pathfinding logic in real-time environments.',
    'System Optimization & Hackintosh: A dedicated tech enthusiast who enjoys low-level system configuration, kernel patches, and custom EFI compilation. Notable projects include deploying stable Hackintosh systems on demanding hardware like the ThinkPad X1 Extreme Gen 3 and Dell Inspiron 7559.',
    'Embedded Systems & Mobile Customization: Passionate about exploring smart technology and embedded hardware, ranging from custom IoT automation systems to flashing custom Android ROMs (like Evolution X) and rooting devices using Magisk.',
    'Strategic Thinking & Music Production: Outside of coding, I challenge my cognitive limits through chess (tactical puzzles and strategic play) and channel my creativity into hi-fi audio engineering and music production, utilizing GarageBand to craft custom R&B and Trap beats.',
    'Acoustic Guitar & Relaxation: To maintain a balanced lifestyle, I enjoy playing acoustic guitar, actively practicing diverse strumming and fingerstyle techniques (such as Disco and Slow Surf) to interpret contemporary music.',
  ],
};
export const projects = [
  {
    title: 'Artificial Intelligence Algorithms',
    description: 'A comprehensive educational codebase exploring fundamental AI search algorithms and logic. Features visual demonstrations of pathfinding, uninformed search, informed search, and local search heuristics.',
    tags: ['Python', 'Pathfinding', 'AI Algorithms', 'Search Heuristics'],
    github: 'https://github.com/qilskcter/TriTueNhanTao',
  },
  {
    title: 'ByteEdu - Web3 Platform',
    description: 'The award-winning decentralized Learn-to-Earn educational ecosystem built for the Hackathon. Utilizes Smart Contracts, custom Learn Tokens, and Soulbound NFTs to create a transparent academic reward cycle.',
    tags: ['Solidity', 'Blockchain', 'Web3', 'Soulbound NFT', 'DAO'],
    github: 'https://github.com/qilskcter/byteforce-hackathon',
  },
  {
    title: 'Factory Safety Monitoring System',
    description: 'An advanced IoT safety monitoring solution engineered for manufacturing environments. Integrates sensor-driven anomaly detection and automatic alerting to prevent hazards.',
    tags: ['IoT', 'ESP32', 'C++', 'Embedded Systems', 'Hardware', 'React Native'],
    github: 'https://github.com/qilskcter/Factory-Safety-System',
  },
  {
    title: 'Global Pollution Analysis',
    description: 'A comprehensive data analysis pipeline focused on tracking and visualizing global environmental pollution trends. Implements data cleaning, exploratory analysis (EDA), and statistical modeling.',
    tags: ['Python', 'Data Science', 'EDA', 'Data Visualization', 'Pandas'],
    github: 'https://github.com/qilskcter/global-pollution-analysis',
  },
  {
    title: 'Delivery Game',
    description: 'A fun and engaging game that simulates real-world delivery scenarios, helping players understand logistics and supply chain management.',
    tags: ['Game Development', 'Python', 'Pygame', "Artificial Intelligence", 'AI Algorithms'],
    github: 'https://github.com/anhquoc11/Delivery-Game',
  },
  {
    title: 'Hotel Management System',
    description: 'A robust desktop application designed to streamline hotel operations. Includes modules for reservation tracking, room status management, customer billing, and analytical reporting.',
    tags: ['Java', 'Database', 'SQL', 'OOP', 'Software Engineering'],
    github: 'https://github.com/NguyenNguyen0210/quan-ly-khach-san',
  },
];

export const devices = [
  {
    title: 'MacBook Pro (14-inch, Nov 2023)',
    subtitle: 'My main device for doing stuff.',
    specs: ['Apple M3', '8GB LPDDR5 Unified Memory', 'Apple M3 10-core GPU', '512GB Apple NVMe SSD', 'macOS Sonoma 14.8.4', 'Silver'],
    image: '/assets/devices/macbook.png',
    icon: 'laptop',
  },
  {
    title: 'Lenovo ThinkPad E490',
    subtitle: 'Secondary laptop.',
    specs: ['Intel® Core™ i5-8265U', '20GB DDR4 2400MHz', 'Intel® UHD Graphics 620', '512GB PCIe NVMe SSD', 'Arch Linux', 'Black'],
    image: '/assets/devices/e490.png',
    icon: 'laptop',
  },
  {
    title: 'Dell Vostro 3460',
    subtitle: "It's already died :(",
    specs: [
      'Intel® Core™ i3-3110M',
      '8GB DDR3L 1600MHz',
      'Intel® HD Graphics 4000',
      '512GB SATA SSD',
      { html: '<a href="https://github.com/qilskcter/Dell-Vostro-3460-Hackintosh" target="_blank" rel="noreferrer">macOS Big Sur 11.7</a> + Windows 10' },
      'Silver',
    ],
    image: '/assets/devices/dell.png',
    icon: 'laptop',
  },
  {
    title: 'iPhone 15 Pro Max',
    subtitle: 'I use this device everyday.',
    specs: ['Apple A17 Pro', '8GB LPDDR5X RAM', '256GB Apple NVMe', 'iOS 18.4RC', 'Natural Titanium'],
    image: '/assets/devices/15promax.png',
    icon: 'phone',
  },
  {
    title: 'iPhone 11 Pro',
    subtitle: 'This device for testing iOS Betas.',
    specs: ['Apple A13 Bionic', '4GB LPDDR4 RAM', '64GB Apple NVMe', 'iOS 27.0', 'Midnight Green'],
    image: '/assets/devices/11pro.png',
    icon: 'phone',
  },
  {
    title: 'iPhone 6',
    subtitle: 'Old phone.',
    specs: ['Apple A8', '1GB LPDDR3 RAM', '16GB Apple NVMe', { html: 'iOS 12.5.4 (Jailbroken with <a href="https://checkra.in" target="_blank" rel="noreferrer">checkra1n</a>)' }, 'Space Gray'],
    image: '/assets/devices/6.png',
    icon: 'phone',
  },
  {
    title: 'iPad Pro (3rd-Generation)',
    subtitle: 'I love this iPad.',
    specs: ['Apple M1', '8GB LPDDR4X Unified Memory', 'Apple M1 8-core GPU', '128GB Apple NVMe', 'iPadOS 26.0', 'Space Gray'],
    image: '/assets/devices/ipad.png',
    icon: 'tablet',
  },
  {
    title: 'OnePlus 7',
    subtitle: 'An Android Phone.',
    specs: ['Qualcomm SM8150 Snapdragon 855', '8GB LPDDR4X RAM', '256GB UFS3.0', { html: '<a href="https://evolution-x.org/devices/guacamoleb" target="_blank" rel="noreferrer">Evolution X 11.6.3</a> (Android 16)' }, 'Mirror Gray'],
    image: '/assets/devices/oneplus.png',
    icon: 'phone',
  },
];

export const repositoryActions = [
  { 
    label: 'Cydia', 
    href: 'cydia://url/https://cydia.saurik.com/api/share#?source=https://qilskcter.github.io/jailbreak',
    image: '/assets/icons/cydia.png',
  },
  { 
    label: 'Sileo', 
    href: 'sileo://source/https://qilskcter.github.io/jailbreak',
    image: '/assets/icons/sileo.png',
  },
  { 
    label: 'Zebra', 
    href: 'zbra://sources/add/https://qilskcter.github.io/jailbreak',
    image: '/assets/icons/zebra.png',
  },
  { 
    label: 'Installer', 
    href: 'installer://add/https://qilskcter.github.io/jailbreak',
    image: '/assets/icons/installer.png',
  },
  { 
    label: "Nepeta's Tweaks", 
    href: 'https://qilskcter.github.io/jailbreak/nepsgit.7z',
    image: '/assets/icons/nepeta.png',
  },
];

export const contactLinks = [
  {
    label: 'Email Me!',
    href: '#',
    icon: 'mail',
    isEmail: true,
  },
  {
    label: 'qilskcter',
    href: 'https://github.com/qilskcter',
    icon: 'github',
  },
  {
    label: 'Nguyen Dinh Khanh',
    href: 'https://facebook.com/ng.dinhkhanh.06',
    icon: 'facebook',
  },
  {
    label: 'qilskcter',
    href: 'https://discord.com/users/599447694364114944',
    icon: 'discord',
  },
];