import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filteredProducts, setfilteredProducts] = useState(null);
  const getproductsCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);
    if (category != "undefined") getproductsCategory();
  }, [category, products]);
  return products ? (
    <>
      <Nav />
      <div className="main w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => {
            return (
              <Link
                key={p.id}
                to={`/details/${p.id}`}
                className="card p-3 mr-3 mb-3 border rounded shadow w-[18%] h-[30vh] flex flex-col justify-center items-center"
              >
                <div
                  className="hover:scale-110 transition ease-in mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${p.image})`,
                  }}
                ></div>
                <h1 className="hover:text-blue-300">{p.title}</h1>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
