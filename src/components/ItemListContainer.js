import { ItemList } from "./ItemList";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"
import db from './firebaseConfig';

function ItemListContainer() {
    const [item, setItem] = useState([]);
    const {id} = useParams();


    useEffect (() => {
        const firestoreItem = async () => {
            const docRef = doc(db, "productos", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            return {
                id: id,
                ...docSnap.data()
            }
        }
            else {
                console.log("Item no encontrado");
            }
        }
        firestoreItem()
            .then(data => setItem(data))
            .catch(error => console.log(error));
}, [id]);

return (
    <div>

        {item.map ((item) => (
        <ItemList
        name={item.name}
        stock={item.stock}
        cost={item.cost}
        URL={item.URL}
        id={item.id}
    />
        ))}
    </div>
)
    }

export default ItemListContainer;