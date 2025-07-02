// src/components/TeamSection.jsx
import React from 'react';
import TeamMemberCard from './teamMemberCard';
import teamMembers from '../data/teamData';

function TeamSection() {
  return (
    <section className="py-16 bg-blue-900 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center md:text-left">
            The Creative Crew
          </h2>
          <p className="mt-4 md:mt-0 md:ml-8 text-white text-lg max-w-md text-center md:text-left">
            Who we are we are team of creativi diverse
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
              isMiddle={index % 3 === 1} // La tarjeta del medio en cada fila
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;