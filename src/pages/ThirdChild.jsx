import React from 'react';
import {FirstGrandChild} from './FirstGrandChild';
import {SecondGrandChild} from './SecondGrandChild';

export const ThirdChild = () => {
  return (
    <div>
      <h2 className='text-[red] text-xl'>Third child</h2>
      <FirstGrandChild />
      <SecondGrandChild />
    </div>
  )
}

