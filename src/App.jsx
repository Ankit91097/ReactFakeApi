import React from "react";

const App = () => {
  return (
    <div className="h-screen w-screen flex ">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a
          className="py-2 px-5 border rounded border-blue-300 text-blue-400"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl mb-3 w-[80%] font-medium">Category Filter</h1>
        <ul className=" w-[80%] font-medium">
          <li className="flex items-center mb-3">
            <span className="mr-2 rounded-full w-[15px] h-[15px] bg-blue-400"></span>{" "}
            Cat 1
          </li>
          <li className="flex items-center mb-3">
            <span className="mr-2 rounded-full w-[15px] h-[15px] bg-yellow-400"></span>{" "}
            Cat 2
          </li>
          <li className="flex items-center mb-3">
            <span className="mr-2 rounded-full w-[15px] h-[15px] bg-red-400"></span>{" "}
            Cat 3
          </li>
          <li className="flex items-center mb-3">
            <span className="mr-2 rounded-full w-[15px] h-[15px] bg-green-400"></span>{" "}
            Cat 4
          </li>
        </ul>
      </nav>
      <div className="h-full w-[85%] bg-blue-400">

      </div>
    </div>
  );
};

export default App;
