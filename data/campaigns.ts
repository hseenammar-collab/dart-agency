export type CampaignCategory = 'ecommerce' | 'leads' | 'engagement';
export type Platform = 'meta' | 'tiktok' | 'google';

export interface Campaign {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  client: {
    en: string;
    ar: string;
  };
  category: CampaignCategory;
  platform: Platform;
  spend: number;
  results: number;
  resultType: {
    en: string;
    ar: string;
  };
  cpa: number;
  roas: number;
  duration: string;
  goal: {
    en: string;
    ar: string;
  };
  featured?: boolean;
}

export const campaigns: Campaign[] = [
  {
    id: '1',
    name: {
      en: 'Beauty Chat Booster',
      ar: 'حملة صالونات التجميل'
    },
    client: {
      en: 'Beauty Salons',
      ar: 'صالونات التجميل'
    },
    category: 'leads',
    platform: 'meta',
    spend: 22.35,
    results: 342,
    resultType: {
      en: 'Conversations',
      ar: 'محادثة'
    },
    cpa: 0.07,
    roas: 12.5,
    duration: '2024',
    goal: {
      en: 'Generate qualified leads through Messenger conversations',
      ar: 'جذب عملاء محتملين من خلال محادثات ماسنجر'
    },
    featured: true
  },
  {
    id: '2',
    name: {
      en: 'E-Commerce High ROAS Scaling',
      ar: 'حملة متجر الأزياء'
    },
    client: {
      en: 'Fashion Store',
      ar: 'متجر أزياء'
    },
    category: 'ecommerce',
    platform: 'meta',
    spend: 102453.37,
    results: 2463,
    resultType: {
      en: 'Purchases',
      ar: 'عملية شراء'
    },
    cpa: 41.60,
    roas: 4.27,
    duration: '2024',
    goal: {
      en: 'Scale e-commerce sales with high ROAS optimization',
      ar: 'توسيع مبيعات التجارة الإلكترونية مع تحسين عائد الإنفاق'
    },
    featured: true
  },
  {
    id: '3',
    name: {
      en: 'Fun Viral Content DM',
      ar: 'حملة المحتوى الفيروسي'
    },
    client: {
      en: 'Memes Content',
      ar: 'محتوى ميمز'
    },
    category: 'engagement',
    platform: 'meta',
    spend: 139.99,
    results: 815,
    resultType: {
      en: 'Conversations',
      ar: 'محادثة'
    },
    cpa: 0.17,
    roas: 4.5,
    duration: '2024',
    goal: {
      en: 'Drive engagement through viral content and DMs',
      ar: 'زيادة التفاعل من خلال المحتوى الفيروسي والرسائل'
    }
  },
  {
    id: '4',
    name: {
      en: 'Music App Leads',
      ar: 'حملة تطبيق الموسيقى'
    },
    client: {
      en: 'Spoti',
      ar: 'سبوتي'
    },
    category: 'leads',
    platform: 'meta',
    spend: 55.05,
    results: 711,
    resultType: {
      en: 'Conversations',
      ar: 'محادثة'
    },
    cpa: 0.08,
    roas: 9.0,
    duration: '2024',
    goal: {
      en: 'Generate app subscription leads at low cost',
      ar: 'جذب عملاء لاشتراكات التطبيق بتكلفة منخفضة'
    },
    featured: true
  },
  {
    id: '5',
    name: {
      en: 'Engagement Burst',
      ar: 'حملة التفاعل المكثف'
    },
    client: {
      en: 'Engagement Page',
      ar: 'صفحة تفاعل'
    },
    category: 'engagement',
    platform: 'meta',
    spend: 23.37,
    results: 1216,
    resultType: {
      en: 'Conversations',
      ar: 'محادثة'
    },
    cpa: 0.02,
    roas: 7.0,
    duration: '2024',
    goal: {
      en: 'Maximize engagement at lowest possible CPA',
      ar: 'تحقيق أقصى تفاعل بأقل تكلفة ممكنة'
    },
    featured: true
  },
  {
    id: '6',
    name: {
      en: 'Viral IG Reels',
      ar: 'حملة الريلز الفيروسية'
    },
    client: {
      en: 'Horror & Entertainment',
      ar: 'محتوى رعب وترفيه'
    },
    category: 'engagement',
    platform: 'meta',
    spend: 37.58,
    results: 388,
    resultType: {
      en: 'Conversations',
      ar: 'محادثة'
    },
    cpa: 0.10,
    roas: 3.8,
    duration: '2024',
    goal: {
      en: 'Create viral moments through IG Reels content',
      ar: 'إنشاء لحظات فيروسية من خلال محتوى الريلز'
    }
  },
  {
    id: '7',
    name: {
      en: 'Music Streaming DMs',
      ar: 'حملة بث الموسيقى'
    },
    client: {
      en: 'Spoti',
      ar: 'سبوتي'
    },
    category: 'leads',
    platform: 'meta',
    spend: 79.57,
    results: 600,
    resultType: {
      en: 'Conversations',
      ar: 'محادثة'
    },
    cpa: 0.13,
    roas: 5.4,
    duration: '2024',
    goal: {
      en: 'Drive subscription signups through direct messaging',
      ar: 'زيادة الاشتراكات من خلال الرسائل المباشرة'
    }
  },
  {
    id: '8',
    name: {
      en: 'Luxury Fashion Store',
      ar: 'متجر الأزياء الفاخرة'
    },
    client: {
      en: 'Luxury Sales',
      ar: 'مبيعات فاخرة'
    },
    category: 'ecommerce',
    platform: 'meta',
    spend: 58250.09,
    results: 1776,
    resultType: {
      en: 'Purchases',
      ar: 'عملية شراء'
    },
    cpa: 32.80,
    roas: 11.52,
    duration: '2024',
    goal: {
      en: 'Scale luxury fashion sales with premium targeting',
      ar: 'توسيع مبيعات الأزياء الفاخرة مع استهداف متميز'
    },
    featured: true
  },
  {
    id: '9',
    name: {
      en: 'Global Dropshipping',
      ar: 'الدروبشيبنج العالمي'
    },
    client: {
      en: 'Global Store',
      ar: 'متجر عالمي'
    },
    category: 'ecommerce',
    platform: 'meta',
    spend: 263944.07,
    results: 20189,
    resultType: {
      en: 'Purchases',
      ar: 'عملية شراء'
    },
    cpa: 13.08,
    roas: 4.24,
    duration: '2024',
    goal: {
      en: 'Scale international dropshipping operations',
      ar: 'توسيع عمليات الدروبشيبنج العالمية'
    },
    featured: true
  },
  {
    id: '10',
    name: {
      en: 'Beauty Chat Booster V2',
      ar: 'حملة صالونات التجميل V2'
    },
    client: {
      en: 'Beauty Salons',
      ar: 'صالونات تجميل'
    },
    category: 'leads',
    platform: 'meta',
    spend: 18.00,
    results: 250,
    resultType: {
      en: 'Conversations',
      ar: 'محادثة'
    },
    cpa: 0.07,
    roas: 12.5,
    duration: '2024',
    goal: {
      en: 'Optimized version of beauty salon lead generation',
      ar: 'نسخة محسنة لجذب عملاء صالونات التجميل'
    }
  },
  {
    id: '11',
    name: {
      en: 'Viral Content Engage',
      ar: 'حملة المحتوى الترفيهي'
    },
    client: {
      en: 'Entertainment Content',
      ar: 'محتوى ترفيهي'
    },
    category: 'engagement',
    platform: 'meta',
    spend: 40.00,
    results: 420,
    resultType: {
      en: 'Conversations',
      ar: 'محادثة'
    },
    cpa: 0.10,
    roas: 4.0,
    duration: '2024',
    goal: {
      en: 'Boost engagement through entertaining viral content',
      ar: 'زيادة التفاعل من خلال المحتوى الترفيهي الفيروسي'
    }
  },
  {
    id: '12',
    name: {
      en: 'SPOTI Promo',
      ar: 'حملة اشتراكات سبوتي'
    },
    client: {
      en: 'Subscriptions Campaign',
      ar: 'حملة اشتراكات'
    },
    category: 'leads',
    platform: 'meta',
    spend: 70.00,
    results: 540,
    resultType: {
      en: 'Conversations',
      ar: 'محادثة'
    },
    cpa: 0.13,
    roas: 6.0,
    duration: '2024',
    goal: {
      en: 'Promote subscription plans through targeted campaigns',
      ar: 'ترويج خطط الاشتراك من خلال حملات مستهدفة'
    }
  }
];

