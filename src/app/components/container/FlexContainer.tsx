import React from 'react';

const FlexContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-0 mx-4 mb-2">{children}</div>;
};

export default FlexContainer;
