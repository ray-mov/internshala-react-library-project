import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function AddBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isPopular, setPopular] = useState(false);
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategory = (e) => {
    const value = e.target.value;

    if (categories.includes(value)) {
      setCategories((prev) => prev.filter((category) => category !== value));
    } else {
      setCategories((prev) => [...prev, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      thumbnail,
      isPopular,
      categories,
      rating,
      description,
    };

    dispatch(addBook(newBook));
    setAuthor("");
    setCategories([]);
    setPopular((prev) => !prev);
    setTitle("");
    setThumbnail("");
    setDescription("");
    setRating(null);
    navigate("/books");
  };

  return (
    <div className="text-center ">
      <form className="addNew-form" onSubmit={handleSubmit}>
        <div>
          <label>Book Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Thumbnail Url</label>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div>
          <label>
            Is Popular{" "}
            <span className="text-sm text-blue-700">
              (Mark check for popular){" "}
            </span>
          </label>
          <input
            type="checkbox"
            checked={isPopular}
            onChange={(e) => setPopular(e.target.checked)}
            className="mr-20"
          />
        </div>
        <div className="space-x-10">
          <h1>Categories: </h1>
          <div className="flex flex-wrap gap-6 text-xl">
            <label>
              <input
                type="checkbox"
                value="Fiction"
                checked={categories.includes("Fiction")}
                onChange={handleCategory}
              />{" "}
              Fiction
            </label>
            <label>
              <input
                type="checkbox"
                value="Non-Fiction"
                checked={categories.includes("Non-Fiction")}
                onChange={handleCategory}
              />{" "}
              Non-Fiction
            </label>
            <label>
              <input
                type="checkbox"
                value="Science"
                checked={categories.includes("Science")}
                onChange={handleCategory}
              />{" "}
              Science
            </label>
            <label>
              <input
                type="checkbox"
                value="History"
                checked={categories.includes("History")}
                onChange={handleCategory}
              />{" "}
              History
            </label>
          </div>
        </div>
        <div className="mx-auto">
          <button
            type="submit"
            className="border-2 p-2 text-white bg-black w-60 text-xl rounded-3xl shadow-lg shadow-lime-200 font-semibold hover:text-lime-200"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBooks;
