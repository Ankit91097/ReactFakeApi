import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.6)`;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <Link
        className="py-2 px-5 border rounded-lg border-blue-200 text-blue-300"
        to="/create"
      >
        Add New Product
      </Link>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%] font-medium">Category Filter</h1>
      <div className=" w-[80%]">
        {distinct_category.map((c, i) => {
          return (
            <Link
              key={i}
              to={`/?category=${c}`}
              className="flex items-center mb-3"
            >
              <span
                style={{ backgroundColor: color() }}
                className="mr-2 rounded-full w-[15px] h-[15px]"
              ></span>{" "}
              {c}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
