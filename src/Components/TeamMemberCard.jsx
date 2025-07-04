import React from 'react';

function TeamMemberCard({ name, role, photo, isMiddle }) {
  return (
    <div className={`relative flex flex-col ${isMiddle ? 'mt-8' : 'mt-0'}`}>
      <div className="relative">
        <img
          src={photo}
          alt={name}
          className="w-60 h-100 object-cover rounded-lg shadow-md"
        />
        <div className="">
          <p className="text-[12px] rotate-90 left-55 absolute top-9 text-white">
            {role}
          </p>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white text-left">{name}</h3>
    </div>
  );
}

export default TeamMemberCard;