import React from 'react'
import Tutorial from '../Tutorial/Tutorial';

function TutorialPage() {
  const tutorialData = [
  {
    image:"https://www.codewithharry.com/img/notes/python.webp",
    name:"Python Tutorial"
  },
  {
    image:"https://www.codewithharry.com/img/notes/c.webp",
    name:"C Tutorial"
  },
  {
    image:"https://www.codewithharry.com/img/notes/cpp.webp",
    name:"C++ Tutorial"
  },
  {
    image:"https://www.codewithharry.com/img/notes/java.webp",
    name:"Java Tutorial"
  },
  {
    image:"https://www.codewithharry.com/img/notes/html.webp",
    name:"HTML Tutorial"
  },
  {
    image:"https://www.codewithharry.com/img/notes/css.webp",
    name:"CSS Tutorial"
  },
  {
    image:"https://www.codewithharry.com/img/notes/js.webp",
    name:"JavaScript Tutorial"
  },
  {
    image:"https://www.codewithharry.com/img/notes/php.webp",
    name:"PHP Tutorial"
  },
  {
    image:"https://www.codewithharry.com/img/notes/reactjs.webp",
    name:"React JS Tutorial"
  },
]
  return (
    <>
   <h1 className='text-center text-3xl font-semibold m-6 text-purple-700' >Tutorials</h1>
    <div className='flex justify-around flex-wrap items-center m-8' >
      {tutorialData.map((data,index)=>( <Tutorial
         key={index}
        tutImage = {data.image} tutName = {data.name}  
      />))}
    </div>
    
    </>
  )
}

export default TutorialPage;