import Item from "./item";

const ItemList = ({ data = [] }) => {
  return (
    <div className="row" style={{ width: "auto", margin: "auto auto" }}>
      {data.map((product) => {
        return <Item key={product.id} info={product} />;
      })}
    </div>
  );
};

export default ItemList;
