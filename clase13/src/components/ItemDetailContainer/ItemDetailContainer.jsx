import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Productos } from "../../mock";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();

  useEffect(() => {
    const db = getFirestore();
    const orderDoc = doc(db, "item", id);
    getDoc(orderDoc).then(result=>{
        if(result.exists()){
            setProducto({...result.data()})
        }
    })
  }, []);

//   useEffect(() => {
//     const product = Productos.filter((p) => p.id == id);
//     setProducto(product);
//   }, [id]);
console.log(producto)
  return producto ? <ItemDetail producto={producto} /> : <h1>cargando</h1>;
};

export default ItemDetailContainer;
