import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addNote } from '../Redux/action';

export default function NotesForm() {

    let [title,setTitle] = useState();
    let [content, setContent] = useState();
    

    const dispatch = useDispatch()

    const navigate = useNavigate();

    function handleSubmission(e){
        e.preventDefault();
        
        dispatch(addNote(title,content));
        setTitle('')
        setContent('');
        navigate('/allNotes')
    }

  return (
    <div className='firstPage'>
   <h1 style={{textAlign:'center'}}>Notes App</h1>
   <hr style={{width:'50%', margin:'auto'}}/>
    <div className='container'>
                
                <div className='row justify-content-center'>
                    <div className='col-md-5'>
                    <div style={{textAlign:'center'}}>
                    <button className='button-29'  onClick={() => navigate('/allNotes')}>My notes</button>
                    </div>
                    <form onSubmit={handleSubmission}>
                            <div className="mb-3">
                                <label class="form-label">Title</label>
                                <input type="text" value={title} class="form-control" id="title" placeholder='Enter your title' onChange={(e) => setTitle(e.target.value)} required />

                            </div>
                            <div class="mb-3">
                                <label class="form-label">Content</label>
                                <textarea name='desc' value={content} id='desc' className='form-control content' placeholder='Enter your content' onChange={(e) => setContent(e.target.value)} required></textarea>
                            </div>

                            <button type="submit" class="button-29">ADD NOTE</button>
                        </form>
                    </div>
                </div>
            </div>

            </div>

    // <div className='form'>
    //   <h1>Notes App</h1>
    // <div className='formContainer'>
      
    //   <form onSubmit={handleSubmission}>
    //     Title<br/>
    //     <input type='text' name='title' value={title} placeholder='enter title' onChange={(e) => setTitle(e.target.value)} /><br />
    //     Content <br />
    //     <input type='text' name='content' value={content} placeholder='enter content' onChange={(e) => setContent(e.target.value)} /><br />
    //     <button class="button-29" type='submit'>ADD NOTE</button>
    //   </form>
    // </div>
    // </div>
  )
}
