import ItemCount from "./itemCount";

const ItemDetail = ({ data }) => {
  return (
    <>
      <div className="col-md-4" style={{ width: "auto", margin: "auto auto" }}>
        <div className="card my-5" style={{ width: "20rem" }}>
          <img className="card-img-top" src={data.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.description}</p>
            <p className="card-text">${data.price}</p>
            <a href="#" class="btn btn-primary">
              Ver Mas
            </a>
            <ItemCount
              initial={1}
              stock={10}
              onAdd={(quantity) =>
                console.log(`Agregaste ${quantity} articulos`)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
