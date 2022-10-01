import { useCallback, useEffect, useState } from 'react'
import {JobsApiModel} from '../../models/JobsInterface'
import { JobsApi } from '../../services/jobsApi'
import {IoEarth} from 'react-icons/io5'
import './home.css'
import Modal from '../../components/modal/index'

interface IState{
    loading: boolean,
    jobsInfo: JobsApiModel[],
    title: string,
    country: string,
    page: number,
    modal: [],
    showModal: boolean,
    state: string
}

const Home = ()=>{
    
    let[jobs, setJobs] = useState<IState>({
      loading: false,
      jobsInfo: [] as JobsApiModel[],
      title: '',
      country: 'br',
      page: 1,
      modal: [],
      showModal: false,
      state: ''
    })

    let{title, country, page, state, loading} = jobs

    useEffect(()=>{
         setJobs({...jobs, loading: true})
         JobsApi.getJobsApi('br', 1).then((response)=>{
           setJobs({  
             ...jobs,
             jobsInfo: response.data.results,
             loading: false
           })
         })         
    }, [jobs])
    
  

    let filteredJobs = jobs.state.length >0?
    jobs.jobsInfo.filter(job => job.location.display_name.includes(state[0].toUpperCase() + state.substr(1))) : [];


    const filterForTitle = useCallback((e:any)=>{
        e.preventDefault()
        setJobs({...jobs, loading: true})
        JobsApi.getJobsTitle(country, page, title).then((response)=>{
            setJobs({
              ...jobs,
              jobsInfo: response.data.results,
              loading: false
            })
        }) 
    }, [jobs, country, page, title])

    function toggleModal(job:any){
       console.log(job)
        setJobs({
          ...jobs,
          modal: job,
          showModal: !jobs.showModal
        })
    }

    return(
        <div id="Home">
             <header id='header-home' className=' d-flex justify-content-center align-items-center w-100'>
                <div className='div-container d-flex justify-content-center align-items-center'>
                  <div  id="input-element">
                    <input type="text" value={title} onChange={e=>setJobs({...jobs, title: e.target.value})} placeholder='Title, Companies'/>
                  </div>
                  <div id="button-header">
                    <button 
                        className="btn d-flex justify-content-center align-items-center"
                        onClick={filterForTitle}
                    >
                        Search
                    </button>
                  </div>
                </div>
             </header>
             <section className='row section-for-elements'>
                <div className='col-sm-9 col-md-4 ms-md-4 ms-md-0'>
                    <input className='mt-4 me-2' type="checkbox" name="fulltime"/><span>Full time</span>

                    <div className="form-location mt-4">
                        <h2>Location</h2>

                        <div className='d-flex flex-column w-100'>
                              <input onChange={(e)=>setJobs({...jobs, state: e.target.value})} className='search-input mb-3 mt-3' type="text" placeholder='City, state, zip code or country'/>

                             
                            <form onSubmit={filterForTitle} className='me-2'>

                              <label htmlFor="usa" className='d-flex align-items-center'>
                                <input 
                                      type="radio" 
                                      name="radio" 
                                      id="usa" 
                                      value={country} 
                                      checked={country === 'us'}
                                      onChange={()=>setJobs({...jobs, country: 'us'})}
                                      
                                  />
                                  <span>USA</span>
                              </label>
                              <label htmlFor="alemanha" className='d-flex align-items-center'>
                                <input 
                                      type="radio" 
                                      name="radio" 
                                      id="alemanha" 
                                      value={country} 
                                      checked={country === 'de'}
                                      onChange={()=>setJobs({...jobs, country: 'de'})}
                                      
                                  />
                                  <span>Deutschland</span>
                              </label>
                              <label htmlFor="brasil" className='d-flex align-items-center'>
                                <input 
                                      type="radio" 
                                      name="radio" 
                                      id="brasil" 
                                      value={country} 
                                      checked={country === 'br'}
                                      onChange={()=>setJobs({...jobs, country: 'br'})}
                                      
                                  />
                                  <span>Brazil</span>
                              </label>
                              <label htmlFor="canada" className='d-flex align-items-center'>
                                <input 
                                      type="radio" 
                                      name="radio" 
                                      id="canada" 
                                      value={country}
                                      checked={country === 'ca'}
                                      onChange={()=>setJobs({...jobs, country: 'ca'})}
                                      
                                  />
                                  <span>Canada</span>
                              </label>
                              <label htmlFor="france" className='d-flex align-items-center' >
                                <input 
                                      type="radio" 
                                      name="radio" 
                                      id="france" 
                                      value={country} 
                                      checked={country === 'fr'}
                                      onChange={()=>setJobs({...jobs, country: 'fr'})}
                                      
                                  />
                                  <span>France</span>
                              </label>

                              <button type="submit" className='btn btn-primary mt-2'>Search</button>
                            </form>

                        </div>
                    </div>
                </div>

                <article className="mt-5 col-sm-12 col-md-6 me-md-5 me-sm-0">
                  {/* <div>
                     <button ><IoArrowBackCircleOutline/></button>
                     <span>{jobs.page}</span>
                     <button><IoArrowForwardCircleOutline/></button>
                       
                  </div> */}
                    {
                      loading &&
                    <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    }

                    {!!loading && jobs.state.length > 0? (
                       filteredJobs.map(job=>( 
                           <div key={job.id} className="card-jobs d-flex flex-column" onClick={()=>toggleModal(job)}>
                                  <span className='company'>{job.company.display_name}</span>
                               <p className='title-jobs'>{job.title}</p>
                               <span>{job.contract_time !== ''? 'Full Time': '' }</span>
                               <div className='d-flex align-items-center'>
                                  <IoEarth size={15} color="rgba(185, 189, 207, 1)"/>
                                  <span className='location ms-2'>{job.location.display_name}</span>
                               </div>
                           </div>
                       ))
                    ):(
                      
                        jobs.jobsInfo.map((job)=>{
                      
                          return(
                            <div key={job.id} className="card-jobs d-flex flex-column" onClick={()=>toggleModal(job)}>
                              <span className='company'>{job.company.display_name}</span>
                               <p className='title-jobs'>{job.title}</p>
                               <span>{job.contract_time !== ''? 'Full Time': '' }</span>
                               <div className='d-flex align-items-center'>
                                  <IoEarth size={15} color="rgba(185, 189, 207, 1)"/>
                                  <span className='location ms-2'>{job.location.display_name}</span>
                               </div>
                            </div>
                          )
                        })                      
                    )}
                    
                </article>
             </section>

              
            {
              jobs.showModal &&(
                <Modal
                   close={toggleModal}
                   jobs={jobs.modal}
                />
              )
            }
             
        </div>
    )
}

export default Home