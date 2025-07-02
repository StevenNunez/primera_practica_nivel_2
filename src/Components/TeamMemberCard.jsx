// src/components/TeamMemberCard.jsx
import React from 'react';

function TeamMemberCard({ name, role, photo, isMiddle }) {
  return (
    <div className={`relative flex flex-col ${isMiddle ? 'mt-8' : 'mt-0'}`}>
      <div className="relative">
        <img
          src={photo}
          alt={name}
          className="w- h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute top-0 right-[-0.5rem] h-full flex items-start">
          <p className="text-white text-sm font-medium transform -rotate-270 origin-top-right whitespace-nowrap">
            {role}
          </p>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white text-left">{name}</h3>
    </div>
  );
}

export default TeamMemberCard;