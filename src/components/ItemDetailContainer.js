import { ItemDetail } from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from './firebaseConfig';
import { doc, getDoc } from "firebase/firestore";


export function ItemDetailContainer () {
    const [ data , setData] = useState({});
    const {id} = useParams()
    
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
            .then(data => setData(data))
            .catch(error => console.log(error));
}, [id]);



return (
    <div>
        <ItemDetail
        name = {data.name}
        describe = {data.describe}
        key =  {data.id}
        URL =  {data.URL}
        cost = {data.cost}
        stock = {data.stock}
            />
            </div>
    )
}