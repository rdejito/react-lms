import { books, authors } from "../data/data";
import { useState } from "react";

export default function BookList() {
  const [sortBy, setSortBy] = useState("title");
  const [asc, setAsc] = useState(true);

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedBooks = [...books].sort((a, b) => {
    let valA;
    let valB;

    if (sortBy === "title") {
      valA = a.title;
      valB = b.title;
    } else {
      valA = authors.find((auth) => auth.id === a.authorId)?.name || "";
      valB = authors.find((auth) => auth.id === b.authorId)?.name || "";
    }

    return asc ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  return (
    <div>
      <h2>Book List</h2>

      <div className="controls">
        <label>Sort by:</label>

        <select value={sortBy} onChange={handleChange}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>

        <button onClick={() => setAsc(!asc)}>{asc ? "↑ Asc" : "↓ Desc"}</button>
      </div>

      <ul>
        {sortedBooks.map((book) => {
          const author = authors.find((a) => a.id === book.authorId);
          return (
            <li key={book.id}>
              {book.title} - <em>{author?.name}</em>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
