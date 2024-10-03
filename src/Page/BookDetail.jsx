import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Star from "../assets/star.png";

function BookDetail() {
  const param = useParams();
  const books = useSelector((state) => state.book.books);

  const navigate = useNavigate();

  const book = books.filter((book) => book.id === String(param.id))[0];

  return (
    <>
      <h1
        className="mb-10 text-2xl font-semibold text-gray-600 hover:text-blue-700 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        &gt; Back to browse
      </h1>
      <div className="grid md:grid-cols-2 md:max-w-[70%] mx-auto pb-10 ">
        <div className="w-full">
          <img src={book.thumbnail} alt={book.title} className="" />
        </div>
        <div className="space-y-5">
          <h1 className=" text-4xl md:text-6xl font-semibold">{book.title}</h1>
          <p className="text-xl font-semibold">By {book.author} (Author)</p>
          <p className="text-xl">Description :</p>
          <p className="text-lg">{book.description}</p>
          <p className="text-lg flex">
            <span>Rating : </span>
            {Array.from({ length: book.rating }, (_, i) => (
              <span key={i}>
                <img src={Star} alt={i} />
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}

export default BookDetail;
