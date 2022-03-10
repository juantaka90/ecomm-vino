import { ItemDetail } from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


export function ItemDetailContainer () {
    const [ data , setData] = useState({});
    const {id} = useParams()
    
    useEffect (() => {
        const firestoreFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "productos"));
            return querySnapshot.docs.map( document => ({
                id: document.id,
                ...document.data()
            }))
        }
        firestoreFetch()
            .then(result => setData(result))
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