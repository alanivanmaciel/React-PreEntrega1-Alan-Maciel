import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="ItemList">
      {products.map((item) => (
        <Item key={item.Id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
