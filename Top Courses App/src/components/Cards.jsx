import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {

  // let courses = props.courses;
  // console.log("hello")
  console.log(props.courses)

  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([])

  function getCourses() {
    if (category === 'All') {
      let allCourses = [];
      Object.values(props.courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    }
    else {
      // main sirf apecific category ka data array pass karunga
      return props.courses[category];
    }
  };
  
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => {
          return <Card key={props.courses.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses} />
        })
      }
    </div>
  )
}

export default Cards
