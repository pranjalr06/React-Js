import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';
import { apiUrl, filterData } from './data';
import Spinner from './components/Spinner'

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)


  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      //save data into a variable
      setCourses(output.data);

    }
    catch (error) {
      toast.error("Something went wrong..");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className=''>

        <div>
          <Filter filterData={filterData} 
                  setCategory ={setCategory}
                  category ={category}/>
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex
      flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={ category} />)
          }
        </div>
      </div>



    </div>
  );
}

export default App;
