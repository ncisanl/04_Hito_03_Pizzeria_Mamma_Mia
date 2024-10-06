export function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="imagen de card" />
        <div className="card-body">
          <h5 className="card-title m-0 fw-bold">Pizza {name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">
            <p className="m-1 text-black-50">Ingredientes:</p>
            <p className="m-0 ingredients-class">🍕 {ingredients.join(", ")}</p>
          </li>
        </ul>
        <div className="card-body">
          <h2 className="fw-bold fs-4 text-center mb-4">
            Precio: ${price.toLocaleString("es-CL")}
          </h2>
          <div className="button-card">
            <button type="button" className="btn btn-outline-dark">
              Ver Más 👀
            </button>
            <button type="button" className="btn btn-dark">
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
