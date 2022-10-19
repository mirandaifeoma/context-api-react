import React, {useContext} from 'react';
import { userContext } from './Parent';

export const SecondGrandChild = () => {
  const noticeContext = useContext(userContext);
  const { location, details} = noticeContext;

  
  return (
    <div>
      <h2 className='text-[blue]'>second grand child</h2>
      <a href='#' class='block'>
        <img
          alt='Lava'
          src='https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          class='h-56 w-[30%] rounded-xl object-cover shadow-xl'
        />

        <div class='p-4'>
          <h3 class='text-xl font-bold text-gray-900'>Location:{location}</h3>

          <p class='mt-2 text-gray-500'>Details:{details}</p>
        </div>
      </a>
    </div>
  )
}

