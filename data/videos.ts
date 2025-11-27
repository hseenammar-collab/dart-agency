export type VideoCategory = 'all' | 'restaurants' | 'cinema' | 'celebrities' | 'brands' | 'other';

export interface Video {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  client: {
    en: string;
    ar: string;
  };
  driveId: string;
  category: VideoCategory;
}

// Extract Google Drive file ID from URL
export const getDriveThumbnail = (driveId: string) =>
  `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;

export const getDriveEmbed = (driveId: string) =>
  `https://drive.google.com/file/d/${driveId}/preview`;

export const videos: Video[] = [
  {
    id: '1',
    title: { en: 'Al-Rasikh', ar: 'الراسخ' },
    client: { en: 'Al-Rasikh', ar: 'الراسخ' },
    driveId: '1-0kyQo2TAk1R_f2KTa-gOU3gCYfiyl-b',
    category: 'other',
  },
  {
    id: '2',
    title: { en: 'Baitkom Alaina 1', ar: 'بيتكم علينا 1' },
    client: { en: 'Baitkom Alaina Restaurant', ar: 'مطعم بيتكم علينا' },
    driveId: '11VjLlcTUJZbOKhDv2GcvhAHbVVPWgl8d',
    category: 'restaurants',
  },
  {
    id: '3',
    title: { en: 'Baitkom Alaina 2', ar: 'بيتكم علينا 2' },
    client: { en: 'Baitkom Alaina Restaurant', ar: 'مطعم بيتكم علينا' },
    driveId: '127b7VOcRqE3OF2jpADIp3rAYILjegL0z',
    category: 'restaurants',
  },
  {
    id: '4',
    title: { en: 'University of Baghdad', ar: 'جامعة بغداد' },
    client: { en: 'University of Baghdad', ar: 'جامعة بغداد' },
    driveId: '13BsyAn3kiAzbSEhh3m1_c20ypqsk7sMd',
    category: 'other',
  },
  {
    id: '5',
    title: { en: 'Dera Al-Sayid', ar: 'درع السيد' },
    client: { en: 'Dera Al-Sayid', ar: 'درع السيد' },
    driveId: '14CxIBEjQ9qjPvUAT1nzs6Cbzn4lMfU6k',
    category: 'other',
  },
  {
    id: '6',
    title: { en: 'Shako Mako Cinema', ar: 'شكو ماكو سينما' },
    client: { en: 'Cinema', ar: 'سينما' },
    driveId: '15HOe0QCEwXBnld6DMX9EqUg18k6vSUuV',
    category: 'cinema',
  },
  {
    id: '7',
    title: { en: 'Ahmed Al-Khafaji', ar: 'أحمد الخفاجي' },
    client: { en: 'Ahmed Al-Khafaji', ar: 'أحمد الخفاجي' },
    driveId: '16Veg9InFiU1yQ3m-IUZhM61KKvc7u3aM',
    category: 'celebrities',
  },
  {
    id: '8',
    title: { en: 'Ahmed Al-Khafaji TVC', ar: 'أحمد الخفاجي TVC' },
    client: { en: 'Ahmed Al-Khafaji', ar: 'أحمد الخفاجي' },
    driveId: '1868iRMpAh8sdoeA34f21TD9klZZteu5G',
    category: 'celebrities',
  },
  {
    id: '9',
    title: { en: 'Babylon Trend', ar: 'بابلون تريند' },
    client: { en: 'Babylon', ar: 'بابلون' },
    driveId: '1B0UclXs378_3M2KHNHOR_RS4iOq2QJNB',
    category: 'brands',
  },
  {
    id: '10',
    title: { en: 'Basket with Cinema', ar: 'سلة مع السينما' },
    client: { en: 'Cinema', ar: 'سينما' },
    driveId: '1B3vV1Qij_jqHsLyPNWnulb3QOVJp8vBW',
    category: 'cinema',
  },
  {
    id: '11',
    title: { en: 'Basra POPCHIPS 2', ar: 'بوب شيبس البصرة 2' },
    client: { en: 'POPCHIPS', ar: 'بوب شيبس' },
    driveId: '1D0tWf8S5_yhWEvAdDsE8nmC3gtncWzxO',
    category: 'brands',
  },
  {
    id: '12',
    title: { en: 'Cairo Cinema Trend', ar: 'تريند سينما القاهرة' },
    client: { en: 'Cairo Cinema', ar: 'سينما القاهرة' },
    driveId: '1DQ_8rfMzZp8s--6N-e44m_jOAgxYipuu',
    category: 'cinema',
  },
  {
    id: '13',
    title: { en: 'Chery Cars', ar: 'شيري للسيارات' },
    client: { en: 'Chery Cars', ar: 'شيري للسيارات' },
    driveId: '1ExEYeceHy1VyJ5CbebXLOwAgXRnCRiho',
    category: 'brands',
  },
  {
    id: '14',
    title: { en: 'Documentary for Cinema', ar: 'وثائقي للسينما' },
    client: { en: 'Cinema', ar: 'سينما' },
    driveId: '1FlKcQqRm7pGt87CKv_lrgzVhNtYaADWF',
    category: 'cinema',
  },
  {
    id: '15',
    title: { en: 'Eat Well 2', ar: 'إيت ويل 2' },
    client: { en: 'Eat Well', ar: 'إيت ويل' },
    driveId: '1HezrL8W88hUgiNPJKKA3WmTuL4IWYYmZ',
    category: 'restaurants',
  },
  {
    id: '16',
    title: { en: 'Eat Well', ar: 'إيت ويل' },
    client: { en: 'Eat Well', ar: 'إيت ويل' },
    driveId: '1Kw7kKRqJC_2fZPdZhLWfYFd9btPn664L',
    category: 'restaurants',
  },
  {
    id: '17',
    title: { en: 'Eva Cosmetics 2', ar: 'إيفا كوزمتكس 2' },
    client: { en: 'Eva Cosmetics', ar: 'إيفا كوزمتكس' },
    driveId: '1LYwf54Qpqqw-dI7IfcvOqFpjDWWgXpbK',
    category: 'brands',
  },
  {
    id: '18',
    title: { en: 'Eva Cosmetics 3', ar: 'إيفا كوزمتكس 3' },
    client: { en: 'Eva Cosmetics', ar: 'إيفا كوزمتكس' },
    driveId: '1LrYO49DfnRJumizk1APbqEVusejhTq6T',
    category: 'brands',
  },
  {
    id: '19',
    title: { en: 'Eva Cosmetics 4', ar: 'إيفا كوزمتكس 4' },
    client: { en: 'Eva Cosmetics', ar: 'إيفا كوزمتكس' },
    driveId: '1OXrQ7GqeV5jBGZRg3tAYRnOs_a89D-x7',
    category: 'brands',
  },
  {
    id: '20',
    title: { en: 'Eva Cosmetics', ar: 'إيفا كوزمتكس' },
    client: { en: 'Eva Cosmetics', ar: 'إيفا كوزمتكس' },
    driveId: '1QX6GS0hdXia4Ly_XQO9eAp-SRuIjqpld',
    category: 'brands',
  },
  {
    id: '21',
    title: { en: 'Fairoz Coffee', ar: 'قهوة فيروز' },
    client: { en: 'Fairoz Coffee', ar: 'قهوة فيروز' },
    driveId: '1SPa8bkbxkMxqu1lf-KJA-bJP3dqSNpzC',
    category: 'brands',
  },
  {
    id: '22',
    title: { en: 'Fries', ar: 'فرايز' },
    client: { en: 'Restaurant', ar: 'مطعم' },
    driveId: '1YVRZljU0mcjTJPAi-VscRz8SNrYQ8IB4',
    category: 'restaurants',
  },
  {
    id: '23',
    title: { en: 'Hala Sat', ar: 'قناة هلا' },
    client: { en: 'Hala Channel', ar: 'قناة هلا' },
    driveId: '1ZVXZA8xWCyk4IqnJhAEE198HZ6QhCMfc',
    category: 'other',
  },
  {
    id: '24',
    title: { en: 'Iraqi Cinema Restaurant', ar: 'مطعم السينما العراقية' },
    client: { en: 'Iraqi Cinema Restaurant', ar: 'مطعم السينما العراقية' },
    driveId: '1_wAWGdccmU9qQz0Zs06N2rc6-XKCKVmN',
    category: 'restaurants',
  },
  {
    id: '25',
    title: { en: 'Jadria', ar: 'الجادرية' },
    client: { en: 'Jadria', ar: 'الجادرية' },
    driveId: '1azJ9eF1huBZPjJExXyAZaLiE6an2vKEO',
    category: 'other',
  },
  {
    id: '26',
    title: { en: 'POPCHIPS Alaa', ar: 'بوب شيبس علاء' },
    client: { en: 'POPCHIPS', ar: 'بوب شيبس' },
    driveId: '1cygVxhGh8_yP0lj6y8rZ0NZckXOfIjBG',
    category: 'brands',
  },
  {
    id: '27',
    title: { en: 'POPCHIPS Ali', ar: 'بوب شيبس علي' },
    client: { en: 'POPCHIPS', ar: 'بوب شيبس' },
    driveId: '1eq98SGyLFXRYKBUQOqJR76NHc0VvdGB4',
    category: 'brands',
  },
  {
    id: '28',
    title: { en: 'POPCHIPS Ather', ar: 'بوب شيبس أثير' },
    client: { en: 'POPCHIPS', ar: 'بوب شيبس' },
    driveId: '1ezClPzRUwCPTtx3lf3bK7Bnopy1DtvKo',
    category: 'brands',
  },
  {
    id: '29',
    title: { en: 'POPCHIPS Gasan Final', ar: 'بوب شيبس غسان' },
    client: { en: 'POPCHIPS', ar: 'بوب شيبس' },
    driveId: '1gWXoELpkzDRkZhN3lvsY8arR_cLbNeB0',
    category: 'brands',
  },
  {
    id: '30',
    title: { en: 'POPCHIPS and Popcorn', ar: 'بوب شيبس وبوبكورن' },
    client: { en: 'POPCHIPS', ar: 'بوب شيبس' },
    driveId: '1hSOu24x_DDD1XOCmQXte-SvFmWxCXYrK',
    category: 'brands',
  },
  {
    id: '31',
    title: { en: 'Russia', ar: 'روسيا' },
    client: { en: 'Russia', ar: 'روسيا' },
    driveId: '1idc8-wotrH3h3qnHFPjGfCAuqP30afli',
    category: 'other',
  },
  {
    id: '32',
    title: { en: 'Shahad Al-Shamary', ar: 'شهد الشمري' },
    client: { en: 'Shahad Al-Shamary', ar: 'شهد الشمري' },
    driveId: '1ow-sczWY6EE3LsedCeGknPcMhCrjcKZO',
    category: 'celebrities',
  },
  {
    id: '33',
    title: { en: 'Taj Al-Basra 2', ar: 'تاج البصرة 2' },
    client: { en: 'Taj Al-Basra', ar: 'تاج البصرة' },
    driveId: '1p_wLTfs6yEzjWh5gWLWkM0Cp51YrWvvg',
    category: 'restaurants',
  },
  {
    id: '34',
    title: { en: 'Taj Al-Basra 3', ar: 'تاج البصرة 3' },
    client: { en: 'Taj Al-Basra', ar: 'تاج البصرة' },
    driveId: '1tbW4NfL8fn5g6kT0BvrJbxmFqdMMVagC',
    category: 'restaurants',
  },
  {
    id: '35',
    title: { en: 'Taj Al-Basra 4', ar: 'تاج البصرة 4' },
    client: { en: 'Taj Al-Basra', ar: 'تاج البصرة' },
    driveId: '1tztKgb7nZSNLEQrrmJymu5M2_FLkEeX5',
    category: 'restaurants',
  },
  {
    id: '36',
    title: { en: 'Taj Al-Basra', ar: 'تاج البصرة' },
    client: { en: 'Taj Al-Basra', ar: 'تاج البصرة' },
    driveId: '1vGIjMnBDGU-NupU9yhalcyIGir0uKsxl',
    category: 'restaurants',
  },
  {
    id: '37',
    title: { en: 'TEDx Baghdad', ar: 'تيدكس بغداد' },
    client: { en: 'TEDx Baghdad', ar: 'تيدكس بغداد' },
    driveId: '1yFbrQnGBFOcq1bggm3FgOqu34Pf-sTVN',
    category: 'other',
  },
];

export const videoCategories: { key: VideoCategory; label: { en: string; ar: string } }[] = [
  { key: 'all', label: { en: 'All', ar: 'الكل' } },
  { key: 'restaurants', label: { en: 'Restaurants', ar: 'مطاعم' } },
  { key: 'cinema', label: { en: 'Cinema', ar: 'سينما' } },
  { key: 'celebrities', label: { en: 'Celebrities', ar: 'مشاهير' } },
  { key: 'brands', label: { en: 'Brands', ar: 'براندات' } },
  { key: 'other', label: { en: 'Other', ar: 'أخرى' } },
];
