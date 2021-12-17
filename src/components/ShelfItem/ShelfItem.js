import { useDispatch, useSelector } from 'react-redux';

function ShelfItem({ item }) {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    function deleteItem() {
        dispatch({
            type: 'DELETE_ITEM',
            payload: item
        })
    }

    return (
        <div>
            <img src={item.image_url} />
            <p> {item.description}</p>
            {user.id && (
                <button onClick={deleteItem}>Delete</button>
            )}
        </div>


    );
}

export default ShelfItem