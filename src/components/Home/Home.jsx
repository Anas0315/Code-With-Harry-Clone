import React from 'react'
import CardPage from './CardPage/CardPage'
import TestimonialPage from './TestimonialPage/TestimonialPage'
import HeroSection from './HeroSection/HeroSection'

 
function Home() {
    const cardData =[
        {
         image : "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/python-100-days-of-code-1/7wnove7K-ZQ-HD.jpg",
          courseName : "Python Tutorials - 100 Days of Code",
          courseData : "Python is one of the most demanded programming languages in the job market. Surprisingly,  learn and master Python. Let's commit our 100 days of code to python!"
    
        },
        {
            image : "https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg",
            courseName: "Ultimate JavaScript Course",
            courseData: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS"
        },
        {
            image : "https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png",
            courseName: "React JS Tutorials For Beginners",
            courseData: "React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!"
        }
    ]
    // Testimonial Maping//
const testiData = [
    {
      content :" don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.",
      devName : "Mohit Kumar",
  },
  {
    content :"For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.",
    devName : "Rakesh Shetty",
  }
  ]
  return (
   <>
    <HeroSection/>
   <CardPage cardData={cardData}  />
   <TestimonialPage testiData={testiData} />
   </>
  )
}

export default Home