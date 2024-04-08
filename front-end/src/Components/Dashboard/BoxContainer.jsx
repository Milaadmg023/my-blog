import React from 'react'
import News from './News';
import Reacent from './Reacent';

const BoxContainer = () => {
  return (
    <div className='flex justify-center flex-col lg:flex-row   gap-2 py-2 px-2 lg:px-0'>
        <News/>
        <Reacent/>
    </div>
  )
}

export default BoxContainer