import { useCallback, useState } from "react";

function Products() {
  const [productCount, setProductCount] = useState(0);
  const addCount = () => {
    setProductCount((count) => count + 1);
  };
  const removeCount = () => {
    setProductCount((count) => {
      let newCount = count - 1;
      if (newCount >= 0) {
        return newCount;
      }
      return 0;
    });
  };
  return (
    <li className="list-group-item">
      <div className="media align-items-center flex-column flex-md-row p-3 d-flex">
        <div className="media-body order-2 order-md-1">
          <h5 className="mt-0 font-weight-bold mb-2">Fresh milk</h5>
          <p className="font-italic text-muted mb-0 small">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="d-flex align-items-center justify-content-start mt-1 flex-wrap">
            <h6 className="font-weight-bold my-2">$120.00</h6>
            <button onClick={removeCount} className="btn btn-primary mx-4">
              -
            </button>
            <span>{productCount}</span>
            <button onClick={addCount} className="btn btn-primary mx-4">
              +
            </button>
            <span className="badge bg-danger">Available</span>
          </div>
        </div>
        <img
          className="ml-md-5 order-1 order-md-2 img-fluid"
          alt="Fresh milk"
          src="https://source.unsplash.com/user/c_v_r/100x100"
          width="200"
        />
      </div>
    </li>
  );
}

export default Products;
