import React, {createContext} from 'react';
import {FirstChild} from './FirstChild'
import { SecondChild } from './SecondChild'
import { ThirdChild } from './ThirdChild'

export const userContext = createContext()

export const Parent = () => {

  const user = {
    name: 'Abasifreke james',
    age: 23,
    gender: 'male',
    isFav: 'tennis',
    location: 'Abuja',
    details: 'A logistics website,you call we take you anywhere you want to go',
  }
  
  return (
    <userContext.Provider value={user}>
      <h1 className='text-center text-[5vmin] '>Parent Component</h1>
      <FirstChild />
      <SecondChild />
      <ThirdChild />
    </userContext.Provider>
  )
}

