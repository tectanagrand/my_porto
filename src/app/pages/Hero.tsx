import React from 'react';
import TerminalTabContainer from '../components/container/TerminalTabContainer';
import HeroTitleImage from '../components/images/HeroTitleImage';
import AsciiImage from '../components/images/AsciiImage';

const Hero = () => {
  return (
    <>
      <div className="overflow-hidden flex justify-center md:block">
        <HeroTitleImage />
      </div>
      <div className="grid md:grid-flow-col justify-center md:justify-start md:items-center m-4">
        <div className="p-10 flex flex-col items-center border-1 border-dashed">
          <AsciiImage />
          <p>Welcome, guest !</p>
          <p className="text-sm">Software Engineer - Bogor, Indonesia</p>
        </div>
        <div className="p-8 flex flex-col gap-3 border-y-1 border-r-1 md:border-l-0 md:border-t-1 border-l-1 border-t-0 border-dashed h-full">
          <p className="text-gray-50 text-sm">
            Building enterprise web applications, backend services, and business systems that scale.
          </p>
          <p className="text-gray-50 text-sm">
            3+ years of experience developing internal enterprise applications using React, Node.js,
            PostgreSQL, Docker, and AWS.
          </p>
          <div className="flex flex-col gap-1 text-sm py-4">
            <a href="#">/linked-in</a>
            <a href="#">/github</a>
            <a href="#">/cv</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
