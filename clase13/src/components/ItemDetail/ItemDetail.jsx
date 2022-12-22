import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const { addCount } = useContext(CartContext);

  const handlerAddCount = (count) => {
    addCount(count, producto);
  };
  return (
    <div>
      <h1>detalle del producto {producto.name}</h1>
      <img src={producto.img} width={300} height={300} />
      <ItemCount onChangeCount={(e) => handlerAddCount(e)} />
    </div>
  );
};

export default ItemDetail;
