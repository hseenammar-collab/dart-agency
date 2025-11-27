export interface CaseStudy {
  id: string;
  title: { en: string; ar: string };
  client: { en: string; ar: string };
  industry: { en: string; ar: string };
  goal: { en: string; ar: string };
  timePeriod: string;
  image: string;
  results: {
    metric: { en: string; ar: string };
    value: string;
  }[];
  highlight: { en: string; ar: string };
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: {
      en: 'Global Dropshipping Success',
      ar: 'نجاح الدروبشيبنج العالمي'
    },
    client: {
      en: 'Global E-commerce Store',
      ar: 'متجر عالمي للتجارة الإلكترونية'
    },
    industry: {
      en: 'E-commerce',
      ar: 'التجارة الإلكترونية'
    },
    goal: {
      en: 'Scale global sales with profitable ROAS across multiple markets',
      ar: 'توسيع المبيعات العالمية مع عائد إعلاني مربح في أسواق متعددة'
    },
    timePeriod: '2024',
    image: '/designs/Final Result.jpg',
    results: [
      { metric: { en: 'Ad Spend', ar: 'إنفاق إعلاني' }, value: '$263,944' },
      { metric: { en: 'Purchases', ar: 'عمليات شراء' }, value: '20,189' },
      { metric: { en: 'ROAS', ar: 'العائد الإعلاني' }, value: '4.24x' },
      { metric: { en: 'CPA', ar: 'تكلفة الاكتساب' }, value: '$13.08' }
    ],
    highlight: {
      en: '20K+ purchases with $263K spend',
      ar: '+20 ألف عملية شراء بإنفاق $263 ألف'
    },
    color: 'from-gold to-yellow-400'
  },
  {
    id: '2',
    title: {
      en: 'Luxury Fashion Excellence',
      ar: 'تميز الأزياء الفاخرة'
    },
    client: {
      en: 'Premium Fashion Store',
      ar: 'متجر أزياء فاخرة'
    },
    industry: {
      en: 'Fashion & Retail',
      ar: 'الأزياء والتجزئة'
    },
    goal: {
      en: 'Drive luxury sales with exceptional ROAS in competitive market',
      ar: 'تحقيق مبيعات فاخرة مع عائد استثنائي في سوق تنافسي'
    },
    timePeriod: '2024',
    image: '/designs/Helmet 002.jpg',
    results: [
      { metric: { en: 'Ad Spend', ar: 'إنفاق إعلاني' }, value: '$58,250' },
      { metric: { en: 'Purchases', ar: 'عمليات شراء' }, value: '1,776' },
      { metric: { en: 'ROAS', ar: 'العائد الإعلاني' }, value: '11.52x' },
      { metric: { en: 'CPA', ar: 'تكلفة الاكتساب' }, value: '$32.80' }
    ],
    highlight: {
      en: '11.52x ROAS - Premium performance',
      ar: '11.52x عائد إعلاني - أداء متميز'
    },
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: '3',
    title: {
      en: 'Beauty Chat Booster',
      ar: 'تعزيز محادثات التجميل'
    },
    client: {
      en: 'Beauty Salons Network',
      ar: 'شبكة صالونات تجميل'
    },
    industry: {
      en: 'Beauty & Wellness',
      ar: 'التجميل والعافية'
    },
    goal: {
      en: 'Increase conversations and bookings for beauty services',
      ar: 'زيادة المحادثات والحجوزات لخدمات التجميل'
    },
    timePeriod: '2024',
    image: '/designs/زيتونة.png',
    results: [
      { metric: { en: 'Ad Spend', ar: 'إنفاق إعلاني' }, value: '$22.35' },
      { metric: { en: 'Conversations', ar: 'محادثات' }, value: '342' },
      { metric: { en: 'ROAS', ar: 'العائد الإعلاني' }, value: '12.5x' },
      { metric: { en: 'CPA', ar: 'تكلفة الاكتساب' }, value: '$0.07' }
    ],
    highlight: {
      en: '342 conversations for just $22!',
      ar: '342 محادثة بـ $22 فقط!'
    },
    color: 'from-rose-500 to-red-500'
  },
  {
    id: '4',
    title: {
      en: 'Engagement Burst Campaign',
      ar: 'حملة انفجار التفاعل'
    },
    client: {
      en: 'Social Media Page',
      ar: 'صفحة تواصل اجتماعي'
    },
    industry: {
      en: 'Social Media',
      ar: 'التواصل الاجتماعي'
    },
    goal: {
      en: 'Maximize engagement and conversations at lowest cost',
      ar: 'تعظيم التفاعل والمحادثات بأقل تكلفة'
    },
    timePeriod: '2024',
    image: '/designs/iraqi national day.png',
    results: [
      { metric: { en: 'Ad Spend', ar: 'إنفاق إعلاني' }, value: '$23.37' },
      { metric: { en: 'Conversations', ar: 'محادثات' }, value: '1,216' },
      { metric: { en: 'ROAS', ar: 'العائد الإعلاني' }, value: '7.0x' },
      { metric: { en: 'CPA', ar: 'تكلفة الاكتساب' }, value: '$0.02' }
    ],
    highlight: {
      en: '1,216 conversations at $0.02 each!',
      ar: '1,216 محادثة بـ $0.02 للواحدة!'
    },
    color: 'from-emerald-500 to-teal-500'
  }
];
