export type DesignCategory = 'social' | 'campaign' | 'branding' | 'stories' | 'travel';

export interface Design {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  client: {
    en: string;
    ar: string;
  };
  clientId: 'zaitona' | 'madrid' | 'sabeel';
  category: DesignCategory;
  type: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  image: string;
  featured?: boolean;
}

export const clients = {
  zaitona: {
    id: 'zaitona',
    name: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    description: {
      en: 'Delivery App',
      ar: 'تطبيق توصيل'
    },
    logo: '/logos/zaitona.png',
    color: '#4CAF50'
  },
  madrid: {
    id: 'madrid',
    name: {
      en: 'Madrid Towers',
      ar: 'أبراج مدريد'
    },
    description: {
      en: 'Visa & Travel Services',
      ar: 'خدمات فيزا وسفر'
    },
    logo: '/logos/madrid.png',
    color: '#1E88E5'
  },
  sabeel: {
    id: 'sabeel',
    name: {
      en: 'Sabeel',
      ar: 'سبيل'
    },
    description: {
      en: 'Brand Identity',
      ar: 'هوية بصرية'
    },
    logo: '/logos/sabeel.png',
    color: '#9C27B0'
  }
};

export const designs: Design[] = [
  // زيتونة - Zaitona (15 designs)
  {
    id: '1',
    title: {
      en: 'Delivery App Advertisement',
      ar: 'إعلان التطبيق - الدليفري'
    },
    client: {
      en: 'Zaitona (Delivery App)',
      ar: 'زيتونة (تطبيق توصيل)'
    },
    clientId: 'zaitona',
    category: 'social',
    type: {
      en: 'Social Media Ad',
      ar: 'إعلان سوشيال ميديا'
    },
    description: {
      en: 'Multi-service delivery app advertisement showcasing app features',
      ar: 'إعلان تطبيق توصيل متعدد الخدمات يعرض مميزات التطبيق'
    },
    image: '/designs/2.jpg',
    featured: true
  },
  {
    id: '2',
    title: {
      en: 'Your Trust Matters',
      ar: 'ثقتكم هي الأهم'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'social',
    type: {
      en: 'Social Media Post',
      ar: 'منشور سوشيال ميديا'
    },
    description: {
      en: 'Trust and fast delivery promotional design',
      ar: 'تصميم ترويجي للثقة وسرعة التوصيل'
    },
    image: '/designs/3.jpg'
  },
  {
    id: '3',
    title: {
      en: 'From One Place - Map',
      ar: 'من مكان واحد - خريطة'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'social',
    type: {
      en: 'App Promotion',
      ar: 'ترويج التطبيق'
    },
    description: {
      en: '3D app design with delivery map visualization',
      ar: 'تصميم 3D للتطبيق مع خريطة التوصيل'
    },
    image: '/designs/Final Result.jpg',
    featured: true
  },
  {
    id: '4',
    title: {
      en: 'Helmet Branding',
      ar: 'براندنج الخوذة'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'branding',
    type: {
      en: 'Product Branding',
      ar: 'براندنج المنتج'
    },
    description: {
      en: 'Delivery helmet design with brand colors and identity',
      ar: 'تصميم خوذة الدليفري بألوان وهوية البراند'
    },
    image: '/designs/Helmet 002.jpg',
    featured: true
  },
  {
    id: '5',
    title: {
      en: 'iPhone 17 Giveaway Contest',
      ar: 'مسابقة iPhone 17 (هدية)'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'campaign',
    type: {
      en: 'Campaign Creative',
      ar: 'تصميم حملة'
    },
    description: {
      en: 'Mention and win contest design for iPhone giveaway',
      ar: 'تصميم مسابقة منشن واربح آيفون'
    },
    image: '/designs/IPHONE 17.jpg',
    featured: true
  },
  {
    id: '6',
    title: {
      en: 'Iraqi National Day',
      ar: 'اليوم الوطني العراقي'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'social',
    type: {
      en: 'Occasion Post',
      ar: 'منشور مناسبة'
    },
    description: {
      en: 'Celebration design for October 3rd Iraqi National Day',
      ar: 'تصميم احتفالي باليوم الوطني العراقي 3 أكتوبر'
    },
    image: '/designs/iraqi national day.png'
  },
  {
    id: '7',
    title: {
      en: 'Zabdani 35% Discount',
      ar: 'خصم الزبداني 35%'
    },
    client: {
      en: 'Zaitona × Zabdani Restaurant',
      ar: 'زيتونة × مطعم الزبداني'
    },
    clientId: 'zaitona',
    category: 'campaign',
    type: {
      en: 'Partnership Promo',
      ar: 'عرض شراكة'
    },
    description: {
      en: 'Discount offer in collaboration with Zabdani restaurant',
      ar: 'عرض خصم بالتعاون مع مطعم الزبداني'
    },
    image: '/designs/الزبداني.jpg'
  },
  {
    id: '8',
    title: {
      en: 'Drone Delivery Coming Soon',
      ar: 'Drone Delivery قريباً'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'campaign',
    type: {
      en: 'Coming Soon Teaser',
      ar: 'إعلان تشويقي'
    },
    description: {
      en: 'Teaser ad for upcoming drone delivery service',
      ar: 'إعلان تشويقي لخدمة التوصيل بالدرون القادمة'
    },
    image: '/designs/إعلان.jpg',
    featured: true
  },
  {
    id: '9',
    title: {
      en: 'Interactive Story - Favorite Restaurant',
      ar: 'ستوري تفاعلية - شنو أكثر مطعم'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'stories',
    type: {
      en: 'Interactive Story',
      ar: 'ستوري تفاعلية'
    },
    description: {
      en: 'Engagement story asking about favorite restaurants',
      ar: 'ستوري تفاعلية تسأل عن المطعم المفضل'
    },
    image: '/designs/ستوري اليوم الثالث.png'
  },
  {
    id: '10',
    title: {
      en: '50% Discount - Airplane',
      ar: 'خصم 50% - طيارة'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'campaign',
    type: {
      en: 'Discount Campaign',
      ar: 'حملة خصم'
    },
    description: {
      en: 'Creative 50% discount design with airplane theme',
      ar: 'تصميم خصم 50% إبداعي بثيم الطيارة'
    },
    image: '/designs/اليوم-12.jpg'
  },
  {
    id: '11',
    title: {
      en: 'iPhone 17 Contest - Rock',
      ar: 'مسابقة iPhone 17 (على الصخر)'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'campaign',
    type: {
      en: 'Contest Design',
      ar: 'تصميم مسابقة'
    },
    description: {
      en: 'iPhone 17 giveaway with rock/stone creative concept',
      ar: 'مسابقة آيفون 17 بمفهوم إبداعي على الصخر'
    },
    image: '/designs/ايفون 17.jpg'
  },
  {
    id: '12',
    title: {
      en: 'Popeye Delivery Creative',
      ar: 'Popeye Delivery (إبداعي)'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'social',
    type: {
      en: 'Creative Post',
      ar: 'منشور إبداعي'
    },
    description: {
      en: 'Creative Popeye-themed delivery advertisement',
      ar: 'إعلان توصيل إبداعي بثيم باباي'
    },
    image: '/designs/زيتونة.png',
    featured: true
  },
  {
    id: '13',
    title: {
      en: 'Who Won the iPhone?',
      ar: 'من الفائز بالآيفون؟'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'campaign',
    type: {
      en: 'Contest Update',
      ar: 'تحديث المسابقة'
    },
    description: {
      en: 'Teaser announcing upcoming winner reveal',
      ar: 'إعلان تشويقي للكشف عن الفائز'
    },
    image: '/designs/زيتونة-يوم-13.jpg'
  },
  {
    id: '14',
    title: {
      en: '2 Days Left',
      ar: 'باقي يومين'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'campaign',
    type: {
      en: 'Countdown',
      ar: 'عد تنازلي'
    },
    description: {
      en: 'Countdown design for contest deadline',
      ar: 'تصميم عد تنازلي لموعد انتهاء المسابقة'
    },
    image: '/designs/زيتونة-يوم-14.jpg'
  },
  {
    id: '15',
    title: {
      en: 'Congratulations Winners',
      ar: 'مبروك للفائزين'
    },
    client: {
      en: 'Zaitona',
      ar: 'زيتونة'
    },
    clientId: 'zaitona',
    category: 'campaign',
    type: {
      en: 'Winner Announcement',
      ar: 'إعلان الفائزين'
    },
    description: {
      en: 'Contest winners celebration announcement',
      ar: 'إعلان احتفالي بالفائزين في المسابقة'
    },
    image: '/designs/زيتونة-يوم-15.jpg'
  },

  // أبراج مدريد - Madrid Towers (3 designs)
  {
    id: '16',
    title: {
      en: 'European Dream Made Easy',
      ar: 'حلم أوروبا صار سهل'
    },
    client: {
      en: 'Madrid Towers',
      ar: 'أبراج مدريد'
    },
    clientId: 'madrid',
    category: 'travel',
    type: {
      en: 'Visa Services Ad',
      ar: 'إعلان خدمات فيزا'
    },
    description: {
      en: 'European visa services promotional design',
      ar: 'تصميم ترويجي لخدمات الفيزا الأوروبية'
    },
    image: '/designs/اليوم 4.png',
    featured: true
  },
  {
    id: '17',
    title: {
      en: 'UK Visa Services',
      ar: 'فيزا بريطانيا'
    },
    client: {
      en: 'Madrid Towers',
      ar: 'أبراج مدريد'
    },
    clientId: 'madrid',
    category: 'travel',
    type: {
      en: 'Visa Services',
      ar: 'خدمات فيزا'
    },
    description: {
      en: 'UK visa application services advertisement',
      ar: 'إعلان خدمات تقديم فيزا بريطانيا'
    },
    image: '/designs/اليوم 9.jpg'
  },
  {
    id: '18',
    title: {
      en: 'Dubai Visa Same Day',
      ar: 'فيزا دبي بنفس اليوم'
    },
    client: {
      en: 'Madrid Towers',
      ar: 'أبراج مدريد'
    },
    clientId: 'madrid',
    category: 'travel',
    type: {
      en: 'Express Visa',
      ar: 'فيزا سريعة'
    },
    description: {
      en: 'Same-day Dubai visa processing service',
      ar: 'خدمة إصدار فيزا دبي بنفس اليوم'
    },
    image: '/designs/اليوم-11.jpg'
  },

  // سبيل - Sabeel (1 design)
  {
    id: '19',
    title: {
      en: 'Complete Brand Identity',
      ar: 'الهوية البصرية الكاملة'
    },
    client: {
      en: 'Sabeel',
      ar: 'سبيل'
    },
    clientId: 'sabeel',
    category: 'branding',
    type: {
      en: 'Brand Identity',
      ar: 'هوية بصرية'
    },
    description: {
      en: 'Complete brand identity including logo, colors, and applications',
      ar: 'هوية بصرية كاملة تشمل اللوقو والألوان والتطبيقات'
    },
    image: '/designs/4.jpg',
    featured: true
  }
];

export const categoryInfo = {
  social: {
    en: { name: 'Social Media', description: 'Posts & Ads' },
    ar: { name: 'سوشيال ميديا', description: 'منشورات وإعلانات' }
  },
  campaign: {
    en: { name: 'Campaigns', description: 'Marketing Campaigns' },
    ar: { name: 'حملات', description: 'حملات تسويقية' }
  },
  branding: {
    en: { name: 'Branding', description: 'Identity & Logo' },
    ar: { name: 'هوية بصرية', description: 'براندنج ولوقو' }
  },
  stories: {
    en: { name: 'Stories', description: 'Interactive Stories' },
    ar: { name: 'ستوريز', description: 'ستوريز تفاعلية' }
  },
  travel: {
    en: { name: 'Travel', description: 'Visa & Travel' },
    ar: { name: 'سفر وفيزا', description: 'خدمات السفر والفيزا' }
  }
};

export const getFilteredDesigns = (category: DesignCategory | 'all') => {
  if (category === 'all') return designs;
  return designs.filter(d => d.category === category);
};

export const getDesignsByClient = (clientId: 'zaitona' | 'madrid' | 'sabeel') => {
  return designs.filter(d => d.clientId === clientId);
};

export const getFeaturedDesigns = () => {
  return designs.filter(d => d.featured);
};

export const getClientStats = () => {
  return {
    zaitona: designs.filter(d => d.clientId === 'zaitona').length,
    madrid: designs.filter(d => d.clientId === 'madrid').length,
    sabeel: designs.filter(d => d.clientId === 'sabeel').length,
    total: designs.length
  };
};
