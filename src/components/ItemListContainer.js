import { ItemList } from "./ItemList";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore"
import db from './firebaseConfig';
import { query, where } from '@firebase/firestore'

function ItemListContainer() {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect (() => {
        const firestoreFetch = async () => {
            let q;
            if (id) {
                q = query(collection(db, "productos"), where('category', '==', id));
            } else {
                q = query(collection(db, "productos"));
            }
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map( document => ({
                id: document.id,
                ...document.data()
            }))
        }
        firestoreFetch()
            .then(result => setItem(result))
            .catch(error => console.log(error));
}, [id]);


return (
    <div>
        <ItemList productos={item}/>
        </div>)}
export default ItemListContainer;