import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Layout from "./Page/Layout";
import Home from "./Page/Home";
import Books from "./Page/Books";
import BookDetail from "./Page/BookDetail";
import PageNoteFound from "./Page/PageNoteFound";
import AddBooks from "./Page/AddBooks";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/books", element: <Books /> },
        { path: "/books/:category", element: <Books /> },
        { path: "/books/search/:search", element: <Books /> },
        { path: "/books/detail/:id", element: <BookDetail /> },
        { path: "/books/addbooks", element: <AddBooks /> },
        { path: "*", element: <PageNoteFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
