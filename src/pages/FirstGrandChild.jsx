import React, {useContext} from 'react';
import {userContext} from './Parent';

export const FirstGrandChild = () => {
  const noticeContext = useContext(userContext);
  const {name,age,gender,isFav} = noticeContext
  return (
    <div>
      <h6 className='text-[purple]'>First grand child</h6>
      <a href='#' class='block overflow-hidden rounded-2xl'>
        <img
          alt='Office'
          src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          class='h-56 w-[30%] object-cover'
        />

        <div class='bg-gray-900 p-4'>
          <h3 class='text-sm text-white'>Name:{name}</h3>
          <p class='text-xs text-gray-500'>Age: {age}</p>
          <p class='text-xs text-gray-500'>Gender:{gender}</p>
          <p class='mt-1 text-xs text-gray-500'>Favourite:{isFav}</p>
        </div>
      </a>
    </div>
  )
}

