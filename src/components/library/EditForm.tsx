import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
    bookId: string;
  }
  
const EditForm = (props: Props):JSX.Element => {
    const {bookId} = props;
    const [title, setTitle] = useState<string>('');
    const dispatch = useDispatch();
    
    function handleSubmit(e: FormEvent<HTMLFormElement>):void{
      e.preventDefault();
      dispatch({type: 'books/editTitle', payload: {title, isbn: bookId}});
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder='title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <button type="submit">Edit</button>
        </form>
      </div>
    );
}

export default EditForm