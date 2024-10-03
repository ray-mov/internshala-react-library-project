import { Link } from "react-router-dom";

function PageNoteFound() {
  return (
    <div className="text-center mb-10">
      <h1 className=" text-[150px] lg:text-[200px]">
        4<span className="text-lime-300">0</span>4
      </h1>
      <h2 className="text-4xl font-semibold">UH OH! Youre lost.</h2>
      <p className="text-lg text-gray-500 font-mono py-4">
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <Link
        to="/"
        className="py-2 shadow-2xl shadow-lime-300 hover:shadow-lime-400 "
      >
        <button
          className="text-3xl  bg-lime-200 font-bold border-black 
          border-2 rounded-md hover:bg-lime-400 hover:scale-105
         px-4 py-2  "
        >
          HOME
        </button>
      </Link>
    </div>
  );
}

export default PageNoteFound;
