import React from 'react';
import {SecondGrandChild} from './SecondGrandChild'

export const FirstChild = () => {
  return (
    <div>
        <h2 className='text-[red] text-xl mt-4'>First child</h2>
        < SecondGrandChild/>
    </div>
  );
}

