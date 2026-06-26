import clsx from 'clsx';
import React from 'react';

const ButtonTab = ({ type }: { type: string }) => {
  return (
    <div
      className={clsx(
        'h-[10px] w-[10px] rounded-2xl',
        type === 'close' && 'bg-red-500 hover:bg-red-400 focus:bg-red-600',
        type === 'minimize' && 'bg-orange-300 hover:bg-orange-400 focus:bg-orange-500',
        type === 'widen' && 'bg-lime-300 hover:bg-lime-400 focus:bg-lime-500'
      )}
    ></div>
  );
};

export default ButtonTab;
