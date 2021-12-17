import React from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import reduxSaga from 'redux-saga';
import { useSelector } from 'react-redux';


function ShelfPage() {
const dispatch = useDispatch()



useEffect(() => {
  dispatch({
    type: 'FETCH_SHELF'
  })
}, [])

const shelfReducer = useSelector((store) => store.shelfReducer);

  return (
    <div className="container">
      <h2>Shelf</h2>
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
