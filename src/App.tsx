import React, { useEffect } from 'react';
import Rotas from './router';
import {JobsApi} from './services/jobsApi'



function App() {
   
  useEffect(()=>{
    JobsApi.getJobsApi('br', 1).then((response)=>{
       console.log(response.data.results)
    })
  }, [])

  return (
    <div className="App">
       <header className='w-100 mb-4 mt-4 ms-3'>
          <h1 className="title">Github<span className='ps-2'>Jobs</span></h1>
       </header>
       <Rotas/>
    </div>
  );
}

export default App;
