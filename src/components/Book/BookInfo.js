import React , { Fragment }  from 'react'

function BookInfo({info}) {
  return (
    <Fragment>
    <h2>Book Details</h2>

   {Object.values(info).length>0 ?(

    <div>
      <p className='fw-bold'>Title:{info.title}</p>
      <p className='fw-bold'>insert by :{info.userName}</p>
      <p className='fw-bold'>Description:{info.description}</p>
      <p className='fw-bold'>Price:{info.price}</p>
    </div> 
   ):(


    <div className='alert alert-secondary' role='alert'>
     
     "There is no book selected yet. Please select!"
     </div>
   )
   }


   
     
  </Fragment>
  )
}

export default BookInfo
