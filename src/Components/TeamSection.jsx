import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import teamMembers from "../data/teamData";

function TeamSection() {
  return (
    <section className="py-16 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col justify-center px-[50px]  md:flex-row md:justify-between md:items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center md:text-left">
            The Creative Crew
          </h2>
          <p className="mt-4 md:mt-0 md:ml-8 text-white text-lg max-w-md text-center md:text-left">
            Who we are we
            <p> We are team of creativi diverse.</p>
            <p>driven. innovations individuals working in</p>
            <p> from the worl.</p>
          </p>
        </div>
        <br></br><br></br>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
              isMiddle={index % 3 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
