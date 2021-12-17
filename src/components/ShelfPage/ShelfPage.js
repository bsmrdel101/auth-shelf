import React from 'react';
import axios from 'axios';
import { useDispatch, useStore } from 'react-redux';
import { useEffect, useState } from 'react';
import reduxSaga from 'redux-saga';
import { useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';


function ShelfPage() {
  const dispatch = useDispatch();
  const shelfReducer = useSelector((store) => store.shelfReducer);
  const user = useSelector((store) => store.user);

  let [itemDescription, setItemDescription] = useState('');
  let [itemImage, setItemImage] = useState('');

  useEffect(() => {
    dispatch({
      type: 'FETCH_SHELF',
    })
  }, [])

  function addItem() {
      dispatch({
        type: 'CREATE_ITEM',
        payload: {
          description: itemDescription,
          image_url: itemImage
        }
      })
  }
  console.log('users', user);


  return (
    <div className="container">
      <h2>Shelf</h2>
      {user.id && (
      <form onSubmit={addItem}>
        <input placeholder='description' value={itemDescription}
          onChange={(event) =>
            setItemDescription(event.target.value)
          } />
        <input placeholder='image url' value={itemImage}
          onChange={(event) =>
            setItemImage(event.target.value)
          } />
        <button type='submit'>Submit</button>
      </form>)}
      <p>All of the available items can be seen here.</p>

      {shelfReducer.map((item) => {

        return (
          <ShelfItem
            item={item}
            key={item.id}
          />
        )

      })
      }

    </div>
  );
}

export default ShelfPage;
