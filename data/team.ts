export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  skills: string[];
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Media Buyer',
    photo: '/images/team/member1.jpg',
    skills: ['Meta Ads Manager', 'TikTok Ads', 'Google Ads', 'Analytics', 'A/B Testing']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Graphic Designer',
    photo: '/images/team/member2.jpg',
    skills: ['Adobe Creative Suite', 'Figma', 'Branding', 'Social Media Design', 'UI/UX']
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    role: 'Videographer',
    photo: '/images/team/member3.jpg',
    skills: ['Cinematography', 'Premiere Pro', 'After Effects', 'Color Grading', 'Directing']
  },
  {
    id: '4',
    name: 'Emma Watson',
    role: 'Creative Director',
    photo: '/images/team/member4.jpg',
    skills: ['Strategy', 'Brand Development', 'Campaign Planning', 'Team Leadership']
  },
  {
    id: '5',
    name: 'David Kim',
    role: 'Motion Graphics Designer',
    photo: '/images/team/member5.jpg',
    skills: ['After Effects', 'Cinema 4D', '3D Animation', 'VFX', 'Motion Design']
  },
  {
    id: '6',
    name: 'Layla Hassan',
    role: 'Copywriter',
    photo: '/images/team/member6.jpg',
    skills: ['Ad Copy', 'Storytelling', 'Content Strategy', 'SEO', 'Brand Voice']
  }
];
