import React from 'react'
import NewPosts from '../Components/NewPosts'
import AllPosts from '../Components/AllPosts'
import LatestPosts from './../Components/LatestPosts';
import SearchBar from '../Components/SearchBar';
import LastComments from '../Components/LastComments';
import Tags from '../Components/Tags';


function Home() {
  return (
    <>
    <NewPosts/>
    <div className='grid grid-cols-1 lg:grid-cols-3 lg:w-[80%] mx-auto mt-6'>
      <div className='col-span-2'>
        <AllPosts />
      </div>
      
      <div className='pt-2 lg:p-0'>
        <SearchBar/>
        <LatestPosts/>
        <LastComments/>
        <Tags/>
      </div>
    </div>
    </>
  )
}

export default Home