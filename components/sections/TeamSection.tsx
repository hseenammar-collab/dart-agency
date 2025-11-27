'use client';

import { useState } from 'react';
import { team } from '@/data/team';
import { useLanguage } from '@/lib/language-context';
import { Badge } from '../ui/badge';

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {t.team.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            {t.team.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
}: {
  member: typeof team[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`glass-card rounded-2xl p-6 shadow-3d transition-all duration-300 ${
          isHovered ? 'shadow-3d-hover -translate-y-2' : ''
        }`}
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(5deg) rotateY(${index % 2 === 0 ? '-5deg' : '5deg'})`
            : 'none',
        }}
      >
        <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shadow-3d relative overflow-hidden">
          <span className="text-foreground/40 text-xs text-center px-2">
            Photo: {member.photo}
          </span>
          <div
            className={`absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-primary font-medium">{member.role}</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {member.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-xs bg-primary/10 text-foreground/80 border-primary/20"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
