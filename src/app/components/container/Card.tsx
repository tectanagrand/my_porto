import React, { ReactNode } from 'react';

const Card = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="h-fit w-full my-2 border-dashed border-1 flex items-center rounded-lg p-3">
      {children}
    </div>
  );
};

export default Card;
