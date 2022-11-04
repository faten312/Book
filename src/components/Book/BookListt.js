import React from 'react'
import { infobooks } from '../../store/bookSlice';

const BookListt=({isLoading ,book ,isLoggedIn , dispatch , deletebooks,infobook})=> {
  const booklist=book.length>0 ? book.map((item)=>(
  <li className='list-group-item d-flex  justify-content-between align-items-center' key={item.id}>
          <div>{item.title}</div>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-primary'
             onClick={()=>infobook(item.id)} >
              Read
            </button>
            <button 
            type='button'
             className='btn btn-danger' 
            disabled={!isLoggedIn}
            onClick={()=>dispatch(deletebooks(item)) .unwrap()
              .then((originalPromiseResult) => {
                console.log(originalPromiseResult)
              })
              .catch((rejectedValueOrSerializedError) => {
                console.log(rejectedValueOrSerializedError)

              })
              
            }
            >
              Delete
            </button>
          </div>
        </li>

  )):"no book found ";
   return (
    
        <div>
      <h2>Books List</h2>
      {isLoading?'Loading ...': <ul className='list-group'>{booklist} </ul>}
      </div>
      
    
  )
}

export default BookListt
