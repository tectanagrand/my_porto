import React from 'react';

export default function Nav() {
  return (
    <ul className="flex gap-[50px] items-center justify-center py-5 w-full">
      <li className="w-fit flex flex-col">
        <a href="">home</a>
        <span className="w-full bg-highlights h-[5pt]"></span>
      </li>
      <li className="w-fit flex flex-col">
        <a href="">about</a>
        <span className="w-full bg-highlights h-[5pt]"></span>
      </li>
      <li className="w-fit flex flex-col">
        <a href="">project</a>
        <span className="w-full bg-highlights h-[5pt]"></span>
      </li>
      <li className="w-fit flex flex-col">
        <a href="">contact</a>
        <span className="w-full bg-highlights h-[5pt]"></span>
      </li>
    </ul>
  );
}
