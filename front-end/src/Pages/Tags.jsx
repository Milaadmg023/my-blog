import React from 'react'
import { useParams } from 'react-router-dom'
import AllPosts from '../Components/AllPosts'

function Tags() {
  const {tag} = useParams()
  const tagHandler = async ()=>{
    try {
      const data = await fetch(`http://127.0.0.1:8000/blog/category`)
      const res = await data.json()
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  }  
  React.useEffect(()=>{
    tagHandler()
  })
  return (
    <section className='w-[80%] mx-auto'>
    {/*<AllPosts/>*/}
    </section>
  )
}

export default Tags