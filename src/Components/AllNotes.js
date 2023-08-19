import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote, updateNote } from '../Redux/action';
import { useNavigate } from 'react-router-dom';




export default function AllNotes() {
  const notes = useSelector((state) => state.notes)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [isNoteDeleted, setIsNoteDeleted] = useState(false);

  const handleDelete = (index) => {
    dispatch(removeNote(index));
    setIsNoteDeleted(true);
    
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(notes[index].title);
    setEditDescription(notes[index].content);
  };

  const handleSave = () => {
    dispatch(updateNote(editIndex, editTitle, editDescription));
    setEditIndex(null);
    setEditTitle("");
    setEditDescription("");
  };




  return (
    <div className='secondPage'>

      <nav class="navbar">
        <button class="button-29" onClick={() => navigate('/')}>Add Notes</button>
      </nav>
      <h1 style={{paddingLeft:'40px'}}>
        {notes.length === 0 && (
          <span>No Notes Found !</span>
        )}
        {notes.length > 0 && <span className="">My Notes</span>}
      </h1>

      {/* <button class="button-29" onClick={() => navigate('/')}>Home page</button> */}
      <div className='allnotes' style={{ display: 'flex' }}>


        {notes.map((NOTE, index) => (
          <div key={index} className="card" style={{ width: "18rem", margin: '2rem' }} >
            {editIndex === index ? (
              <div className='card-body inputs'>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)} 
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}

                ></textarea>
                <div className='btns-save-cancel'>
                  <button onClick={handleSave} className="button-29">Save</button>
                  <button onClick={() => setEditIndex(null)} className="button-29">Cancel</button>
                </div>
              </div>
            ) : (
              <div className="card-body">

                <h1 className="card-title">{NOTE.title}</h1>
                <p className="card-text">{NOTE.content}</p>
                <div className="flex flex-col">
                  <button onClick={() => handleEdit(index)} className="button-29">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)} className="btn btn-danger">
                    {isNoteDeleted}
                    Delete
                  </button>
                </div>
              </div>
            )}


          </div>
        ))}

        {/*{
          notes.map((note, index) => {
            <div key={index}>
            </div>
            
           
            return (
              <>


                <div>
                  {/* <div>{note.title}</div>
                    <div>{note.content}</div>
                    <button onClick={()=>dispatch(removeNote(index))}>X</button> 

                  <div className="card" style={{ width: "18rem", margin: '2rem' }}>
                    <div className="card-body">
                      <h5 className="card-title">{note.title}</h5>
                      <p className="card-text">{note.content}</p>
                      <a href="#" className="btn btn-danger" onClick={() => dispatch(removeNote(index))}>Delete</a>
                      <a href="#" className="button-29">Edit</a>

                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      */}

      </div>
    </div>

  )
}
