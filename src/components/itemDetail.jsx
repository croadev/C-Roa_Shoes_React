import ItemCount from "./itemCount";

const ItemDetail = ({ data }) => {
  return (
    <>
      <div class="row g-0 pt-4 mb-4">
        <div class="col-md-6">
          <img class="img-fluid w-75" src={data.img} alt="imagen producto" />
        </div>
        <div class="col-md-6 text-center text-black d-flex flex-column justify-content-center">
          <h3 class="fw-bold">{data.name}</h3>
          <p>{data.description}</p>
          <p class="fs-1 fw-bold">${data.price}</p>
          <ItemCount
            initial={1}
            stock={10}
            onAdd={(quantity) => console.log(`Agregaste ${quantity} articulos`)}
          />
        </div>
      </div>
      ;
    </>
  );
};

export default ItemDetail;
