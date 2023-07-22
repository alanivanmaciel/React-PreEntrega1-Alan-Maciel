import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
