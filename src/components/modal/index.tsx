import React from 'react'

import {IoCloseOutline, IoEarth, IoArrowRedoCircleOutline} from 'react-icons/io5' 

import'./Modal.css'

interface IProps{
      close: any,
      jobs: any
}

const Modal:React.FC<IProps>=({close, jobs})=>{
    return(
        <div className="modal-element" onClick={close}>
         
                <section className='container-modal'>
                    <header className='mb-3'>
                       <div className='d-flex'>
                            <button className='close' onClick={close}>
                                <IoCloseOutline size={23} color="#fff"/>
                            </button>
                            <h1 id='title' className='text-center'>{jobs.title}</h1>
                        </div> 
                       <div className='d-flex mt-3'>
                            <p>Category:</p>
                            <span className='ps-2'>{jobs.category.tag }</span>
                        </div> 
                    </header>
                        <article> 
                           <header>
                              <h2>{jobs.company.display_name}</h2> 
                               <p className='d-flex align-items-center'>
                                 <span className='pe-2'><IoEarth color='#B9BDCF' size={15}/></span>
                                 {jobs.location.display_name}
                               </p>
                           </header> 
                           <p className='text'>{jobs.description}</p>

                           <a href={jobs.redirect_url} target="_blank" rel="noopener noreferrer">
                             More Details
                             <IoArrowRedoCircleOutline size={23} color="rgba(30, 134, 255, 1)"/>
                           </a>
                        </article>
                </section>
        </div>
    )
}

export default Modal