import React, { Fragment ,useEffect ,useState} from 'react';
import BookListt from './BookListt';
import BookInfo from './BookInfo';
import { useDispatch , useSelector} from 'react-redux';
import { getbooks , deletebooks  } from '../../store/bookSlice';

const PostContainer=() => {
    const[selectedBook ,setSelectedBook]=useState({});
    const{isLoading,book}=useSelector((state)=>state.books);
    const {isLoggedIn}=useSelector((state)=>state.auth);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getbooks());
    },[dispatch])


    const infobook =(id)=>{
    const selectedBook =book.find((item)=>item.id===id);
    setSelectedBook((prev)=>{
        return{...prev,...selectedBook};
    })
    }
  return (
 <Fragment>
    <hr className='my-5' />
    <div className='row'>
        <div className='col'>
            <BookListt
             isLoading={isLoading} 
             book={book} 
             isLoggedIn={isLoggedIn}
             deletebooks={deletebooks}
             infobook={infobook} 
             dispatch={dispatch}
             
             />
        </div>
        <div className='col side-line'>
            <BookInfo  info={selectedBook}/>
        </div>
    </div>
 </Fragment>

  )
}

export default PostContainer
