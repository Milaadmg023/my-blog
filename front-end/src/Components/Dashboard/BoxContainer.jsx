import React from 'react'
import News from './News';
import Reacent from './Reacent';

const BoxContainer = () => {
  return (
    <div className='flex justify-center gap-2 py-2'>
        <News/>
        <Reacent/>
    </div>
  )
}

export default BoxContainer