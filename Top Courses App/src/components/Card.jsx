import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = (props) => {
  
  // console.log("Hello");
  // console.log(props.course)
  let likedCourses = props.likedCourses;  //this variable tracks allt he liked buttons
  let setLikedCourses = props.setLikedCourses; 
  

  function clickHandler() {
    // Logic
    if (likedCourses.includes(props.course.id)) {
        // pahle se liked 
        setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
        //this filter statement is used to remove the id which is already present in this array 
        toast.warning("Liked Removed");
    }
    else {
        // pahle se like nahi hai course 
        // insert karne h y course like course me 
        if (likedCourses.length === 0) {
            setLikedCourses([props.course.id]);
        }
        else {
          //non-empty pehle se
            setLikedCourses((prev) => [...prev, props.course.id]);
        }
        toast.success("Liked Successfully");
    }
}
  
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={props.course.image.url} alt="\Course Image" />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(props.course.id) ? (
                <FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize='1.75rem'/> )
            }
          </button>
        </div>
        
      </div>


      <div className='p-4 '>
        <p className='text-white font-semibold texxt-lg leading-6'>{props.course.title}</p>
        <p className='text-white  mt-2'>
              {
                props.course.description.length > 100 ?
                (props.course.description.substr(0,100)) + "..." : 
                (props.course.description) 
              } 
        </p>
      </div>

    </div>
  )
}

export default Card
