import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      description.trim().length < 5 ||
      price.trim().length < 1
    ) {
      alert("Every Field have atleast 4 character");
      return
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] flex flex-col items-center h-screen w-screen"
    >
      <h1 className="text-3xl w-1/2 mb-5">Add New Product</h1>
      <input
        type="url"
        placeholder="Image Link"
        className="text-1xl rounded bg-zinc-100 w-1/2 p-3 mb-3"
        onChange={(e) => {
          setimage(e.target.value);
        }}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-1xl rounded bg-zinc-100 w-1/2 p-3 mb-3"
        onChange={(e) => {
          settitle(e.target.value);
        }}
        value={title}
      />
      <div className="flex justify-between w-1/2">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl rounded bg-zinc-100 w-[48%] p-3 mb-3"
          onChange={(e) => {
            setcategory(e.target.value);
          }}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl rounded bg-zinc-100 w-[48%] p-3 mb-3"
          onChange={(e) => {
            setprice(e.target.value);
          }}
          value={price}
        />
      </div>
      <textarea
        className="text-1xl rounded bg-zinc-100 w-1/2 p-3 mb-3"
        placeholder="Enter Product Description Here......"
        rows={10}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded-lg border-blue-200 text-blue-300">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
