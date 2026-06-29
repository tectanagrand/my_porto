'use client';

import React, { createRef, Ref, useContext, createContext } from 'react';
import TerminalTabHeader from './TerminalTabHeader';

const TerminalTabContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

const TerminalTabContainer = ({ children }: { children: React.ReactNode }) => {
  const refTerminalTab = createRef<HTMLDivElement>();
  return (
    <TerminalTabContext.Provider value={refTerminalTab}>
      <div className="w-full md:w-4/5 h-full md:m-4 m-2">
        <TerminalTabHeader />
        <div
          className=" border-gray-600 rounded-b-lg border-1 h-[90%] bg-gray-800 overflow-auto terminal-tab-container"
          ref={refTerminalTab}
        >
          {children}
        </div>
      </div>
    </TerminalTabContext.Provider>
  );
};

export default TerminalTabContainer;

export const useTerminalTabContext = () => useContext(TerminalTabContext);
