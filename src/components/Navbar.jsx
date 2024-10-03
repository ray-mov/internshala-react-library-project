import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-6 md:px-10 py-5 w-full flex justify-between items-center nav-glass fixed top-0 ">
      <Link to="/" className=" text-3xl md:text-4xl font-bold">
        Home
      </Link>
      <ul className="flex gap-4 md:gap-10 text-lg font-semibold">
        <li className="hover:scale-105">
          <Link to="/books">Browse Books</Link>
        </li>
        <li className="hover:scale-105">
          <Link to="/books/addbooks">Add Books</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
