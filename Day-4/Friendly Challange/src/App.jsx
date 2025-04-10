import { useState } from "react";
import "./App.css";
import { products } from "./assets/data";

function App() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemPerPage, setItemPerPage] = useState(10);

  const itemPerPage = 10;
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentData = productData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(productData.length / itemPerPage);

  console.log(currentData);
  useState(() => {
    setLoading(!loading);
    setTimeout(() => {
      setProductData(products);
      setLoading(!loading);
    }, 3000);
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {/* Product Display */}
      <div>
        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            border: "1px solid #929292",
            padding: "3em",
            borderRadius: "2em",
          }}
        >
          {currentData.map((item) => {
            return (
              <div key={item._id}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                    justifyContent: "centr",
                    alignItems: "center",
                  }}
                >
                  <img style={{ maxWidth: "40%" }} src={item.images[0]} />
                  <div>
                    <h4>{item.article}</h4>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Pagination section */}
        <div
          style={{
            display: "flex",
            gap: "2em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* prev */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            {"<"}
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 2, 1))}
          >
            {"< <"}
          </button>
          <h2>{currentPage}</h2>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPage))
            }
          >
            {"> >"}
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPage))
            }
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
