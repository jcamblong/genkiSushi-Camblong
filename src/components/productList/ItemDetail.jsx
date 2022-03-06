import ItemCount from "./ItemCount";

const ItemDetail = (item) => {
  console.log({ item });

  return (
    <div className="box">
      <div className="image">
        <img src={"img/food-" + item.image + ".png"} alt="" />
      </div>
      <div className="content">
        <h3>{item.name}</h3>
        <div className="price">$ {item.price}</div>
        <div className="description">{item.detail}</div>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
