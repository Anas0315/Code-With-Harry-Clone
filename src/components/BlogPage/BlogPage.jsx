import React from 'react'
import Blog from '../Blog/Blog';
function BlogPage() {
  const blogData = [{
    heading: "A Comprehensive Guide to Using Stackry for International Shopping",
    date : "November 20, 2023",
    para: "In today's interconnected world, the desire for cutting-edge tech gadgets, unique international products, and exclusive US deals has reached an unprecedented level. However, many consumers face the challenge of obtaining products not readily available in their home country. This is where Stackry emerges as a revolutionary solution, simplifying the process of ordering from the US and having it shipped effortlessly to India.",
  },
  {
    heading:"How Algorithmic Trading Systems Work",
    date : "September 29, 2023",
    para:"In India, the popularity of online trading has helped transform the financial landscape. This has led to over 20% of all trading is now done via mobile through trading apps. In line with this, another development many traders have highlighted is the use of algorithmic trading systems to take advantage of ever-changing market opportunities. To date, algorithmic trading systems are used in up to 60% of all trading volume.",

  },
  {
    heading:"Build an Email Validator with HTML, CSS, and JavaScript",
    date : "September 15, 2023",
    para:"Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!",

  },
  {
    heading:"[Solved] python was not found; run without arguments to install from the microsoft store, or...",
    date : "August 25, 2023",
    para:"Encountered the 'Python was not found' error on your Windows system? Our step-by-step guide walks you through the process to locate and set Python paths, ensuring smooth execution. With clear instructions, images, and videos, you'll resolve this issue in no time. Dive in to get Python up and running on your system!",

  },
  {
    heading:"How to find the Python Installation Path on Windows?",
    date : "August 25, 2023",
    para:"Discover how to locate the Python installation path on your Windows system using two effective methods: the traditional Command Prompt and the modern Terminal. Whether you're troubleshooting or setting up environment variables, this guide provides clear, step-by-step instructions with visuals to help you find the information you need. Explore now!",

  },
  {
    heading:"How to Generate Random Numbers in C Language",
    date : " July  1, 2022",
    para:"A comprehensive guide to generating random numbers in C using the rand() and srand() functions, with examples and output.",

  },
  {
    heading:"How to Check if Keys Exist in JavaScript Objects",
    date : " August 24, 2023",
    para:"Learn how to check if keys exist in JavaScript objects using two popular methods: the 'in' operator and the hasOwnProperty() method. This comprehensive guide provides syntax, examples, and insights to help you navigate object properties in JavaScript",
  },
  {
    heading:"How to Open the Terminal in Visual Studio Code",
    date : "August 23, 2023",
    para:"Learn how to open the terminal in Visual Studio Code (VS Code) using various methods, such as the menu bar, keyboard shortcuts, command palette, and sidebar icon. This guide also covers customizing the terminal and working with multiple terminals within VS Code.",

  },
  {
    heading:"How to Become a Profitable Android Developer in 2023?",
    date : "August 23, 2023",
    para:"Become a profitable Android Developer with our comprehensive guide. From understanding the latest tools and technologies to mastering marketing and monetization strategies, our article lays out the key steps to achieve success in the competitive field of Android development.",

  },
  ]
  return (
   <> 
   <h1 className='font-[600] lg:text-4xl text-3xl mt-6 ml-9 lg:ml-16'>Coding Articles</h1>
   <div className='m-10 lg:m-14' >
    {blogData.map((data,index)=>(<Blog 
        key={index}
       blogHeading ={ data.heading} blogDate ={ data.date} blogPara = {data.para}
    />))}
   </div>
   </>
  )
}

export default BlogPage;