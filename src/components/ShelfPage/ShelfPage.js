import React from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import reduxSaga from 'redux-saga';
import { useSelector } from 'react-redux';


function ShelfPage() {
const dispatch = useDispatch()

let [itemDescription, setItemDescription] = useState('');
let [itemImage, setItemImage] = useState('');

useEffect(() => {
  dispatch({
    type: 'FETCH_SHELF',
  })
}, [])

function addItem (){

  dispatch({
    type: 'CREATE_ITEM',
    payload: {
      description: itemDescription,
      image_url: itemImage
    }
  })
}

const shelfReducer = useSelector((store) => store.shelfReducer);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <form onSubmit ={addItem}>
        <input placeholder='description' value={itemDescription}
         onChange = {(event) => 
          setItemDescription(event.target.value)
         } />
         <input placeholder='image url' value={itemImage}
         onChange = {(event) => 
          setItemImage(event.target.value)
         } />
         <button type='submit'>Submit</button>
        </form>
      <p>All of the available items can be seen here.</p>
      
      {shelfReducer.map((item) => {
        
        return( 
        <div key={item.id} >  
        <img src={item.image_url} /> 
        <p> {item.description}</p>
       </div> )

      })
      }
     
    </div>
  );
}

export default ShelfPage;
