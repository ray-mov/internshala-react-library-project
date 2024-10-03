import BookList from "../components/BookList";
import { useParams } from "react-router-dom";

function Books() {
  const { category, search } = useParams();

  return (
    <div className="max-w-[90%] mx-auto mt-32 ">
      <BookList category={category} search={search} />
    </div>
  );
}

export default Books;
