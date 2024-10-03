import { useSelector } from "react-redux";

import BookItem from "./BookItem";
import SearchBar from "./SearchBar";

function BookList({ category, search }) {
  let books = useSelector((state) => state.book.books);

  if (category) {
    books = books.filter((book) => book.categories.includes(category));
  }

  if (search) {
    books = books.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <SearchBar />
      {books.length === 0 ? (
        <div className="mt-16 text-center">
          <h1 className="font-mono text-2xl font-medium text-gray-500">
            Sorry, No book on {category || search} available!
          </h1>
        </div>
      ) : null}
      <ul className="py-12 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 lg:gap-10 ">
        {books.map((book) => (
          <li key={book.id}>
            <BookItem book={book} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
