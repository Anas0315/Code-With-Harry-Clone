import React from 'react'
 import Notes from '../Notes/Notes';
function NotesPage() {
    const NotesData = [
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
     <div className='flex justify-around flex-wrap items-center m-8'>
     {NotesData.map((data,index)=>( <Notes
         key={index}
        tutImage = {data.image} tutName = {data.name}  
      />))}
     </div>
     </>
  )
}

export default NotesPage;