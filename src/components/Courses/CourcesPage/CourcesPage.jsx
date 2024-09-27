import React from 'react'
import Courses from '../Courses'

function CourcesPage() {
const courseData = [
  {
    image:"https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg",
    courseName :"Ultimate JavaScript Course",
    courseData : "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS. "
  },
  {
    image:"https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/sanity-tutorial-in-hindi-1/Sanity-Thumb.jpg",
    courseName :"Sanity.io Tutorials in Hindi",
    courseData : "Sanity.io is the platform for structured content. This course will not only cover Sanity from starting to the end, but it has projects for hands-on experience."
  },
  {
    image:"https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/strapi-tutorial-in-hindi-1/Strapi-Thumb.jpg",
    courseName :"Strapi Tutorial For Beginners",
    courseData : "This course contains everything that you should know about Strapi. It is an open-source, Headless CMS that saves lot of time for developers by giving them freedom to use their favorite tools and frameworks."
  },
  {
    image:"https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/python-100-days-of-code-1/7wnove7K-ZQ-HD.jpg",
    courseName :"Python Tutorials - 100 Days of Code",
    courseData : "Python is one of the most demanded programming languages in the job market. learn and master Python. Let's commit our 100 days of code to python!"
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/e1c843acc10c59c60504cd438a082c6d.png",
    courseName :"Tailwind Course In Hindi",
    courseData : "Complete Tailwind CSS Course by CodeWithHarry in Hindi - Learn Tailwind CSS from scratch for free!"
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/62f60049963012281edcc77dd2ec031b.png",
    courseName :"Next.js Tutorials For Beginners",
    courseData : "Complete Next.js Course by CodeWithHarry in Hindi - Learn Next.js from Scratch."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/c02d6cddcae8d68f4dc594a1f6c851d2.png",
    courseName :"General Python Errors",
    courseData : "Being a coder, I can understand the pain and excitement while finding a bug or error in a code. This course contains some of the most famous or common errors in the Python language."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/d9800649e08234d24d76cb4698844aa1.png",
    courseName :"C Language Practice Programs",
    courseData : "This series contains programs for you to practice C Programming and related concepts. It has videos that will provide you with a proper explanation of the program and its logic."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/638637414b878e840719ef217bfdfb24.png",
    courseName :"Python Game Development Tuts",
    courseData : "If you're interested in game development, this course is for you. It will lead you through all the basic game development concepts and will give you an initial boost."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/288cb343ae0bc71833e4ed2304ef5b73.png",
    courseName :"OOPS Using Python Programming",
    courseData : "If you don't know about Object Oriented Programming (OOP) Paradigm, then this course is for you. In this you'll learn about objects, classes and much more in Python language."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/04516e12269f92c93d5857c511ba7fb1.png",
    courseName :"Basic Python Programs With Code",
    courseData : "This series contains basic Python programs. It's a concise and precise course, so if you have a couple of minutes or an hour, just get started. This course will surely add some value."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/ee73fdc0c096dc971978e0887853595a.png",
    courseName :"Web Dev Using Flask and Python",
    courseData : "This course will teach you everything you need to know about web development using Flask. It will lead you through each and every concept of Flask and will give you a good initial start."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/157872dd5dc5fe6b49cc48f29a30a772.png",
    courseName :"Coding Discussion With Harry",
    courseData : "Interested in general technology (coding) topics? If yes, then you must checkout this series, here you'll get tonnes of videos regarding most asked questions and other general questions."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/9d95005147356658c81eadf3386607c0.png",
    courseName :"Learn In One Video",
    courseData : "Don't have much time to watch the whole course's playlist? Don't worry, we've got you covered. This series contains one-shot videos of popular technologies, search for your required stack, and you're ready to get into it."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/68ae8da41f7d66599dc95c0885759cb6.png",
    courseName :"C++ Tutorials For Beginners",
    courseData : "This course contains all the concepts and exercises of the C++ language. If you're a mere beginner, you can start your coding journey with this course and ace your exams."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/ff3e8ac2e1e65f9940260b30461d3c13.png",
    courseName :"Python Django Tutorials For Beginners",
    courseData : "Django is a Python-based free and open-source web framework. If you already know Python and want to try web development, you can go with Django."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/c60b26139e9868b92d6ada1cdf7810cf.png",
    courseName:"Web Dev Tutorials For Beginners",
    courseData:"This is one of my favorite courses. In this series, you'll learn about HTML, CSS, JavaScript, and everything needed to be a job-ready web developer. Just hop on, man."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/45f2c8ae4ba61cbf76d8f6d64c182359.png",
    courseName:"Python Tutorials For Absolute Beginners",
    courseData:"This is one of the most-watched courses on this channel. If you want to create projects as early as possible, then this course is for you. You'll get dozen of projects in this course."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/e6f7ca4e6ac6deb87658f1d891128085.png",
    courseName:"Android Development Tutorials",
    courseData:"Android Development is one of the booming career options nowadays, and many people are learning Android because it feels so good to create own app. enrolling in this course."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/2aefee3112fe9273f4d7d13541ab7094.png",
    courseName:"Java Tutorials For Beginners",
    courseData:"If you don't know programming and want to start your career by learning Java as your first language, you can start with this course as it is for absolute beginners."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/5286f40260e65257448301d19d2d8935.jpg",
    courseName:"Data Structures and Algorithms Course",
    courseData:"Data Structure and Algorithm is one of the most crucial things to learn. This course will give you a complete understanding of Data Structure and its implementation."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/bcbd66927239e25555ed8ce2385b8879.png",
    courseName:"C Language Tutorials For Beginners",
    courseData:"Even if you don't know the ABC of coding, start this course, and I can assure you that you'll be an intermediate-level coder after completion. Get started with C language."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/cc52fae1bb5de526a1690997c0b6f8a1.png",
    courseName:"JavaScript Tutorials For Beginners",
    courseData:"JavaScript is an essential element for the web developers. If you want to take your web development journey one step ahead then you enroll in this course."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/9bff268ac2e0dc20f420b526087fc4a1.png",
    courseName:"PHP Tutorials For Beginners",
    courseData:"PHP is a general-purpose scripting language geared towards web development. This course will give you a complete and proper understanding of PHP concepts."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/0cc70fb920f432f8f4c479330c7a41e0.png",
    courseName:"Git and GitHub Tutorials For Beginners",
    courseData:"If you're serious about coding and want to make a career out of it, then do learn Git and GitHub because it is something that you'll use at every phase of your job."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/0b409e41bed725a3e3fc684602296c31.png",
    courseName:"Intermediate Python Tutorials",
    courseData:"Wanna take your Python skills to the next level? This course is what you all need. It contains all the advanced concepts of the Python language. What??? Just tap on the  button to get started."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/d3c4ddaaa6d7ac69f590baeba279e806.png",
    courseName:"Data Science and Big Data Tutorials",
    courseData:"This course will give you a gist of Data Science and Big Data. I'm sure you must have heard about Data Scientist. This series contains the content to become one of them."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/488c39e3286b452d8a0b30de80257f81.png",
    courseName:"ML Tutorials For Beginners",
    courseData:"Machine Learning is one of the exciting topics nowadays. And if you want to get a glimpse of ML, don't think twice. Just get started with this course."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/1f38ad63bfac3c937799a91322a48b73.png",
    courseName:"Complete Git Tutorials For Beginners",
    courseData:"If you're serious about coding and want to make a career out of it, then do learn Git and GitHub. This is the updated course of Git and GitHub For Beginners."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/e5df82b9c1a91d57aedcea1af1df7bdc.png",
    courseName:"Python GUI Tkinter Tutorials",
    courseData:"Console output is annoying sometimes, isn't it? That's why to get rid of the console, you can create GUI programs, and this is the course for you to start with. 'Spill some colors in your program.'"
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/d4c53ce89929c4dc6671f724042c481d.png",
    courseName:"Python Practice Program Tuts",
    courseData:"This series contains some of the exciting Python programs that one must try. You'll also get a proper explanation of the code. So, get started with this course to practice Python."
  },
  {
    image:"https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/0c9fbb82efe5437883daf3e96ab77e10.png",
    courseName:"Realtime PHP Chatroom Tutorials",
    courseData:"This is one of the best applications of PHP and Jquery. In this series, we've developed a real-time chatroom, so if you're someone who likes project-based learning, this is for you."
  },
]
  return (
   <>
   <div>
    <h1 className='text-center text-3xl font-semibold my-6 mx-4 text-purple-700' >Premium Courses</h1>
    <div  className='flex flex-wrap m-8   items-center justify-evenly'>
      {courseData.map((data,index)=>( <Courses 
      key={index}  
    cardImage = {data.image} cardCourseName = {data.courseName} cardCourseData = {data.courseData}
    />))}</div>
    
   </div>
   </>
  )
}

export default CourcesPage