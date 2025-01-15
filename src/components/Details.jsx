import axios from '../utils/axios'
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from './Loading';

const Details = () => {
  const [product, setproduct] = useState(null)
  const { id } = useParams();
  console.log(id)
   const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(`/products/${id}`);
        setproduct(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return ( product ?
    <div className="m-auto w-[70%] flex justify-between items-center h-full p-[10%]">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">
          {product.title}
        </h1>
        <h3 className="text-zinc-500 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3">INR {product.price*80}</h2>
        <p className="mb-[5%]">
          {product.description}
        </p>
        <Link className="py-2 px-5 mr-5 border rounded-lg border-blue-200 text-blue-300">
          Edit
        </Link>
        <Link className="py-2 px-5 border rounded-lg border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>:(
      <Loading />
    )
  );
};

export default Details;
