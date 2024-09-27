import React from "react";
import Card from "../Card/Card";
function CardPage({ cardData }) {
  return (
    
      <>
        <h1 className="text-center text-3xl font-semibold md:mt-6 dark:dark:text-[#7E22CE] mx-6 mt-14">
          Recomended Cources
        </h1>

      <div
        className=" flex flex-wrap items-center justify-center  lg:flex 
    lg:justify-evenly  md:flex md:justify-evenly "
      >
        {cardData.map((data,index) => (
          <Card
            key={index}
            cardImage={data.image}
            cardCourseName={data.courseName}
            cardCourseData={data.courseData}
          />
        ))}
      </div>
    </>
  );
}

export default CardPage;
