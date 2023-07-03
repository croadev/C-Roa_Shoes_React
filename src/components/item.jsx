import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <>
      <div className="col-md-4" style={{ width: "auto", margin: "auto auto" }}>
        <div className="card my-5" style={{ width: "20rem" }}>
          <img className="card-img-top" src={info.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{info.name}</h5>
            <p className="card-text">{info.description}</p>
            <p className="card-text">${info.price}</p>
            <Link to={`/item/${info.id}`} class="btn btn-primary">
              Ver Mas
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
