import React from 'react'
import NewPosts from '../Components/NewPosts'
import AllPosts from '../Components/AllPosts'
import LatestPosts from './../Components/LatestPosts';
import SearchBar from '../Components/SearchBar';
import LastComments from '../Components/LastComments';

function Home() {
  return (
    <>
    <NewPosts/>
    <div className='grid lg:grid-cols-3 lg:w-[80%] mx-auto mt-6'>
      <div className='col-span-2'>
        <AllPosts />
      </div>
      
      <div>
        <SearchBar/>
        <LatestPosts/>
        <LastComments/>
      </div>
    </div>
    </>
  )
}

export default Home