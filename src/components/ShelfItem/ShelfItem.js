import {useDispatch} from 'react-redux';

function ShelfItem({item}) {

    const dispatch = useDispatch()

    function deleteItem (){
        dispatch({
            type: 'DELETE_ITEM',
            payload:item
        })
    }
    return(
        
  <div>  
        <img src={item.image_url} /> 
        <p> {item.description}</p>
        <button onClick={deleteItem}>Delete</button>
  </div>
       

    );
}

export default ShelfItem