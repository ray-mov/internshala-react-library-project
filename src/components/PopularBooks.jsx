import { Link } from "react-router-dom";
import { books } from "../data/book";

const popularbooks = books.filter((book) => book.isPopular);

function PopularBooks() {
  return (
    <div className="lg:max-w-[85%] mx-auto">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 lg:gap-10 ">
        {popularbooks.map((book) => (
          <li key={book.id} className="rounded-sm shadow-sm">
            <Link to={`/books/detail/${book.id}`}>
              <img src={book.thumbnail} alt={book.title} />
              <h1 className="text-lg py-4 font-semibold">{book.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularBooks;
