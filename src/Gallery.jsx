import React from 'react'
import { useGlobalContext } from './context'
import { useFetchGallery } from './reactQueryHooks';

const Gallery = () => {
  const {searchTerm} = useGlobalContext()
  // console.log(searchTerm);
  const {data, isLoading} = useFetchGallery(searchTerm)
  // console.log(data.results);
  if(isLoading){
    return <div className='w-full h-screen flex justify-center items-center '>
      <p className='text-5xl font-semibold dark:text-white'>Loading</p>
    </div>
  }
  
  const results = data.results;
  
  if(results.length< 1) {
    return <div className='w-full h-screen flex justify-center items-center '>
    <p className='text-5xl font-semibold dark:text-white'>No results found....</p>
  </div>
  }

  return (
    <section className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 mx-10'>
       {results.map((item)=>{
        const url = item?.urls?.regular;
        return (<img src={url} alt={item.alt_description} className='w-full h-full object-contain rounded  dark:bg-purple-800'></img>)
       })}
    </section>
  )
}

export default Gallery