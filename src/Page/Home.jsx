import BookCategories from "../components/BookCategories";
import Landing from "../components/Landing";

import PopularBooks from "../components/PopularBooks";

function Home() {
  return (
    <>
      <Landing />
      <BookCategories />
      <PopularBooks />
    </>
  );
}

export default Home;
