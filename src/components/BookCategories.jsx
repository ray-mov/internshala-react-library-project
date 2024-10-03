import { Link } from "react-router-dom";

import { bookCategories } from "../data/bookCategory";

function BookCategories() {
  return (
    <div className="py-6">
      <h2 className="py-6 text-xl font-semibold text-gray-600">
        Explore Popular Categories :
      </h2>
      <ul className="flex gap-4 flex-wrap font-medium text-gray-700">
        {bookCategories.map((category) => (
          <li
            key={category.id}
            className=" bg-lime-300 rounded-3xl p-3 shadow-md hover:scale-105"
          >
            <Link to={`/books/${category.category}`}>
              <h1>{category.category}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookCategories;