export const categoryInfo = {
  ecommerce: {
    en: { name: 'E-Commerce', description: 'Online store sales & purchases' },
    ar: { name: 'التجارة الإلكترونية', description: 'مبيعات ومشتريات المتاجر الإلكترونية' }
  },
  leads: {
    en: { name: 'Lead Generation', description: 'Conversations & lead capture' },
    ar: { name: 'جذب العملاء', description: 'المحادثات وجمع بيانات العملاء' }
  },
  engagement: {
    en: { name: 'Engagement', description: 'Social interaction & viral content' },
    ar: { name: 'التفاعل', description: 'التفاعل الاجتماعي والمحتوى الفيروسي' }
  }
};

export const getCampaignKPIs = (
  categoryFilter: CampaignCategory | 'all' = 'all',
  platformFilter: Platform | 'all' = 'all'
) => {
  let filtered = campaigns;

  if (categoryFilter !== 'all') {
    filtered = filtered.filter(c => c.category === categoryFilter);
  }

  if (platformFilter !== 'all') {
    filtered = filtered.filter(c => c.platform === platformFilter);
  }

  const totalSpend = filtered.reduce((sum, c) => sum + c.spend, 0);
  const totalResults = filtered.reduce((sum, c) => sum + c.results, 0);
  const avgCPA = filtered.length > 0 ? filtered.reduce((sum, c) => sum + c.cpa, 0) / filtered.length : 0;
  const avgROAS = filtered.length > 0 ? filtered.reduce((sum, c) => sum + c.roas, 0) / filtered.length : 0;

  return {
    totalSpend,
    totalResults,
    avgCPA,
    avgROAS,
    campaignCount: filtered.length
  };
};

export const getTotalStats = () => {
  return {
    totalSpend: 425129,
    totalResults: 29710,
    avgROAS: 6.6,
    totalCampaigns: 12
  };
};
