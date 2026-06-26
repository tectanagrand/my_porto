import React from 'react';
import ButtonTab from '../button/ButtonTab';

const TerminalTabHeader = () => {
  return (
    <div className="w-full h-4 p-3 border-gray-600 rounded-t-lg border-2 bg-gray-600 flex items-center justify-start font-semibold text-gray-50 md:text-sm text-xs">
      <div className="flex gap-1 md:w-1/3 w-1/4 justify-start">
        <ButtonTab type="close" />
        <ButtonTab type="minimize" />
        <ButtonTab type="widen" />
      </div>
      <div className="md:pl-12   pl-2">
        <p>~/portofolio/{`{your name}`}</p>
      </div>
    </div>
  );
};

export default TerminalTabHeader;
