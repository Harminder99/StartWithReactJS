import "./app.css";

import Products from "./Components/Products";

function App() {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <ul className="list-group shadow">
          {[...Array(10).keys()].map((el) => {
            return <Products></Products>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
