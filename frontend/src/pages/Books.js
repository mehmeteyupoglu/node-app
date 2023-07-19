import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div className="Books">
      <h1>Book Shop</h1>
      {books.length > 0 &&
        books.map((book) => {
          return (
            <div className="book" key={book.id}>
              book
              {book.cover && <img src={book.cover} alt="" />}
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <p>{book.price || 0}</p>
            </div>
          );
        })}
      <button>
        <Link to="/add">Add New Book</Link>
      </button>
    </div>
  );
}

export default Books;
