import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="box-container" id="product-list">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.name}
          price={item.price}
          pictureUrl={item.image}
          stock={item.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
