import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const handleSubmit=(e)=> {
    e.preventDefault();
    setSearchTerm(e.target.search.value)
  }
  return (
    <section className=' flex flex-col items-center'>
       <h1 className='text-2xl font-bold mt-6 dark:text-white'>Gallery</h1>
       <form onSubmit={handleSubmit}>
        <input type="text" className='py-1 px-2 outline-none rounded-md mt-4 w-64' name='search'/>
        <button className='ml-2 bg-purple-700 text-white py-1 px-2 rounded-md' >Search</button>
       </form>
    </section>
  )
}

export default SearchForm