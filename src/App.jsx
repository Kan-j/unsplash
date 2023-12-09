import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import SearchForm from './SearchForm'
import Gallery from './Gallery'


function App() {
  

  return (
    <>
    <main>
      <section className='w-full dark:bg-black bg-slate-200 min-h-screen '>
        <ThemeToggle/>
        <SearchForm/>
        <Gallery />  
      </section>
    </main>
    </>
  )
}

export default App
