import { Link } from "react-router-dom";

function BookItem({ book }) {
  return (
    <Link to={`/books/detail/${book.id}`} className="w-48 ">
      <img src={book.thumbnail} alt={`book.title`} />
      <h1 className="p-2 text-lg font-medium text-gray-700">{book.title}</h1>
    </Link>
  );
}

export default BookItem;
