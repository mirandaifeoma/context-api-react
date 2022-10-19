import React from 'react';
import {FirstGrandChild} from './FirstGrandChild'

export const SecondChild = () => {
  return (
    <div>
      <h2 className='text-[red] text-xl mt-4'>Second child</h2>
      <FirstGrandChild />
    </div>
  )
}

