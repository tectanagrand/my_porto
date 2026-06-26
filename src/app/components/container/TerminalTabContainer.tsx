import React from 'react';
import TerminalTabHeader from './TerminalTabHeader';

const TerminalTabContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full md:w-4/5 h-full md:m-4 m-2">
      <TerminalTabHeader />
      <div className=" border-gray-600 rounded-b-lg border-1 h-[90%] bg-gray-800 overflow-auto terminal-tab-container">
        {children}
      </div>
    </div>
  );
};

export default TerminalTabContainer;
